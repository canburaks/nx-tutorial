/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function Navbar() {
  return (
    <section className="w-full px-8 text-gray-700 bg-white ">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              cbsofyalioglu<span className="text-indigo-600">.</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <a
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              href="/contact"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="/login"
            className="text-teal-600 px-8 py-2 border-teal-600  font-medium leading-6 border-2 rounded-lg transition ease-out duration-300 hover:text-blueGray-100 hover:bg-teal-600"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
