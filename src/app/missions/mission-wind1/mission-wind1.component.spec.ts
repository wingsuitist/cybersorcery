/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MissionWind1Component } from './mission-wind1.component';

describe('MissionWind1Component', () => {
  let component: MissionWind1Component;
  let fixture: ComponentFixture<MissionWind1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionWind1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionWind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
