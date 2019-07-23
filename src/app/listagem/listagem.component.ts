import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from 'src/model/produto';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  
  private subject = new Subject<any>();
  private produtoService: ProdutoService;
  lista:Produto[];

  constructor(_produtoService: ProdutoService) { 
    this.produtoService = _produtoService;
  }

  ngOnInit() {
    this.produtoService.findAll().subscribe(value => {
      this.lista = value;
    });
  }

}
