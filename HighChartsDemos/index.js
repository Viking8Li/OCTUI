//DOMContentLoaded window.onload
document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container',{
        type:{
            type:'column'
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