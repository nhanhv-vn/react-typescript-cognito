import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: `${theme.spacing(1.25)}px 0`,
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  });

export const withRedirectLinkStyles = withStyles(styles);
export type WithRedirectLinkStyles = WithStyles<typeof styles>;
