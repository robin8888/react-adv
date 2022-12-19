
import  { ChangeEvent, useState } from 'react'

function useForm <T>(initialData:T) {
    const [formData, setFormData] = useState(initialData)
    
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
       setFormData(prev =>({
       ...prev ,
        [e.target.name]: e.target.value
       }))
    } 
    const resetForm = () => {
        setFormData(initialData)
    }
  
  return (
    {
        ...formData,
        formData,
        resetForm,
        onChangeInput,
        
    }
  )
}

export default useForm