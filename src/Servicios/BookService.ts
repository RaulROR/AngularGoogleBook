import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable()
export class BookService {
    constructor(private cliente: HttpClient) { }

    getLibros(title: string) {
        let books: Book[];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + title).subscribe( (data: Book[]) => {
            books = data['items'];
        });
        return books;
    }
    getBooks(title: string): object[] {
        // const books: object [] = [];
        let books: Book[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + title).subscribe( (data: object[]) => {
            for (let i = 0; i < data['items'].length; i++) {
                books.push(data['items'][i]['volumeInfo']);
                }
        });
        return books;

    }

    dameTitulos(searchItem: string): string[] {
        const volumes: object[] = [];
        const titulos: string[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + searchItem).subscribe( (data: object[]) => {

            for(let i = 0; i < data['items'].length; i++) {
                volumes.push(data['items'][i]['volumeInfo']);
                titulos.push(data['items'][i]['volumeInfo']['title']);
            }

            // for (let i = 0; i < volumes.length; i++) {
             //   titulos.push(volumes[i]['title']);
            // }
        }
        );
        return titulos;
    }
}
