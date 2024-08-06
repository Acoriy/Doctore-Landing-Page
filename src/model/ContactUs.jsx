import  Button  from "../layout/Button";


// eslint-disable-next-line react/prop-types
const ContactUs = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black ">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-backgroundColor text-center text-4xl font-semibold">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              className="border-none py-3 px-2  rounded-lg  bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              className="border-none py-3 px-2  rounded-lg  bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              className="border-none py-3 px-2  rounded-lg  bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone Number"
              className="border-none py-3 px-2  rounded-lg  bg-[#d5f2ec]"
            />
          </div>

          <div className="flex gap-5 text-white">
            <Button title="Book Appointment" />
            <button
              className="bg-backgroundColor border-none px-10  rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
