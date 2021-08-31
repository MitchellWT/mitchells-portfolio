import React from 'react'
import DefaultLayout from '../layouts/Default'
import * as IndexStyle from '../styles/index.module.scss'

export default function Index() {
    return (
        <DefaultLayout>
            <div>
                <h2 className={IndexStyle.name}>MITCHELL TSUTSULIS</h2>
            </div>
        </DefaultLayout>
    )
}