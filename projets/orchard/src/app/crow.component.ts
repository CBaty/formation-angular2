import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'crow',
    template: `Le crow est à {{position}}`
})
export class CrowComponent {
    @Input() position: number;
}