import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";

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
}
