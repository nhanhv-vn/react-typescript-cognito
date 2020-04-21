import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: `${theme.spacing(10)}px auto`,
      maxWidth: 500,
      padding: `${theme.spacing(6)}px ${theme.spacing(5)}px`,
      borderRadius: 5,
      border: `1px solid ${theme.palette.grey[500]}`,
      boxSizing: "border-box",
    },
    formTitle: {
      color: "#202124",
      fontSize: 24,
      lineHeight: "1.3333",
    },
    formContent: {
      paddingTop: theme.spacing(3),
    },
    button: {
      padding: theme.spacing(1.5),
      fontSize: "1rem",
      width: "100%",
      marginTop: theme.spacing(3),
    },
  });

export const withFormStyles = withStyles(styles);
export type WithFormStyles = WithStyles<typeof styles>;
