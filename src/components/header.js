import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = ({ startLogout }) => (
  <div>
    <h1>Expense</h1>
    <div>
      <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName="is-active" exact={true}>Add Expense</NavLink>
      <NavLink to='/help' activeClassName="is-active" exact={true}>Help</NavLink>
      <button onClick={startLogout}>logout</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)

        // <NavLink to=/edit activeClassName="is-active" exact={true}>Edit</NavLink>
