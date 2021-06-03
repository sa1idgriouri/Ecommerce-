import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Resoponsive.css'
import Router from './compenent/Router/Router';
import routeReduces from './store/Redusers';
import {createStore}  from 'redux'
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs :["en" , "fr" , "ar"],
    fallbackLng: "en",
    delection:{
      order: ['cookie', 'htmlTag','localStorage', , 'path', 'subdomain'],
      caches: ['cookie'],
    },

    backend :{
      loadPath: '/assets/locales/{{lng}}/Tronslate.json',
    },


  });

 const laodMARt =(
   <>
 <div class="loader">Loading...</div>
</>
 )




 const store = createStore(routeReduces ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
   <Suspense fallback={laodMARt}>
  <React.StrictMode>
    <Provider  store={store} >
    <Router  />
    </Provider>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);


