import {
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LinkMaterial from "@material-ui/core/Link";
import React from "react";
import { useHistory } from "react-router-dom";

import uv_logo1 from "../../images/uv_logo1.png";

interface navBarSiaInicio {}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavBarSiaInicio: React.FC<navBarSiaInicio> = () => {
  const classes = useStyles();

  const router = useHistory();

  const toLogin = () => {
    router.push("/ingresar");
  };

  const toRegistrarse = () => {
    router.push("/registro");
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button>
            <Avatar alt="uv_logo1" src={uv_logo1} />
          </Button>

          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            UVirtual
          </Typography>

          <nav>
            <LinkMaterial
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Ayuda
            </LinkMaterial>
          </nav>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={toLogin}
          >
            Iniciar Sesion
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={toRegistrarse}
          >
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBarSiaInicio;
