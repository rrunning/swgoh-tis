import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonListComponent } from './toon-list.component';

describe('ToonListComponent', () => {
  let component: ToonListComponent;
  let fixture: ComponentFixture<ToonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
