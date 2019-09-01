import { Component, OnInit } from '@angular/core';
import { EngineService } from 'src/app/engine/engine.service';

@Component({
  selector: 'app-ui-control-panel',
  templateUrl: './ui-control-panel.component.html',
  styleUrls: ['ui-control-panel.component.scss']
})
export class UiControlPanelComponent implements OnInit {

  constructor(public engine:EngineService) {
   }

  ngOnInit() {
  }
  changeRotateSpd(speed:number){
    this.engine.rotateSpeed = speed;
  }
}
