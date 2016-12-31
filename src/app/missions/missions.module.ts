import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from './missions.component';
import { MissionWind1Component } from './mission-wind1/mission-wind1.component';

import { EngineModule } from '../engine';

@NgModule({
  imports: [
    CommonModule,
    EngineModule
  ],
  exports: [
    MissionsComponent
  ],
  declarations: [MissionsComponent, MissionWind1Component]
})
export class MissionsModule { }
