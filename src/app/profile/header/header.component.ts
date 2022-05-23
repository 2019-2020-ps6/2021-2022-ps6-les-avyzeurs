import {Component, Input, OnInit} from '@angular/core';
import {Parameter, Profile} from "../../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";
import parametersHelper from "../../../helpers/parametersHelper";

@Component({
  selector: 'app-profile-header', templateUrl: './header.component.html', styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() onQuizzes: boolean;

  profile: Profile;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentSessionID')) {
      const id = Number.parseInt(localStorage.getItem('currentSessionID'));
      this.profileService.setSelectedProfile(id);
    }
  }

  hasProp(o, name) {
    return typeof o[name] !== 'undefined';
  }

  logout(): void {
    localStorage.removeItem('currentSessionID');
  }

  getParameter(type: string): Parameter {
    return parametersHelper.getParameter(this.profile, type)
  }

  getClass(type: string): string {
    return parametersHelper.getClass(this.getParameter(type))
  }
}
