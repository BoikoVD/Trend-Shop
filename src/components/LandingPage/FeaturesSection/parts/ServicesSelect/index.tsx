"use client";
import { useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { RiMoonClearFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import ServiceItem from "./parts/ServiceItem";
import ServicesImages from "./parts/ServiceImages";

const items = [
  {
    id: 1,
    title: "Simple shoping ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad ipsa cum.",
    image: "/images/service_1.svg",
    Icon: FaBoltLightning
  },
  {
    id: 2,
    title: "Simple shoping ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad ipsa cum.",
    image: "/images/service_2.svg",
    Icon: FaCar
  },
  {
    id: 3,
    title: "Simple shoping ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad ipsa cum.",
    image: "/images/service_3.svg",
    Icon: RiMoonClearFill
  }
];

export default function ServicesSelect() {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  return (
    <div className="pb-10 md:grid md:grid-cols-12 md:gap-6 md:pb-0">
      <div className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6">
        <div className="mb-8 text-center md:pr-4 md:text-left lg:pr-12 xl:pr-16">
          <h3 className="h3 mb-3">Powerful suite of tools</h3>
          <p className="text-xl text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
            ipsa cum? Odio excepturi at odit enim laborum, amet eligendi
            consequatur facere pariatur atque facilis.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => (
            <li key={index}>
              <ServiceItem
                itemData={item}
                activeIndex={selectedItem}
                setActiveIndex={setSelectedItem}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-xl md:col-span-5 md:max-w-none lg:col-span-6">
        <ServicesImages itemsData={items} activeIndex={selectedItem} />
      </div>
    </div>
  );
}
