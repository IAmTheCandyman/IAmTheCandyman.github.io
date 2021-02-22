import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KongpanionsComponent } from './kongpanions.component';

describe('KongpanionsComponent', () => {
  let component: KongpanionsComponent;
  let fixture: ComponentFixture<KongpanionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KongpanionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KongpanionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
