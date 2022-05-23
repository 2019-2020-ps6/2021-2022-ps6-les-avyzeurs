import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {ProfileService} from "../../../services/profile.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.sass']
})

export class ProfileManagerComponent implements OnInit {
  public profileList: Profile[] = [];
  private isProfile = true;

  constructor(public profileService: ProfileService,private route: ActivatedRoute) {
    this.profileService.profiles$.subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
    if(this.route.snapshot.paramMap.get('id') !== 'profile'){
      this.isProfile = false;
    }
  }


  ngOnInit(): void {
  }



}
