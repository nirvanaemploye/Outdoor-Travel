import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import { motion } from "motion/react";
import { SlideUp } from "../../utility/animation";

const ExploreData = [
  {
    id: 1,
    title: "Nearoyfjordan",
    place: "Norway",
    url: "#",
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Antelop Canyon",
    place: "United States",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Lakes",
    place: "Austria",
    url: "#",
    image: Img3,
    delay: 0.6,
  },
];
const Explore = () => {
  return (
    <>
      <section className="container" id="explore">
        {/* Header section  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4"
        >
          <p className=" text-3xl">Explore the World</p>
          <p>
            We look to provide the most authentic contentt from athletes,
            adventuren, explorers travellers autound the world. Our long them
            mission is to educate inspire and enuble all peoples to experience &
            protect wildeness.
          </p>
        </motion.div>
        {/* Cards Section  */}
        <div className=" mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          {ExploreData.map((data) => (
            <motion.div
              variants={SlideUp(data.delay)}
              initial="hidden"
              whileInView="visible"
              key={data.id}
              className="relative"
            >
              <img
                src={data.image}
                alt=""
                className="w-[380px] h-[550px] object-cover"
              />
              <div className="absolute w-full bottom-0 inset-0 bg-brandDark/15">
                <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center">
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
                  <p className="uppercase">{data.place}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Button section  */}
        <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">
          see more
        </button>
      </section>
    </>
  );
};

export default Explore;
