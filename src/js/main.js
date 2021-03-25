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
import Methods from "./methods";

(async () => {
    const response = await fetch(MashupPlatform.prefs.get('schemas_file_host').trim(), { method: 'GET', mode: 'cors' })
    let schemasConf = await response.json()

    let schemasTypes = MashupPlatform.prefs.get('ngsi_types').trim().split(new RegExp(',\\s*')).filter(Boolean)
    // MashupPlatform.wiring.pushEvent()
    MashupPlatform.wiring.registerCallback('PoiInput', (entity) => {
        if(entity && entity.data) {
            if (schemasTypes.length > 0) {
                if (schemasTypes.includes(entity.data.type)) {
                    const schemaConf = schemasConf.filter(schemaconf => schemaconf.type==entity.data.type);
                    let template = renderTemplate(schemaConf[0].template, entity.data);
                    document.getElementById('content').innerHTML = template;
                    Methods.onClick = (el)=> {
                        const propertyVal = el.getAttribute('data-param-value');
                        console.log(propertyVal, '************************************')
                        MashupPlatform.wiring.pushEvent('PoiOutput', propertyVal);
                    };


                    Methods.initialize();
                }
            }
            else{
                document.getElementById('content').innerHTML = `<div className="alert alert-primary" role="alert">
                    Type '${entity.data.type}' not supported
                </div>`;
            }
        }
    })
})()
