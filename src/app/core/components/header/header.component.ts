import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/login/models/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  logoutPressed(): void {
    this.logout.emit();
  }
}
