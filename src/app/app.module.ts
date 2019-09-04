import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { UiControlPanelComponent } from './engine/ui/ui-control-panel/ui-control-panel.component';
import { UiInfobarTopComponent } from './engine/ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './engine/ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './engine/ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiComponent } from './engine/ui/ui.component';
//material design modules
import {MatSelectModule,MatFormFieldModule,MatSliderModule,MatGridListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import { IndexComponent } from './index/index.component';
//

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    UiComponent,
    UiControlPanelComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    IndexComponent,
    
  ],
  imports: [
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ViewportScroller
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
