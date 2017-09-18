import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input() menu: string;
    @Output() nomeClicado = new EventEmitter();
    /**
     * Creates an instance of InputComponent.
     * @memberof InputComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof InputComponent
     */
    ngOnInit() {
    }
    /**
     * Emiter
     *
     * @param {*} value
     * @memberof InputComponent
     */
    enviarNome(value: any): void {
        this.nomeClicado.emit(value);
    }

}
