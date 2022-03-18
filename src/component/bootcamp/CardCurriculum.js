import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutlined from "@heroicons/react/outline/StarIcon";
import config from "../../config/config";
import { Link } from 'react-router-dom'
import apiTestimonials from "../../api/apiCurr";


// function CardCurriculum({
//     logo,    
//     name,
//     title,
//     duration,
//     description,
//     rating,
//     harga,
//     link
// }) {
//     var ratings = [];
//     for (var i = 0; i < 5; i++)
//         ratings.push(
//             i < rating ? <StarIcon key={i} /> : <StarIconOutlined key={i} />
//         );


//     return (
//         <div className="border rounded-md max-w-md shadow-md dark:bg-red-500 border-red-500">
//         <div className="px-10 pt-7 pb-7">
//             <div class={'px-8 flex max-w max justify-around'}>
//                   <div >
//                       <img
//                        className="h-24 w-auto" 
//                         src={logo}
//                       />
//                   </div>
//             </div>
//             <br/>
//             <div className="judul">
//                 <p> {name}</p>
//             </div>
//             <p> {title}</p>
//             <p>{duration}</p>
//             <p>{description}</p>
//             <div className="text-yellow-400 flex h-8">
//                 {ratings}
//             </div>
            
//             <div className="text-blue-500">
//                  <p>{harga}</p>
//             </div>
//             <div className="link">
//                 <Link to="/curriculum/:id">{link}</Link>
//             </div>
            
//         </div>
//         </div>
//     );
// }

// export default CardCurriculum;




export default function CardCurriculum(props) {  
    return (
        <div className="border rounded-md max-w-md shadow-md dark:bg-white-500 border-red-500">
        <div className="px-10 pt-7 pb-7">
            <div class={'px-8 flex max-w max justify-around'}>
                  <div >
                      <img
                       className="h-24 w-auto" 
                        src={props.logo}
                      />
                  </div>
            </div>
            <br/>
            <div className="judul">
                <p> {props.name}</p>
            </div>
            <p> {props.title}</p>
            <p> {console.log(props)}</p>
            <p>{props.duration}</p>
            <p>{props.description}</p>
            <div className="text-yellow-400 flex h-8">
                {props.rating}
            </div>
            
            <div className="text-blue-500">
                 {props.harga}
            </div>
            <div className="link">
                <Link to={`/bootcamp/${props.id}`}>{props.link}</Link>
            </div>
            
        </div>
        </div>
    )
}