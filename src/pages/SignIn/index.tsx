import React, { useState, useContext, FC } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

// Logic
import { authActions, Entry } from "./../../actions";
import { AuthContext } from "./../../contexts";

// Component
import { Form } from "./../../components/Form/Form";
import { RedirectLink } from "./../../components/RedirectLink";
import { withSignInFormStyles, WithSignInFormStyles } from "./index.styles";

type Props = WithSignInFormStyles;

const SignInBase: FC<Props> = ({ classes }: Props) => {
  const [input, setInput] = useState<Entry>({ username: "", password: "" });

  const context = useContext(AuthContext);
  const history = useHistory();
  const {
    dispatch,
    state: {
      signIn: { loading, success, error },
    },
  } = context;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = () => {
    authActions.signIn(input, dispatch);
  };

  if (success && !loading) {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }
  return (
    <Form
      title="Sign in"
      btnText="Sign In"
      onSubmit={handleSubmit}
      redirect={
        <>
          <RedirectLink text="Sign up" pathname="/sign-up" />
          <RedirectLink text="Forgot password" pathname="/forgot" />
        </>
      }
    >
      <Grid
        container={true}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <FormControl classes={{ root: classes.formLabel }}>
          <InputLabel htmlFor="email-input">Email address</InputLabel>
          <Input
            id="email-input"
            name="username"
            aria-describedby="email-helper-text"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl classes={{ root: classes.formLabel }}>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            aria-describedby="password-helper-text"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </FormControl>
        {success && (
          <FormHelperText id="helper-text" className={classes.success}>
            Successful!
          </FormHelperText>
        )}
        {error && (
          <FormHelperText id="helper-text" className={classes.error}>
            {error}
          </FormHelperText>
        )}
      </Grid>
    </Form>
  );
};

export const SignIn = withSignInFormStyles(SignInBase);
