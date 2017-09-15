import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two-way-binding',
    templateUrl: './two-way-binding.component.html',
    styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
    title: string;
    nome: string;
    /**
     * Creates an instance of TwoWayBindingComponent.
     * @memberof TwoWayBindingComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof TwoWayBindingComponent
     */
    ngOnInit() {
        this.title = `Two way binding`;
        this.nome = `Lis`;
    }
    /**
     * Mudar
     *
     * @param {string} valor
     * @memberof TwoWayBindingComponent
     */
    mudar(valor: string) {
        this.nome = `${valor}-`;
    }

}
