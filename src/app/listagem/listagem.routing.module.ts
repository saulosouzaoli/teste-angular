
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListagemComponent } from './listagem.component';


const listagemRoute = [
    {path: '', component: ListagemComponent}
];

@NgModule({
    imports: [RouterModule.forChild(listagemRoute)],
    exports: [RouterModule]
})
export class ListagemRoutingModule {}