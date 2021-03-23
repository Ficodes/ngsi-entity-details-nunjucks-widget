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



import { buildHtmlAddress } from '../src/js/utils.js'
describe('Test Utils Functions', () => {

    it('test buildHtmlAddress', () => {
        const address = {
            'streetAddress': 'Rua de Fernandes Tomás',
            'addressLocality': 'Porto',
            'addressCountry': 'Portugal'
        }
        const expected = buildHtmlAddress(address)
        expect(expected).to.be.equal('<p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p>')
    })
})
