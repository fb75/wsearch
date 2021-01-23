// SERVICE 
// usato per legggere/scrivere/aggiornare dati nell'app
// quasi sempre usato per richieste al server
// dati viaggiano da servizio a componente
// servizi sono implementati come classi
// Angular crea UNA SOLA istanza di ogni servizio nella app

// DEPENDENCY INJECTION
// WikipediaService è una dependency di app senza la quale app non funzionerebbe
// Creiamo servizi separati e li iniettiamo attraverso il costruttore, angular crea una sola istanza di essi

import { Injectable } from '@angular/core';
// importo classe per chaiamate http e lo passo al costruttore come dipendenza (applico dependency injection)
import { HttpClient } from '@angular/common/http';

// codice di esempio non correlato al servizio:
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

// creo interfaccia per passarla all'observable
// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string,
//     dateCreated: number
//   }
// }

// // posso creare un observable tipizzandolo con interfaccia Car (oppure i genrics) e con
// // pluck estrapolo proprietà
// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'VW',
//       dateCreated: 2001
//     }
//   });
// }).pipe(
//   pluck('make', 'name')
// );


// chiamare così observable farà ritornare un valore ogni volta
// typescript autotipizza il ritorno del value
// observable.subscribe((value) => { console.log(value)
// })


// definisco interfaccia per la response
// da esso decido di tipizzare solo alcune prop dell'oggetto (search è un array di oggetti )
interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  constructor(private http: HttpClient) { }

  // term ricevuto da app component
  search(term: string) {
    // return 'I am Wikipedia search result.';
    // http.get ritorna un observable ed emette valore dalla api
    // posso agganciare pipe e con pluck ottengo proprietà specifiche dall observable response
    // tipizzo il tipo di dato che mi aspetto come risposta usando i generics per le funzioni:
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(pluck('query', 'search'));
  };

  
}
