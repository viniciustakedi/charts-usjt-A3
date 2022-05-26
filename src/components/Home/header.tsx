import { RiGasStationFill } from "react-icons/ri";
import './homecomponents.scss';

interface IHeaderProps {
    title: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <div className="header">
            <div className="content-header">
                <RiGasStationFill size="1.5rem" color="#2b2b2b" id="margin-shadow" />
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Header