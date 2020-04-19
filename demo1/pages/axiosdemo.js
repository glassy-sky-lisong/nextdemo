import React,{ Component } from 'react';
import axios from 'axios'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/One'))
const Axiosdemo = ({router, username}) => {

    return (
        <>
            <p onClick={getDate}>hellow, world !</p>
            <p>{username}</p>
            <One/>
        </>
    )
}

const getDate = async () => {
    const moment = await import('moment')
    console.log(moment.default(Date.now()).format());
    
}

Axiosdemo.getInitialProps = async () => {
    const promise = new Promise(resolve => {
        axios('https://www.fastmock.site/mock/2b40d453b0b038333441be8a6cb43f0b/list1/getdata')
        .then(res => {
            console.log("fastmock-data",res);
            resolve(res.data.data)
        })
    })
    promise.then(
        res => {
            console.log(res);
            
        }
    )

    return await promise
}

export default Axiosdemo