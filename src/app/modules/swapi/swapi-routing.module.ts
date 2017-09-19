import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
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
export class SwapingRoutingModule { }
