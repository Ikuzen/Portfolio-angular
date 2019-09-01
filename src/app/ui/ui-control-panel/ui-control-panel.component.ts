import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { EngineService } from 'src/app/engine/engine.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-ui-control-panel',
  templateUrl: './ui-control-panel.component.html',
  styleUrls: ['ui-control-panel.component.scss'],
    // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,

})
export class UiControlPanelComponent implements OnInit {
  panelColor = new FormControl('red');

  constructor(public engine:EngineService) {
   }

  ngOnInit() {
  }
  changeRotateSpd(speed:number){
    this.engine.rotateSpeed = speed;
  }
}
