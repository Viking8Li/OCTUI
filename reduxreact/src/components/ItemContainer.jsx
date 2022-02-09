import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return <>
    <h2>Item - {props.item}</h2>
    <button onClick={props.buyItem}>Buy Item</button>
  </>;
}

//pass cake object in ownProps 
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes:state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
