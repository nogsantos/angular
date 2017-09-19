import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiComponent } from './di.component';
import { InjecaoDependeciaComponent } from './injecao-dependecia/injecao-dependecia.component';

const routes: Routes = [
    {
        path: '',
        component: DiComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: InjecaoDependeciaComponent }
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
export class DiRoutingModule { }
