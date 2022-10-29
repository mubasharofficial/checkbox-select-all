import React,{useState,useEffect} from 'react'
const userData = [{name:"mobi"}, {name:"Pk Ali"}, {name:"FileZilla"},{name:"Ali Hussain"} ];

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
      setUsers(userData);
  },[]);
  const handleChange = (e)=>{

    const {name, checked} = e.target;
    if(name === "allSelect")
    {
      let tempUser = users.map(user =>
        {return {...user,isChecked:checked}} );
        setUsers(tempUser);
    }
    else{
      let tempUser = users.map((user) =>
      user.name === name ? {...user,isChecked: checked }:user
      );
     setUsers(tempUser);
    }
    
  }
  console.log(users);
return (
  <div className='container my-4'>
      <form className='form'>
          <h1>Select User</h1>
          <div className='form-check'>
                      <input type='checkbox' className='form-check-input' name="allSelect" 
                      checked={users.filter((user)=>user?.isChecked !==true).length < 1 }
                      onChange={handleChange} /> &nbsp;
                      <label className='form-check-label ms-2'>Select All</label>

          </div>
          {
              users.map((user)=>(
                  <div className='form-check'>
                      <input type='checkbox' className='form-check-input' name={user.name} 
                      onChange={handleChange}
                      checked={user?.isChecked || false}
                      />&nbsp;
                      <label className='form-check-label ms-2'>{user.name}</label>
                      
                  </div>
               ))
          }
      </form>
  </div>

);
}

export default App;
