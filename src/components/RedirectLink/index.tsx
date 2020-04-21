import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

import { withRedirectLinkStyles, WithRedirectLinkStyles } from "./index.styles";

type Props = {
  text: string;
  pathname: string;
} & WithRedirectLinkStyles;

const RedirectLinkBase: FC<Props> = ({ text, pathname, classes }: Props) => (
  <Link to={pathname} className={classes.root}>
    {text}
  </Link>
);

export const RedirectLink = withRedirectLinkStyles(memo(RedirectLinkBase));
