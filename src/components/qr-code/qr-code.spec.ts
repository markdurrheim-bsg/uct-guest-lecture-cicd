import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QrCode } from './qr-code';

@Component({
  standalone: true,
  imports: [QrCode],
  template: '<app-qr-code [url]="url" />',
})
class HostComponent {
  url = 'https://example.com';
}

describe('QrCode', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(host).toBeTruthy();
  });

  it('should pass the url through to the link href', () => {
    const qrCode = fixture.debugElement.query(By.directive(QrCode)).componentInstance as QrCode;
    (qrCode as any).qrCodeSrc.set('data:image/png;base64,fake');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');

    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe(host.url);
  });
});
