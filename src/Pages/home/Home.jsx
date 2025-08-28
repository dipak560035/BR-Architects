// import Button from "../../Components/Button";




// export default function Home() {
//   return (
//     <div className="p-5 grid grid-cols-[100px_100px_100px]
//      grid-rows-[100px_100px] justify-center
//      max-w-[600px] border-2">
    
    
    
    
//     <div className=" bg-black"></div>
//     <div className=" bg-amber-600"></div>
//     <div className=" bg-blue-400"></div>
//     <div className=" bg-amber-950"></div>
//     <div className=" bg-pink-600"></div>
//     <div className=" bg-pink-950 "></div>


//       </div>
       
    
//   )
// }


// export default function Home() {

//   const handleClick = () => {
//     const age = prompt('What is your age ?');
//     console.log(age);
//   }


//   return (
//     <div className="p-5">


//       <button
//         onClick={handleClick}
//         className="bg-black text-white p-5">Click Me</button>



//     </div>
//   )
// }


// export default function Home() {

//   const handleClick = () => {
//     const age = prompt('What is your age ?');
//     if (Number(age) < 20) {
//       alert('you are junior');
//     }

//   }


//   return (
//     <div className="p-5">


//       <button
//         onClick={handleClick}
//         className="bg-black text-white p-5">Click Me</button>



//     </div>
//   )
// }


// export default function Home() {

//   const handleInput = () => {
//     const number = Number(prompt('Give a Number'));

//     if (isNaN(number)) {
//       alert('Please enter a valid number.');
//       return;
//     }

//     if (number % 2 === 0) {
//       alert(`${number} is Even.`);
//     } else {
//       alert(`${number} is Odd.`);
//     }

//     console.log(`User entered: ${number}`);
//   }

//   return (
//     <div className="p-5">
//       <button
//         onClick={handleInput}
//         className="bg-black text-white p-5">
//         Click Me
//       </button>
//     </div>
//   );
// }


// import Box1 from '../../Components/Box1'

// export default function Home() {
//   return (
    
//        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-w-[500px] border-2">
//       <div className='bg-red-500'>
//         <h1>BOX1</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat animi sed ipsum, obcaecati aperiam earum praesentium deleniti qui inventore beatae dolores amet debitis non blanditiis cumque ea voluptatibus recusandae.</p>
//       </div>
//         <div className='bg-purple-500 max-sm:hidden'>
//         <h1>BOX2</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae distinctio, repudiandae ea veniam facilis tenetur. Id, ratione dolorem facere provident architecto vel, fugiat omnis sed neque adipisci voluptate impedit.</p>
//       </div>
      
//        </div>
    
//   )
// }


// import React from 'react'
import Button from "../../Components/Button";
export default function Home() {
  const greet = (n) => {
    alert(n + n);
  }
  return (
    <div className="p-5">

    <button
    onClick={()=>greet(9)}
    className="bg-black text-white p-5" >
      click To
    </button>

    </div>
  )
}









