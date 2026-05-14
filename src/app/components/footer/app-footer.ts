import { Component } from '@angular/core';

import {
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooterComponent {
    miNombre = 'Programacion Plataformas Web'
  nombre = 'sebastian zurita';
  universidad = 'UNIVERSIDAD POLITECNICA SALESIANA';
  fecha = new Date();
  precio = 1500;
}