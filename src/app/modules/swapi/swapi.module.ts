import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '../../modules/material/material.module';
import 'hammerjs';

import { SwapingRoutingModule } from './swapi-routing.module';
import { HttpService } from './services/http/http.service';
import { IndexComponent } from './components/index/index.component';
import { PeopleHeadlineComponent } from './components/people/people-headline/people-headline.component';
import { PeopleGridComponent } from './components/people/people-grid/people-grid.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        SwapingRoutingModule,
    ],
    declarations: [
        IndexComponent,
        PeopleHeadlineComponent,
        PeopleGridComponent,
        PeopleDetailsComponent
    ],
    providers: [
        HttpService
    ]
})
export class SwapiModule { }
