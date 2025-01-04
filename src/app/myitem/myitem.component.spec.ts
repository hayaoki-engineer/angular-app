import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyitemComponent } from './myitem.component';

describe('MyitemComponent', () => {
  let component: MyitemComponent;
  let fixture: ComponentFixture<MyitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
