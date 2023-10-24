import Button from "./Button";
import { Link } from "react-router-dom";

const MidPage = () => {
  return (
    <>
    <Link to={'/calculation'}><Button >Start Calculating!!</Button></Link>
    <span>Or</span>
    </>
  )
}

export default MidPage