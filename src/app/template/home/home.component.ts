import { Component } from '@angular/core';
import { __setFunctionName } from 'tslib';

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
  promocao : boolean = false;
  foto : string = 'assets/img/crud.png'


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

    /*
    function imprimeidade() {
      var idade = 50
      console.log(`Minha idade é: `, idade)
    }
     imprimeidade();
    */
    /*
     function imprimirIdade()
     {
      for (let idade = 30; idade <= 40; idade++)
      {
        console.log(`idade dentro do for: `, idade)
      }
      console.log(`idade fora do for: ,` , idade)
     }

     imprimirIdade();
     */

      /*
      var variavelN1 =0;
      var variavelN1 = 10;

      console.log('variavel é', variavelN1);
      function funcao()
      {

        var outra_var = 20;
        var outra_var = 30;

      console.log('outra variavel', outra_var)

      }

      funcao();

      /*
      var a = 10;
      let b = 20;

    function bar()
    {
        var a = 30;
        let b = 40;

        if(true)
        {
          var a = 50;
          let b = 60;

          console.log('Variavel a dentro do IF', a);
          console.log("Variavel b dentro do if", b);

        }

        console.log('Variavel a dentro do Funação', a);
        console.log("Variavel b dentro do Função", b);
    }

    bar();
    console.log("Variavel fora da função", a)
    console.log('Variavel b fora da função', b)
*/


/*
let a = 1;

    function bar()
      {
        console.log('Vqariavel a:', a);
        let b = 2

        if(true)
        {
          let c = 3;
          let a = 4;
          console.log("Variavel a dentro do if:", a)
          console.log("Variavel b dentro do if:", b)
          console.log("Variavel c dentro do if:", c)
        }

        console.log("Variavel a fora do if:", a)
        console.log("Variavel b fora do if:", b)
        //console.log(c);

      }

      bar();
*/
/*
      var a= 5;
      var b =10;

      if(a = 5)
      {
          let a = 4;
          let b= 1;

          console.log('Variavel a dentro de if :', a);
          console.log('variavel b fora do if:', b);

      }

      console.log('Variavel a fora do if:', a );
      console.log('Variavel b fora do if:', b)

*/



}

  ngOnInit(): void { }
}
