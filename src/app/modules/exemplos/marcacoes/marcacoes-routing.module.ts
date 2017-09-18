import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const marcacoesRoutes: Routes = [
    {
        path: '',
        component: MarcacoesComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'listagem', component: ListaPessoaComponent },
                    { path: 'interpolation', component: InterpolationBindingComponent },
                    { path: 'property', component: PropertyBindingComponent },
                    { path: 'two-way', component: TwoWayBindingComponent },
                    { path: 'if', component: NgIfComponent },
                    { path: 'switch', component: NgSwitchComponent },
                    { path: 'for', component: NgForComponent },
                    { path: 'class', component: NgClassComponent },
                    { path: 'style', component: NgStyleComponent },
                    { path: 'content', component: NgContentComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(marcacoesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MarcacoesRoutingModule { }
