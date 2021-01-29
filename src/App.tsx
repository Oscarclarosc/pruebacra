import React from "react";
import Rutas from "./routes/rutas";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/temaConfig";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphQL",
  credentials: "include",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Rutas></Rutas>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
