import React, { FC } from "react";
import { Typography, Grid, Button } from "@material-ui/core";

import { withFormStyles, WithFormStyles } from "./Form.styles";

interface OwnProps {
  title: string;
  btnText: string;
  onSubmit?: () => void;
  redirect?: React.ReactNode;
  children?: React.ReactNode;
}

type Props = OwnProps & WithFormStyles;

const FormBase: FC<Props> = ({
  children,
  classes,
  title,
  btnText,
  onSubmit,
  redirect,
}: Props) => (
  <form className={classes.root}>
    <Typography classes={{ body1: classes.formTitle }}>{title}</Typography>
    <Grid container={true} className={classes.formContent}>
      {children}
      <Button
        variant="contained"
        color="primary"
        classes={{ root: classes.button }}
        onClick={onSubmit}
      >
        {btnText}
      </Button>
      <Grid
        container={true}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        {redirect}
      </Grid>
    </Grid>
  </form>
);

export const Form = withFormStyles(FormBase);
