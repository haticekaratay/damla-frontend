import React from 'react'
import { Container } from "react-bootstrap"
import notFound from "../notFound.png"
import { Image } from "react-bootstrap"

const NotFound = () => {
    
        return(
            <Container>
               <h1>Ooopps!</h1>
               <Image style={{width: '100%', height: '100%'}} src={notFound} />
            </Container>
        )
}

export default NotFound