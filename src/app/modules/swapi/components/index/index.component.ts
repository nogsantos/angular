import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    titles = {
        people: null
    };
    /**
     * Creates an instance of IndexComponent.
     * @memberof IndexComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
        this.titles.people = `A People resource is an individual person or character within the Star Wars universe.`;
    }

}
