import React from 'react'
import Login from './Login'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../Service/FatchApi';
import { toast } from 'react-toastify';
import { setToken } from '../../Service/Slice/AuthSlice';
function LoginWrapper() {

    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

   const initialValues = {
        email:"",
        password:"",
      }

      const handleSubmit = async (values, {setSubmitting,setErrors}) => {
        
        try {
            const user = await login(values)
            setSubmitting(false)
           
            const { status, message, data } = user;
            if (status === "OK") {
              toast.success(message)
              
              // localStorage.setItem("auth", data.token)
              dispatch(setToken(data.token))
              navigate("/user",{replace:true})
            } else {
              // Invalid login details
              toast.error(message);
            }
           
          } catch (error) {
            setSubmitting(false);
            if (error.user) {
              // Server responded with a status other than 200 range
              setErrors({ api: error.message });
            } else {
              // Network error or other issues
              setErrors({ api: "An error occurred. Please try again." });
            }
        
          }
        console.log(values)
      }

    const  validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(4, "Password must be at least 4 characters").required("Required"),
      })

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {
            (formikProps)=>{
          return (
            <Form> 
                <Login formikProps={formikProps}/>
            </Form>
          )
            }
        }
    </Formik>
    // <Login/>
  )
}

export default LoginWrapper