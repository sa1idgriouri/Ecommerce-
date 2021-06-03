import { API_URL } from '../../config/config'
import React from 'react'
import './Dahbord.css'

function ShowImage(props) {
    const {url , itmes} = props
    return (
        <>
            <img className="img-fluid"  src={`${API_URL}/${url}/${itmes._id}` }   alt={itmes.nme}/>

        </>
    )
}

export default ShowImage

