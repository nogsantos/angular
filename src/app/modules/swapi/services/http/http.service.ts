import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _URL = 'https://swapi.co/api/people/';  // URL to web api
    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    constructor(
        private http: Http
    ) { }
    /**
     * GET
     *
     * @returns {Promise<any[]>}
     * @memberof HttpService
     */
    get(): Promise<any[]> {
        return this.http.get(this._URL)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Get by id
     *
     * @param {number} id
     * @returns {Promise<any>}
     * @memberof HttpService
     */
    getById(id: number): Promise<any> {
        const url = `${this._URL}/${id}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Error
     *
     * @private
     * @param {*} error
     * @returns {Promise<any>}
     * @memberof HttpService
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
