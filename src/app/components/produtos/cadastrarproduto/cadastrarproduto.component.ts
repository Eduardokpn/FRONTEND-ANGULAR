import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent
{
    nome: string = '';
    validade: string = "";
    preco : number = 0;
    p: any
    ngOnInit(): void{}

    salvarProduto(): void
     {

        console.log('nome: ', this.nome);
        console.log('Validade: ', this.validade);
        console.log('preco: ' ,this.preco);
        alert('Salvo com sucesso');

     }


}
