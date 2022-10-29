import React,{useState,useEffect} from 'react'
const userData = [{name:'mobi'}, {name:'Ali'}, {name:'Faiz'}, {name:'Moka'}]
const CheckBox = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers(userData);
    },[]);
    console.log(users);
  return (
    <div className='container my-4'>
        <form className='form'>
            <h1>Select User</h1>
            <div className='form-check'>
                        <input type='checkbox' className='form-check-input'>
                        <label className='form-check-label ms-2'>Select All</label>
                        </input>
            </div>
            {
                users.map((user)=>(
                    <div className='form-check'>
                        <input type='checkbox' className='form-check-input'>
                        <label className='form-check-label ms-2'>username</label>
                        </input>
                    </div>
                 ))
            }
        </form>
    </div>

  )
}

export default CheckBox