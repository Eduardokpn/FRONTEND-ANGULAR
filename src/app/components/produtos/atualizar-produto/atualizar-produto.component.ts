import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent
  {

    constructor(private produtosService: ProdutosService, private router: Router, private activateRouter: ActivatedRoute) {}

      produto: IProduto = {
        nome: '',
        validade: new Date(),
        precoProduto: 0
      };


      ngOnInit(): void{

        const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
        this.produtosService.buscarID(id).subscribe(retorno => { this.produto = retorno; });


      }



      salvarProduto(): void
       {
          this.produtosService.atualizar(this.produto).subscribe(retorno => {
            this.produto = retorno;
            this.produtosService.exibirMensagem(
              'Sistema',
              `${this.produto.nome} foi atualizado com sucesso. ID: ${this.produto.id}`,
              'toast-success'
            );
            this.router.navigate(['/produtos'])




          })


       }
      }
