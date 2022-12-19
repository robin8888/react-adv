import { FormEvent } from "react";
import useForm from "../hooks/useForm";
import "../styles/styles.css";

function RegisterPage() {
  const { formData, onChangeInput, resetForm,  name, email, password1, password2 } = useForm({
    name : '',
    email : '',
    password1 : '',
    password2 : '',
  });

  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>registerPage</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeInput}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChangeInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChangeInput}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          name="password2"
          onChange={onChangeInput}
        />
        <button type="submit">Create</button>
        <button onClick={resetForm}>reset</button>
      </form>
    </div>
  );
}

export default RegisterPage;
