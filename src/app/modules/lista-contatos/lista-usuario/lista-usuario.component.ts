import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-usuario',
    templateUrl: './lista-usuario.component.html',
    styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of ListaUsuarioComponent.
     * @memberof ListaUsuarioComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof ListaUsuarioComponent
     */
    ngOnInit() {
        this.title = `Contatos cadastrados`;
    }

}
