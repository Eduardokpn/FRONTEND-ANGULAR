import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent
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

