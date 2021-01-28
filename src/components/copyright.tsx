import { Link, Typography } from "@material-ui/core";
import React from "react";

interface copyrightProps {}

export const Copyright: React.FC<copyrightProps> = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.uvirtual.org/">
        UVirtual
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
