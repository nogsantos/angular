import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormulariosComponent } from './formularios.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
    {
        path: '',
        component: FormulariosComponent,
        children: [
            {
                path: '',
                children: [
                    {path: 'contatos', component: ContatosComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormulariosRoutingModule { }
