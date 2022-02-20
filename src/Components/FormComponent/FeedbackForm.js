import React, { useState, useEffect } from "react";
import validate from "../../Validate";

const FeedbackForm = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        country: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log("error", errors);
    }, [errors]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        const error = validate(state);
        setErrors(error);
        if (Object.keys(error).length === 0) {
            alert("Feedback submitted successfully");
            setState({
                firstName: "",
                lastName: "",
                address: "",
                email: "",
                country: "",
                phone: "",
            });
        }
    };

    return (
        <>
            <form onSubmit={onSubmitForm} className="w-[60%] animate">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">
                        Thank you so much for taking the time!
                    </h1>
                    <h4>Please provide the details below.</h4>
                </div>

                <div className="mb-6 ">
                    <label
                        htmlFor="FirstName"
                        className="block mb-2 font-medium text-gray-900 w-full "
                    >
                        First Name:
                    </label>
                    <div className="relative flex w-full ">
                        <input
                            onChange={handleChange}
                            value={state.firstName}
                            name="firstName"
                            type="text"
                            id="FirstName"
                            placeholder="First Name"
                            className=" pl-4 p-2 rounded-md shadow-lg focus:outline-none focus:shadow-outline w-[60%]"
                        />{" "}
                        {errors.fname && (
                            <p className="text-red-500 font-normal ml-4 my-auto">
                                {errors.fname}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-6 ">
                    <label
                        htmlFor="lastName"
                        className="block mb-2 font-medium text-gray-900"
                    >
                        Last Name:
                    </label>

                    <div className="relative flex w-full ">
                        <input
                            onChange={handleChange}
                            value={state.lastName}
                            name="lastName"
                            type="text"
                            id="LastName"
                            placeholder="Last Name"
                            className="pl-4 p-2 rounded-md shadow-lg focus:outline-none focus:shadow-outline w-[60%]"
                        />
                        {errors.lname && (
                            <p className="text-red-500 font-normal ml-4 my-auto">
                                {errors.lname}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-6 ">
                    <label
                        htmlFor="address"
                        className="block mb-2 font-medium text-gray-900"
                    >
                        Address:
                        {errors.address && (
                            <p className="text-red-500 font-normal">
                                {errors.address}
                            </p>
                        )}
                    </label>
                    <textarea
                        onChange={handleChange}
                        value={state.address}
                        name="address"
                        type="text"
                        id="address"
                        className="w-full pl-4 p-2 rounded-md h-[120px] max-h-[120px] shadow-lg focus:outline-none focus:shadow-outline resize-none"
                        placeholder="Enter Your full postal Address"
                    />
                </div>
                <div className="mb-6 ">
                    <label
                        htmlFor="Country"
                        className="block mb-2 font-medium text-gray-900"
                    >
                        Country:
                    </label>

                    <div className="relative flex w-full">
                        <div className="w-[60%] relative flex items-center ">
                            <i class="bx bx-search absolute right-4 text-gray-500 text-lg"></i>
                            <input
                                onChange={handleChange}
                                value={state.country}
                                name="country"
                                type="text"
                                id="Country"
                                placeholder="Country"
                                className=" pl-4 p-2 rounded-md shadow-lg focus:outline-none focus:shadow-outline w-full"
                            />
                        </div>{" "}
                        {errors.country && (
                            <p className="text-red-500 font-normal ml-4 my-auto">
                                {errors.country}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-6 ">
                    <label
                        htmlFor="Email"
                        className="block mb-2 font-medium text-gray-900"
                    >
                        Email ID: <span className="text-red-500">*</span>
                    </label>

                    <div className="relative flex w-full ">
                        <input
                            onChange={handleChange}
                            value={state.email}
                            name="email"
                            type="text"
                            id="Email"
                            placeholder="example@sample.com"
                            className=" pl-4 p-2 rounded-md shadow-lg focus:outline-none focus:shadow-outline w-[60%]"
                        />{" "}
                        {errors.email && (
                            <p className="text-red-500 font-normal ml-4 my-auto">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Phone"
                        className="block mb-2 font-medium text-gray-900"
                    >
                        Phone Number: <span className="text-red-500">*</span>
                    </label>

                    <div className="relative flex w-full ">
                        <input
                            onChange={handleChange}
                            value={state.phone}
                            name="phone"
                            type="tel"
                            id="Phone"
                            placeholder="1234567890"
                            className=" pl-4 p-2 rounded-md shadow-lg focus:outline-none focus:shadow-outline w-[60%]"
                        />{" "}
                        {errors.phone && (
                            <p className="text-red-500 font-normal ml-4 my-auto">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-400 hover:bg-green-400 rounded-md text-[#ffffff] px-8 py-2 text-lg font-semibold"
                >
                    Submit Feedback
                </button>
            </form>
        </>
    );
};

export default FeedbackForm;
