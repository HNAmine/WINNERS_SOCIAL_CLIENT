import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthentificationService} from "./services/authentification.service";

@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers:[AuthentificationService]
})
export class AppModule {
}