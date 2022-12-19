import { Formik, Form } from "formik";
import * as Yup from "yup";
import {MyCheckbox, MySelect, MyTextInput} from '../components'
import "../styles/styles.css";

function FormikAbstract() {
  return (
    <div>
      <h1>Formik Abstract </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          terms: Yup.boolean()  
                 .oneOf([true], 'You must accept the conditions'),

          jobType: Yup.string()
                 .notOneOf(['it-jr'], 'this option is not allowed')
                 .required("Required"),

        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="firstName" name="firstName" type="text" placeholder="first Name"/>
            <MyTextInput label="LastName" name="lastName" type="text" placeholder="Last Name"/>
            <MyTextInput label="email" name="email" type="email" placeholder=" email"/>

            <MySelect as="select" name="jobType" label={"Job Type"}>
              <option value="">Pick SomeThing</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">it-jr</option>
            </MySelect>
          
            <br />
           <MyCheckbox label="Terms and Conditions" name='terms'/>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikAbstract;
