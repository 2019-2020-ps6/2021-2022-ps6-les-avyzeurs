import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {ProfileService} from "../../../services/profile.service";



@Component({
  selector: 'app-admin-light-profile',
  templateUrl: './light-profile.component.html',
  styleUrls: ['./light-profile.component.sass']
})
export class LightProfileComponent implements OnInit {
  @Input() profile : Profile;
  @Input() index : number;


  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

  delete(e) {
    this.profileService.deleteProfile(this.profile.id);
    e.stopPropagation();
  }

  getFullName(){
    return this.profile.firstname + " " + this.profile.name;
  }
}
