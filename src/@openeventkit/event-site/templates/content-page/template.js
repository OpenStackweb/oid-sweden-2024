import * as React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import Grid from "../../../../components/Grid"; 
import SpeakerCard from "../../../../components/SpeakerCard"; 

const shortcodes = { Grid, SpeakerCard };

const ContentPageTemplate = ({ title, content }) => (
  <div className="content container">
    <h1>{title}</h1>
    <MDXProvider components={shortcodes}>
      {content}
    </MDXProvider>
  </div>
);

export default ContentPageTemplate;

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};
