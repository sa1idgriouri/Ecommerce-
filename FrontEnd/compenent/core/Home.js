import React  ,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getProdcat } from './ApiCore';
import { Card } from './Card';
import Search from './Search';
import Slide from './Slide';
import { useTranslation } from "react-i18next";
 

function Home() {
     const {t} =useTranslation();
     const [nouveul , setNouvel] = useState([]);
     const [bestproduit , setBestproduit] = useState([]);
   

     const getNewProdcat =()=>{
           getProdcat({SortBy : 'updatedAt'   , order :'desc'  , limit : 3})
           .then(prodact =>setNouvel(prodact))
           .catch(err =>console.error(err))
     }

     const getbestProdcat =()=>{
        getProdcat({SortBy:'sold' , order : 'DESC' , limit :6  })
        .then(prodact =>setBestproduit(prodact))
        .catch(err =>console.error(err))
  }

     useEffect(() =>
        getNewProdcat()
       , [])

     useEffect(() =>getbestProdcat() , [])

    return (
        <>
         <Slide  />
        <div className="container">
        

               <div className="row">
                 <div className="col-md-6 mt-5">
                 <div className="bg-image hover-overlay ripple">
                    <img src="/assets/middle-banner-2-580x234.jpg" className="img-fluid" />
                    <Link to="/shop">
                      <div className="mask" ></div>
                    </Link>
                  </div>
                   
                 </div>

                 <div className="col-md-6 mt-5">
                 <div className="bg-image hover-overlay ripple">
                    <img src="/assets/middle-banner-2-580x234.jpg" className="img-fluid" />
                    <Link to="/shop">
                      <div className="mask" ></div>
                    </Link>
                  </div>
                 </div>
               </div>
            
  <div className="container">
    <div className="row mt-4 ml-2 " >
    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
    <div className="service">
                  <span className="icon"><i className="bx bx-purchase-tag" /></span>
                  <h4>{t("Livraison_gratuite")}</h4>
                  <span className="text">
                      {t("Free")}
                  </span>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
    <div className="service">
                  <span className="icon"><i className="bx bx-gift" /></span>
                  <h4>{t("Paiements_de_sécurité")}</h4>
                  <span className="text">  {t("security")}</span>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
    <div className="service">
                  <span className="icon"><i className="bx bx-book-reader" /></span>
                  <h4>{t("Retours_sous_14_jours")}</h4>
                  <span className="text">  {t("Returns")}</span>
     </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
    <div className="service">
                  <span className="icon"><i className="bx bx-headphone" /></span>
                  <h4>{t("Assistance_24/7")}</h4>
                  <span className="text">  {t("assister")}</span>
     </div>
    </div>
    </div>
  </div>

              
              <hr />
              <Search />
              <br />
              <h1 className="text-center mb-5">{t("Produit_d'arrivée")}</h1>
               <div className="row">
                    {nouveul && nouveul.map((prodact , i) =>
                  
                     <div key={prodact._id} className="col-lg-4 col-md-6">
                             <Card prodact={prodact}  > </Card>
                     </div>
                 
                   )}

               </div>
                  <hr />
               <section className="section">
                    <div className="title">
                     
                    </div>
                    <div className="cat container">
                      <div className="item item-1">
                        <img src="/assets/cat5.jpg" alt="" />
                      </div>
                      <div className="item item-2">
                        <img src="/assets/cat3.jpg" alt="" />
                      </div>
                      <div className="item item-3">
                        <img src="/assets/cat1.jpg" alt="" />
                      </div>
                      <div className="item item-4">
                        <img src="/assets/cat2.jpg" alt="" />
                      </div>
                    </div>
                </section>

               <hr />
               <h1 className="text-center mb-5">{t("Best_seller")}</h1>
               <div className="row">
                   { bestproduit&& bestproduit.map((prodact , i) =>
                  
                     <div key={prodact._id} className=" col-lg-4 col-md-6 mb-3">
                             <Card prodact={prodact}   /> 
                     </div>
                 
                   )}

               </div>
            



             
        

        </div>
       
        </>
    )
}

export default Home
