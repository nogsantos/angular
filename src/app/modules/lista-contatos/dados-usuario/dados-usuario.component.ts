import { Component, OnInit } from '@angular/core';

import { ContatoModel } from '../models/contato-model';
import { ContatosDataBaseService } from '../services/contatos-data-base.service';

@Component({
    selector: 'app-dados-usuario',
    templateUrl: './dados-usuario.component.html',
    styleUrls: ['./dados-usuario.component.scss']
})
export class DadosUsuarioComponent implements OnInit {
    title: string;
    tipos: Array<string>;
    contato: ContatoModel;
    /**
     * Creates an instance of DadosUsuarioComponent.
     * @memberof DadosUsuarioComponent
     */
    constructor(
        private service: ContatosDataBaseService
    ) { }
    /**
     * Init
     *
     * @memberof DadosUsuarioComponent
     */
    ngOnInit() {
        this.title = `Dados do contato`;
        this.tipos = ['Particular', 'Trabalho', 'Amigos', 'Família'];
        this.contato = new ContatoModel();
    }
    /**
     * Salvar cadastro
     *
     * @memberof DadosUsuarioComponent
     */
    salvar(): void {
        this.contato.tipo = (typeof this.contato.tipo !== 'undefined') ? this.contato.tipo : this.tipos[0];
        this.service.salvar(this.contato);
    }
    /**
     * Novo cadastro
     *
     * @memberof DadosUsuarioComponent
     */
    novo(): void {
        this.contato = Object.assign({});
    }

}
