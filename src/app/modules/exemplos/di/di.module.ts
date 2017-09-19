import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../modules/material/material.module';
import 'hammerjs';

import { DiRoutingModule } from './di-routing.module';
import { InjecaoDependeciaComponent } from './injecao-dependecia/injecao-dependecia.component';
import { DiComponent } from './di.component';
import { MeuLogService } from './services/meu-log/meu-log.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        DiRoutingModule
    ],
    declarations: [
        InjecaoDependeciaComponent,
        DiComponent
    ],
    providers: [
        MeuLogService
    ]
})
export class DiModule { }
