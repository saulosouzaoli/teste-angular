import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/model/produto';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ProdutoService {

    private url = 'localhost:8080\produto'


    constructor(private http: HttpClient) { }

    save( produto:Produto) {
        this.http.post(this.url+'\save', JSON.stringify(produto), 
        );
    }

    findAll():Observable<any> {
      return  this.http.get(this.url+'\findAll', 
        );
    }

    delete( produto:Produto) {              
        this.http.delete(this.url+ '\delete' +produto.id);
    }

}