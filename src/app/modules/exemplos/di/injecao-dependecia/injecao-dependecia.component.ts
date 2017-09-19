import { Component, OnInit } from '@angular/core';

// import { MeuLogService } from '../services/meu-log/meu-log.service';
import { NomeTecService } from '../services/nome-tec/nome-tec.service';

@Component({
    selector: 'app-injecao-dependecia',
    templateUrl: './injecao-dependecia.component.html',
    styleUrls: ['./injecao-dependecia.component.scss'],
    providers: [
        NomeTecService
    ]
})
export class InjecaoDependeciaComponent implements OnInit {
    title: string;
    tecnologias: Array<string>;
    /**
     * Creates an instance of InjecaoDependeciaComponent.
     * @memberof InjecaoDependeciaComponent
     */
    constructor(
        private meuService: NomeTecService
    ) { }
    /**
     * Init
     *
     * @memberof InjecaoDependeciaComponent
     */
    ngOnInit() {
        this.title = `DI`;
        this.tecnologias = this.meuService.nomeTec;
    }

}
