import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ContatoModel } from '../models/contato-model';
import { ContatosDataBaseService } from '../services/contatos-data-base.service';

@Component({
    selector: 'app-lista-usuario',
    templateUrl: './lista-usuario.component.html',
    styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
    title: string;
    listaDeContatos: Array<ContatoModel> = [];
    @Output() idClicado = new EventEmitter();
    /**
     * Creates an instance of ListaUsuarioComponent.
     * @memberof ListaUsuarioComponent
     */
    constructor(
        private service: ContatosDataBaseService
    ) { }
    /**
     * Init
     *
     * @memberof ListaUsuarioComponent
     */
    ngOnInit() {
        this.title = `Contatos cadastrados`;
        this.service.enviarContatos.subscribe(contatos => this.listaDeContatos = contatos);
    }
    /**
     * Atualiza um item
     *
     * @param {number} id
     * @memberof ListaUsuarioComponent
     */
    atualizar(id: number): void {
        this.idClicado.emit(id);
    }
}
