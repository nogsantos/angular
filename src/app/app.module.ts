import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AlertaService } from './services/alerta/alerta.service';
import { ListaPessoaComponent } from './components/exemplos/lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from './components/exemplos/interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './components/exemplos/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './components/exemplos/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './components/exemplos/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/exemplos/ng-switch/ng-switch.component';
import { NgForComponent } from './components/exemplos/ng-for/ng-for.component';
import { NgClassComponent } from './components/exemplos/ng-class/ng-class.component';
import { NgStyleComponent } from './components/exemplos/ng-style/ng-style.component';
import { NgContentComponent } from './components/exemplos/ng-content/ng-content.component';
import { NavbarComponent } from './components/exemplos/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
    declarations: [
        AppComponent,
        ListaPessoaComponent,
        InterpolationBindingComponent,
        PropertyBindingComponent,
        TwoWayBindingComponent,
        NgIfComponent,
        NgSwitchComponent,
        NgForComponent,
        NgClassComponent,
        NgStyleComponent,
        NgContentComponent,
        NavbarComponent,
        IndexComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [
        AlertaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    // constructor(router: Router) {
    //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    // }
}
