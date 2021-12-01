import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentListComponent } from './current-list.component';

describe('CurrentListComponent', () => {
  let component: CurrentListComponent;
  let fixture: ComponentFixture<CurrentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
