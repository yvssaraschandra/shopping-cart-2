import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="center">
                            <img src={item.img} alt={item.title}/>

                            <br />

                            <div className="center">{item.title}</div>

                            <div to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id);alert("An item has been added to your cart")}}><i className="material-icons">add</i></div>

                            <p><b>₹ {item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{ 
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)