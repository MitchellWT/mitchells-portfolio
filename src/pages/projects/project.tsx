import React from 'react'
import DefaultLayout from '../../layouts/Default'

export default function Project({data}) {
    return (
        <DefaultLayout>
            <div>
                <h2>{data}</h2>
            </div>

            <div>
            </div>
        </DefaultLayout>
    )
}