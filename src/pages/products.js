import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const products = ({ data }) => {
    console.log(data.allMarkdownRemark.nodes)

    return (
        <Layout>
            <SEO title="Home" />
            <div className="products__grid">
                {
                    data.allMarkdownRemark.nodes.map(({ frontmatter, id }, index) => (
                        <div className="product__item" key={index}>
                            <img src={ frontmatter.image } alt={frontmatter.title} />
                            <h2>
                                { frontmatter.title }
                            </h2>
                            <h4 className="detail-product">
                                <a className="lien-retour" href={`/productTemplate/detail-product?code=${id}`}>Détail du produit</a>
                            </h4>
                        </div>    
                    ))
                }

                <h4>
                    <a className="lien-retour" href="/">
                        Retour à l'accueil
                    </a>
                </h4>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query products {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
            nodes {
                frontmatter {
                    description
                    title
                    path
                    categorie
                    couleur
                    image
                    price
                    taille
                }
                id
            }
        }
    }
`

export default products
