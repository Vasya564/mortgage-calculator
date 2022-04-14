import { Link } from "react-router-dom";

const BankList = ({banks}) => {
    return (
        <div className="banks-list">
            {banks.map((bank) => (
            <div className="bank-card" key={bank.id}>
                <div className="bank bank-name">
                    <div>
                        <h3>Bank name</h3>
                        <p>{bank.name}</p>
                    </div>
                </div>
                <div className="bank bank-rate">
                    <div>
                        <h3>Interest rate</h3>
                        <p>{bank.rate}%</p>
                    </div>
                </div>
                <div className="bank bank-maxloan">
                    <div>
                        <h3>Maximum loan</h3>
                        <p>{bank.maxloan}</p>
                    </div>
                </div>
                <div className="bank bank-mindopay">
                    <div>
                        <h3>Minimum down payment</h3>
                        <p>{bank.minpaym}%</p>
                    </div>
                </div>
                <div className="bank bank-loanterm">
                    <div>
                        <h3>Loan term</h3>
                        <p>{bank.loanterm} years</p>
                    </div>
                </div>
                <div className="bank bank-buttons">
                    <div>
                        <Link to={`/banks/${bank.id}`}><button>Edit</button></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
 
export default BankList;