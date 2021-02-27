import React, { useState,useEffect} from 'react'
import Card from './Card'
import Search from './Search'
import '../App.css'
import data from '../data/data'
import {Link, Switch} from 'react-router-dom'

function Home() {
    const [stores,setStores] = useState(data);
    
  return (
      <div>
        <div className="header">
          <Search stores={stores} setStores={setStores} />
        </div>
        <Switch>
                <div className="body">
                    
                    {stores?
                    (stores.map((ele,index)=>( 
                        <Link to="/details">
                        <Card imageUrl={ele.img} title={ele.name} author={ele.author} price={ele.price}/>
                        </Link>
                    )))
                    :(<h1>Not found!!! search with other key</h1>)
                    }
                </div>
                
        </Switch>
    </div>
  )
}

export default Home
