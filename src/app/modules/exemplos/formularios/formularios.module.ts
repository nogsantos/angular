import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../modules/material/material.module';
import 'hammerjs';

import { FormulariosComponent } from './formularios.component';
import { FormulariosRoutingModule } from './formularios-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FormulariosRoutingModule
    ],
    declarations: [FormulariosComponent]
})
export class FormulariosModule { }
