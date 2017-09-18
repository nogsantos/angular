import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    templateUrl: './ng-style.component.html',
    styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
    title: string;
    valorFonte: string;
    tamanho: number;
    validaFonte: boolean;
    validaCor: boolean;
    /**
     * Creates an instance of NgStyleComponent.
     * @memberof NgStyleComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgStyleComponent
     */
    ngOnInit() {
        this.title = `Style`;
        this.valorFonte = `${this.tamanho = 1}rem`;
        this.validaFonte = false;
        this.validaCor = false;
    }
    /**
     * Incrementa o tamanho da fonte
     *
     * @memberof NgStyleComponent
     */
    incrementar(): void {
        this.valorFonte = `${++this.tamanho}rem`;
    }
    /**
     * Valida fonte
     *
     * @memberof NgStyleComponent
     */
    mudaFonte(): void {
        this.validaFonte = !this.validaFonte;
    }
    /**
     * Valida cor
     *
     * @memberof NgStyleComponent
     */
    mudaCor(): void {
        this.validaCor = !this.validaCor;
    }

}
