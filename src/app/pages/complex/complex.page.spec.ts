import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplexPage } from './complex.page';

describe('ComplexPage', () => {
  let component: ComplexPage;
  let fixture: ComponentFixture<ComplexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
