import { Component, effect, input, signal } from '@angular/core';
import { toDataURL } from 'qrcode';

@Component({
  selector: 'app-qr-code',
  imports: [],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode {
  readonly url = input.required<string>();
  readonly size = input(200);
  protected readonly qrCodeSrc = signal('');

  constructor() {
    effect(() => {
      const value = this.url();
      const size = this.size();

      void toDataURL(value, {
        width: size,
        margin: 1,
      }).then((dataUrl) => {
        this.qrCodeSrc.set(dataUrl);
      });
    });
  }
}
