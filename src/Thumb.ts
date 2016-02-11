
module Manifesto {
    export class Thumb implements IThumb {
        public index: number;
        public uri: string;
        public label: string;
        public width: number;
        public height: number;
        public visible: boolean;

        constructor(index: number, uri: string, label: string, width: number, height: number, visible: boolean = true) {
            this.index = index;
            this.uri = uri;
            this.label = label;
            this.width = width;
            this.height = height;
            this.visible = visible;
        }
    }
}