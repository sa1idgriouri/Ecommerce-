import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart } from '../../store/actions/cartAction'
import ShowImage from '../Admin/ShowImage'
import { useTranslation } from "react-i18next";


export const Card = ({prodact} ) => {
    const {t} = useTranslation();
       const dispatch = useDispatch();
    return (
        <div className="container">
               <div className="card">
                  
                      <ShowImage className="images"   itmes={prodact}  url="prodact/photo" />
 
                     
                            <div className="card-body">
                                
                                <h6 className="card-title">{prodact.name.substring(0, 20)}</h6>
                               
                                <div className="text-right">
                               
                                <p className="text-right badge badge-danger">${prodact.price}</p>
                                </div>
                                <p className="badge badge-info">{prodact.name.substring(0, 20)}...</p>
                                <hr />
                                <p className="card-text">
                                    {   prodact.description.substring(0 , 25) }...
                                </p>
                               {prodact.Qauntity > 0 && (
                                    <button onClick={()=>dispatch(addtocart(prodact))}  className="btn btn-success">{t("Add_to_cart")}</button>

                               )}
                               
                                <Link to={`/Show/${prodact._id}`} className="btn btn-info text-right ml-1">{t("view")} </Link>
                            </div>
               </div>


        </div>
    )
}
