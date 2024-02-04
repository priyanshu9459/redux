import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
const Shop = () => {
  const dispatch = useDispatch();
   
  return (
    <div>
        <h1>Deposit/Withdraw Money</h1>
      <button className='btn-primary' onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button>
      <div>Update Balance</div>
      <button className='btn-primary' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    </div>
  )
}
export default Shop;