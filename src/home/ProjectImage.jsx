

// export default function Projectimg({image,name}) {
//   return (
//     <div className="">
//         <div className="relative">
//   <img src={image} alt="" />
//   <h1 className="absolute top-0 text-white text-lg bg-black p-2">
//   {name}</h1>
// </div>
//     </div>
//   )
// }


// export default function Projectimg({ image, name }) {
//   return (
//     <div className="relative overflow-hidden rounded-md shadow-md">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-64 object-cover"
//       />
//       <div className="absolute top-0 left-0 bg-black bg-opacity-80 text-white text-sm px-4 py-2 w-full">
//         <span className="block">{name}</span>
//       </div>
//     </div>
//   );
// }

// export default function ProjectImage({ image, label }) {
//   return (
//     <div className="relative">
//       <img src={image} alt="" />
//       <h1 className="absolute top-0 text-white text-lg bg-black p-2">{label}</h1>
//     </div>
//   )
// }

export default function ProjectImage({ image, label }) {
  return (
    <div className="relative w-full h-60 overflow-hidden rounded-lg shadow-md">
      {/* Image */}
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover"
      />

      {/* Label overlay (top-left corner) */}
      <h1 className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-br-lg">
        {label}
      </h1>
    </div>
  );
}
