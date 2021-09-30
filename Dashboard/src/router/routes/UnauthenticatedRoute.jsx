import React from 'react'
import { Route } from 'react-router'
import Layout from '../../layout'


export default function UnauthenticatedRoute({C,layout, ...rest}) {
    return (
        <Route {...rest}>
            <Layout name={layout}>
                <C />
            </Layout>
        </Route>
    )
}
