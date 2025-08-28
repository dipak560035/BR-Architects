

// export default function DisplaySection() {
//   return (
//     <div className="max-w-full h-[60vw] max-sm-h-[80vw]
//      bg-[url(https://www.w3schools.com/w3images/architect.jpg)] bg-cover bg-no-repeat flex justify-center">


//         <div className="flex items-center gap-3">
//            <h1 className="bg-gray-600 text-white p-3 px-4">BR </h1>
//            <h1 className="text-white">Architects</h1> 
//         </div>
//     </div>
//   )
// }


export default function DisplaySection() {
  return (
    <section className="px-7 my-15">
      <div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[60vw] flex items-center justify-center rounded-lg overflow-hidden shadow-md"
        style={{
          backgroundImage: "url('https://www.w3schools.com/w3images/architect.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-4 p-4  bg-opacity-30">
          <h1 className="bg-gray-600 text-white px-4 py-2 rounded-md text-xl font-bold">
            BR
          </h1>
          <h1 className="text-white text-2xl font-semibold tracking-wide">
            Architects
          </h1>
        </div>
      </div>
    </section>
  );
}


