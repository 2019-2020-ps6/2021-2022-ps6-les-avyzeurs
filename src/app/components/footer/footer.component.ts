import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
