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
            xit('calls add');
            xit('calls subtract');
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