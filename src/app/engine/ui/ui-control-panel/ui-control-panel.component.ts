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
  panelColor = 'white';
  

  constructor(public engine:EngineService) {
   }

  ngOnInit() {
  }
  changeRotateSpd(speed:number){
    this.engine.rotateSpeed = speed;
  }
  changeSpotLightIntensity(value:number){
    this.engine.pointLight.intensity = value;
    console.log(this.engine.pointLight.intensity)
  }
  changeSpotLightColor(hex:number){
    this.engine.pointLight.color.setHex(hex);
    console.log(this.engine.pointLight.color)
  }
  changeDirLightIntensity(value:number){
    this.engine.dirLight.intensity = value;
    console.log(this.engine.dirLight.intensity)
  }
  changeDirLightColor(hex:number){
    this.engine.dirLight.color.setHex(hex);
    console.log(this.engine.dirLight.color)
  }
}
