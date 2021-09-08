import React from 'react'
import DefaultLayout from '../../layouts/Default'

export default function Blog() {
    let title = 'MT | Blog'
    return (
        <DefaultLayout title={title} description=''
                       keywords='' isPost={false} index={false}>
            <div>
                <h2 className='comingSoon title'>COMING SOON</h2>
            </div>
        </DefaultLayout>
    )
}