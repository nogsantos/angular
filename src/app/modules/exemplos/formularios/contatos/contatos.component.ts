import { Component, OnInit } from '@angular/core';

import { Contatos } from '../classes/contatos';

@Component({
    selector: 'app-contatos',
    templateUrl: './contatos.component.html',
    styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
    title: string;
    contato: Contatos;
    /**
     * Creates an instance of ContatosComponent.
     * @memberof ContatosComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof ContatosComponent
     */
    ngOnInit() {
        this.title = `Contatos`;
        this.contato = new Contatos();
        this.contato.nome = 'Fabricio Nogueira';
        this.contato.email = '62 9 9116-1686';
        this.contato.telefone = 'nogsantos@gmail.com';
    }
    /**
     * Form submit
     *
     * @memberof ContatosComponent
     */
    enviarDados(): void {
        alert(`Nome: ${this.contato.nome}\nTelefone: ${this.contato.telefone}\nEmail: ${this.contato.email}`);
    }

}
