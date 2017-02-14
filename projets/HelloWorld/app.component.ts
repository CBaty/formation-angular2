import { Component, Inject } from '@angular/core'
import { APP_CONFIG } from './app.config'
@Component({
    selector: 'angular-app',
    template: '<h1>Hello copain ! {{config | json}}</h1>'
})
export class AngularAppComponent {
    constructor( @Inject(APP_CONFIG) private config: { production; title; }) {
    }
}