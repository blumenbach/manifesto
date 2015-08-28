var _endsWith = require("lodash.endswith");

module Manifesto {
    export class Service extends JSONLDResource implements IService {
        constructor(resource: any){
            super(resource);
        }

        getProfile(): ServiceProfile{
            return new ServiceProfile(this.getProperty('profile'));
        }

        //getDescription(): string {
        //    return Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        //}

        getInfoUri(): string {

            var infoUri = this.id;

            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }

            infoUri += 'info.json';

            return infoUri;
        }
    }
}