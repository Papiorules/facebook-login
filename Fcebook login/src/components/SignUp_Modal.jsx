import style from "../assets/css/sign_up_modal.module.css"
import SignUp from "./SignUp";

const SignUpModal = (props) => {
    
    const {state, setState} = props
    return ( 
        <>
            <div id={style.signUp}>
                <SignUp state={state} setState={setState}/>
            </div>
        </>
     );
}
 
export default SignUpModal;