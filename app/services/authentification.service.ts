import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Compte} from "../model/compte";

@Injectable()
export class AuthentificationService {
    constructor(private _http: Http) {
    }

    addCompte(compte: Compte): Observable<any> {
        return this._http.post('http://localhost:8080/comptes', compte).map(res => res.json());
    }

    allComptes(): Observable<Compte> {
        return this._http.get('http://localhost:8080/comptes').map(res => res.json());
    }
}