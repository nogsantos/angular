/**
 * Definição das rotas do App.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoaComponent } from '../../components/exemplos/lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from '../../components/exemplos/interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from '../../components/exemplos/property-binding/property-binding.component';
import { TwoWayBindingComponent } from '../../components/exemplos/two-way-binding/two-way-binding.component';
import { NgIfComponent } from '../../components/exemplos/ng-if/ng-if.component';
import { NgSwitchComponent } from '../../components/exemplos/ng-switch/ng-switch.component';
import { NgForComponent } from '../../components/exemplos/ng-for/ng-for.component';
import { NgClassComponent } from '../../components/exemplos/ng-class/ng-class.component';
import { NgStyleComponent } from '../../components/exemplos/ng-style/ng-style.component';
import { NgContentComponent } from '../../components/exemplos/ng-content/ng-content.component';
import { IndexComponent } from '../../components/index/index.component';
/**
 * Rotas
 */
const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: { title: `Index` }
    },
    {
        path: 'lista-pessoa-component',
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
