import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../Model/IProduto.model';
import { Toast, ToastrService } from 'ngx-toastr';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

private URL : string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService,) {}

  buscarTodos() : Observable<IProduto[]>
  {

  return this.http.get<IProduto[]>(this.URL).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))

  );
  }

  buscarID(id : number) : Observable<IProduto>
  {

  return this.http.get<IProduto[]>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))

  );

  }

  exibirErro(e: any): Observable<any>
  {

      this.exibirMensagem('Erro!!', 'Não foi possivel realizar a operação', 'toast-erro');

      return EMPTY;
  }



  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{

    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo);


  }

  cadastrar(produto: IProduto): Observable<IProduto>
  {
    return this.http.post<IProduto[]>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );


  }

  atualizar(produto: IProduto): Observable<IProduto>
  {
    return this.http.put<IProduto[]>(`${this.URL}/${produto.id}`,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );


  }

  excluir (produto: IProduto): Observable<IProduto>
  {
    return this.http.delete<any>(`${this.URL}/${produto.id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


}
