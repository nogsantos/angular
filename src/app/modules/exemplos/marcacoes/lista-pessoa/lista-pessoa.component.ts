import { Component, OnInit } from '@angular/core';

import { PessoaServiceService } from './pessoa-service/pessoa-service.service';

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoa.component.html',
    styleUrls: ['./lista-pessoa.component.scss'],
    providers: [
        PessoaServiceService
    ]
})
export class ListaPessoaComponent implements OnInit {

    pessoas: Array<string>;
    title: string;
    nome: string;
    /**
     * Creates an instance of ListaPessoaComponent.
     * @param {PessoaServiceService} service
     * @memberof ListaPessoaComponent
     */
    constructor(
        private service: PessoaServiceService
    ) { }
    /**
     * Init
     *
     * @memberof ListaPessoaComponent
     */
    ngOnInit() {
        this.title = `Listagem`;
        this.pessoas = this.service.Pessoas;
    }
    /**
     * Adiciona o nome nome a listagem
     *
     * @memberof ListaPessoaComponent
     */
    enviarNome(): void {
        this.service.nome = this.nome;
        this.nome = ``;
    }

}
