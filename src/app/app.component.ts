import {Component} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PolyQuizz - Les Avyzeurs';

  public suddenMovement: boolean = false;
  coordinates: Array<Coordinate> = [];
  last_coordinates: Array<Coordinate> = [{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0},{x : 0, y : 0}];

  mouseMoved(event: MouseEvent) {
    this.coordinates.push({ x : event.clientX, y : event.clientY });
    //console.log("----------")
    //console.log("Moyenne de distance entre tous les mouvements de souris : " + this.getAverage());
    /**Tremblements constants si nombre faible (<5), pas de tremblement si nombre moyen, tremblements forts si nombre élevé (>10)**/
    this.pushOnLastCoordinates();
    //console.log("Moyenne de distance entre les 20 derniers mouvements de souris : " + this.getAverageOnLastCoordinates());
    /** Mouvement brusque récent si au triple des mouvements constants**/
    this.isSudden();
    //console.log(this.suddenMovement);
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

  isSudden() {
    //on cherche a savoir si un mouvement est brusque seulement après avoir enregistré quelques mouvements
    if(this.coordinates.length>100) {
      //on définit un mouvement comme brusque si il est 4 fois plus rapide que les mouvements habituels
      if(this.getAverageOnLastCoordinates()>2*this.getAverage()) {
        this.suddenMovement = true;
        setTimeout(() => {
          this.setSuddenToFalse();
        }, 2000);
      }
    }
  }

  setSuddenToFalse() {
    this.suddenMovement = false;
  }
}
export interface Coordinate {
  x: number;
  y: number;
}
