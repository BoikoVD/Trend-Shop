import { IoTriangleOutline } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";

export default function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="">
          <div className="relative overflow-hidden rounded bg-gray-400 px-8 py-10 shadow-2xl md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute bottom-0 right-0 hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#c6afff" offset="0%" />
                    <stop stopColor="#5c1bff" offset="44.317%" />
                    <stop stopColor="#4b03ff" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#b99dff">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>
            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              <div className="text-center lg:max-w-xl lg:text-left">
                <h3 className="h3 mb-2 text-white">Powering your business</h3>
                <p className="mb-6 text-lg text-gray-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
                  expedita voluptas culpa sapiente.
                </p>
                <div className="flex justify-center text-purple-400 lg:justify-start">
                  <IoTriangleOutline size={36} />
                  <MdOutlineCircle size={36} />
                  <RiCloseLargeLine size={36} />
                  <IoSquareOutline size={36} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
