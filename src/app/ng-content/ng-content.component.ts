import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-content',
    templateUrl: './ng-content.component.html',
    styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {
    private title: string;
    /**
     * Creates an instance of NgContentComponent.
     * @memberof NgContentComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgContentComponent
     */
    ngOnInit() {
        this.title = `Content`;
    }

}
