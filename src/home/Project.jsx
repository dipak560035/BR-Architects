// import { houseData } from "../data/HouseData";
// import Projectimg from "./Projectimg";


// export default function Project() {
//   return (
//     <div className="px-7 my-15">


//  <h1>Project</h1>
//  <hr className="my-4 text-gray-400" />


// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
// {houseData.map((house) => {
//   return <Projectimg
//   key={house.id}
//   image={house.image}
//   label={house.name} />

// })}


// </div>




//  </div>
//   )
// }


import { houseData } from "../data/HouseData";
import ProjectImage from "./ProjectImage";
import Projectimg from "./ProjectImage";

export default function Project() {
  return (
    <section id="projects" className="scroll-mt-24 px-7 my-15">
      <h1 className="text-2xl font-bold text-gray-900">Project</h1>
      <hr className="my-4 text-gray-400" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {houseData.map((house) => (
          <ProjectImage
            key={house.id}
            image={house.image}
            label={house.name}
          />
        ))}
      </div>
    </section>
  );
}


