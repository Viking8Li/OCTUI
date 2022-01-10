describe('Main', () => {
    describe('main.js', () => {
        describe('calculate()', ()=>{
            xit('validates expression');
            xit('calls add');
            xit('calls subtract');
        })
        describe('updateResult()', ()=>{
            it('adds resut to the DOM element', function(){
                
                const element = document.createElement('div');
                element.setAttribute('id', 'result');
                document.body.appendChild(element);

                updateResult('100')

                expect(element.innerText).toBe('100')
            })
        })
    });
});