import { TestBed } from '@angular/core/testing';
import { Landing } from '../pages/landing/landing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should link to the GDP page', () => {
    const fixture = TestBed.createComponent(Landing);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.getAttribute('href')).toBe('http://bsg.co.za/careers/gdp/');
  });

});
