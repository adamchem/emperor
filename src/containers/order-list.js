import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderList extends Component{ 
  render(){
    return (
      <div className='col-md-8 col-ms-8'>
          <div className='list'>
            <h1>訂購者</h1>
            <hr />

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>名字</th>
                        <th>數量</th>
                        <th>備註</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>陳冠中</td>
                        <td>2</td>
                        <td>只是個備註</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>陳冠中</td>
                        <td>2</td>
                        <td>只是個備註</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>陳冠中</td>
                        <td>2</td>
                        <td>只是個備註</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    );
  }
};

export default OrderList;