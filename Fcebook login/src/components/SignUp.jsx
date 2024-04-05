import { useState } from "react"
import style from "../assets/css/sign_up.module.css"

const SignUp = (props) => {

    const { state, setState } = props

    const [userDetails, setUserDetails] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		gender: "other",
	})
	const [validation, setValidation] = useState({
		firstname: false,
		lastname: false,
		email: false,
		password: false,
		gender: false,
	})

	function onFormChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserDetails({
			...userDetails,
			[name]: value
		})

        handleValidation()

	}

	function handleSubmit(e) {
		e.preventDefault()
        let {firstnameVal, lastnameVal, emailVal,passwordVal,gnderVal} = validation
        if (firstnameVal == false && lastnameVal == false && emailVal == false && passwordVal == false && gnderVal == false) {
			alert(`Welcome ${userDetails.firstname} ${userDetails.lastname}`)
		}else{
            
        handleValidation()
        }
    }

    function handleValidation() {

		let firstnameVal = userDetails.firstname.length > 2 ? false : true;
		let lastnameVal = userDetails.lastname.length > 2 ? false : true;
		let emailVal = userDetails.email.includes("@") && userDetails.email.includes(".") ? false : true;
		let passwordVal = userDetails.password.length > 4 ? false : true;
		let gnderVal = userDetails.gender == "other" ? true : false;

		setValidation({
			firstname: firstnameVal,
			lastname: lastnameVal,
			email: emailVal,
			password: passwordVal,
			gender: gnderVal,
		})

	}

    function OnClose() {
        setState(!state)
    }

    let errorLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdklEQVR4nO2aX0sUURTArwlqUVZQL2VQr1ZE9gE2zXL2nHNntZjv4kO40GNY1oOUJhk7964wH0Doc/QH3yJMI+zfWxkuxhlbynV3I+femdm4PzgwzOyeuefcf+eeM0I4HA6Hw+FwOBypsFgo9KlS8aL2cVRJKLHwdQXxAj8T/xvLntcbIk4oiY814YomqGmJ202Fn/FvJDzSRONREPSITmWpVDqjCWaUxE8tDf6L/Prv/dDzBkSnEAWjR7XEh4pgc7+G73HEji52RL/IMxpxTBOumzK8iSPWqrJ4XeSNbSG6FMGdtvPblBDUFEGZ3ynyQBQE3UrCU+uG73EELvC7MzV+W4gubkjqxv+WSqYjQfGwz874+pSYysT4qiyOKIKtHDigFhLdSNX40PP6ba72/y7wbsH3j6TmAEXwIHujd4uScC+1CE+ZCnIIvsRixAH4/Rni6Y7ofUXwUiNeqesMiYa0hBe5HwXLntebJLavS1XK8426+Z6BEfXR6gEqRJxI3vv4tZV+fpZUf+ijb80BmnDOwHz93Fp/8vVASZy16YAVA8O0Vi6XDzTq5nsmzhJK4msrxkdBcNDUYWexVDq2x7mIx03o5uDMSmZJcRrLQANZlkpjZxv1V6Q8Z0p/s0U2MSHRNWMN9L3LTfQPmdIfIl417gDFyUtDDVRULDbqr/qAxhxgYycIffRNNVATTNsMr604oCqLI+YcgD80wSSnwuMAiGAyvmdqhPkwnOtFUFsWK4vgYqHQZzTnR/hBS3geS3xtqPcJtjhkF7kNhGQcDodzRIfqevlaS9SGHPvKivFMXLFJ3kObURAcFg1wQsPEOmA5FKZxAz203kq/kvg+uX6S1hwQBUGPieNwBfFSo24OjpL3PmxYrydqgpnk0wDfKAk3I887qYlOaCre0hLe2ogvjBN63gCnnxI31rCklhJjuFCZQwfcFWmmxRXBWtZG/yGrzXYWqygfhvNSGMmsYqwIylk7QBHcFpmWxSU+ybD350XWREHQnUmFmGA+8/L47jI5TKXxgQSvO5kO+3bw525cqLTogFXOS4g8sxAfamDacLD0jff51Le6JHBUxrU6Llfte7hL2GBnVn3/lOhUoiDo4RwdH1O5aNEudojnN/9G4iyf6jr6Q8m2X4763iDPZXYMy861N2gtk+NwOBwOh8PhcIhGfgI1R0jrPfVaxwAAAABJRU5ErkJggg=="
    return (
        <>
            <div id={style.formCont}>

                <form onSubmit={handleSubmit}>
                    <div id={style.header}>
                        <div id={style.content}>
                            <h1>Sign Up</h1>
                            <p>It's quick and easy.</p>
                        </div>
                        <button onClick={() => OnClose()}>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/3E2YvBpOcbP.png" />
                        </button>
                    </div>
                    <div id={style.line}></div>
                    <div id={style.row}>

                        <div style={validation.firstname ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.input}>
                            <input type="text" placeholder='First name' name='firstname' onChange={(e)=>onFormChange(e)} />
                            {validation.firstname && <img id={style.error} src={errorLink} />}
                        </div>

                        <div style={validation.lastname ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.input}>
                            <input type="text" placeholder='Surname' name='lastname' onChange={(e)=>onFormChange(e)} />
                            {validation.lastname && <img id={style.error} src={errorLink} />}
                        </div>
                    </div>

                    <div style={validation.email ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.input}>
                        <input type="email" placeholder='Mobile number or email address' name='email' onChange={(e)=>onFormChange(e)} />
                        {validation.email && <img id={style.error} src={errorLink} />}
                    </div>

                    <div style={validation.password ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.input}>
                        <input type="password" placeholder='New Password' name='password' onChange={(e)=>onFormChange(e)} />
                        {validation.password && <img id={style.error} src={errorLink} />}
                    </div>

                    <div className={style.selectCont}>
                        <div className={style.selectHeader}>
                            <p>Date of Birth</p>
                            {/* <img id={style.error} src={errorLink} /> */}
                        </div>
                        <div className={style.selectors}>
                            <select name="day">
                                <option value="1">1</option>
                            </select>
                            <select name="day">
                                <option value="1">1</option>
                            </select>
                            <select name="day">
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.selectCont}>
                        <div className={style.selectHeader}>
                            <p>Gender</p>
                            {validation.gender && <img id={style.error} src={errorLink} />}
                        </div>
                        <div className={style.selectors}>
                            <div style={validation.gender ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.radioInput}>
                                <label htmlFor="female">Female</label>
                                <input type="radio" name="gender" value="female" id="female"  onChange={(e)=>onFormChange(e)} />
                            </div>
                            <div style={validation.gender ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.radioInput}>
                                <label htmlFor="male">Male</label>
                                <input type="radio" name="gender" value="male" id="male" onChange={(e)=>onFormChange(e)} />
                            </div>
                            <div style={validation.gender ? { borderColor: "red"} : { borderColor: "#ccd0d5"}} className={style.radioInput}>
                                <label htmlFor="other">Other</label>
                                <input type="radio" name="gender" value="other" id="other"  onChange={(e)=>onFormChange(e)} />
                            </div>
                        </div>
                    </div>
                    <p className={style.afterText}>People who use our service may have uploaded your contact information to Facebook. Learn More</p>
                    <p className={style.afterText}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

                    <button id={style.signupBtn}>SignUp</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;