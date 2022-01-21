//DOMContentLoaded window.onload
document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container',{
        // tooltip:{
        //     animation:false,
        //     backgroundColor:'#333333',
        //     borderColor:'#f01f11',
        //     borderRadius:20,
        //     followPointer:true,
        //     style:{
        //         color:'#ffffff'
        //     }
        // },
        // tooltip:{
        //     formatter(){
        //         return `<b>X value</b> -${this.x}. <b>Y value</b> - ${this.y}`
        //     }
        // },
        tooltip:{
            shared:true,
            formatter(){
                let s = `<b>X is:</b>${this.x}`;
                this.points.forEach(function(point){
                    s += `<br><b>Y is:</b> ${point.y}`
                });
                return s;
            }
        },
        colors:['#1C110A','#e4d6a7','#e9b44c','#9b2915','#50a2a7'],
        credits:{
            // enabled:false
            text:'My Custom Credit',
            href:'https://www.google.com',
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize:"15px",
                color:'red'
            }
        },
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline',
            zoomType:'xy'
        },
        title:{
            text:'Our First Chart'
        },
        yAxis:{
            title:{
                text:'Fruits Eaten'
            }
        },
        xAxis:{
            categories:['Apples', 'Bananas', 'Grapes']
        },
        series:[
            {
              name: "John",
              data: [1, 2, 3, 100, 2, 3, 1, 2, 3],
            },
            {
              name: "Jane",
              data: [1, 20, 25, 60, 13, 12, 40, 14],
            },
            {
              name: "Wayna",
              data: [1, 20, 100, 1, 3, 2, 1, 2],
            },
            {
              name: "Jack",
              data: [10, 20, 100, 8, 7, 4, 2, 4],
            },
            {
              name: "Mario",
              data: [8, 12, 100, 6, 7, 4, 200, 4],
            },
            {
              name: "Matt",
              data: [1, 20, 25, 26, 60, 12, 30, 14],
            },
          ]
    })
})