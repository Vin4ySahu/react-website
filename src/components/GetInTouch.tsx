import ContactForm from "./ContactForm ";

const GetInTouch = () => {
  return (
    <div className="bg-[#006ABC] w-[90%] md:w-[70%] h-auto md:h-[400px] flex justify-center rounded-lg  ">
      <div className="flex flex-col md:flex-row w-full justify-center my-10 md:my-0 md:justify-around items-center text-white">
        <div className="space-y-5 mb-5 md:mb-0">
          <div className="text-4xl font-medium flex justify-center md:block">
            Get in touch
          </div>
          <div className="flex justify-center font-semibold md:block">
            For general enquiries
          </div>
          <div className="flex justify-center md:block">
            Address :<div>110, 16th Road, Chembur</div>
          </div>
          <div className="flex justify-center md:block">
            Phone :<div>+91 22 25208822</div>
          </div>
          <div className="flex justify-center md:block">
            Email :<div>info@supremegroup.co.in</div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default GetInTouch;
