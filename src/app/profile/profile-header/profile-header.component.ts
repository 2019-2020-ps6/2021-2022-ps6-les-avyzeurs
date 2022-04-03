import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

  hasProp(o, name) {
    return o.hasOwnProperty(name);
  }
}
