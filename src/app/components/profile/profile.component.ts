import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-components-profile', templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

  hasProp(o, name) {
    return typeof o[name] !== 'undefined';
  }

}
