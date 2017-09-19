import { Component, OnInit } from '@angular/core';

import { ContatoModel } from '../models/contato-model';

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
    constructor() { }
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

}
