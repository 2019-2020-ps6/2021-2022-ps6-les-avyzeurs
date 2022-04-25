import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {adminCredentials} from "../../../config";

import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  containsError: boolean = false
  errorMsg?: string


  constructor(private router: Router) {}


  ngOnInit(): void {}

  onSubmit(data) {
    let credentialValid = false;
    Object.keys(adminCredentials).forEach((key) => {
      if (adminCredentials[key]["username"] === data.username && adminCredentials[key]["password"] === data.password)
        credentialValid = true
    })
    if (credentialValid) {
      localStorage.setItem("isLoggedAsAdmin", "true")
      this.router.navigate(['/admin/profile'])
    } else {
      this.containsError = true;
      this.errorMsg = "Identifiants incorrects"
    }



  }

}
