import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularAppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AngularAppComponent],
    bootstrap: [AngularAppComponent]
})
export class AppModule {
}