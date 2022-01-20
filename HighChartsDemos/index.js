//DOMContentLoaded window.onload
document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container',{
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline'
        },
        xAxis:{
            categories:['Apples', 'Bananas', 'Grapes']
        },
        series:[
            {
                name:'John',
                data:[1,2,3]
            },
            {
                name:'Jill',
                data:[3,4,8]
            }
        ]
    })
})