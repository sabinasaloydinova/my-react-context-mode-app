import '../Home/Home.css';
import React, { useContext, } from 'react';
import right from '../About/img/Right.png'
import search from '../About/img/img.png';
import vector from '../About/img/Vector (3).png';
import { Context } from '../../Content/Context';


function Home() {
    const {mode, setMode} = useContext(Context)
  return (
      <section>
                <div className="home_left">
                    <h1 className="home_title">Pizza family</h1>
                    <p className="home_subtitle">
                        people disappoint <br/> but pizza never does.
                    </p>
                    <div className="home_left_elm">
                        <input type="text"/>
                        <button className={mode ? 'home_search_btn' : 'home__sbtn'}>
                            <img src={search} alt="" />
                            Search Location
                        </button>
                    </div>
                    <button className={ mode ? 'home_btn' : 'hbtn'}>
                        Try now
                    </button>
                </div>
                <div className="home_right">
                    <img src={right} alt="" className="img"/>
                    <button onClick={()=> setMode(!mode)} className="img2">
                    <img src={vector} alt=""   className={mode ? 'image' : 'imag' }/> 
                    </button>
                   
                </div>
            </section>
  )
}

export default Home
