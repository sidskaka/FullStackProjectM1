import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const listeBlog = ({ data }) => {
    console.log(data)

    return (
        <Layout>
            <SEO title="Home" />
            <div>
                { 
                    data.allMarkdownRemark.edges.map(({ node }, index) => (
                        <div className="product__item" key={index}>
                            <h1>
                                <a href={`/blogTemplate/post?code=${node.id}`}>
                                    { node.frontmatter.title }
                                </a>
                            </h1>
                            <h3>
                                { node.frontmatter.resume }
                            </h3>
                        </div>    
                    ))
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query blogs {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogs/"}}) {
            edges {
                node {
                    frontmatter {
                        image
                        resume
                        textcomplet
                        title
                    }
                    id
                }
            }
        }
    }
`

export default listeBlog
