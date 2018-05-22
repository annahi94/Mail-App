import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Area } from "../area/area.model";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        , 'Content-Type': 'application/json'
    })
}

@Injectable()
export class AreaSevice {


    constructor(private http: HttpClient) {

    }

    private url = 'http://localhost:54763/api/Area';

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error, `Operation: ${operation}`);
            return of(result as T);
        }
    }

    getAreas(): Observable<Area[]> {      
        return this.http.get<Area[]>(this.url)
            .pipe(
                tap(areas => console.log('Areas')),
                catchError(this.handleError('getFacturas', []))
            )
    }
}