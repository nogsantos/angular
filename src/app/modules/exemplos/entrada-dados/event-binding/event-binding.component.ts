import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
    title: string;
    /**
     * Creates an instance of EventBindingComponent.
     * @memberof EventBindingComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof EventBindingComponent
     */
    ngOnInit() {
        this.title = `Event binding`;
    }
    /**
     * Click
     *
     * @memberof EventBindingComponent
     */
    meuClick(): void {
        console.log(`Click botão`);
    }
    /**
     * Keyup
     *
     * @param {any} event
     * @memberof EventBindingComponent
     */
    digitou(event): void {
        console.log(event);
    }
    /**
     * Variável de referência do template
     *
     * @param {string} valor
     * @memberof EventBindingComponent
     */
    digitouVarTemplate(valor: string): void {
        console.log(valor);
    }

}
