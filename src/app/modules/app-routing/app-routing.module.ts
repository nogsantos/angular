import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from '../../components/index/index.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
/**
 * Rotas
 */
const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'exemplos/marcacoes',
        loadChildren: 'app/modules/exemplos/marcacoes/marcacoes.module#MarcacoesModule'
    },
    {
        path: 'exemplos/entrada-dados',
        loadChildren: 'app/modules/exemplos/entrada-dados/entrada-dados.module#EntradaDadosModule'
    },
    {
        path: 'exemplos/formularios',
        loadChildren: 'app/modules/exemplos/formularios/formularios.module#FormulariosModule'
    },
    {
        path: 'exemplos/injecao-dependencia',
        loadChildren: 'app/modules/exemplos/di/di.module#DiModule'
    },
    {
        path: 'lista-contatos',
        loadChildren: 'app/modules/lista-contatos/lista-contatos.module#ListaContatosModule'
    },
    {
        path: 'swapi',
        loadChildren: 'app/modules/swapi/swapi.module#SwapiModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
/**
 * Definição das rotas default do App.
 *
 * @export
 * @class AppRoutingModule
 */
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
