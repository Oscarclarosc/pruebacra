import React from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import LinkMaterial from "@material-ui/core/Link";

import { useHistory, Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useUsuarioLoginMutation, UsuarioLogin } from "../generated/graphql";
import { Copyright } from "../components/copyright";

import { yupResolver } from "@hookform/resolvers/yup";
import { usuarioLogin } from "../common/validation/usuario.validation";

type inputs = UsuarioLogin;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Ingresar = () => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm<inputs>({
    resolver: yupResolver(usuarioLogin),
  });
  const [Login, { loading }] = useUsuarioLoginMutation();

  const route = useHistory();

  const onSubmit = async (data: inputs) => {
    const results = await Login({
      variables: {
        options: data,
      },
    });
    if (!results.data?.usuarioLogin.errores) {
      route.push("/tablero");
    } else {
      console.log(results.data?.usuarioLogin.errores);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>I</Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            error={errors?.email ? true : false}
            inputRef={register()}
          />
          <Typography color="error">{errors?.email?.message}</Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="clave"
            label="Clave"
            type="password"
            id="clave"
            autoComplete="current-password"
            error={errors?.clave ? true : false}
            inputRef={register()}
          />
          <Typography color="error">{errors?.clave?.message}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Ingresar"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#">
                <LinkMaterial href="#" variant="body2">
                  Olvido su clave?
                </LinkMaterial>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/registro">
                <LinkMaterial href="#" variant="body2">
                  {"No tiene una cuenta? Registrese"}
                </LinkMaterial>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Ingresar;
