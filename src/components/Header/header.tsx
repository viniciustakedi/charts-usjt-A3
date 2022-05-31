import { RiGasStationFill } from "react-icons/ri";
import { useTitle } from "../../contexts/context";
import './headercomponent.scss';


const Header: React.FC = () => {

    const {title, setTitle} = useTitle()

    return (
        <div className="header">
            <div className="content-header">
                <RiGasStationFill size="24px" color="#2b2b2b" id="margin-shadow" />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Header