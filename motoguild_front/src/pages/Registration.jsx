import React,{useState} from 'react'

const Registration = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        phoneNumber: 0
    })
    const [passwordConfirm,setPasswordConfirm] = useState("")

    function handleChange(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(user)
      }

      function handleChangePasswordConfirm(event) {
        console.log(event)
        // const { name, value } = event.target;
        // setPasswordConfirm((prevState) => ({
        //   ...prevState,
        //   [name]: value,
        // }));
      }


    return (
        <form>
            <label name ='userName'>User Name</label>
            <input className='standard-input' type='text' name='userName' value={user.userName} onChange={handleChange}></input>
            <label name ='email'>Email</label>
            <input className='standard-input' type='email' name='email' value={user.email} onChange={handleChange}></input>
            <label name ='password'>Password</label>
            <input className='standard-input' type='password' name='password' value={user.password} onChange={handleChange}></input>
            <label name ='passwordConfirm'>Password Confirm</label>
            <input className='standard-input' type='password' name='passwordConfirm' value={passwordConfirm} onChange={handleChangePasswordConfirm}></input>
            <label name ='phoneNumber'>User Name</label>
            <input className='standard-input' type='tel' name='phoneNumber' value={phoneNumber} onChange={handleChange}></input>
            <button>Zarejestruj</button>
        </form>
    )
}

export default Registration