import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

    constructor() { }

    msgAlerta(msg: string): void {
        alert(msg);
    }

}
