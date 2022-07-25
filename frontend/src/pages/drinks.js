import * as React from "react"
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";


export const query = graphql`
    query {
        allStrapiDrink {
            edges {
                node {
                    strapi_id
                    name
                    description
                    cost
                }
            }
        }        
    }
`;

const DrinksList = () => {
    return (
        <Layout>
            <StaticQuery
                query={ query }
                render={( data ) => (
                    <div className="menu-container">
                        <div className="page-header">
                            <h1>Drinks</h1>
                        </div>
                        <div className="menu">
                        {
                            data.allStrapiDrink.edges.map(( item, i ) => (
                                item.node.strapi_id ? (
                                    <div className="drink item menu-item-container" key={i}>
                                        <div className="menu-item-header">
                                            <h2>{item.node.name}</h2>
                                            <p>${item.node.cost}</p> 
                                        </div>
                                        <p>{item.node.description}</p>
                                    </div>
                                ): (<div></div>)
                            ))
                        }
                        </div>
                    </div>
                )}
            />
        </Layout>
    )
    
};

export default DrinksList;