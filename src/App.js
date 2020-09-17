import React from "react";
import ProductInformation from "./views/ProductInformation";
import Feedback from "./views/Feedback";
import Form from "./views/PasswordForm";
import Stepper from "./components/Stepper";
import { default as PaperMui } from "@material-ui/core/Paper";

import "./App.scss";

export function App() {
  return (
    <div className="App">
      <PaperMui className="App__paper">
        <Stepper title="Crea tu Password Manager">
          <ProductInformation />
          <Form />
          <Feedback />
        </Stepper>
      </PaperMui>
    </div>
  );
}

export default App;
