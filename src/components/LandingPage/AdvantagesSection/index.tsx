import { RiAccountPinBoxFill } from "react-icons/ri";
import { RiArmchairFill } from "react-icons/ri";
import { RiAlarmFill } from "react-icons/ri";
import { RiBankFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import { RiBriefcase4Fill } from "react-icons/ri";
import AdvantageItem from "./parts/AdvantageItem";

const itemsData = [
  {
    Icon: RiAccountPinBoxFill,
    title: "Initial Contact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    Icon: RiArmchairFill,
    title: "Discovery Session",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    Icon: RiAlarmFill,
    title: "Contracting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    Icon: RiBankFill,
    title: "Fast Prototyping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    Icon: RiAwardFill,
    title: "Design Phase",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    Icon: RiBriefcase4Fill,
    title: "Develop & Listing for sale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

export default function AdvantagesSection() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute inset-0 top-1/2 bg-light-200 dark:bg-gray-400 md:mt-24 lg:mt-0"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 m-auto h-20 w-px translate-y-1/2 transform bg-gray-200 p-px" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 mb-4">How Simple works</h2>
            <p className="text-xl text-gray-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum
              perferendis dolorum, reprehenderit omnis minima quasi corporis
              assumenda unde eligendi, nulla accusantium inventore.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {itemsData.map((item, index) => (
              <AdvantageItem itemData={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
