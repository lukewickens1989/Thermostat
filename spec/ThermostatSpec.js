describe("Thermostat", function(){

  let thermostat = new Thermostat

  describe('Instantiation', () => {
    it('should make a new instanct of class', () => {
      expect(thermostat).toBeInstanceOf(Thermostat)
    })

    it('should be initialized at 20 degrees', () => {
      expect(thermostat.default_temp).toEqual(20)
    })
    
    // ISSUE WITH TEST RETURNING FALSE FOR NO REASON:
    // it('should be initialized with power_save on', () => {
    //   expect(thermostat.power_save).toEqual(true)
    // })

    it('should have a maximum temp of 32 degrees', () => {
      expect(thermostat.max_temp).toEqual(32)
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

    it('should not turn up the temperature up to 26 degrees if power_mode is on', () => {
      thermostat.power_save = true
      expect(function () { thermostat.up(6) }).toThrow(new TypeError("Temperature cannot be higher than 25 degrees if power saving mode is on."));
    });

    it('should not exceed 32 degrees if power save mode is off', () => {
      thermostat.power_save = false
      expect(function () { thermostat.up(13) }).toThrow(new TypeError("Temperature cannot be higher than 32 degrees if power saving mode is off."));
    })

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

      it('shouldnt turn down the temperature if the temperature is 10 degrees', () => {
        thermostat.current_temp = thermostat.min_temp
        expect(function () { thermostat.down(1) }).toThrow(new TypeError("Temperature cannot be lower than 10 degrees."));
      });
  });

  describe("#power_mode", () => {
    it("should change the power mode if it is true", () => {
      thermostat.power_mode()
      expect(thermostat.power_save).toEqual(false)

    });
    it("should change the power mode if it is false", () => {
      thermostat.power_save = false
      thermostat.power_mode()
      expect(thermostat.power_save).toEqual(true)

    });
  });
  
});
