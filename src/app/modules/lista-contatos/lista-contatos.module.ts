import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../modules/material/material.module';
import 'hammerjs';

import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { IndexComponent } from './index/index.component';
import { ListaContatosRoutingModule } from './lista-contatos-routing.module';
import { ContatosDataBaseService } from './services/contatos-data-base.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ListaContatosRoutingModule
    ],
    declarations: [
        DadosUsuarioComponent,
        DetalheUsuarioComponent,
        ListaUsuarioComponent,
        IndexComponent
    ],
    providers: [ContatosDataBaseService]
})
export class ListaContatosModule { }
