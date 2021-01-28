import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";

import { NavBarIndex } from "../components/index/navBar.index";

import { useMonedasQuery } from "../generated/graphql";

interface indexProps {}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Index: React.FC<indexProps> = () => {
  const classes = useStyles();

  const { data, loading } = useMonedasQuery();

  return (
    <div>
      <NavBarIndex></NavBarIndex>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          ACFI
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Texto referente al sistema
        </Typography>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {loading ? (
            <CircularProgress />
          ) : (
            data?.monedas.map((moneda) => (
              <Grid item key={moneda.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={moneda.nombre}
                    titleTypographyProps={{ align: "center" }}
                    action={moneda.nombre === "Dolar" ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  ></CardHeader>
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        {moneda.codigo}
                      </Typography>
                    </div>
                    <ul>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={moneda.id}
                      >
                        {!!moneda.eliminado}
                      </Typography>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth color="primary">
                      Ver Descripcion
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>

      {/* Footer */}

      {/* End footer */}
    </div>
  );
};

export default Index;
