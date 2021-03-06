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

export default class Schema {
    constructor(options) {
        if (!options) {throw new Error('Schema: constructor options required')}
        if (!Object.prototype.hasOwnProperty.call(options, 'type') || options.type === '') {throw new Error('Schema: options   requires "type" property')}
        if (!Object.prototype.hasOwnProperty.call(options, 'template') || options.schema === '') {throw new Error('Schema: options  requires "template" property')}
        this._type = options.type
        this._template = options.schema
    }

    get type() {
        return this._type
    }

    set type(value) {
        this._type = value
    }

    get template() {
        return this._template
    }

    set template(value) {
        this._template = value
    }
}
