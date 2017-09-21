import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _URL = 'https://swapi.co/api';  // URL to web api
    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    constructor(
        private http: Http
    ) { }
    /**
     * Get
     *
     * @param {string} resorce
     * @param {string} [search_by]
     * @param {number} [id]
     * @returns {Promise<any[]>}
     * @memberof HttpService
     */
    get(resorce: string, search_by?: string, id?: number, page?: string): Promise<any[]> {
        let parameter = '';
        if (search_by) {
            parameter = `?search=${search_by}`;
        }
        if (id) {
            parameter = `${id}`;
        }
        if (page) {
            parameter = `?page=${page}`;
        }
        return this.http.get(`${this._URL}/${resorce}/${parameter}`)
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
