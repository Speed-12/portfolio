import { motion } from "framer-motion";
import DetailsButton from "./DetailsButton";
interface CardProps {
    title: string;
    description: string;
    index: number;
    img?: string;
    link?: string;
    click?: ()=>void;
  }
const Card:React.FC<CardProps> = ({ title, description, index, link, click}) => {

    
  return (
    <motion.div
      className="flex flex-col  h-50 w-80 justify-center p-4 m-4 bg-gray-100 shadow-lg rounded-md hover:scale-105 transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex flex-col gap-3 justify-between h-full">
        <h2 className="text-[#514899] text-xl font-bold">
            {title}
        </h2>
        <h3 className="text-gray-400">
            {description}
        </h3>
        <DetailsButton name="En savoir plus" link={link} onClick={click}/>
        {/* <button onClick={click} className="self-end text-sm text-[#514899] p-3 mt-4 flex hover:bg-[#514899] hover:text-white w-fit border border-[#514899] rounded-lg transition-all">
          En savoir plus
        </button> */}
      </div>
      
    </motion.div>
  );
};

export default Card;
