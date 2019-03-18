import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() sidenavOpen: boolean;
  @Output() openedClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  openClose(): void {
    this.openedClose.emit();
  }

}
