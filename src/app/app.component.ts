import { Component } from '@angular/core';
import { BookService } from 'src/Servicios/BookService';

@Component({  selector: 'app-root',
templateUrl: './app.component.html',
providers: [ ]
})
export class AppComponent {
  private books: object [];
  private titulos: string [];

  constructor(private servicio: BookService)  {}

  search(title: string) {
    this.books = this.servicio.getBooks(title);
    this.titulos = this.servicio.dameTitulos(title);
  }
}
