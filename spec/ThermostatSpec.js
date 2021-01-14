describe("Thermostat", function(){

  let thermostat = new Thermostat

  describe('Instantiation', () => {
    it('should make a new instanct of class', () => {
      expect(thermostat).toBeInstanceOf(Thermostat)
    })

    it('should be initialized at 20 degrees', () => {
      expect(thermostat.default_temp).toEqual(20)
    })
  });
  
});
