import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Redirect to="/expense" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
