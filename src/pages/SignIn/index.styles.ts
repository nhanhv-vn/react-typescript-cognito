import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    formLabel: {
      width: "100%",
      marginBottom: theme.spacing(3),
    },
    error: {
      color: theme.palette.error.main,
    },
    success: {
      color: theme.palette.success.main,
    },
  });

export const withSignInFormStyles = withStyles(styles);
export type WithSignInFormStyles = WithStyles<typeof styles>;
