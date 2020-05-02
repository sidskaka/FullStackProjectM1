/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Import pour l'authentification
import { 
  IdentityContextProvider 
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css"

import Header from "./header"
import "./layout.css"
import { useNetlifyIdentity } from "react-netlify-identity"

const Layout = ({ children }) => {
  const identity = useNetlifyIdentity('https://thirsty-mestorf-e0ce8c.netlify.app');

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <IdentityContextProvider value={identity}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
          <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </IdentityContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
