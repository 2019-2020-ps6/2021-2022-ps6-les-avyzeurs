import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.sass']
})

export class ProfileManagerComponent implements OnInit {
  public profileList: Profile[] = [];

  constructor(public profileService: ProfileService) {
    this.profileService.profiles$.subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }


  ngOnInit(): void {
  }


}
