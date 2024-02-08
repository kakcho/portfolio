import gitHubImg from "./../../img/icons/gitHub-black.svg"
import "./style.css"

const Button = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubImg} alt=""/>
            GitHub repo
        </a> );
}
 
export default Button;