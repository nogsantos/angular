import { Injectable, Optional } from '@angular/core';

import { MeuLogService } from '../meu-log/meu-log.service';

@Injectable()
export class NomeTecService {
    /**
     * Creates an instance of NomeTecService.
     * @memberof NomeTecService
     */
    constructor(
        @Optional() private meulog: MeuLogService
    ) { }
    /**
     *
     *
     * @readonly
     * @type {Array<string>}
     * @memberof NomeTecService
     */
    get nomeTec(): Array<string> {
        if (this.meulog) {
            this.meulog.log = `Consultando array de tecnologias`;
        }
        return [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Desenvolvendo com Angular'
        ]
    }

}
