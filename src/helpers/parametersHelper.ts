import {Parameter, Profile} from "../models/profile.model";

export default class parametersHelper {
  static getParameter(profile: Profile, type: string): Parameter {
    for (let parameter of profile.parameters) {
      if (parameter.type === type) return parameter
    }
    return null
  }

  static getClass(param: Parameter): string {
    if (!param.isEnabled) return ""
    if (param.type === "PARKINSON_BOX_SPACING") return "box-spacing-" + param.value
    if (param.type === "PARKINSON_BOX_SIZING") {
      let currentCol
      if (param.value == 8) currentCol = 3; else if (param.value == 16) currentCol = 6; else if (param.value == 32) currentCol = 9; else if (param.value == 64) currentCol = 12
      return "col-" + currentCol + " box-sizing-" + param.value
    }
    if (param.type === "VISION_SCALE") return "font-size-" + param.value
  }
  
}
