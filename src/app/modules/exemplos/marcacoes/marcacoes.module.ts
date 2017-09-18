import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../modules/material/material.module';
import 'hammerjs';

import { MarcacoesRoutingModule } from './marcacoes-routing.module';
import { MarcacoesComponent } from './marcacoes.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        MarcacoesRoutingModule
    ],
    declarations: [
        MarcacoesComponent,
        ListaPessoaComponent,
        InterpolationBindingComponent,
        PropertyBindingComponent,
        TwoWayBindingComponent,
        NgIfComponent,
        NgSwitchComponent,
        NgForComponent,
        NgClassComponent,
        NgStyleComponent,
        NgContentComponent
    ]
})
export class MarcacoesModule { }
