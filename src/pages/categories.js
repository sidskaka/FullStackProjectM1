
import React from 'react'
import { graphql } from "gatsby"
import '../style/style.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = ({ data }) => {
    console.log(data.allMarkdownRemark.nodes)
    return (
        <Layout>  
            <SEO title="Home" />      
            <div className="categories__grid">
                {
                    data.allMarkdownRemark.nodes.map(({ frontmatter }, index) => (
                        <div className="product__item" key={index}>
                            <h2>
                                { frontmatter.title }
                            </h2>
                            <div className="product__description">
                                { frontmatter.description }
                            </div>
                        </div>
                    ))
                }

                <h4>
                    <a className="lien-retour" href="/">
                        Retour à l'accueil
                    </a>
                </h4>
                <Button variant="success">Button teste bootstrap</Button>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query categories {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/categories/"}}) {
            nodes {
                frontmatter {
                    description
                    title
                    path
                }
            }
        }
    }
`

export default categories
