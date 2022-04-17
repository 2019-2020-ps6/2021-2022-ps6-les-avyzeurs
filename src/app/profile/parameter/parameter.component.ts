import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from "../../../models/profile.model";

@Component({
  selector: 'app-profile-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.sass']
})
export class ParameterComponent implements OnInit {

  @Input() parameter: Parameter;

  constructor() {

  }

  ngOnInit(): void {
  }

  getVisionScaleArray() {
    return {
      16: "Taille à 100% (1/7)",
      24: "Taille à 150% (1/7)",
      32: "Taille à 200% (3/7)",
      40: "Taille à 250% (4/7)",
      48: "Taille à 300% (5/7)",
      56: "Taille à 350% (6/7)",
      64: "Taille à 400% (7/7)"
    }
  }

  getBoxSizingArray() {
    return {
      8: "Petite zone (1/4)", 16: "Moyenne zone (2/4)", 32: "Grande zone (3/4)", 64: "Immense zone (4/4)",
    }
  }

  getBoxSpacingArray() {
    return {
      8: "Aucun espacement (1/5)",
      16: "Petit espacement (2/5)",
      32: "Moyen espacement (3/5)",
      64: "Grand espacement (4/5)",
      128: "Immense espacement (5/5)",
    }
  }


  down() {
    switch (this.parameter.type) {
      case "VISION_SCALE":
        if (this.previous(this.getVisionScaleArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.previous(this.getVisionScaleArray(), this.parameter.value))
        break;
      case "PARKINSON_BOX_SIZING":
        if (this.previous(this.getBoxSizingArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.previous(this.getBoxSizingArray(), this.parameter.value))
        break;
      case "PARKINSON_BOX_SPACING":
        if (this.previous(this.getBoxSpacingArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.previous(this.getBoxSpacingArray(), this.parameter.value))
        break;
    }
  }

  up() {
    switch (this.parameter.type) {
      case "VISION_SCALE":
        if (this.next(this.getVisionScaleArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.next(this.getVisionScaleArray(), this.parameter.value))
        break;
      case "PARKINSON_BOX_SIZING":
        if (this.next(this.getBoxSizingArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.next(this.getBoxSizingArray(), this.parameter.value))
        break;
      case "PARKINSON_BOX_SPACING":
        if (this.next(this.getBoxSpacingArray(), this.parameter.value) != undefined) this.parameter.value = Number(this.next(this.getBoxSpacingArray(), this.parameter.value))
        break;
    }
  }

  next(db, key) {
    let found = false;
    for (let dbKey in db) {
      if (found) return dbKey
      if (dbKey == key) found = true
    }
    return undefined
  }

  previous(db, key) {
    let lastKey;
    for (let dbKey in db) {
      if (dbKey == key) return lastKey
      lastKey = dbKey
    }
    return undefined
  }
}
