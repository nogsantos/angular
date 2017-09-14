import { Component } from '@angular/core';
import { AlertaService } from './alerta/alerta.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title: string;

    constructor(
        private service: AlertaService
    ) {
        this.title = `Angular`;
    }

    hello(): void {
        this.service.msgAlerta('Alerta!');
    }
}
