import React from "react";
import { Router } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from "./store";
import AppContext from "./context/AppContext";
import { Layout } from "./Layout";
import Route from "./Routing";

function App() {
  return (
    <AppContext.Provider value="">
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <Route />
          </Layout>
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
