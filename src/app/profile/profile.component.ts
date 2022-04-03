import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {QuizzesService} from "../../services/quizzes.service";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.profileService.setSelectedProfile(id);
  }

}
