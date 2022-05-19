import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YohooBabaNavigationComponent } from './yohoo-baba-navigation.component';

describe('YohooBabaNavigationComponent', () => {
  let component: YohooBabaNavigationComponent;
  let fixture: ComponentFixture<YohooBabaNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YohooBabaNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YohooBabaNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
