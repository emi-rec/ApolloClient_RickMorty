import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";

// Importar estilos de Semantic UI
import "semantic-ui-css/semantic.min.css";

// 1. Configurar el cliente de Apollo
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // Cambia esto por tu URL
  cache: new InMemoryCache(),
});

// 2. Renderizado estilo React 17
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
