class Thermostat {
 
  constructor() {
    this.default_temp = 20;
    this.current_temp = this.default_temp
    this.min_temp = 10;
    this.max_temp = 32;
    this.power_save_max_temp = 25;
    this.power_save = true;
  }

  up(amount) {
    let max_temp_error = "Temperature cannot be higher than 32 degrees if power saving mode is off."
    let power_save_max_temp_error = "Temperature cannot be higher than 25 degrees if power saving mode is on."
    
    if (this.power_save == true) {
      if ((this.current_temp + amount > this.power_save_max_temp)) {
        throw new TypeError(power_save_max_temp_error)
      } else {
      this.current_temp += amount
      }
    } else {
      if ((this.current_temp + amount > this.max_temp)) {
        throw new TypeError(max_temp_error)
      } else {
        this.current_temp += amount
      }
    }
  }

  down(amount) {
    let min_temp_error = "Temperature cannot be lower than 10 degrees."
    if ((this.current_temp - amount) <= this.min_temp) {
      throw new TypeError(min_temp_error)
    } else {
    this.current_temp -= amount
    }
  }
  power_mode() {
    if (this.power_save == false) {
      this.power_save = true
    }else {
      this.power_save = false
    }
  }
}