import React, { useContext, FC } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";

// Logic
import { authActions } from "./../../actions";
import { AuthContext } from "./../../contexts";

export const Home: FC = () => {
  const context = useContext(AuthContext);
  const { state, dispatch } = context;
  const history = useHistory();

  const handleLogOut = () => {
    authActions.signOut(dispatch).then(() => {
      history.push("/sign-in");
    });
  };

  return (
    <Grid>
      <Typography variant="h6">Welcome : {state.username}</Typography>
      <Button onClick={handleLogOut} variant="contained" color="primary">
        Logout
      </Button>
    </Grid>
  );
};
