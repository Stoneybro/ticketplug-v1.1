
import React from 'react'

const validate = (values) => {
    const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
            errors.password='Required'
         }else  if (values.password.length<3) {
            errors.password='must greater than 3characters'
         }
        return errors
}

export const validateSignup=(values)=>{
  const errors={}
  // if(!values.username){
  //   errors.username='required'
  // }else if (values.username.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less';
  // }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.password1) {
     errors.password1='Required'
  }else  if (values.password1.length<3) {
     errors.password1='must greater than 3characters'
  }
  if (!values.password2) {
    errors.password2='Required'
 }else  if (values.password2!==values.password1) {
    errors.password2='passwords do not match'
 }
 return errors
}

export default validate