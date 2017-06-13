import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component{
    render(){
        return(
            <div className='footer col-md-12 col-ms-12'>
                <p>{this.props.count}</p>
                <Link to="/order">立即購買</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Footer);