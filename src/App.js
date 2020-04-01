import React from "react";
import Wrapper from "./client/wrapper";
import "discover.medical.react-component-library/lib/index.dmp.css";

import { MFEManager, MFEContext } from "discover.medical.shared-mfe-lib";

const App = () => (
  <MFEContext.Provider
    value={{ mfeManager: new MFEManager({ testEntry: {} }), store: {} }}
  >
    <Wrapper />
  </MFEContext.Provider>
);

export default App;
