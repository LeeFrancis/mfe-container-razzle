import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";

import MenuContainer from "../menu";
import { MicroFrontEnd } from "discover.medical.shared-mfe-lib";
import Footer from "../footer";
import { AppBar, Logo, Flex } from "discover.medical.react-component-library";
import { envConfig } from "../../config/env";

const dhHomeHost = envConfig.get("RAZZLE_MFE_DH_HOME");
const drugDetailHost = envConfig.get("RAZZLE_MFE_DRUG_DETAIL");
const imgPath = envConfig.get("RAZZLE_MFE_IMAGE_PATH");
const dmxHomeHost = envConfig.get("RAZZLE_MFE_DMX_HOME");
const dhSkillsHost = envConfig.get("RAZZLE_MFE_DH_SKILLS");
const searchHost = envConfig.get("RAZZLE_MFE_SEARCH");
const test = process.env.RAZZLE_MFE_SEARCH;

const Wrapper = () => (
  <Flex container column maxWidth={false} flexGrow>
    <Flex cell maxWidth={false} justify={{ content: "center" }}>
      <Flex.Background backgroundType="gradient__theme1_brand1">
        <Flex.Content>
          <AppBar.Container className="App_appBar">
            <Logo src={`${imgPath}/DynaMed.35ee3a66.svg`} alt="EBSCO Health" />
            <div className="App_search" id="toolbar-search"></div>
          </AppBar.Container>
        </Flex.Content>
      </Flex.Background>
    </Flex>
    <Flex cell maxWidth={false} justify={{ content: "center" }}>
      <Flex.Background backgroundType="solid__theme2">
        <Flex.Content>
          <MenuContainer />
        </Flex.Content>
      </Flex.Background>
    </Flex>
    <Flex cell maxWidth={false} justify={{ content: "center" }} flexGrow>
      <Flex.Background backgroundType="solid__white">
        <Flex.Content>
          <div id="mfeTarget" />
          {typeof document !== "undefined" ? routes() : null}
        </Flex.Content>
      </Flex.Background>
    </Flex>
    <Flex cell maxWidth={false} justify={{ content: "center" }}>
      <Flex.Background backgroundType="solid__gray1">
        <Flex.Content>
          <Footer />
        </Flex.Content>
      </Flex.Background>
    </Flex>
  </Flex>
);

const routes = () =>
  PATHNAMES.map(route => (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      component={() => (
        <ErrorBoundary>
          <route.component {...route.props} />
        </ErrorBoundary>
      )}
    />
  ));

/* Abstracted this route out as I wanted to show search hoisted to toolbar - need to add prop to MFE for this.. */
const Results = () => (
  <>
    <MicroFrontEnd
      id="search-results"
      key="search-results"
      target="mfeTarget"
      mfeHost={{
        name: "Search",
        host: searchHost,
        path: envConfig.get("RAZZLE_MFE_SEARCH_PATH")
      }}
    />
    <MicroFrontEnd
      id="search-input"
      key="search-input"
      target="toolbar-search"
      mfeEntryPoint="search"
      mfeHost={{
        name: "Search",
        host: searchHost,
        path: envConfig.get("RAZZLE_MFE_SEARCH_PATH")
      }}
    />
  </>
);

const PATHNAMES = [
  {
    path: ["/dhhome/:tab", "/dhhome"],
    exact: true,
    component: MicroFrontEnd,
    props: {
      id: "dh-home",
      target: "mfeTarget",
      mfeHost: {
        name: "DHHome",
        host: dhHomeHost,
        path: envConfig.get("RAZZLE_MFE_DH_HOME_PATH")
      }
    }
  },
  {
    path: "/detail",
    exact: true,
    component: MicroFrontEnd,
    props: {
      id: "drug-detail",
      target: "mfeTarget",
      mfeHost: {
        name: "DrugDetail",
        host: drugDetailHost,
        path: envConfig.get("RAZZLE_MFE_DRUG_DETAIL_PATH")
      }
    }
  },

  {
    path: "/an:*",
    exact: false,
    component: MicroFrontEnd,
    props: {
      id: "dh-skills",
      target: "mfeTarget",
      mfeHost: {
        name: "DHSkills",
        host: dhSkillsHost,
        path: envConfig.get("RAZZLE_MFE_DH_SKILLS_PATH")
      }
    }
  },
  {
    path: "/results",
    exact: true,
    component: Results
  },
  {
    path: "/",
    exact: true,
    component: MicroFrontEnd,
    props: {
      id: "dmx-home",
      target: "mfeTarget",
      mfeHost: {
        name: "DMXHome",
        host: dmxHomeHost,
        path: envConfig.get("RAZZLE_MFE_DMX_HOME_PATH")
      }
    }
  }
];

export default Wrapper;
