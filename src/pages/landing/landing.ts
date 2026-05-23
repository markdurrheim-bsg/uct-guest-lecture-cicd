import { Component } from '@angular/core';
import { QrCode } from '../../components/qr-code/qr-code';

@Component({
  selector: 'app-landing',
  imports: [QrCode],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
