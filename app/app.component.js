"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var authentification_service_1 = require("./services/authentification.service");
var compte_1 = require("./model/compte");
var user_1 = require("./model/user");
var AppComponent = (function () {
    function AppComponent(authentificationService) {
        this.authentificationService = authentificationService;
        this.user = new user_1.User();
        this.model = new compte_1.Compte();
        this.model = new compte_1.Compte();
        this.model.user = new user_1.User();
        this.authentificationService.allComptes().subscribe(function (res) {
            console.log(res);
        });
    }
    AppComponent.prototype.onSubmit = function () {
        alert("submit methode !");
        this.authentificationService.addCompte(this.model).subscribe(function (res) {
            console.log("Compte was created !");
        });
    };
    AppComponent.prototype.init = function () {
        this.model = new compte_1.Compte();
        this.model.user = new user_1.User();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [authentification_service_1.AuthentificationService]
        }), 
        __metadata('design:paramtypes', [authentification_service_1.AuthentificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map