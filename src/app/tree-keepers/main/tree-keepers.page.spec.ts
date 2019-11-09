import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeKeepersPage } from './tree-keepers.page';

describe('TreeKeepersPage', () => {
  let component: TreeKeepersPage;
  let fixture: ComponentFixture<TreeKeepersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeKeepersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeKeepersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
