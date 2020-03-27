import React from "react";
import {
  Footer as LibraryFooter,
  Paragraph,
  Logo
} from "discover.medical.react-component-library";

const currentYear = new Date().getFullYear();

const Footer = props => {
  return (
    <LibraryFooter
      cellOne={
        <LibraryFooter.Links
          data={[
            { url: "https://dynamed.com/home", text: "About Dynamed" },
            { url: "http://support.epnet.com", text: "Help" },
            { url: "https://health.ebsco.com", text: "Feedback" },
            {
              url: "http://support.ebscohost.com/ehost/privacy.html",
              text: "Privacy Policy"
            },
            {
              url: "http://support.ebsco.com/dynamed/dynamedterms.html",
              text: "Terms of Use"
            },
            {
              url: "http://support.ebscohost.com/ehost/terms.html#copyright",
              text: "Copyright"
            }
          ]}
        />
      }
      cellTwo={
        <LibraryFooter.Social
          socialPlatforms={[
            { name: "twitter", url: "https://twitter.com/dynamedplus" }, // NOSONAR
            {
              name: "linkedin",
              url: "https://www.linkedin.com/showcase/dynamed-plus" // NOSONAR
            }
          ]}
        />
      }
      cellThree={
        <Logo
          alt="Dynamed"
          src="https://health.ebsco.com/files/img/ebsco-health.png"
          style={{ height: "1rem" }}
        />
      }
      cellFour={
        <Paragraph size="xxs">
          © {currentYear} EBSCO Industries, Inc. All rights reserved.
        </Paragraph>
      }
    />
  );
};
export default Footer;
