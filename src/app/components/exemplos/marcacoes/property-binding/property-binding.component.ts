import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
    title: string;
    verParagrafo: boolean;
    /**
     * Creates an instance of PropertyBindingComponent.
     * @memberof PropertyBindingComponent
     */
    constructor() { }
    /**
     * Init
     *
     * @memberof PropertyBindingComponent
     */
    ngOnInit() {
        this.title = `Property binding`;
        this.verParagrafo = true;
    }
    /**
     * Toggle
     *
     * @memberof PropertyBindingComponent
     */
    mostrar(): void {
        this.verParagrafo = !this.verParagrafo;
    }

}
