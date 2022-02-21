import { Component, OnInit } from '@angular/core';
import {ImagesEnum} from "./images_enum";

@Component({
  selector: 'footer-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.sass']
})
export class CopyrightComponent implements OnInit {
  currentDate = new Date();
  ngOnInit(): void {
  }

  public imagesKeys(): string[] {
    return Object.keys(ImagesEnum);
  }

  public imagesValue(value: string): string {
    // @ts-ignore
    return ImagesEnum[value as keyof ImagesEnum]
  }
}

