import { Injectable, EventEmitter } from '@angular/core';

import { ContatoModel } from '../models/contato-model';

@Injectable()
export class ContatosDataBaseService {
    contatos: Array<ContatoModel> = [];
    enviarContatos = new EventEmitter();
    /**
     * Creates an instance of ContatosDataBaseService.
     * @memberof ContatosDataBaseService
     */
    constructor() { }
    /**
     * Setting a contact
     *
     * @memberof ContatosDataBaseService
     */
    salvar(novoContato: ContatoModel) {
        this.contatos.push(novoContato);
        this.enviarContatos.emit(this.contatos);
        console.log(JSON.stringify(this.contatos));
    }
    /**
     * Get by id
     *
     * @param {number} id
     * @returns {ContatoModel}
     * @memberof ContatosDataBaseService
     */
    getById(id: number): ContatoModel {
        let cont: ContatoModel;
        cont = this.contatos[id];
        return cont;
    }

}
