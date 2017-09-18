import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of FormulariosComponent.
     * @memberof FormulariosComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof FormulariosComponent
     */
    ngOnInit() {
        this.title = `Formulários`;
    }

}
