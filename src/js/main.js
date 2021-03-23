/*
 * Copyright (c) 2020 Future Internet Consulting and Development Solutions S.L.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



import renderTemplate from "./template-engine";

(async () => {
    // poi[key] = renderTemplate(schema[key].substring(2, schema[key].length - 2), keyValueEntity)
    const response = await fetch(MashupPlatform.prefs.get('schemas_file_host').trim(), { method: 'GET', mode: 'cors' })
    //const response = await fetch('https://github.com/Ficodes/smart-datamodel-views/blob/master/schemas-config/schemasDetailsConf.json', { method: 'GET', mode: 'cors' })
    let schemasConf = await response.json()

    let schemasTypes = MashupPlatform.prefs.get('ngsi_types').trim().split(new RegExp(',\\s*')).filter(Boolean)
    //let schemasTypes = 'Alert'.trim().split(new RegExp(',\\s*')).filter(Boolean)
    if (schemasTypes.length > 0) {
        schemasConf = schemasConf.filter(schemaconf => schemasTypes.includes(schemaconf.type))
    }

    MashupPlatform.wiring.registerCallback('PoiInput', (entity) => {
        if(entity && entity.data) {
            if (schemasTypes.includes(entity.data.type)) {
                let template = renderTemplate(schemasConf[0].template, entity.data);
                console.log(template);
                document.getElementById('content').innerHTML = template;
            }
            else{
                document.getElementById('content').innerHTML = `<div className="alert alert-primary" role="alert">
                    Type '${entity.data.type}' not supported
                </div>`;
            }
        }
    })


})()
