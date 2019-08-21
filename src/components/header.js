import React from 'react'
import {  NavLink} from "react-router-dom";

export default () => (
    <div>
      <h1>Expense</h1>
      <div>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName="is-active" exact={true}>Add Expense</NavLink>
        <NavLink to='/help' activeClassName="is-active" exact={true}>Help</NavLink>
      </div>
    </div>
  );

        // <NavLink to=/edit activeClassName="is-active" exact={true}>Edit</NavLink>
