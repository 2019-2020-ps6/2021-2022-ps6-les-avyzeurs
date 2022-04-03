import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-profile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

  hasProp(o, name) {
    return o.hasOwnProperty(name);
  }
}
