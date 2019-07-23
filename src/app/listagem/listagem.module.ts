import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ListagemRoutingModule } from './listagem.routing.module';
import { ProdutoService } from '../produto.service';



@NgModule({
  declarations: [
    ListagemComponent],
  imports: [
    CommonModule,    
    ListagemRoutingModule
  ],
  providers:[ProdutoService]
})
export class ListagemModule { }
