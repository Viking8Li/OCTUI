//test suite-a group of related tests
describe('calculator.js', function(){
    describe('Calculator', function(){

        //setup and tear down functions
        //beforeAll, beforeEach  afterAll, afterEach
        let calculator;
        let calculator2;

        beforeEach(function(){
            calculator = new Calculator();
            calculator2 = new Calculator();
        })
        afterEach(function(){
            calculator = null;
            calculator2 = null;
        })
        it('should add numbers to total', function(){
            calculator.add(5);
            expect(calculator.total).toBe(5)
        })
        it('should subtract numbers to total', function(){
            calculator.total = 50;
            calculator.subtract(5);
            expect(calculator.total).toBe(45)
        })
        xit('should multiply numbers to total', function(){
           
        })
        xit('should divide numbers to total', function(){
           
        })
    
        it('toEqual', function(){
            // calculator.total = 10;
            expect(calculator).toEqual(calculator2);
        })
    
        it('can be instantiated', function(){
            expect(calculator).toBeTruthy()
            expect(calculator2).toBeTruthy()
            expect(calculator).toEqual(calculator2);
        })
    
        it('not.toBe', function(){
            expect(calculator).not.toBe(calculator2);
        })
        it('has common operations', function(){
            expect(calculator.add).toBeDefined();
            expect(calculator.add).not.toBeUndefined();
        })
        it('can overwrite total', function(){
            calculator.total = null;
            expect(calculator.total).toBeNull();
            expect(calculator.constructor.name).toContain("Calc")
        })
        it('doesnot handle NaN', function(){
            calculator.total = 20
            calculator.multiply('a')
            expect(calculator.total).toBeNaN()
        })
         it('handles divide by zero', function(){
    
             expect(function(){calculator.divide(0)}).toThrow();
             expect(function(){calculator.divide(0)}).toThrowError(Error);
             expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
         })
         it('returns total', function(){
            calculator.total = 50;
            expect(calculator.add(20)).toBe(70);
            expect(calculator.total).toMatch('-?\\d+');
            expect(typeof calculator.total).toMatch('number')
            
            //asymetric matcher
            expect(calculator.total).toEqual(jasmine.anything());
    
            //custom matchers
         })
    })
})