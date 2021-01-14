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

  describe('#up', () => {

    beforeEach( () => {
      thermostat.current_temp = thermostat.default_temp
    });

    it('should turn up the temperature by passed in amount', () => {
      thermostat.up(1)
      expect(thermostat.current_temp).toEqual(21)
    });

    it('should turn up the temperature by 2', () => {
      thermostat.up(2)
      expect(thermostat.current_temp).toEqual(22)
    });

    it('should turn up the temperature by 5', () => {
      thermostat.up(5)
      expect(thermostat.current_temp).toEqual(25)
    });

  });

    describe('#down', () => {

      beforeEach( () => {
        thermostat.current_temp = thermostat.default_temp
      });
  
      it('should turn down the temperature by passed in amount', () => {
        thermostat.down(1)
        expect(thermostat.current_temp).toEqual(19)
      });
  
      it('should turn down the temperature by 2', () => {
        thermostat.down(2)
        expect(thermostat.current_temp).toEqual(18)
      });
  
      it('should turn down the temperature by 5', () => {
        thermostat.down(5)
        expect(thermostat.current_temp).toEqual(15)
      });

  });
  
});
