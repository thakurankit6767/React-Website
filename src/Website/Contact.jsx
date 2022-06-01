import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
e.preventDefault()
alert(`My Name is ${data.fullname}. My Mobile number is ${data.phone} . My Email is ${data.email}. What I ant to say ${data.msg}`)
  };

  const inputEvent = (event) => {
    const {name,value}=event.target
    setData((preVal)=>{
      return{
     ...preVal,
        [name]:value,
      }
    })
  };

  return (
    <>
      <div className="m-5 text-center">
        <h3>Contact us</h3>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  value={data.fullname}
                  name="fullname"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  value={data.phone}
                  name="phone"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  value={data.email}
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={inputEvent}
                  value={data.msg}
                  name="msg"
                ></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
