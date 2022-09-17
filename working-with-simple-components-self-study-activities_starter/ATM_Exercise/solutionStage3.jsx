const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    // if(!isDeposit)
    // alert("You've been traveling too much and have ran out of money ") 

   let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
   if(newTotal < 0){
    alert("You've been traveling too much and have ran out of money ") 
    newTotal = newTotal + deposit;
    alert(`${newTotal}`);
   }
    setTotalState(newTotal);
    event.preventDefault();
   
  };

  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if(event.target.value === 'Deposit') {
      setIsDeposit(true);
    }else{
      setIsDeposit(false);
  
    }
  };   

  return (
   
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode"id="mode-select">
  <option id="no-selection" value=""></option>
  <option id="deposit-selection" value="Deposit">Deposit</option>
  <option id="cashback-selection" value="Cash Back">Cash Back</option>
  </select>
  
       
      {/* <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button> */}
     {atmMode && (<ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit>
      )}
   
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
