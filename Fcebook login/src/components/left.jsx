import style from "../assets/css/left_side.module.css"

const LeftSide = () => {
    return ( 
        <>
            <div id={style.leftSide}>
                <img id={style.logo} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
                <h2 id={style.subText}>Facebook helps you connect and share with the people in your life.</h2>
            </div>
        </>
     );
}
 
export default LeftSide;