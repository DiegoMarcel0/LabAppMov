import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptorRecetaPage } from './receptor-receta.page';

describe('ReceptorRecetaPage', () => {
  let component: ReceptorRecetaPage;
  let fixture: ComponentFixture<ReceptorRecetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceptorRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
