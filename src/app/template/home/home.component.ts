import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nomeProduto : string = "Curso de Angular";
  anuncio = `o ${this.nomeProduto} Está em promoção `;
  idProduto : number = 123;
  precoProduto : number = 2.59;
  promocao : boolean = true;


  constructor() {
   // variáveis de string com concatenação
  // this.anuncio = `o` + this.nomeProduto + `está em promoçao`
  console.log(`Nome do Produto: `, this.nomeProduto);
  console.log(`Anuncio: `, this.anuncio);
  console.log(`ID:`,this.idProduto);
  console.log(`Preço: `, this.precoProduto);
  console.log(`Promoção: `, this.promocao);

  var variavel1;
  var variavel2;
  // const variavel3;

    var idade = 10
    console.log(`Minha idade é: `, idade);

    function imprimeidade() {
      var idade = 50
      console.log(`Minha idade é: `, idade)
    }
     imprimeidadefuc()

     fuction imprimeidade({
      for (let idade = 30; idade <= 40; idade++){
        console.log(`idade dentro do for: `, idade)
      }
      console.log(`idade fora do for: ,` , idade)
     }
     imprimiridade)



}

  ngOnInit(): void { }
}
