import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntradaDadosComponent } from './entrada-dados.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { KeyupComponent } from './keyup/keyup.component';
import { BlurComponent } from './blur/blur.component';
import { InputOutputComponent } from './input-output/input-output.component';

const routes: Routes = [
    {
        path: '',
        component: EntradaDadosComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'event-binding', component: EventBindingComponent },
                    { path: 'keyup', component: KeyupComponent },
                    { path: 'blur', component: BlurComponent },
                    { path: 'input-output', component: InputOutputComponent },
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
export class EntradaDadosRoutingModule { }
