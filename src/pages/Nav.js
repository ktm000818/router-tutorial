import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="nav">
            <div className="logo">
                <h4><Link to={"/"}>NAV BAR</Link></h4>
            </div>
            <div className="item">
                <ul className="nav-item">
                    <li><Link to={"/item1"} style={{textDecoration: "none"}}>item 1</Link></li>
                    <li><Link to={"/item2"} style={{textDecoration: "none"}}>item 2</Link></li>
                    <li><Link to={"/item3"} style={{textDecoration: "none"}}>item 3</Link></li>
                    <li><Link to={"/item3"} style={{textDecoration: "none"}}>item 4</Link></li>
                    <li><Link to={"/item3"} style={{textDecoration: "none"}}>item 5</Link></li>
                </ul>
            </div>
        </div>
    )

}

export default Nav;