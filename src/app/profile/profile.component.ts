import {Component, OnInit} from '@angular/core';
import {Parameter, Profile} from "../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../services/profile.service";
import parametersHelper from "../../helpers/parametersHelper";

@Component({
  selector: 'app-profile', templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
      let notConnected = false;
      if(!localStorage.getItem('currentSessionID'))
        notConnected = true;
      if(localStorage.getItem('currentSessionID') != String(profile.id))
        notConnected = false;
      localStorage.setItem('currentSessionID', String(profile.id))
      if(notConnected)
        location.reload();
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.profileService.setSelectedProfile(id);
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }
  
}

