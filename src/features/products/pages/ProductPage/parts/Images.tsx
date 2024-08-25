"use client";

import Image from "next/image";
import { useState } from "react";
import { productImageFormatter } from "@/utils/productImageFormatter";

interface IProps {
  images: string[];
  className?: string;
}

export function Images({ images, className }: IProps) {
  // Get first 3 images
  const imagesData = [images[0], images[1], images[2]];
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <div
      className={`flex flex-col items-center gap-6 lg:flex-row lg:gap-10 ${className}`}
    >
      <ul className="order-2 flex min-w-[80px] gap-3 sm:gap-6 lg:order-1 lg:flex-col">
        {imagesData.map((image, i) =>
          image ? (
            <li key={i}>
              <button
                onClick={() => setActiveImage(i)}
                className={`rounded-xl ${activeImage !== i ? "opacity-[0.5]" : ""}`}
              >
                <Image
                  src={productImageFormatter(image) ?? "/no_image.png"}
                  alt={`product image ${i}`}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </button>
            </li>
          ) : null
        )}
      </ul>
      <div className="order-1 lg:order-2 lg:w-[300px] xl:w-[400px]">
        <Image
          src={
            productImageFormatter(imagesData[activeImage]) ?? "/no_image.png"
          }
          alt={`product image ${activeImage}`}
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
