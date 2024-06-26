import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent implements OnInit
{

  constructor(private produtosService: ProdutosService, private router: Router) {}

    produto: IProduto = {
      nome: '',
      validade: new Date(),
      precoProduto: 0
    };


    ngOnInit(): void{}

    salvarProduto(): void
     {
        this.produtosService.cadastrar(this.produto).subscribe(retorno => {
          this.produto = retorno;
          this.produtosService.exibirMensagem(
            'Sistema',
            `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
            'toast-success'
          );
          this.router.navigate(['/produtos'])




        });


     }


}
