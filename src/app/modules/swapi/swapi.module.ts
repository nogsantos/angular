import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '../../modules/material/material.module';
import 'hammerjs';

import { SwapingRoutingModule } from './swapi-routing.module';
import { HttpService } from './services/http/http.service';
import { PeopleComponent } from './components/people/people.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MaterialModule,
        SwapingRoutingModule,
    ],
    declarations: [
        PeopleComponent,
        IndexComponent
    ],
    providers: [
        HttpService
    ]
})
export class SwapiModule { }
