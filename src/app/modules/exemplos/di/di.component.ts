import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-di',
    templateUrl: './di.component.html',
    styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of DiComponent.
     * @memberof DiComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof DiComponent
     */
    ngOnInit() {
        this.title = `Injeção de dependência`;
    }

}
