import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoaComponent } from '../lista-pessoa/lista-pessoa.component';
import { AlertaService } from '../alerta/alerta.service';
import { InterpolationBindingComponent } from '../interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from '../property-binding/property-binding.component';
import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';
import { NgIfComponent } from '../ng-if/ng-if.component';
import { NgSwitchComponent } from '../ng-switch/ng-switch.component';
import { NgForComponent } from '../ng-for/ng-for.component';
import { NgClassComponent } from '../ng-class/ng-class.component';
import { NgStyleComponent } from '../ng-style/ng-style.component';
import { NgContentComponent } from '../ng-content/ng-content.component';
/**
 * Rotas
 */
const appRoutes: Routes = [
    {
        path: 'listaPessoaComponent',
        component: ListaPessoaComponent,
        data: { title: `Listagem` }
    },
    {
        path: 'interpolation',
        component: InterpolationBindingComponent,
        data: { title: `Interpolation` }
    },
    {
        path: 'property-binding',
        component: PropertyBindingComponent,
        data: { title: `Property binding` }
    },
    {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
        data: { title: `Two way binding` }
    },
    {
        path: 'ng-if-component',
        component: NgIfComponent,
        data: { title: `if component` }
    },
    {
        path: 'ng-switch-component',
        component: NgSwitchComponent,
        data: { title: `Switch component` }
    },
    {
        path: 'ng-for-component',
        component: NgForComponent,
        data: { title: `For component` }
    },
    {
        path: 'ng-class-component',
        component: NgClassComponent,
        data: { title: `Class component` }
    },
    {
        path: 'ng-style-component',
        component: NgStyleComponent,
        data: { title: `Style component` }
    },
    {
        path: 'ng-content-component',
        component: NgContentComponent,
        data: { title: `Content component` }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
