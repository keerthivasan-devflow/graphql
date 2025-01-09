import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import FetchAllUsers from "./FetchAllUsers";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <FetchAllUsers />
      </div>
    </ApolloProvider>
  );
}

export default App;
