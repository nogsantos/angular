import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormulariosComponent } from './formularios.component';

const routes: Routes = [
    {
        path: '',
        component: FormulariosComponent,
        children: [
            {
                path: '',
                children: [

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
