// export default function Contact() {
//   return (
//     <section className="px-6 py-12 bg-white">
//       <h1 className="">Contact</h1>
//       <hr className="my-4 text-gray-400" />
//       <p className="text-black font-medium mb-8">
//         Let's get in touch and talk about your next project.
//       </p>

//       <form className="grid grid-cols-1 gap-6 w-full">
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
//         />
//         <input
//           type="text"
//           placeholder="Subject"
//           className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
//         />
//         <textarea
//           rows="5"
//           placeholder="Message"
//           className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
//         ></textarea>
//         <button
//   type="submit"
//   className="bg-black text-white text-sm font-medium w-24 py-1 rounded hover:bg-gray-800 transition duration-200"
// >
//   Send
// </button>
//       </form>
//     </section>
//   )
// }



export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-12 bg-white">
      <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
      <hr className="my-4 text-gray-400" />
      <p className="text-black font-medium mb-8">
        Let's get in touch and talk about your next project.
      </p>

      <form className="grid grid-cols-1 gap-6 w-full">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white text-sm font-medium w-24 py-1 rounded hover:bg-gray-800 transition duration-200"
        >
          Send
        </button>
      </form>
    </section>
  );
}