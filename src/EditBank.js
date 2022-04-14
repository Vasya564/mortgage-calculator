import Sidebar from "./Sidebar";
import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";
const EditBank = () => {
    const { id } = useParams();
    const {data: bank, error} = useFetch('http://localhost:8000/banks/' + id);
    const navigate = useNavigate();

    const handleRemove = (e) =>{
        e.preventDefault();
        fetch('http://localhost:8000/banks/'+ bank.id,{
            method: 'DELETE'
        }).then(() =>{
            navigate('/')
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let name = e.target[0].value;
        let rate = e.target[1].value;
        let maxloan = e.target[2].value;
        let minpaym = e.target[3].value;
        let loanterm = e.target[4].value;
        const bank = {name, rate, maxloan, minpaym, loanterm}
        fetch('http://localhost:8000/banks/' + id,{
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bank)
        }).then(() =>{
            navigate('/');
        })
    }
    return (
        <div className="content">
        <Sidebar/>
        <div className="info">
            <div className="create-form">
                { error && <div>{ error }</div> }
                {bank &&(
                    <div>
                    <form onSubmit={handleSubmit}>
                        <label>Bank name:</label><br/>
                        <input type='text' required defaultValue={bank.name}></input><br/>
                        <label>Interest rate (percents):</label><br/>
                        <input type='number' required defaultValue={bank.rate} ></input><br/>
                        <label>Maximum loan:</label><br/>
                        <input type='number' required defaultValue={bank.maxloan} ></input><br/>
                        <label>Minimum down payment (percents):</label><br/>
                        <input type='number' required defaultValue={bank.minpaym} ></input><br/>
                        <label>Loan term (years):</label><br/>
                        <input type='number' required defaultValue={bank.loanterm} ></input><br/>
                        <button>Update</button>
                        <button onClick={handleRemove}>Remove</button>
                    </form>
                </div>
                )}
            </div>
        </div> 
    </div>
    );
}
 
export default EditBank;