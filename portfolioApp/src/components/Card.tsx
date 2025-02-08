import { motion } from "framer-motion";
interface CardProps {
    title: string;
    description: string;
    index: number;
  }
const Card:React.FC<CardProps> = ({ title, description, index }) => {

    
  return (
    <motion.div
      className="flex flex-col w-80 justify-center p-4 m-4 border shadow-lg rounded-md border-gray-300 bg-gray-100 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
            <h2>
                {title}
            </h2>
            <h3 className="text-gray-400">
                {description}
            </h3>

            <button className=" text-sm text-white p-2 mt-4 flex bg-gray-900 hover:bg-gray-700 w-fit border border-transparent rounded-lg shadow-md transition-all"> En savoir plus</button>
    </motion.div>
  );
};

export default Card;
