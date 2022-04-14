import './index.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
import useFetch from './useFetch';
const Calculator = () => {
    const {data: banks} = useFetch('http://localhost:8000/banks')
    const [loan, setLoan] = useState('');
    const [payment, setPayment] = useState('');
    const [selBank, setSelbank] = useState(null);
    const [mortgage, setMortgage] = useState('');
    const [message, setMessage] = useState('');  
    const handleCalculate = (e) =>{
        e.preventDefault();
        if (selBank != null){
            let air  = banks[selBank-1].rate / 1200;
            let term = banks[selBank-1].loanterm * 12;
            let downPayment = (parseInt(loan) / 100) * banks[selBank-1].minpaym;
            if (parseInt(loan) <= banks[selBank-1].maxloan){
                if(parseInt(payment) >= downPayment){
                    if(parseInt(loan) > parseInt(payment)){
                        let result = Math.round(loan*(air * Math.pow((1 + air), term))/(Math.pow((1 + air), term) - 1));
                        setMortgage(result);
                        setMessage('');
                    }
                    else{setMessage('The intial loan cannot be greater or equal to the down payment');}
                }
                else{setMessage('Down payment must be at least ' + banks[selBank-1].minpaym + '% of the intial loan');}
            }
            else{setMessage('The maximum loan amount for this bank is equal to ' + banks[selBank-1].maxloan);} 
        }
        else{setMessage('Select a bank from the list')}
    }
    return (
        <div className='content'>
            <Sidebar/>
            <div className='create-form'>
                <form onSubmit={handleCalculate}>
                    <label>Intial loan:</label><br/>
                    <input type='number' required value={loan} onChange={(e) => setLoan(e.target.value)}></input><br/>
                    <label>Down payment:</label><br/>
                    <input type='number' required value={payment} onChange={(e) => setPayment(e.target.value)}></input><br/>
                    <label>Bank:</label><br/>
                    <select value={selBank || ""} onChange={(e) => setSelbank(e.target.value || null)}>
                        <option value=""></option>
                        {banks && banks.map((bank) => (
                            <option key={bank.id} value={bank.id}>{bank.name}</option>
                        ))}
                    </select><br/>
                    <label>Result:</label><br/>
                    <input type='text' readOnly value={mortgage}></input><br/>
                    <button>Calculate</button>
                </form>
                <div className='errorMsg'><p>{message}</p></div>
            </div>
        </div>
    );
}
 
export default Calculator;