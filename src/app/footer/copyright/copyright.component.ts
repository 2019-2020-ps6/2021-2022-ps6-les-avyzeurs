import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.sass']
})
export class CopyrightComponent implements OnInit {
  currentDate = new Date();
  ngOnInit(): void {
  }

}
