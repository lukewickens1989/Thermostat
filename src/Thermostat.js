class Thermostat {
 
  constructor() {
    this.default_temp = 20;
    this.current_temp = this.default_temp
    this.min_temp = 10;
    this.power_save_max = 25;
    this.power_save = true;
  
  }

  up(amount) {
    let power_save_max_temp = "Temperature cannot be more than 25 degrees."
    if ((this.current_temp + amount > this.power_save_max)) {
      throw new TypeError(power_save_max_temp)
    } else {
    this.current_temp += amount
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