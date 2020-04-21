import React, { useState, useContext, FC } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

// Logic
import { authActions, ResetPWEntry } from "./../../actions";
import { AuthContext } from "./../../contexts";

import { Form } from "./../../components/Form/Form";
import {
  withResetPasswordStyles,
  WithResetPasswordStyles,
} from "./index.styles";

type Props = WithResetPasswordStyles;

export const ResetPasswordBase: FC<Props> = ({ classes }: Props) => {
  const [input, setInput] = useState<ResetPWEntry>({
    username: "",
    newPassword: "",
    code: "",
  });

  const context = useContext(AuthContext);
  const {
    dispatch,
    state: {
      resetPW: { success, error },
    },
  } = context;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = () => {
    authActions.resetPassword(input, dispatch);
  };

  return (
    <Form title="Reset password" btnText="Reset" onSubmit={handleSubmit}>
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
            name="username"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl classes={{ root: classes.formLabel }}>
          <InputLabel htmlFor="password-input">New Password</InputLabel>
          <Input
            id="password-input"
            aria-describedby="password-helper-text"
            type="password"
            name="newPassword"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl classes={{ root: classes.formLabel }}>
          <InputLabel htmlFor="code-input">Verification code</InputLabel>
          <Input
            id="code-input"
            name="code"
            aria-describedby="code-helper-text"
            onChange={handleInputChange}
          />
        </FormControl>
        {success && (
          <FormHelperText id="helper-text-success" className={classes.success}>
            Successful!
          </FormHelperText>
        )}
        {error && (
          <FormHelperText id="helper-text-error" className={classes.error}>
            {error}
          </FormHelperText>
        )}
      </Grid>
    </Form>
  );
};

export const ResetPassword = withResetPasswordStyles(ResetPasswordBase);
