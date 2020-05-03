
import React from 'react'
import { graphql } from "gatsby"
import '../style/style.css'

const categories = ({ data }) => {
    console.log(data.allMarkdownRemark.nodes)
    return (
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
        </div>
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
