import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-interpolation-binding',
    templateUrl: './interpolation-binding.component.html',
    styleUrls: ['./interpolation-binding.component.scss']
})
export class InterpolationBindingComponent implements OnInit {
    title: string;

    constructor() { }

    ngOnInit() {
        this.title = `Interpolation binding`;
    }

    get frase(): string {
        return `O papa é pop, o papa é pop, o pop não poupa ninguém`;
    }

    get numero(): number {
        return 100;
    }

}
