import React, { Component } from 'react';
import { Link } from 'react-router';

import Form from '../containers/order-form';

export default class Order extends Component{
    render(){
        return(
            <div className='order-side row'>
                <Form />
                <br />
                <Link to='/' className='back'>回到主頁</Link>
            </div>
        );
    }
}