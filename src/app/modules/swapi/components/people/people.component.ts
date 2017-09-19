import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
    title: string;
    peoples: Array<any>;
    /**
     * Creates an instance of PeopleComponent.
     * @memberof PeopleComponent
     */
    constructor(
        private service: HttpService
    ) { }
    /**
     * Init
     *
     * @memberof PeopleComponent
     */
    ngOnInit() {
        this.title = `A People resource is an individual person or character within the Star Wars universe.`;
        this.peoples = [];
        this.getPeople();
    }
    /**
     *
     *
     * @memberof PeopleComponent
     */
    getPeople() {
        this.service.get().then(peoples => {
            if (peoples) {
                this.peoples = peoples[`results`];
            }
            console.log(peoples);
        });
    }
}
