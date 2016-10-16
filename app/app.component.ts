import {Component} from '@angular/core';
import {AuthentificationService} from "./services/authentification.service";
import {Compte} from "./model/compte";
import {User} from "./model/user";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [AuthentificationService]
})
export class AppComponent {

    user: User = new User();
    model: Compte = new Compte();

    constructor(private authentificationService: AuthentificationService) {
        this.model = new Compte();
        this.model.user = new User();
        this.authentificationService.allComptes().subscribe(res => {
            console.log(res)
        })
    }

    onSubmit() {
        alert("submit methode !");
        this.authentificationService.addCompte(this.model).subscribe(res => {
            console.log("Compte was created !");
        });
    }

    init() {
        this.model = new Compte();
        this.model.user = new User();
    }

}
