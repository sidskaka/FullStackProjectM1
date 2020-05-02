import React from 'react'
import { graphql } from "gatsby"

const products = ({ data }) => {
    console.log(data.allMarkdownRemark.nodes)

    return (
        <div className="products__grid">
            {
                data.allMarkdownRemark.nodes.map(({ frontmatter }, index) => (
                    <div className="product__item" key={index}>
                        <img src={ frontmatter.image } alt={frontmatter.title} />
                        <h2>
                            { frontmatter.title }
                        </h2>
                        <p className="product__price">
                            { frontmatter.price }
                        </p>
                        <div className="product__description">
                            { frontmatter.description }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
            nodes {
                frontmatter {
                    description
                    title
                    path
                    image
                    taille
                    couleur
                    categorie
                }
            }
        }
    }
`

export default products
