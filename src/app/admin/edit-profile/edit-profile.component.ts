import { Component, OnInit } from '@angular/core';
import {Parameter, Profile} from "../../../models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";
import {ParameterService} from "../../../services/parameter.service";


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {

  public profile: Profile;
  public editing = false;
  public params: Parameter[];
  constructor(private route: ActivatedRoute, private profileService: ProfileService, private parameterService: ParameterService) {
    this.profileService.profileSelected$.subscribe((profile) => {
      this.profile = profile;
    });

    this.parameterService.parameters$.subscribe((params) =>{
      this.params = params;
    } )
  }

  ngOnInit(): void {
  if (this.route.snapshot.paramMap.get('id') !== 'new') this.editing = true;
    if (this.editing) {
      let id = Number.parseInt(<string>this.route.snapshot.paramMap.get('id'))
      this.profileService.setSelectedProfile(id);
    }
  }



}
