// import { NavLink } from "react-router";


// export default function Header() {
//   return (
//     <div className="shadow-lg p-5 py-3 flex justify-between
//      items-baseline fixed z-50 top-0 bg-white">
//       <h1>
//         BR <span className="font-normal">Architects</span>
//       </h1>
//         <nav className="space-x-6">
//           <a href="">Product</a>
//           <a href="">About</a>
//           <a href="">Contact</a>
//         </nav>
//     </div>
//   );
// }

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">
//       <div className="flex justify-between items-center">
//         {/* Title on the left */}
//         <h1 className="text-2xl font-bold text-gray-900">
//           BR <span className="font-normal">Architects</span>
//         </h1>

//         {/* Navigation on the right */}
//         <nav className="flex space-x-6 text-gray-700 font-medium">
//           <a href="#">Projects</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }


// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-7 py-5">
//       <div className="flex justify-between items-center">
//         {/* Title on the left */}
//         <h1 className="text-2xl font-bold text-gray-900">
//           BR <span className="font-normal">Architects</span>
//         </h1>

//         {/* Navigation on the right */}
//         <nav className="flex space-x-8 text-gray-700 font-medium">
//           <a href="#">Projects</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-7 py-5">
      <div className="flex justify-between items-center">
        {/* Title on the left */}
        <h1 className="text-2xl font-bold text-gray-900">
          BR <span className="font-normal">Architects</span>
        </h1>

        {/* Navigation on the right */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

