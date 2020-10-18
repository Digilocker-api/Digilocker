
export default function Validate(values) {

    let errors = {}

    if(!values.name) {
        errors.name = '*Full name required.'
    } 
    /*else if(! (/^[a-z]$/.test(values.name) || (/^[A-Z]$/.test(values.name))  )) {
        errors.name = '*Please enter valid name.'
    }*/

    if(!values.phone) {
        errors.phone = '*Phone no required.'
    } else if(!/^[0-9]{10}$/.test(values.phone)) {
        errors.phone = '*Please enter valid phone no.'
    }

    if(!values.pin) {
        errors.pin = '*PIN required.'
    } else if(!/^[0-9]{6}$/.test(values.pin)) {
        errors.pin = '*Please enter valid PIN.'
    }

    if(!values.email) {
        errors.email = '*Email required.'
    } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)) {
        errors.email = '*Please enter valid email.'
    }

    if(!values.aadhar) {
        errors.aadhar = '*Aadhaar required.'
    } else if(!/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/.test(values.aadhar)) {
        errors.aadhar = '*Please enter valid aadhar.'
    }


    return errors;

}