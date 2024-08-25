import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { routes } from "@/constants/routes";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-[50%] top-[5%] -z-10 hidden translate-x-[-55%] xl:block">
        <svg
          width="1200"
          height="490"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#A685FA" offset="0%" />
              <stop stopColor="#8254F8" offset="77.402%" />
              <stop stopColor="#703BF7" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="mx-auto px-4 pb-12 pt-16 sm:px-6 md:pb-20 md:pt-40">
        <div className="pb-12 text-center md:pb-16">
          <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl">
            Make your Outfit{" "}
            <span className="bg-gradient-to-r from-purple-400 to-light-300 bg-clip-text text-transparent dark:to-gray-400">
              wonderful
            </span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl text-gray-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              soluta iusto expedita veniam asperiores, cumque id, tempora
              numquam voluptatibus.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div>
                <LinkButton
                  className="btn mb-4 w-full bg-purple-400 text-white hover:bg-purple-300 sm:mb-0 sm:w-auto"
                  to={routes.PRODUCTS}
                  size="medium"
                  color="primary"
                >
                  Start Shopping
                </LinkButton>
              </div>
              <div>
                <LinkButton
                  className="btn w-full bg-gray-300 text-white hover:bg-gray-200 sm:ml-4 sm:w-auto"
                  to={routes.PRODUCTS}
                  size="medium"
                  color="gray"
                >
                  Learn more
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
