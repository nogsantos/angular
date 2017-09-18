import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-marcacoes',
    templateUrl: './marcacoes.component.html',
    styleUrls: ['./marcacoes.component.scss']
})
export class MarcacoesComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of MarcacoesComponent.
     * @memberof MarcacoesComponent
     */
    constructor() { }
    /**
     * INIT
     *
     * @memberof MarcacoesComponent
     */
    ngOnInit() {
        this.title = `Marcações`;
    }
}
