import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  return <>
    <h2>Number Of IceCreams - {props.numOfIceCreams}</h2>
    <button onClick={props.buyIceCream}>Buy IceCream</button>
  </>;
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);


//react-redux v7.1