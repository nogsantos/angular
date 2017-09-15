import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
    title: string;
    valorClassBinding: boolean;
    /**
     * Creates an instance of NgClassComponent.
     * @memberof NgClassComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgClassComponent
     */
    ngOnInit() {
        this.title = `Class`;
        this.valorClassBinding = false;
    }
    /**
     * Mudar
     *
     * @memberof NgClassComponent
     */
    mudarClassBinding(): void {
        this.valorClassBinding = !this.valorClassBinding;
    }
    /**
     *
     *
     * @returns {*}
     * @memberof NgClassComponent
     */
    classes(): any {
        const valores = {
            'cor-fundo': this.valorClassBinding,
            'cor-letra': this.valorClassBinding,
            'estilo-letra': this.valorClassBinding,
            'borda-paragrafo': this.valorClassBinding
        };
        return valores;
    }
}
