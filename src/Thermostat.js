class Thermostat {
 
  constructor() {
    this.default_temp = 20;
    this.current_temp = this.default_temp
  }

  up(amount) {
    this.current_temp += amount
  }

  down(amount) {
    this.current_temp -= amount
  }
}