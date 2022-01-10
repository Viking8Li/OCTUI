//test suite-a group of related tests
describe('calculator.js', function(){
    //tests
    it('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5)
    })
    it('should subtract numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 50;
        calculator.subtract(5);
        expect(calculator.total).toBe(45)
    })
    xit('should multiply numbers to total', function(){
       
    })
    xit('should divide numbers to total', function(){
       
    })

    it('toEqual', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        // calculator.total = 10;
        expect(calculator).toEqual(calculator2);
    })

    it('can be instantiated', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toBeTruthy()
        expect(calculator2).toBeTruthy()
        expect(calculator).toEqual(calculator2);
    })

    it('not.toBe', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).not.toBe(calculator2);
    })
    it('has common operations', function(){
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.add).not.toBeUndefined();
    })
    it('can overwrite total', function(){
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("Calc")
    })
    it('doesnot handle NaN', function(){
        const calculator = new Calculator();
        calculator.total = 20
        calculator.multiply('a')

        expect(calculator.total).toBeNaN()
    })
     it('handles divide by zero', function(){
         const calculator = new Calculator();

         expect(function(){calculator.divide(0)}).toThrow();
         expect(function(){calculator.divide(0)}).toThrowError(Error);
         expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
     })


})