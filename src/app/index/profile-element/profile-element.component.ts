import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-profile-element', templateUrl: './profile-element.component.html'
})

export class ProfileElementComponent implements OnInit {

  @Input() profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

  hasProp(o, name) {
    return o.hasOwnProperty(name);
  }
}
