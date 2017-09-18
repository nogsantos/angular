import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
    title: string;
    desenvolvimento: Array<string>;
    valor: string;
    /**
     * Creates an instance of InputOutputComponent.
     * @memberof InputOutputComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof InputOutputComponent
     */
    ngOnInit() {
        this.title = `@Input() / @Output()`;
        /*
         * Envia a lista para o componente filho
         */
        this.desenvolvimento = [
            'Angular 2',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS'
        ];
    }
    /**
     * Output
     *
     * @param {*} valor
     * @memberof InputOutputComponent
     */
    valorPassado(valor: any): void {
        this.valor = valor;
    }

}
