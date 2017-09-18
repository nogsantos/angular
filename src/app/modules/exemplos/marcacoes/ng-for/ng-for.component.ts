import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
    title: string;
    nomes: Array<any>;
    /**
     * Creates an instance of NgForComponent.
     * @memberof NgForComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgForComponent
     */
    ngOnInit() {
        this.title = `For`;
        this.nomes = [
            { id: 1, nome: `Marta` },
            { id: 2, nome: `Pedro` },
            { id: 3, nome: `Cintia` },
            { id: 4, nome: `Tatá` }
        ];
    }
    /**
     * Atualiza os valores da lista
     *
     * {trackBy}
     *
     * @memberof NgForComponent
     */
    atualizar() {
        this.nomes = [
            { id: 1, nome: `Marta` },
            { id: 2, nome: `Pedro` },
            { id: 3, nome: `Cintia` },
            { id: 4, nome: `Tatá` },
            { id: 5, nome: `Carine` }
        ];
    }
    /**
     * Verifica	o ID de cada elemento da nova lista e compara com o
     * ID da lista atual. Se os IDs forem iguais, o elemento que
     * está no navegador não será atualizado.
     *
     * @param {number} index
     * @param {*} nomes
     * @returns {number}
     * @memberof NgForComponent
     */
    meuSave(index: number, nomes: any): number {
        return nomes.id;
    }

}
