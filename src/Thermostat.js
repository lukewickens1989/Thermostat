class Thermostat {
 
  constructor() {
    this.default_temp = 20;
    this.current_temp = this.default_temp
    this.min_temp = 10;
  }

  up(amount) {
    this.current_temp += amount
  }

  down(amount) {
    let min_temp_error = "Temperature cannot be lower than 10 degrees."
    if ((this.current_temp - amount) <= this.min_temp) {
      throw new TypeError(min_temp_error)
    } else {
    this.current_temp -= amount
    }
  }
}