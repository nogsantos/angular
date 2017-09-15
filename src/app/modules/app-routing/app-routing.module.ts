/**
 * Definição das rotas do App.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoaComponent } from '../../components/exemplos/marcacoes/lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from '../../components/exemplos/marcacoes/interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from '../../components/exemplos/marcacoes/property-binding/property-binding.component';
import { TwoWayBindingComponent } from '../../components/exemplos/marcacoes/two-way-binding/two-way-binding.component';
import { NgIfComponent } from '../../components/exemplos/marcacoes/ng-if/ng-if.component';
import { NgSwitchComponent } from '../../components/exemplos/marcacoes/ng-switch/ng-switch.component';
import { NgForComponent } from '../../components/exemplos/marcacoes/ng-for/ng-for.component';
import { NgClassComponent } from '../../components/exemplos/marcacoes/ng-class/ng-class.component';
import { NgStyleComponent } from '../../components/exemplos/marcacoes/ng-style/ng-style.component';
import { NgContentComponent } from '../../components/exemplos/marcacoes/ng-content/ng-content.component';
import { MarcacoesComponent } from '../../components/exemplos/marcacoes/marcacoes.component';
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
    {
        path: 'marcacoes',
        component: MarcacoesComponent,
    },
    {
        path: 'marcacoes/:id?',
        component: MarcacoesComponent,
        children: [
            {
                path: 'lista-pessoa-component',
                component: ListaPessoaComponent
            },
            {
                path: 'interpolation',
                component: InterpolationBindingComponent
            }
        ]
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
