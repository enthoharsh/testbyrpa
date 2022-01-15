import React,{useState,useEffect} from 'react'
import axios from "axios";
import Cast from './Cast'

const Moviebox = (props) => {
    const [data, setData] = useState({});
    const [link, setLink] = useState('');
    const [cast, setCast] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666',
        headers: {
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
          'x-rapidapi-key': 'cedcbfa053msh1d4a38f3fdfe77cp1db3e3jsn2e5ce0ea95e7'
        }
      };
      
      


        useEffect(() => {
            
            async function data() {
                const res = await axios.request(options).then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                    setLink(response.data.trailer.link);
                    setCast(response.data.cast);
                }).catch(function (error) {
                    console.error(error);
                });
            }               
            data();
        }, [])


    return (
        <>
               <div className='openBox' style={{display:`${props.modal}`}}>
              <span className='closebtn' onClick={()=> props.setModal('none')}>X</span>
              <div className='poster'><img src={data.poster} alt="logo" /></div>
              <div className='detail'>
              <h1>{data.title}({data.year})</h1>
              <h3>Rating : {data.rating}⭐</h3>
              <p>length : {data.length}</p>
              <p>plot : {data.plot}</p>
              <a href={link} target='_blank'>Watch Trailer!!</a>
              <h2>Cast detail</h2>
              <div className='castDet'>
               {
                   cast.map((elem)=>{
                       return(
                           <Cast actor={elem.actor} character={elem.character} />
                       )
                   })
               }
              </div>
              </div>
           
            </div>
        </>
    )
}

export default Moviebox;
