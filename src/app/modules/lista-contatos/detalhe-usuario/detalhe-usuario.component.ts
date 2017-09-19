import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detalhe-usuario',
    templateUrl: './detalhe-usuario.component.html',
    styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of DetalheUsuarioComponent.
     * @memberof DetalheUsuarioComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof DetalheUsuarioComponent
     */
    ngOnInit() {
        this.title = `Detalhe do contato`;
    }

}
