import React from "react";
import { render } from "react-dom";
import FormWizard, { Step } from "./FormWizard";

const App = () => (
  <div>
    <FormWizard>
      <Step title="Step One">
          <input name="name" />
      </Step>
      <Step title="Step Two">
        <input name="age" />
        <input name="occupation" />
      </Step>
      <Step title="Step Three">
        <button type="submit">Submit</button>
      </Step>
    </FormWizard>
  </div>
);

render(<App />, document.getElementById("root"));
