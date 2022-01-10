describe('Main', () => {
    describe('main.js', () => {
        describe('calculate()', ()=>{
            it('validates expression when the first number is passed', function(){
                spyOn(window,'updateResult').and.stub();

                calculate('a+3');
                calculate('a+3');

                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
                expect(window.updateResult).toHaveBeenCalledTimes(2)
            });
            it('validates expression when the operator is invalid', function(){
                spyOn(window,'updateResult').and.stub();

                calculate('4_3');

                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
                expect(window.updateResult).toHaveBeenCalledTimes(1)
            });
            it('calls divide', function(){
                const spy = spyOn(Calculator.prototype,'divide')
                calculate('3/2')

                expect(spy).toHaveBeenCalled();
                expect(spy).not.toHaveBeenCalledWith(3);
                expect(spy).toHaveBeenCalledWith(2)
                expect(spy).toHaveBeenCalledTimes(1);
            });
            it('calls updateResult(callThrough)', function(){
                spyOn(window, 'updateResult')
                spyOn(Calculator.prototype,'multiply').and.callThrough()
                calculate('5*5');
                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith(25);
            })
            it('calls updateResult(callFake)', function(){
                spyOn(window, 'updateResult')
                spyOn(Calculator.prototype,'multiply').and.callFake(function(number){
                    return 'it works'
                })
                calculate('5*5');
                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith('it works');
            })
            it('calls updateResult (return value)', function(){
                spyOn(window, 'updateResult')
                spyOn(Calculator.prototype,'multiply').and.returnValue('whatever');
                calculate('5*5');
                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith('whatever');
            })
            it('calls updateResult (return value)', function(){
                spyOn(window, 'updateResult')
                spyOn(Calculator.prototype,'multiply').and.returnValues(null,'whatever');
                calculate('5*5');
                expect(window.updateResult).toHaveBeenCalled();
                expect(window.updateResult).toHaveBeenCalledWith(null);
            })
            it('desnt handle errors', function(){
                spyOn(Calculator.prototype,'multiply').and.throwError('some error')
                
                expect(function(){calculate('5*5')}).toThrowError('some error');
            })
            
        })
        describe('updateResult()', ()=>{
            let element;
            //tear down function
            beforeAll(function(){
                element = document.createElement('div');
                element.setAttribute('id', 'result');
                document.body.appendChild(element);
            })
            afterAll(function(){
                const element = document.getElementById('result')
                document.body.removeChild(element);
            })
            it('adds resut to the DOM element', function(){
                updateResult('100')
                expect(element.innerText).toBe('100')
            })
        })
    });
});