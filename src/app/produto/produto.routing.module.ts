
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';


const produtoRoute = [
    {path: '', component: ProdutoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(produtoRoute)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {}