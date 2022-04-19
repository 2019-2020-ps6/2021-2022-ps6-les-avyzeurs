import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/profile.model";
import {FormControl, FormGroup} from "@angular/forms";
import {adminCredentials} from "../../config";

@Component({
  selector: 'app-index', templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl('')
  });

  public profileList: Profile[] = [];

  constructor(public profileService: ProfileService) {
    this.profileService.profiles$.subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log("on crée" + data);
    this.profileService.addProfile({id: 0, lastConnection: undefined, parameters: [], firstname: data.first_name, name:data.last_name});
    console.log("on a créé");
  }

}
