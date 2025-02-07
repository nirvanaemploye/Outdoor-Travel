import { motion } from "motion/react";
import Img1 from "../../assets/5.jpg";
import Img2 from "../../assets/6.jpg";
import { SlideUp } from "../../utility/animation";

const JournalData = [
  {
    id: 1,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
];
const Journal = () => {
  return (
    <>
      <section className="container mt-40" id="journal">
        {/* Header section  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4"
        >
          <p className=" text-3xl">The Journal</p>
          <p>
            Our favorite stories about public lands and opportunities for you to
            go involved in protecting your outdoor experienced.
          </p>
        </motion.div>
        {/* cards section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
          {JournalData.map((data) => (
            <motion.div 
            variants={SlideUp(data.delay)}
            initial="hidden"
            whileInView="visible"
            key={data.id}>
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[350px] object-cover"
                />
              </div>
              {/* card text section */}
              <div className="space-y-1 py-6 text-center px-12">
                <p className="uppercase">{data.date}</p>
                <p className="text-xl font-semibold font-Merriweather">
                  {data.title}
                </p>
                <p className="!mt-8">{data.about}</p>
              </div>
              
            </motion.div>
            
          ))}
        </div>
        <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">
          All Post
        </button>
      </section>
    </>
  );
};

export default Journal;
