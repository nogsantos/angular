import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {
    pessoas: Array<string> = [
        `Homer`,
        `Marge`,
        `Bart`,
        `Lisa`,
        `MAggie`
    ];
    /**
     * Creates an instance of PessoaServiceService.
     * @memberof PessoaServiceService
     */
    constructor() {
    }
    /**
     * GET
     *
     * @returns {Array<string>}
     * @memberof PessoaServiceService
     */
    get Pessoas(): Array<string> {
        return this.pessoas;
    }
    /**
     * Set
     *
     * @param {string} nome
     * @memberof PessoaServiceService
     */
    set nome(nome: string) {
        this.pessoas.push(nome);
    }

}
