module Manifesto {
    export class MetadataItem {
        public label: TranslationCollection;
        public value: TranslationCollection;
        public defaultLocale: string;
        public resource: any;

        constructor(defaultLocale: string) {
            this.defaultLocale = defaultLocale;
        }

        public parse(resource: any): void {
            this.resource = resource;
            this.label = TranslationCollection.parse(this.resource.label, this.defaultLocale);
            this.value = TranslationCollection.parse(this.resource.value, this.defaultLocale);
        }

        // shortcuts to get/set values based on default locale
        
        public getLabel(): string {
            if (this.label) {
                return TranslationCollection.getValue(this.label, this.defaultLocale);
            }
            
            return null;
        }

        public setLabel(value: string): void {
            if (this.label && this.label.length) {
                var t: Manifesto.Translation = this.label.en().where(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale)).first();
                if (t) t.value = value;
            }
        }

        public getValue(): string {
            if (this.value) {
                return TranslationCollection.getValue(this.value, this.defaultLocale);
            }
            
            return null;
        }

        public setValue(value: string): void {
            if (this.value && this.value.length) {
                var t: Manifesto.Translation = this.value.en().where(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale)).first();
                if (t) t.value = value;
            }
        }
    }
}