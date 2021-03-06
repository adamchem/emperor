import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component{ 
  render(){
    return (
      <div className='col-md-4 col-ms-4'>
        <div className='form'>
          <h1>訂單</h1>
          <hr />

          <form method='post'>
            <label for='name'>大名: &nbsp;</label>
            <input type='text' id='name' placeholder='周星馳?'/>
            <br />
            <label for='number'>數量: &nbsp;</label>
            <input type='number' id='number' placeholder='多買幾本吧~'/>
            <br />
            <label for='note'>備註: &nbsp;</label>
            <input type='text' id='note' placeholder='額外需求...'/>
            <br /><br />
            <button type='button' className='btn btn-primary'>訂購</button>
          </form>

          <hr />
          <span>剩餘數量: {100 - this.props.count}</span>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Form);