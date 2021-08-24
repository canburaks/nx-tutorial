/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */


export default function Contact(props) {
  return (
    <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
      <div className="grid justify-center items-center order-1 col-span-1">
        <img
          className="lg:h-80 md:h-64 h-40 rounded-full"
          src="https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/cbs/cbsofyalioglu-black.png"
          alt=""
        />
      </div>
      <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
        <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
          Hi, I am Can Burak Sofyalioglu.
        </h1>
        <p className="text-xl text-gray-800 text-center md:text-left">
          I'm an engineer.
        </p>
      </div>
    </div>
  );
}
