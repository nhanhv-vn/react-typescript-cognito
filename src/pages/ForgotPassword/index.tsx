import React, { useState, useContext, FC } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

// Logic
import { authActions, ForgotPWEntry } from "./../../actions";
import { AuthContext } from "./../../contexts";

// Components
import { Form } from "./../../components/Form/Form";
import { RedirectLink } from "./../../components/RedirectLink";
import {
  withForgotPasswordStyles,
  WithForgotPasswordStyles,
} from "./index.styles";

type Props = WithForgotPasswordStyles;

export const ForgotPasswordBase: FC<Props> = ({ classes }: Props) => {
  const [input, setInput] = useState<ForgotPWEntry>({ username: "" });

  const context = useContext(AuthContext);
  const history = useHistory();
  const {
    dispatch,
    state: {
      forgotPW: { loading, success, error },
    },
  } = context;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = () => {
    authActions.forgotPassword(input, dispatch);
  };

  if (success && !loading) {
    setTimeout(() => {
      history.push("/reset");
    }, 3000);
  }

  return (
    <Form
      title="Forgot password"
      btnText="Send"
      onSubmit={handleSubmit}
      redirect={
        <>
          <RedirectLink text="Sign in" pathname="/sign-in" />
          <RedirectLink text="Sign up" pathname="/sign-up" />
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
            aria-describedby="email-helper-text"
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

export const ForgotPassword = withForgotPasswordStyles(ForgotPasswordBase);
