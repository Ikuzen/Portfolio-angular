import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineComponent } from './engine/engine.component';
import {IndexComponent} from './index/index.component';
const routes: Routes = [
     { path: '', redirectTo: '/index', pathMatch: 'full' },
    {path:'index', component:IndexComponent},
    {path: 'N64', component: EngineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
