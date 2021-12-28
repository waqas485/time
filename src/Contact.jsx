import React, { useState } from 'react';

const Contact = () => {

    const [data , setData] = useState({
        fullname : '',
        phone : '',
        email : '',
        msg : ''

    })
const InputEvent = (event) =>{
    const {name , value} = event.target;
    setData((preVal)=>{
        return{
            ...preVal,
            [name] : value,
        };
    })
}


    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}`
        );

    };
    return (<>

        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-6">

                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2"
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter Full Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Enter Cell No" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}
                            placeholder="Message"></textarea>
                    </div>
                    <button className="btn btn-outline-primary " type="submit">Submit Form</button>
                    </form>
                </div>

            </div>

        </div>

    </>)

}

export default Contact;