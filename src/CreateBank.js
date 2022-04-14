import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
const CreateBank = () => {
    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [maxloan, setMaxloan] = useState('');
    const [minpaym, setMinpaym] = useState('');
    const [loanterm, setLoanterm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const bank = { name, rate, maxloan, minpaym, loanterm };

        fetch('http://localhost:8000/banks',{
            method: 'POST',
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
                <form onSubmit={handleSubmit}>
                    <label>Bank name:</label><br/>
                    <input type='text' required value={name} onChange={(e) => setName(e.target.value)}></input><br/>
                    <label>Interest rate (percents):</label><br/>
                    <input type='number' required value={rate} onChange={(e) => setRate(e.target.value)}></input><br/>
                    <label>Maximum loan:</label><br/>
                    <input type='number' required value={maxloan} onChange={(e) => setMaxloan(e.target.value)}></input><br/>
                    <label>Minimum down payment (percents):</label><br/>
                    <input type='number' required value={minpaym} onChange={(e) => setMinpaym(e.target.value)}></input><br/>
                    <label>Loan term (years):</label><br/>
                    <input type='number' required value={loanterm} onChange={(e) => setLoanterm(e.target.value)}></input><br/>
                    <button>Add bank</button>
                </form>
            </div>
        </div> 
    </div>
    );
}
 
export default CreateBank;