import style from "../assets/css/right_side.module.css"

const RightSide = (props) => {

    const { state, setState } = props

    function OnSignUp() {
        console.log("message")
        setState(!state)
    }

    return (
        <>
            <div id={style.rightSide}>
                <div id={style.formCont}>
                    <form>
                        <input type="email" placeholder='Email address or phone number' name='email' />
                        {/* {eVal && <p>Enter a valid E-mail</p>} */}

                        <input type="password" placeholder='Password' name='password' />
                        {/* {pVal && <p>Password must be more than 4 char.</p>} */}

                        <button id={style.loginBtn}>Login</button>
                        <p>Forgotten password?</p>
                        <div id={style.line}></div>
                    </form>
                    <button id={style.createBtn} onClick={OnSignUp}>Create new account</button>
                </div>

                <div id={style.underText}>
                    <span>Create a Page</span> for a celebrity, brand or business.
                </div>
            </div>
        </>
    );
}

export default RightSide;