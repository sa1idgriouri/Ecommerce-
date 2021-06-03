import React , {useState , useEffect} from 'react'
import { Bar  ,Pie} from 'react-chartjs-2';
import { listOrder } from './ApiAdmin'
import { isAuthenticated } from '../Router/helpers';
import moment from 'moment'


function Chart() {
    const userId = isAuthenticated().user._id
    const token = isAuthenticated().token
    const [orders , setOrders] = useState([])
 



 const listOrde =(userId , token)=>{
     listOrder(userId , token)
     .then(res =>{ setOrders(res)
      
        
     })
     .catch(err =>console.log(err))
 }

 const monye= []
 const dateM =[]
 orders.map (order =>{ 
  orders.filter((items) =>{
      if(items.createdAt===order.createdAt)
      {
          let sum  = orders.reduce((total , prodact) =>total+prodact.amount ,0)   
          monye.push(sum)
      }
       else{
        monye.push(order.amount)
       }
  })
  

    
 }
 
  )


 orders.map (order =>
  
    dateM.push(moment(order.createdAt).format('') )
   
  )


  console.log(dateM)



   


 useEffect   (()=>{
    listOrde(userId, token)
 } ,[])

  
      const data = {
        labels: ["January" , "February" , "March" , "April " , "May" , "June" , "July" , "August" , "September" , "October" , "November" ],
        datasets: [{
          label: 'My First Dataset',
          data: monye,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

      const data2 = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19,3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
          
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
           
            ],
          
          },
        ],
      };


    return (
        <div className="Chart">
           <div>
         <Bar data={data}  />
         </div>

         <div className="Pie">
            <div className="pie1">
            <Pie data={data2} />
            </div>
           
         
         </div>

         <div className="pie1">
             <Bar data={data}   />
             </div>


         <div>
         
         </div>

            
        </div>
    )
}

export default Chart
