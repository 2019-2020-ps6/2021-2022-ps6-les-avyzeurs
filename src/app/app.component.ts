import {Component} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PolyQuizz - Les Avyzeurs';

  coordinates: Array<Coordinate> = [];
  last_coordinates: Array<Coordinate> = [{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0}];

  mouseMoved(event: MouseEvent) {
    this.coordinates.push({ x : event.clientX, y : event.clientY });
    console.log(this.getAverage());
    this.pushOnLastCoordinates();
    console.log(this.last_coordinates);
    console.log(this.getAverageOnLastCoordinates());
  }

  getAverage(){
    let total = 0;
    let nb = 0;
    for (let i = 1; i < this.coordinates.length; i++) {
      total = total + (Math.sqrt(Math.pow(this.coordinates[i-1].x - this.coordinates[i].x,2) + Math.pow(this.coordinates[i-1].y - this.coordinates[i].y,2)))
      nb++;
    }
    return total/nb;
  }

  pushOnLastCoordinates() {
    for (let i = 0; i < 20; i++) {
      this.last_coordinates[19-i] = this.last_coordinates[18-i];
    }
    this.last_coordinates[0] = this.coordinates[this.coordinates.length - 1];
  }

  getAverageOnLastCoordinates() {
    let total = 0;
    for (let i = 1; i < this.last_coordinates.length; i++) {
      total = total + (Math.sqrt(Math.pow(this.last_coordinates[i-1].x - this.last_coordinates[i].x,2) + Math.pow(this.last_coordinates[i-1].y - this.last_coordinates[i].y,2)))
    }
    return total/20;
  }
}
export interface Coordinate {
  x: number;
  y: number;
}
