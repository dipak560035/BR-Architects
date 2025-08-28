// import { memberData } from "../data/HouseData";
// import Member from "./Member";


// export default function AboutSection() {
//   return (
    
//          <div className="px-7 my-15">
        
//         <div>
//             <h1>About</h1>
//          <hr className="my-4 text-gray-400" />
//         </div>
//          <div className="space-y-10">
//          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga minima, deleniti quae commodi earum magni ipsa explicabo at vel nemo reiciendis incidunt expedita similique cupiditate. Ut mollitia tempore dolor!lorem5
//              ducimus iusto non praesentium perspiciatis deleniti, nam commodi temporibus amet quisquam aliquid voluptates itaque consequatur a porro voluptatem optio nemo? </p>
//         </div>
        
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
//          {memberData.map((member) =>
//          {
//           return <Member key={member.id} member={member}/>
//          }
//         )}
//         </div>
        
        
        
//          </div>
//           )
//         }



import { memberData } from "../data/HouseData";
import Member from "./Member";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-7 my-15">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">About</h1>
        <hr className="my-4 text-gray-400" />
      </div>

      <div className="space-y-10">
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga minima, deleniti quae commodi earum magni ipsa explicabo at vel nemo reiciendis incidunt expedita similique cupiditate. Ut mollitia tempore dolor!
          Ducimus iusto non praesentium perspiciatis deleniti, nam commodi temporibus amet quisquam aliquid voluptates itaque consequatur a porro voluptatem optio nemo?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {memberData.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}