import React, {useState} from 'react'
import Chart from './Chart'
import DatePicker from 'react-date-picker';

function Rapport() {
    const [value, onChange] = useState(new Date());
    return (
        <div> 
            <br />
         <DatePicker
         onChange={onChange}
         value={value}
      />
             <Chart />
        </div>
    )
}

export default Rapport
