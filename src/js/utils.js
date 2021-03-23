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

export function buildHtmlAddress(address) {
    if (address == null || typeof address !== 'object') {
        return ''
    }
    const html = `
        <p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>
        ${address.streetAddress ? address.streetAddress : ''}
        <br/>
        ${address.addressLocality ? address.addressLocality + ',' : ''}
        ${address.addressRegion ? address.addressRegion + ',' : ''}
        ${address.postalCode ? address.postalCode : ''} 
        <br/>
        ${address.addressCountry ? address.addressCountry : ''}
        </p>
   `
    return html.replace(/([\r\n]+ +)+/gm, '').replace(/[\r\n]+/gm, '')
}
