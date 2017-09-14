import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-if',
    templateUrl: './ng-if.component.html',
    styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
    private title: string;
    private show: boolean;
    private cursos: Array<string>;
    /**
     * Creates an instance of NgIfComponent.
     * @memberof NgIfComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgIfComponent
     */
    ngOnInit() {
        this.title = `ngIf`;
        this.show = false;
        this.cursos = [];
    }
    /**
     * mostrar
     *
     * @memberof NgIfComponent
     */
    mostrar(): void {
        this.show = !this.show;
    }
    /**
     * GET
     *
     * @readonly
     * @type {boolean}
     * @memberof NgIfComponent
     */
    get resolve(): boolean {
        return this.show;
    }
    /**
     * Adiciona curso ao array
     *
     * @memberof NgIfComponent
     */
    addCurso() {
        this.cursos.push('Angular');
    }
}
