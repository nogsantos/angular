import { Injectable } from '@angular/core';

@Injectable()
export class MeuLogService {
    /**
     * Creates an instance of MenuLogService.
     * @memberof MenuLogService
     */
    constructor() { }
    /**
     * Set
     *
     * @memberof MeuLogService
     */
    set log(msg: string) {
        console.log(msg);
    }

}
