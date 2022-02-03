import React, { Component } from 'react';

// export class FRInput extends Component {
//   render() {
//     return <div>
//         <input type="text" />
//     </div>;
//   }
// }


//passing a component as a parameter
const FRInput = React.forwardRef(
    (props, ref) => {
        return(
            <div>
             <input type="text" ref={ref}/>
           </div>
        )
    }
) 

export default FRInput;
