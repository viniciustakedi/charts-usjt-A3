import { RiSlideshow3Line, RiQrCodeLine } from "react-icons/ri";
import { useLink, useValue } from "../../contexts/context";
import { Link, useNavigate } from "react-router-dom";
import './buttonicons.scss';

export default function ButtonIcons() {

    const navigate = useNavigate()
        
    const { value, setValue } = useValue()
    const { link, setLink } = useLink()

    return (
        <div className="buttonPrevisions">
            <div className="icons">
                <RiSlideshow3Line color="#00000066" size="24px" id='icon-one' />
                <RiQrCodeLine color="#00000066" size="24px" id='icon-two' onClick={() => navigate("/qrcode")}/>
            </div>
            <Link to={link}><button>{value}</button></Link>
        </div>
    )
}