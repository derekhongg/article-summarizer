import "./App.css";
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register";
import Login from "./components/Login/login.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home.component.jsx";
import Summarize from "./components/Summarize/Summarize";

// graphql setup
// first install @apollo/client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3001/graphql",
  });

  // alternative
  // const client = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // });

  return (
    <ApolloProvider client={client}>
      <div className="App bg-gray-50 ">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route index={true} element={<Home />} />
                <Route path="/signup" element={<Register />} />
                {/* for future article summaries */}
                {/* <Route path="article/*" element={<Shop />} /> */}
                <Route path="/summarize" element={<Summarize />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
