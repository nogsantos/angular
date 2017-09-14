import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
    private title: string;
    private numero: number;
    /**
     * Creates an instance of NgSwitchComponent.
     * @memberof NgSwitchComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof NgSwitchComponent
     */
    ngOnInit() {
        this.title = `ngSwitch`;
        this.numero = 0;
    }
    /**
     * Incrementa o número
     *
     * @returns {number}
     * @memberof NgSwitchComponent
     */
    incrementarNumero(): number {
        return this.numero++;
    }

}
