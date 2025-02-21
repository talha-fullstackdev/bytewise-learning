import React, { useRef } from "react";
const Form = () => {
const nameRef = useRef()
const emailRef = useRef()
const subjectRef = useRef()
const messageRef = useRef()
  const handleSubmit = ()=>{
    let userData  = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      subject:subjectRef.current.value,
      message:messageRef.current.value
    }
    nameRef.current.value="" // clearing the input values after form submission
    emailRef.current.value=""
    subjectRef.current.value=""
    messageRef.current.value=""
    alert("form has been submited")
    console.log("user data",userData)
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] mx-auto md:mx-0 md:max-w-[700px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
          ref={nameRef}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
          />
          <input
          ref={emailRef}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
          />
        </div>
        <input
        ref={subjectRef}
          type="text"
          placeholder="Subject"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
        />
        <textarea
        ref={messageRef}
          rows="5"
          placeholder="Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
        ></textarea>
        <button onClick={handleSubmit} className="w-[200px] self-center bg-[#078791] text-white py-3 rounded-lg font-semibold hover:bg-[#056b6f] transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Form;
