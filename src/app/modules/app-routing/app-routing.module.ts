/**
 * Definição das rotas do App.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from '../../components/index/index.component';
import { MarcacoesModule } from '../../components/exemplos/marcacoes/marcacoes.module';
/**
 * Rotas
 */
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent,
        data: { title: `Index` }
    },
    {
        path: 'exemplos/marcacoes',
        loadChildren: 'app/components/exemplos/marcacoes/marcacoes.module#MarcacoesModule'
    }
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
