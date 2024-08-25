import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface IProps {
  itemsData: {
    id: number;
    image: string;
  }[];
  activeIndex: number;
}

export default function ServicesImages({ itemsData, activeIndex }: IProps) {
  return (
    <AnimatePresence mode="wait">
      {itemsData.map((item, index) => {
        return (
          activeIndex === item.id && (
            <motion.div
              key={`service_image_item_${item.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-full w-full"
            >
              <Image
                src={item.image}
                alt={`service item ${item.id}`}
                width={500}
                height={500}
                className="h-full w-full"
              />
            </motion.div>
          )
        );
      })}
    </AnimatePresence>
  );
}
