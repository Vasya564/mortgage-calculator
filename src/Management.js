import './index.css';
import Sidebar from './Sidebar';
import BankList from './BankList';
import useFetch from './useFetch';
import {Link} from 'react-router-dom'
const Management = () => {
    const {error, data: banks} = useFetch('http://localhost:8000/banks')
    return (
    <div className="content">
        <Sidebar/>
        <div className="info">
        <div className="create-button"><Link to='/create'><button>Add new bank</button></Link></div>
            { error && <div className='error'>{ error }</div> }
            {banks && <BankList banks={banks}/>}
        </div> 
    </div>
    );
}
 
export default Management;