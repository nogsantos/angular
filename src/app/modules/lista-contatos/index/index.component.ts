import { Component, OnInit } from '@angular/core';

import { ContatoModel } from '../models/contato-model';
import { ContatosDataBaseService } from '../services/contatos-data-base.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    title: string;
    contatoclicado: ContatoModel;
    /**
     * Creates an instance of IndexComponent.
     * @memberof IndexComponent
     */
    constructor(
        private service: ContatosDataBaseService
    ) { }
    /**
     * Init
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
        this.title = `Lista de contatos`;
    }
    /**
     *
     *
     * @param {any} id
     * @memberof IndexComponent
     */
    enviarDetalhe(id): void {
        this.contatoclicado = this.service.getById(id);
    }
}
