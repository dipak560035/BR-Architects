

// export default function Button({label,color}) {
//   return (
//     <div>
//         <button className={`${color} text-white p-2 
//         rounded-1g px-4`}>{label}</button>
//     </div>
//   )
// }

export default function Button({label,color}) {
  return (
    <div className="p-5">
        <button className={`${color} text-white p-2 
        rounded-1g px-4`}>{label}</button>
    </div>
  )
}



