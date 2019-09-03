import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EngineComponent } from './engine/engine.component';
import{UiComponent} from './engine/ui/ui.component'
const routes: Routes = [
  { path: 'N64', component: EngineComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
