import React, { Component } from 'react';
import Joi from "joi-browser";
class VisitorForm extends Component {
    state = {
        data:{name:"",email:"",phoneNo:""},
        errors:{}
     }
     schema ={
        name: Joi.string().max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 })
     }
    render() { 
        return (  );
    }
}
 
export default VisitorForm;