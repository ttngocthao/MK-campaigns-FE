import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyleCss from "./components/GlobalStyle.css";
import NewCampaign from "./views/NewCampaign";
import HomePage from "./views/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <GlobalStyleCss />
      <Router>
        <Header />
        <main style={{ padding: "10px", marginTop: "0rem" }}>
          <Switch>
            <Route exact path="/add-campaign" component={NewCampaign} />

            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
