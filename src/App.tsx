import React from "react";
import Rutas from "./routes/rutas";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphQL",
  credentials: "include",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Rutas></Rutas>
    </ApolloProvider>
  );
}

export default App;
