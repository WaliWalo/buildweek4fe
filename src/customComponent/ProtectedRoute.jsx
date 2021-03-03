import React, { useEffect } from "react";

import { Route, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getUser } from "../api/userApi";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userLogedin = () => {
    return localStorage.getItem("LoggedIn");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogedin()) {
      dispatch(async (dispatch) => {
        try {
          const response = await getUser();
          if (response.statusText === "OK") {
            dispatch({
              type: "SET_USER",
              payload: response.data,
            });
          } else {
            dispatch({
              type: "ADD_TO_ERRORS",
              payload: response.data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        userLogedin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
