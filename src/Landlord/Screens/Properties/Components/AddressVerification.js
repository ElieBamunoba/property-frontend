import React from "react";

function AddressVerification({ handleChange, values, prevStep, nextStep }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="">
      <section className="py-8 md:py-8 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Almost there!
              </h3>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Property Type
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Patryk"
                  defaultValue={values.type}
                  onChange={handleChange.bind("type")}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Portfolio
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Lemuria"
                  defaultValue={values.portfolio}
                  onChange={handleChange.bind("portfolio")}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Number of Units
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  type="number"
                  placeholder="Unit 1, Apartment"
                  defaultValue={values.numberUnits}
                  onChange={handleChange.bind("numberUnits")}
                />
              </div>
              <div className="mb-8">
                <label
                  className="block mb-2 text-coolGray-800 font-medium leading-6"
                  htmlFor=""
                >
                  Upload Property Image
                </label>
                <div className="flex p-6 items-center justify-center border-dashed border-2 h-52 border-coolGray-200 rounded-lg text-coolGray-300">
                  <div className="max-w-max text-center">
                    <a
                      className="inline-block mb-4 text-indigo-500 hover:text-green-600"
                      href="#"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6127 10.28L14.666 7.21336V20C14.666 20.3536 14.8065 20.6928 15.0565 20.9428C15.3066 21.1929 15.6457 21.3334 15.9993 21.3334C16.353 21.3334 16.6921 21.1929 16.9422 20.9428C17.1922 20.6928 17.3327 20.3536 17.3327 20V7.21336L20.386 10.28C20.51 10.405 20.6574 10.5042 20.8199 10.5719C20.9824 10.6396 21.1567 10.6744 21.3327 10.6744C21.5087 10.6744 21.683 10.6396 21.8455 10.5719C22.0079 10.5042 22.1554 10.405 22.2793 10.28C22.4043 10.1561 22.5035 10.0086 22.5712 9.84613C22.6389 9.68365 22.6737 9.50937 22.6737 9.33336C22.6737 9.15734 22.6389 8.98307 22.5712 8.82059C22.5035 8.65811 22.4043 8.51064 22.2793 8.38669L16.946 3.05336C16.8192 2.93197 16.6697 2.83682 16.506 2.77336C16.1814 2.64 15.8173 2.64 15.4927 2.77336C15.329 2.83682 15.1795 2.93197 15.0527 3.05336L9.71935 8.38669C9.59503 8.51101 9.49642 8.6586 9.42914 8.82103C9.36186 8.98346 9.32723 9.15755 9.32723 9.33336C9.32723 9.50917 9.36186 9.68326 9.42914 9.84569C9.49642 10.0081 9.59503 10.1557 9.71935 10.28C9.84367 10.4043 9.99125 10.503 10.1537 10.5702C10.3161 10.6375 10.4902 10.6721 10.666 10.6721C10.8418 10.6721 11.0159 10.6375 11.1783 10.5702C11.3408 10.503 11.4884 10.4043 11.6127 10.28ZM27.9993 16C27.6457 16 27.3066 16.1405 27.0565 16.3905C26.8065 16.6406 26.666 16.9797 26.666 17.3334V25.3334C26.666 25.687 26.5255 26.0261 26.2755 26.2762C26.0254 26.5262 25.6863 26.6667 25.3327 26.6667H6.66602C6.31239 26.6667 5.97326 26.5262 5.72321 26.2762C5.47316 26.0261 5.33268 25.687 5.33268 25.3334V17.3334C5.33268 16.9797 5.19221 16.6406 4.94216 16.3905C4.69211 16.1405 4.35297 16 3.99935 16C3.64573 16 3.30659 16.1405 3.05654 16.3905C2.80649 16.6406 2.66602 16.9797 2.66602 17.3334V25.3334C2.66602 26.3942 3.08744 27.4116 3.83759 28.1618C4.58773 28.9119 5.60515 29.3334 6.66602 29.3334H25.3327C26.3935 29.3334 27.411 28.9119 28.1611 28.1618C28.9113 27.4116 29.3327 26.3942 29.3327 25.3334V17.3334C29.3327 16.9797 29.1922 16.6406 28.9422 16.3905C28.6921 16.1405 28.353 16 27.9993 16Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <p className="mb-2">
                      <span className="text-coolGray-500">
                        Drag and drop an image, or
                      </span>
                      <a
                        className="text-indigo-500 hover:text-green-600"
                        href="#"
                      >
                        Browse
                      </a>
                    </p>
                    <span className="text-sm text-coolGray-300 font-medium">
                      High resolution images (png, jpg, gif)
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-indigo-500 hover:bg-indigo-600 rounded-md shadow-sm"
                onClick={Back}
              >
                Back
              </button>

              <button
                className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-indigo-500 hover:bg-indigo-600 rounded-md shadow-sm"
                onClick={Continue}
              >
                Complete
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddressVerification;
