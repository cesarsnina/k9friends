import React from 'react';
import { data } from './seed'
import './styles/Dashboard.css'


const Dashboard = () => {

    return (
     
      <div className='dog-container'>
        {data.map((dog, idx) => (

          <div key={idx} className='dog-block'>
            <a  href="https://en.wikipedia.org/wiki/Main_Page">       
              <img  className="dog-image" src={dog.image}></img>
              {/* <p className='dog-name'>{dog.name}</p> */}
            </a>
            <p className='dog-name'>{dog.name}</p>
          </div>

        ))}
      </div>
    )
}

export default Dashboard;
