import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    type?: 'text'| 'email' | 'password';
    [x: string]: any
}
function MyTextInput( {label, ...props} : Props) {
    const [field] = useField(props)
    console.log(field)
  return (
    <>
    <label htmlFor={props.id || props.name }>{label}</label>
    <input {...field} {...props}/>
    <ErrorMessage name={props.name} component = 'span'/>

    </>
  )
}

export default MyTextInput