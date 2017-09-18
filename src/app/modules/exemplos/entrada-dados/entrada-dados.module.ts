import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../modules/material/material.module';
import 'hammerjs';

import { EntradaDadosRoutingModule } from './entrada-dados-routing.module';
import { EntradaDadosComponent } from './entrada-dados.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { KeyupComponent } from './keyup/keyup.component';
import { BlurComponent } from './blur/blur.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputComponent } from './input-output/input/input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        EntradaDadosRoutingModule
    ],
    declarations: [
        EntradaDadosComponent,
        EventBindingComponent,
        KeyupComponent,
        BlurComponent,
        InputOutputComponent,
        InputComponent
    ]
})
export class EntradaDadosModule { }
