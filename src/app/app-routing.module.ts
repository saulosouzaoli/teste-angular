import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: './listagem/listagem.module#ListagemModule'},
  {path: 'produto', loadChildren: './produto/produto.module#ProdutoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
