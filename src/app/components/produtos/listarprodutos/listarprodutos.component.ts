import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {

    listaProdutos:  IProduto[] = [];


    constructor(private produtosService: ProdutosService) {


    }

    ngOnInit(): void {

      this.carregarProdutos();

    }

    carregarProdutos(): void {

      this.produtosService.buscarTodos().subscribe(retorno =>{


        this.listaProdutos = retorno;


    }
    )

    }



}
