import { ChangeEvent, FormEvent, useState } from "react";
interface T_FormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<T_FormData>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    let tempFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(tempFormData);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "------Get In Touch Form Data------" +
        "\nName :- " +
        formData?.name +
        "\nEmail :- " +
        formData?.email +
        "\nSubject :- " +
        formData?.subject +
        "\nMessage :- " +
        formData?.message
    );
  };
  // console.log();
  return (
    <form
      onSubmit={handleSubmit}
      className="  rounded-lg space-y-5 mx-0 my-auto   md:w-96 "
    >
      <div className="mb-4">
        <input
          className="w-full px-3  py-2  text-white bg-transparent border-b-2 border-white outline-none placeholder-white"
          type="text"
          name="name"
          onChange={handleChange}
          id="full-name"
          placeholder="Full name"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-white bg-transparent border-b-2 border-white outline-none placeholder-white"
          type="email"
          name="email"
          onChange={handleChange}
          id="email"
          placeholder="E-mail"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-white bg-transparent border-b-2 border-white outline-none placeholder-white"
          type="text"
          name="subject"
          onChange={handleChange}
          id="subject"
          placeholder="Subject"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-white bg-transparent border-b-2 border-white outline-none placeholder-white"
          id="message"
          type="text"
          name="message"
          onChange={handleChange}
          placeholder="Message"
        />
      </div>
      <div className="flex justify-center md:justify-normal">
        <button
          type="submit"
          className="  px-8 py-1  text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition duration-200 ease-in-out"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
