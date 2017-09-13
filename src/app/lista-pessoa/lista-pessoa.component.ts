import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoa.component.html',
    styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

    private pessoas: Array<string>;
    private title: string;
    private nome: string;

    constructor() { }

    ngOnInit() {
        this.title = `Listagem de pessoas`;
        this.nome = `Lis Nogueira`;
        this.pessoas = [
            `Homer`,
            `Marge`,
            `Bart`,
            `Lisa`,
            `MAggie`
        ];
    }

    listar() {
    }

}
