import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { v4 as uuidv4 } from 'uuid';
  

const Manager = () => {
  const [form, setform] = useState({ Site: "", Username: "", Password: "" })
  const [passwordarray, setPasswordarray] = useState([])
const [htt, setHtt] = useState({})


  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    console.log(passwords);
    
    setPasswordarray(passwords)
}


useEffect(() => {
    getPasswords()
}, [])


const click=async (e)=>{
 
if(e.includes("https://")){
 setHtt("")
}
else if(!e.includes("http://")){

  setHtt("https://")
} 


}


const copy=(text) => { 

  
  navigator.clipboard.writeText(text)
  toast.success('Copied to Clipboard!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });
 }



 const edit=async (id) => { 
 
  let ed=passwordarray.filter((item)=>
item.id===id
)
// console.log(ed);
setform(ed[0])

  let array=passwordarray.filter((item)=>
item.id!==id
)
setPasswordarray(array)
let a= await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({id:id}) })

 }
 const Delete=async (id) => {
   let array=passwordarray.filter((item)=>
    item.id!==id
  )
  let c=confirm("Do you really want to delete password")
  if (c) {
    
    setPasswordarray(array)
    let a= await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({id:id}) })

toast('Password Deleted Successfully', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  
});
}

  }

  const handle = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  const save = async () => {
    setPasswordarray([...passwordarray, {...form,id:uuidv4()}] )
    
    let a= await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({...form,id:uuidv4()}) })
    
    let b=await a.json()
    console.log(b);
    setform({ Site: "", Username: "", Password: "", })
    
    
  }
  return (
    <div className='min-h-screen bg-gradient-to-b from-green-200 via-green-50 to-green-100' >
     


      <div className=' flex flex-col gap-2 py-5 '>
        <h1 className='font-bold text-3xl text-center '>

        <span className='text-green-600'>&lt;</span>
         Lock
          <span className='text-green-600'>sy/&gt;</span>
        </h1>
        <p className='text-center text-lg font-medium text-green-600'>Your Own Password Manager</p>

        <div className='flex flex-col gap-5 my-6 mx-10 sm:mx-20 md:mx-24 lg:mx-52'>
          <input type="text" name='Site' placeholder='Enter Website URL' value={form.Site} onChange={handle} className=' border-green-400  border-[2px] px-4 p-2 w-full  rounded-full' required />
          <div className='flex flex-col md:flex-row gap-5'>

            <input type="text" name='Username' placeholder='Enter Username' className='  border-green-400  border-[2px] px-4 p-2 w-full md:w-[75%]  rounded-full' value={form.Username} onChange={handle} required />
            <input type="password" placeholder='Enter Password' name="Password" id="password" className=' border-green-400  border-[2px] px-4 p-2 w-full md:w-[25%]  rounded-3xl' value={form.Password} onChange={handle} required />
          </div>


          <button className='bg-green-500 disabled:bg-green-300  border-green-900 border-2 hover:bg-green-600 text-lg w-fit mx-auto py-2 pad px-10 rounded-full text-white font-bold flex items-center gap-2' onClick={save} disabled={form.Site.length<2 || form.Username.length<4 || form.Password.length<5} >
            <span className='hid'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"

              trigger="loop"
              delay="400"

            >
            </lord-icon></span>
            Add </button>

        </div>
        <div className="passwords  sm:px-48 flex flex-col items-center over">
          <h2 className='font-bold text-2xl p-3 text-center'>Your Passwords</h2>
          {passwordarray.length === 0 && <div className='text-lg font-medium '>No Passwords to show</div>}
          {passwordarray.length != 0 && <table className="table-auto mx-[4vw] sm:mx-[10vw] w-[80vw] rounded-xl   overflow-hidden width mar">
            <thead className='bg-green-700  text-white  '>
              <tr className=' '>
                <th className='py-2 text-sm sm:text-lg'>Site</th>
               
                <th className='py-2 text-sm sm:text-lg'>Username</th>
                <th className='py-2 text-sm sm:text-lg'>Password</th>
                <th className='py-2 px-2 text-sm sm:text-lg'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-200 '>

              {passwordarray.map((item, i) => {
                return (
                  <tr key={i} className='' >
                    <td className='py-2 sm:text-center w-[27vw] border  border-white  text-left sm:text-lg'>
                    <div className='flex justify-start   items-center gap-4 h-auto whitespace-normal mx-4   '>
                    
                      <a href={htt +item.Site } target="_blank" rel="noopener noreferrer" className=' flex flex-wrap text-wrap break-words   h-auto  ' onClick={()=>click(item.Site)}> <span className='text-wrap w1 w-[25vw] md:w-[24vw]'>{item.Site} </span> </a> 
                      <div className='cursor pointer hidden ' onClick={()=>copy(item.Site)}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                      </div>
                    </td>
                    <td className='py-2 text-center w-[20vw] border border-white text-sm sm:text-lg'>
                    <div className='flex  flex-col sm:flex-row mx-3 sm:mx-4 items-center gap-3  '>
                      <span className='w-[15vw] w2 sm:w-[10vw] md:w-[15vw] text-wrap break-words '>{item.Username} </span>
                      <div className='cursor pointer  ' onClick={()=>copy(item.Username)}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                      </div>
                    </td>
                    <td className='py-2  text-center w-[15vw] border border-white text-sm sm:text-lg '>
                      <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mx-3 '>
                      <span className=' w-[10vw] overflow-clip text-wrap '>{"*".repeat(item.Password.length)} </span> 
                      <div className='cursor pointer  ' onClick={()=>copy(item.Password)}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                          </div>
                    </td>
                    <td className='w-[15vw] border border-white '>
                      <div className='flex flex-col sm:flex-row  justify-center items-center'>

                      <span className='cursor-pointer' onClick={()=>edit(item.id)}>
                      <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{"width":"25px", "height":"25px"}}>
                                            </lord-icon>
                      </span>
                      <span className='cursor-pointer' onClick={()=>Delete(item.id)}>
                      <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                delay="1500"
                                                style={{"width":"25px", "height":"25px"}}>
                                            </lord-icon>
                      </span>
                                                  </div>
                    </td>
                  </tr>)
              })}

            </tbody>
          </table>}
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </div>

  )
}

export default Manager
