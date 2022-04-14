import './index.css';
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
    return (  
    <div className="sidebar">
        <div className="logo"><img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1024px-GNOME_Calculator_icon_2018.svg.png' alt='calculator'></img></div>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'tab')} to='/'><div className="tab"><p>Banks management</p></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'tab')} to='/calculator'><div className="tab"><p>Mortgage calculator</p></div></NavLink>
    </div>
    );
}
 
export default Sidebar;