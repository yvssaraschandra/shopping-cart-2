import React, { Component } from 'react'
import { connect } from 'react-redux'
class DisplayTotal extends Component{
    render(){
  
        return(
            <div className="container">
                <div className="collection">
                        <li className="collection-item"><b>Subtotal: ₹ {this.props.total}</b></li>
                        <li className="collection-item"><b>Tax: ₹ {Math.round(this.props.total*0.05)}</b></li>
                        <li className="collection-item"><b>Total: ₹ {this.props.total + Math.round(this.props.total*0.05)}</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTotal)
