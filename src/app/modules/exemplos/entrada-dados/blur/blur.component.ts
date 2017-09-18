import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blur',
    templateUrl: './blur.component.html',
    styleUrls: ['./blur.component.scss']
})
export class BlurComponent implements OnInit {
    title: string;
    idade: number;
    /**
     * Creates an instance of BlurComponent.
     * @memberof BlurComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof BlurComponent
     */
    ngOnInit() {
        this.title = `Blur`;
    }
    verIdade(valor: any): void {
        if (valor) {
            const ano = new Date();
            this.idade = ano.getFullYear() - Number(valor);
        }
    }

}
