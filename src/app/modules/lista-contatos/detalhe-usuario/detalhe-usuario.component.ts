import { Component, OnInit, Input } from '@angular/core';

import { ContatoModel } from '../models/contato-model';

@Component({
    selector: 'app-detalhe-usuario',
    templateUrl: './detalhe-usuario.component.html',
    styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {
    title: string;
    @Input() contato: ContatoModel;
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
