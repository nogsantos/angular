import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-entrada-dados',
    templateUrl: './entrada-dados.component.html',
    styleUrls: ['./entrada-dados.component.scss']
})
export class EntradaDadosComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of EntradaDadosComponent.
     * @memberof EntradaDadosComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof EntradaDadosComponent
     */
    ngOnInit() {
        this.title = `Entrada de dados`;
    }

}
