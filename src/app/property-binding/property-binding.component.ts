import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

    private title: string;
    private verParagrafo: boolean;
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
