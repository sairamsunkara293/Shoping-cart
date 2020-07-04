import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featurerSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  navigationChange(feature: string) {
    this.featurerSelected.emit(feature)
  }
}
