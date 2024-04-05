import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './template/home/home.component';
import { ListarprodutosComponent } from './components/produtos/listarprodutos/listarprodutos.component';
import { CadastrarprodutoComponent } from './components/produtos/cadastrarproduto/cadastrarproduto.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos/listar', component:ListarprodutosComponent},
  {path: 'produtos/cadastrar', component:CadastrarprodutoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


