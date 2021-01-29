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
import {
  useUsuarioRegistroMutation,
  UsuarioRegistro,
} from "../generated/graphql";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Copyright } from "../components/copyright";

import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { usuarioRegistro } from "../common/validation/usuario.validation";

interface registroProps {}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type inputs = UsuarioRegistro;

const Registro: React.FC<registroProps> = () => {
  const classes = useStyles();
  const router = useHistory();
  const { register, handleSubmit, errors } = useForm<inputs>({
    resolver: yupResolver(usuarioRegistro),
  });
  const [Registro, { loading }] = useUsuarioRegistroMutation();

  const onSubmit = async (data: inputs) => {
    const results = await Registro({
      variables: {
        options: data,
      },
    });
    if (!results?.data?.usuarioRegistro.errores) {
      router.push("/tablero");
    } else {
      console.log(results?.data?.usuarioRegistro.errores);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>R</Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                error={errors?.email ? true : false}
                inputRef={register()}
              />
              <Typography color="error">{errors?.email?.message}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="clave"
                label="clave"
                type="password"
                id="clave"
                autoComplete="current-password"
                error={errors?.clave ? true : false}
                inputRef={register()}
              />
              <Typography color="error">{errors?.clave?.message}</Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Registrarse"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/ingresar">
                <LinkMaterial href="#" variant="body2">
                  Ya tiene una cuenta? Ingrese
                </LinkMaterial>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Registro;
