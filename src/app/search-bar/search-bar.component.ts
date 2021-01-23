import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // evento da figlio a padre: Output + EventEmitter (lo chiamo qui submitted) importo e invoco passando generics poi al submit emetto la proprietà con this.proprietà.emit()
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault()
    // console.log(this.term);
    this.submitted.emit(this.term);
  }
}
