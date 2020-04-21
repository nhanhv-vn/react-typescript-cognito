import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { authActions } from "./../actions";
import { AuthContext } from "./../contexts";

type Props = {
  Component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
};
export const PrivateRoute = ({ Component }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AuthContext);
  const {
    state: { isSignedIn },
    dispatch,
  } = context;

  useEffect(() => {
    authActions.detectSignedIn(dispatch).then(() => {
      setIsLoading(true);
    });
  }, [dispatch]);

  if (!isLoading) {
    return <CircularProgress />;
  }

  return (
    <Route
      render={(props: any) =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/sign-in" }} />
        )
      }
    />
  );
};
