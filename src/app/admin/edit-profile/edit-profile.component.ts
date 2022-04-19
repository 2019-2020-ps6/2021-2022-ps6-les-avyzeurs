import { Component, OnInit } from '@angular/core';
import parametersHelper from "../../../helpers/parametersHelper";
import {Profile} from "../../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";
import {QuizProfileResult} from "../../../models/quizresult.model";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });
  }

  ngOnInit(): void {
  let id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'))
  this.profileService.setSelectedProfile(id);
  }

}
