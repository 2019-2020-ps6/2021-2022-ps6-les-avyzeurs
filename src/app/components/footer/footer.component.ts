import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-components-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  currentDate = new Date();
  isLogged: boolean = false;
  profileId: number = 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {


  }
}
