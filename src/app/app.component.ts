import { Component } from '@angular/core';
// SERVICE viene importato qui
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ricevuto la response dal service passo al figlio l'array
  pages = [];

  // comunicazione figlio-padre: ripasso il tipo al param

  // il metodo riceve un observable che come risposta da un observer (response), esso emette valore ogni volta che questa funzione viene invocata
  onTerm(term: string) {
    // console.log('App component prints the data from child: ' + term);
    
    // sfrutto il service invocandone i metodi:
    // const results = this.wikipedia.search(term);
    // console.log('FROM SERVICE: ' + results);

    // chiamo servizio 
    this.wikipedia.search(term).subscribe(pages => {
      this.pages = pages;
    })
  }
  // SERVICE: creo costruttore in quanto è la prima funz che viene eseguita alla creazione 
  // e passo servizio come tipo

  // argomento viene iniettato come private prop ad app component ed è un'istanza della classe WikipediaService
  // diviene una proprietà di questa classe e posso accedere ai suoi metodi
  constructor(private wikipedia: WikipediaService) {}
}
