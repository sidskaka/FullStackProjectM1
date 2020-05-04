import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ProductStripeCheckout extends Component {
    componentDidMount() {
        this.stripe = window.Stripe('pk_test_KwCvsMRqmT5yJmzsICxgSsdP0089Uf4fPQ')
    }

    handleSubmit(sku) {
        return event => {
            event.preventDefault();

            this.stripe.redirectToCheckout({
                items: [{sku, quantity: 1}],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'http://localhost:8000/stripe/success',
                cancelUrl: 'http://localhost:8000/stripe/canceled',
            })
            .then(function (result) {
                if (result.error) {
                    console.log(result.error.message);
                }
            });
        }
    }

    render() {
        const { id, currency, price, name } = this.props;
        const priceFloat = (price/100).toFixed(2)
        const formattedPrice = Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(priceFloat);

        return (
            
                <form onSubmit={ this.handleSubmit(id) }>
                    <h2> { name } ({ formattedPrice }) </h2>
                    <button type="submit">Acheter maintenent</button>
                </form>
            
        )
    }
}

export default () => (
    <StaticQuery 
        query = {
            graphql`
                { 
                    allStripeSku {
                        edges {
                            node {
                                id
                                currency
                                price
                                attributes {
                                    name
                                }
                                image
                            }
                        }
                    }
                }
            `
        }
        render = { data => (
            <Layout>
                <SEO title="Home" />
                <div>
                    {   
                        data.allStripeSku.edges.map(({ node: sku }) => (
                            <div>
                                <ProductStripeCheckout 
                                    id = { sku.id }
                                    currency = { sku.currency }
                                    price = { sku.price }
                                    name = { sku.attributes.name }
                                />
                                <img src={ sku.image } alt={sku.name} />
                            </div>
                        ))
                    }
                </div>  
            </Layout>
        ) }
    />
)
