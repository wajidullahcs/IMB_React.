
import React from 'react'
import { useState, useEffect } from 'react'

const Student = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('count changed', count);
  },[count]);


  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick = {() => setCount(count + 1)}> Increase</button>


    </div>
  )
}

export default Student


































// import React, { useState } from 'react';

// const Student = (props) => {
//   const [likes, setLikes] = useState(0);
// function alertmessage(){
//     alert('You have clicked the button');
// }

//   return (
//     <div>
//       <h4>My name is: {props.name}</h4>

//       <p>Course: {props.course}</p>

//       <p>Occupation: {props.occupation}</p>

//       <h4>Likes: {likes}</h4>
//         <button onClick={()=> setLikes(likes + 1)}>Like</button>
//       <button onClick = {() => setLikes(likes -1)} >UnLike</button>
// <br />
//       <button onClick = {alertmessage}>Click here</button>


//     </div>
//   );
// };

// export default Student;