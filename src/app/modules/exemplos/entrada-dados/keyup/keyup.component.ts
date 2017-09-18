import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-keyup',
    templateUrl: './keyup.component.html',
    styleUrls: ['./keyup.component.scss']
})
export class KeyupComponent implements OnInit {
    title: any = {
        first: null,
        secont: null
    };
    habilitarBotao: boolean;
    valores: Array<string>;
    /**
     * Creates an instance of KeyupComponent.
     * @memberof KeyupComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof KeyupComponent
     */
    ngOnInit() {
        this.title.first = `Keyup`;
        this.title.second = `Keyup Enter`;
        this.habilitarBotao = false;
        this.valores = [];
    }
    /**
     * Validar senha
     *
     * @param {string} valor
     * @memberof KeyupComponent
     */
    validarSenha(valor: string): void {
        this.habilitarBotao = valor.length > 4;
    }
    /**
     * Gravar senha
     *
     * @param {string} senha
     * @memberof KeyupComponent
     */
    gravarSenha(senha: string): void {
        alert(`A senha ${senha} foi gravada com sucesso`);
    }
    /**
     * Adiciona conteúdo tecla enter
     *
     * @param {string} valor
     * @memberof KeyupComponent
     */
    adicionarConteudo(valor: string): void {
        this.valores.push(valor);
    }

}
