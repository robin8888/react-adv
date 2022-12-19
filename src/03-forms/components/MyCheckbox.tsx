import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text'| 'email' | 'password' | 'checkbox';
    [x: string]: any
}
function MyCheckbox( {label, ...props} : Props) {
    const [field] = useField({...props, type: 'checkbox'})
    console.log(field)
  return (
    <>
    <label >
    <input  type='checkbox' {...field} {...props}/>
        
    {label}
    
    </label>
    
    <ErrorMessage name={props.name} component = 'span'/>
    </>
  )
}

export default MyCheckbox