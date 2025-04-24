import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClistComponent } from './clist.component';

describe('ClistComponent', () => {
  let component: ClistComponent;
  let fixture: ComponentFixture<ClistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClistComponent]
    });
    fixture = TestBed.createComponent(ClistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
