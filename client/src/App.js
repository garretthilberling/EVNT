import "./index.css";
import React from "react";
import AuthService from "./utils/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";
import Guest from "./pages/Guest";
import Guests from "./pages/Guests";
import Passwords from "./pages/Passwords";
import Survey from "./pages/Survey";
import NoMatch from "./pages/NoMatch";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
      <ApolloProvider client={client}>
          <Router>
            <main>
              <div><Link to="/">Home</Link></div>
              {AuthService.loggedIn() && (
                <button onClick={logout}>Logout</button>
              )}
                <Routes>
                    <Route
                      path="/"
                      element={AuthService.loggedIn() ? <Dashboard /> : <Home />}
                    ></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/event/:id" element={<Event />} />
                    <Route path="/event/create" element={<CreateEvent />} />
                    <Route path="/event/:id/survey" element={<Survey />} />
                    <Route path="/event/:id/:guests" element={<Guests />} />
                    <Route path="/guest/:id" element={<Guest />} />
                    <Route path="/event/:id/passwords" element={<Passwords />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </main>
          </Router>
    </ApolloProvider>
  );
}

export default App;
