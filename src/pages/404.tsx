import React from 'react'
import DefaultLayout from '../layouts/Default'

export default function FileNotFound() {
    return (
        <DefaultLayout title="MT | File not found" description="" keywords="" isPost={false}>
            <div>
                <h2 className='title'>404</h2>
                <h3 className='subtitle'>File not found</h3>
            </div>
        </DefaultLayout>
    )
}