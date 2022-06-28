import React from 'react';
import './FormsPage.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import formpage from '../../images/Web 1920 – 1.png';

const initialValues = {
    fname: '',
    lname:'',
    email:'',
    address:'',
    phone_number:'',
    store_name:'',
    store_address:'',
    password:'',
    cfpassword:'',
}

const onSubmit = values =>{
    console.log('Form Data', values)
}
const validationSchema = Yup.object({
    fname: Yup.string().required('First name required!'),
    lname: Yup.string().required('Last name Required!'),
    email: Yup.string().email('Invalid Email!').required('Email Required!'),
    address: Yup.string().required('Address Required!'),
    phone_number: Yup.string().required('Phone Number Required!'),
    store_name: Yup.string().required('Store Name Required!'),
    store_address: Yup.string().required('Store Address Required!'),
    password: Yup.string().required('Password Required!'),
    cfpassword: Yup.string().required('Confirm Password!'),
    
})

const validate = values =>{
    let errors= {}

    if(!values.fname){
        errors.fname = 'Required'
    }
    if(!values.lname){
        errors.lname = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    } else if(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Invalid email address'
    }


    if(!values.address){
        errors.address = 'Required'
    }
    if(!values.phone_number){
        errors.phone_number = 'Required'
    }
    if(!values.store_name){
        errors.store_name = 'Required'
    }
    if(!values.store_address){
        errors.store_address = 'Required'
    }

    if(!values.password){
        errors.password = 'Required'
    }else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    }else if (values.password === '12345678') {
        errors.password = 'Must not be 1'
    }

    if(!values.cfpassword){
        errors.cfpassword = 'Required'
    }else if (values.cfpassword !== values.password) {
        errors.cfpassword = 'Second password doesn\'t match'
    }

    return errors
}


function FormsPage() {
    const formik = useFormik({
        initialValues,
        // validate,
        validationSchema,
        onSubmit
    });

    console.log('Form Values', formik.errors)

  return (
    <div className="vendorForm">
        <section className="container">
            <div className="content">
                <aside id="content-1">
                    <img src={formpage} alt={formpage} />
                </aside>
                <aside id="content-2">
                    <div className="form-box">
                        <header className="form-header">
                           Vendor Registeration
                        </header>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="form-control">
                            <label htmlFor="fname">First Name</label>
                            <input type="text"
                            autoComplete='on'
                             id="fname" name="fname" 
                             onBlur={formik.handleBlur}
                             onChange={formik.handleChange} 
                             value={formik.values.fname} 
                            />
                            {
                             formik.touched.fname && formik.errors.fname ? 
                             <div className="errors">{formik.errors.fname}</div> : null
                             }
                            </div>

                            <div className="form-control">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text"
                            autoCapitalize='on'
                             id="lname"
                             name="lname" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.lname} 
                            />
                            {   
                                formik.touched.lname && formik.errors.lname ? 
                                <div className="errors">{formik.errors.lname}</div> : null
                                }
                            </div>

                            <div className="form-control">
                            <label htmlFor="email">E-mail Address</label>
                            <input type="email"
                             id="email" 
                             name="email" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.email}  
                            />
                            {
                                formik.touched.email && formik.errors.email ? 
                                <div className="errors">{formik.errors.email}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="address">Personal Address </label>
                            <input type="text"
                             id="address" 
                             name="address" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.address}  
                            />
                            {
                                formik.touched.address && formik.errors.address ? 
                                <div className="errors">{formik.errors.address}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="phone_number">Phone Number</label>
                            <input type="number"
                             id="phone_number" 
                             name="phone_number" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.phone_number}  
                            /><br />
                            {
                                formik.touched.phone_number && formik.errors.phone_number ? 
                                <div className="errors">{formik.errors.phone_number}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="store_name">Store Name</label>
                            <input type="text"
                             id="store_name" 
                             name="store_name" 
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.store_name}  
                            />
                            {
                                formik.touched.store_name && formik.errors.store_name ? 
                                <div className="errors">{formik.errors.store_name}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="store_address">Store Address</label>
                            <input type="text"
                             id="store_address" 
                             name="store_address"
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.store_address}
                            /><br />
                            {
                                formik.touched.store_address && formik.errors.store_address ? 
                                <div className="errors">{formik.errors.store_address}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                             id="password" 
                             name="password"
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.password} 
                            />
                            {
                                formik.touched.password && formik.errors.password ? 
                                <div className="errors">{formik.errors.password}</div> : null
                            }
                            </div>

                            <div className="form-control">
                            <label htmlFor="cfpassword">Confirm Password</label>
                            <input type="password"
                             id="cfpassword" 
                             name="cfpassword"
                             onBlur={formik.handleBlur} 
                             onChange={formik.handleChange} 
                             value={formik.values.cfpassword}  
                            /><br />
                            {
                                formik.touched.cfpassword && formik.errors.cfpassword ? 
                                <div className="errors">{formik.errors.cfpassword}</div> : null
                            }
                            </div>

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    </div>
  )
}

export default FormsPage