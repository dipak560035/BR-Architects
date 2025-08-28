

// export default function Member() {
//   return (
//     <div>
//         <div>
//             <img src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
//         </div>
//         <div className="space-y-3">
//             <h1>John Doe</h1>
//             <p className="text-gray-500">CEO & FOUNDER</p>
           
//             <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum</p>
        
//             <button className="text-center bg-gray-400">Contact</button>
//         </div>
//     </div>
//   )
// }



export default function Member({member}) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <img
        src={member.image}
        alt=""
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3 text-center">
        <h1 className="text-xl font-semibold">{member.name}</h1>
        <p className="text-gray-500 text-sm tracking-wide">{member.position}</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Phasellus eget enim eu lectus faucibus vestibulum. 
          Suspendisse sodales pellentesque elementum.
        </p>

        {/* Contact Button */}
        <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition">
          Contact
        </button>
      </div>
    </div>
  );
}



