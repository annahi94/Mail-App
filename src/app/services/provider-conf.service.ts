import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { ConfigurationProvider } from "../configuration/provider/configuration-provider.model";
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        , 'Content-Type': 'application/json'
    })
}

@Injectable()
export class ConfigurationProviderService {

    constructor(private http: HttpClient) {

    }

    private url = 'http://localhost:50192/api/ConfigurationProvider';

    private handleError(error: any) {
        console.log(error.error);
        return Observable.of(error.error);
    }

    findAll(): Observable<any> {
        return this.http.get<ConfigurationProvider[]>(this.url)
            .pipe(
                tap( response => console.log(response)),
                catchError(error => { return this.handleError(error) })
            )
    }

    add(obj: ConfigurationProvider): Observable<any> {
        return this.http.post<ConfigurationProvider>(this.url, obj, httpOptions)
            .pipe(
                tap( response => console.log(response)),
                catchError(error => { return this.handleError(error) })
            )
    }


}

