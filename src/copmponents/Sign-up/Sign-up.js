import React, {useState , useCallback , useMemo} from 'react';
import Input from "../Input/Input";

const SignUp = () => {

    const [values , setValues] = useState({
        name : "",
        email : "",
        password : "",
        age : ""
    });

    const handleChange = useCallback(event => {
        const {name , value} = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name] : value
        }))
    } , []);





    return (
        <div className="row login-container valign-wrapper">
            <form className="col s4 offset-s4" id="reg-form">
                <Input
                    value={values.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <Input
                    value={values.email}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                />
                <Input
                    value={values.password}
                    name="password"
                    type="password"
                    minLength="6"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <Input
                    value={values.age}
                    type="number"
                    name="age"
                    minLength="6"
                    placeholder="Age"
                    onChange={handleChange}
                />

                <div className="row">

                    <div className="input-field col s6">
                        <button  className="btn btn-large btn-register waves-effect waves-light purple darken-3" type="submit"
                                name="action">Register
                            <i className="material-icons right">done</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;