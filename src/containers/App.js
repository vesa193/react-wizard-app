import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
// import { IntlProvider } from "react-intl";
// import messages from "../assets/Local/messages";
// import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
// import Loader from "../components/Loader/Loader";
import "./App.scss";


// const dummyDataJson = require('../network/apis/dummyData.json')['genres']

class App extends React.Component {
  // App contains routes and also wrapped with snackbar and intl for localization

  render() {    
    return (
      // <IntlProvider locale={lang} messages={messages[lang]}>
      //   <div
      //     className={lang === "ar" ? "rtl" : "ltr"}
      //     dir={lang === "ar" ? "rtl" : "ltr"}
      //   >
          // {loading ? <Loader /> : null}
          <Router history={history}>
            {/* <MaterialSnackbar /> */}
            {/* <Navbar /> */}
            {Routes}
            {/* <div className="wizard">
              <header className="wizard-header">
                <h4>Add book - New Book</h4>
              </header>

              <section className="wizard-steper">

              </section>

              <main className="wizard-main">
                { drawGenreButtons }
              </main>

              <footer className="wizard-footer">
                <div className="cta-button">Back</div>
                <div className="cta-button active" onClick={ () => this.handleNextButton() }>Next</div>
              </footer>
            </div> */}
          </Router>
      //   </div>
      // </IntlProvider>
    );
  }
}

export default App;
