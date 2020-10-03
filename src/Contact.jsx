import { Alert } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState } from 'react';
import './index.css';

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone:"",
        email:"",
        msg: "",
    });
    const InputEvent= (event)=>{
        const {name,value} =event.target;

        setData((preVal) =>{
            return {
                ...preVal,
                [name]: value
            };
        });
    };
    const formSubmit = (e) =>{
            e.preventDefault();
            alert(`Thank you for submiting the form ${data.fullname}, Your details are: Full name: ${data.fullname}, Phone: ${data.phone}, Email: ${data.email}. Have a good day.`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-11 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ); 

};
export default Contact;