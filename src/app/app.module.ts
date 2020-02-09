import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from 'src/Servicios/BookService';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports:  [BrowserModule, FormsModule, HttpClientModule ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
