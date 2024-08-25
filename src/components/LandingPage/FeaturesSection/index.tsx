import ServicesSelect from "./parts/ServicesSelect";

export default function FeaturesSection() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-light-300 dark:bg-gray-400 md:mb-16"></div>
      <div className="absolute -top-11 left-0 right-0 m-auto h-20 w-px bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 className="h2 mb-4">Explore the solutions</h2>
          <p className="text-xl text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
            ipsa cum? Odio excepturi at odit enim laborum, amet eligendi
            consequatur facere pariatur atque facilis.
          </p>
        </div>
        <ServicesSelect />
      </div>
    </section>
  );
}
