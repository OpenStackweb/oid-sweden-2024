import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { graphql } from "gatsby";
import { Redirect } from "@gatsbyjs/reach-router";
import Seo from "@openeventkit/event-site/src/components/Seo";
import Layout from "@openeventkit/event-site/src/components/Layout";
import Content, { HTMLContent } from "@openeventkit/event-site/src/components/Content";
import { titleFromPathname } from "@openeventkit/event-site/src/utils/urlFormating";


import { USER_REQUIREMENTS } from "@openeventkit/event-site/src/cms/config/collections/contentPagesCollection"

import styles from '../../../styles/content-page.module.scss';

export const ContentPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <h1>{title}</h1>
      <PageContent content={content} className={styles.markdown} />
    </div>
  )
}

ContentPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContentPage = ({ data, isLoggedUser, hasTicket, isAuthorized }) => {
  const { frontmatter: { title, userRequirement }, html } = data.markdownRemark
  // if isAuthorized byoass the AUTHZ check
  if (!isAuthorized && (
    (userRequirement === USER_REQUIREMENTS.loggedIn && !isLoggedUser) || (userRequirement === USER_REQUIREMENTS.hasTicket && !hasTicket)
  )) {
    return <Redirect to='/' noThrow />
  }

  return (
    <Layout>
      <ContentPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={html}
      />
    </Layout>
  )
}

ContentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  isLoggedUser: PropTypes.bool,
  hasTicket: PropTypes.bool
};

const mapStateToProps = ({ loggedUserState, userState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  hasTicket: userState.hasTicket,
  isAuthorized: userState.isAuthorized
});

export default connect(mapStateToProps, null)(ContentPage);

export const contentPageQuery = graphql`
  query ($id: String!) {    
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        
        title
        userRequirement
      }
    }
  }
`;

export const Head = ({
  location
}) => (
  <Seo
    title={titleFromPathname(location.pathname)}
    location={location}
  />
);
