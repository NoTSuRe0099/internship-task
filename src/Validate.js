const validate = (value) => {
    let error = {};
    const emailRegex =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // eslint-disable-next-line no-useless-escape
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/i;

    if (!value.firstName) {
        error.fname = "Please enter the first name";
    }
    if (!value.lastName) {
        error.lname = "Please enter the last name";
    }
    if (!value.address) {
        error.address = "Please enter the address";
    }
    if (!value.email) {
        error.email = "Please enter the e-mail";
    } else if (value.email && emailRegex.test(value.email) === false) {
        error.email = "Please enter a 'valid' e-mail";
    }
    if (!value.country) {
        error.country = "Please enter the country";
    }
    if (!value.phone) {
        error.phone = "Please enter the phone number";
    } else if (value.phone && phoneRegex.test(value.phone) === false) {
        error.phone = "Please enter a 'valid' phone number";
    }

    return error;
};

export default validate;
