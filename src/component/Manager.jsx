import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import LoadingDots from './Loading';


const Manager = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  const [form, setform] = useState({ email: "",sub:"", Site: "", Username: "", Password: "" })
  const [passwordarray, setPasswordarray] = useState([])
  const [htt, setHtt] = useState({})
const [loading, setloading] = useState(true)
const cur=useRef()

  const URL = import.meta.env.VITE_BASE_URL

  const getPasswords = async () => {
    setloading(true)
    let req = await fetch(`${URL}/api?email=${encodeURIComponent(user.email)}&sub=${encodeURIComponent(user.sub)}`)
    let passwords = await req.json()
     setPasswordarray(passwords)
  
     setloading(false)
  
     
  }
useLayoutEffect(() => {
 const ctx=gsap.context(()=>{
const tl=gsap.timeline()
tl.from(".a",{
 y: 100,
  opacity: 0,
  duration: .7,
  // ease: "power4.out"
})
.from("input",{
scale:0,
stagger:.2,
duration:.3

},"-=.3")
.from(".b",{
  y:100,
  opacity:0,
  duration:.3
},"-=.1")
.from(".c",{
  scale:0,
  opacity:0,
  duration:.3
},"-=.15")

 },cur)

  return () =>ctx.revert() 
}, [])


  useEffect(() => {
    
    

      getPasswords()
    
  }, [user])


  const click = async (e) => {

    if (e.includes("https://")) {
      setHtt("")
    }
    else if (!e.includes("https://")) {

      setHtt("https://")
    }


  }


  const copy = (text) => {


    navigator.clipboard.writeText(text)

    toast.success(' Copied To Clipboard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }



  const edit = async (id) => {

    let ed = passwordarray.filter((item) =>
      item.id === id
    )
    // console.log(ed);
    setform(ed[0])

    let array = passwordarray.filter((item) =>
      item.id !== id
    )
    setPasswordarray(array)
    let a = await fetch(`${URL}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id }) })

  }




   const Delete = async (id) => {
    let array = passwordarray.filter((item) =>
      item.id !== id
    
  )
 
    let c = confirm("Do you really want to delete password")
    if (c) {
      let a = await fetch(`${URL}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id }) })
      
    
let data = await a.json();


if (data.success) {
  setPasswordarray(array);
  toast.success(data.message);
} else {
  toast.error(data.message);
}

    }

  }

  const handle = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  const save = async () => {
    if (form.Site.length < 1 || form.Username.length < 1 || form.Password.length < 1) {
      toast.error(' Please Fill All Fields ', {
        position: "top-right", theme: "light",
      })
    }


    else if (form.Site.length < 6) {
      toast.error(' Please Enter Correct Website Details', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
    else if (form.Username.length < 3) {
      toast.error(' Please Enter Correct Username ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
    else if (form.Password.length < 5) {
      toast.error(' Please Enter Legit Password  ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
    else {
      const newid= uuidv4();
      setPasswordarray([...passwordarray, { ...form, id: newid }])
      let a = await fetch(`${URL}/post`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: newid, email: user.email,sub:user.sub }) })
      let b = await a.json()
      toast.success(' Password Saved Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      
      setform({ Site: "", Username: "", Password: "", })

    }
  }
  return (
    <div ref={cur} className='min-h-screen bg-gray-800/40 text-white' >




      <div className=' flex flex-col gap-2 py-5 '>
      
        <p className='text-center text-2xl font-medium text-[#37e5f9fb] a'>Your Own Password Manager</p>

        <div className='flex flex-col gap-5   my-6 mx-10 sm:mx-20 md:mx-24 lg:mx-52'>
          <input type="text" name='Site' placeholder='Enter Website URL' value={form.Site} onChange={handle} className=' border-blue-400/30 placeholder:text-gray-400  border bg-gray-700/50 px-4 p-2 w-full  rounded-xl' required />
          <div className='flex flex-col md:flex-row gap-5'>

            <input type="text" name='Username' placeholder='Enter Username' className='  border-blue-400/30 border px-4 p-2 w-full md:w-[75%] placeholder:text-gray-400  bg-gray-700/50 rounded-xl' value={form.Username} onChange={handle} required />
            <input type="password" placeholder='Enter Password' name="Password" id="password" className=' border-blue-400/30 placeholder:text-gray-400  border px-4 p-2 w-full md:w-[25%] bg-gray-700/50  rounded-xl' value={form.Password}  onChange={handle} required />
          </div>


          <button className='b bg-green-500 disabled:bg-green-300  border-green-900 border-2 hover:bg-green-600 text-lg w-fit mx-auto py-2 pad px-10 rounded-full text-white font-bold flex items-center gap-2' onClick={save}  >
            <span className='hid'>
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"

                trigger="loop"
                delay="400"

              >
              </lord-icon></span>
            Add </button>

        </div>
        <div className="passwords  sm:px-48 flex flex-col items-center over c">
          <h2 className='font-bold text-2xl p-3 text-center '>Your Passwords</h2>
          {loading ? 
  <LoadingDots />:!passwordarray.length ? <div className='text-lg font-medium ' id='d'>No Passwords to show</div>
         : <table className="table-auto mx-[4vw] sm:mx-[10vw] w-[80vw] rounded-xl   overflow-hidden width mar">
            <thead className='bg-blue-200/20 text-white border  border-blue-300/50 rounded-lg shadow  e '>
              <tr className=' '>
                <th className='py-2 text-sm sm:text-lg border-r'>Site</th>

                <th className='py-2 text-sm sm:text-lg border-r'>Username</th>
                <th className='py-2 text-sm sm:text-lg border-r'>Password</th>
                <th className='py-2 px-2 text-sm sm:text-lg'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-gray-800/30 text-emerald-900 border   rounded-lg shadow  '>

              {passwordarray.map((item, i) => {
                return (
                  <tr key={i} className='text-white f' >
                    <td className='py-2 sm:text-center w-[27vw] border border-gray-600   text-left sm:text-lg'>
                      <div className='flex justify-start   items-center gap-4 h-auto whitespace-normal mx-4   '>

                        <a href={htt + item.Site} target="_blank" rel="noopener noreferrer" className=' flex flex-wrap text-wrap break-words   h-auto  ' onClick={() => click(item.Site)}> <span className='text-wrap text-center w1 w-[25vw] md:w-[24vw]'>{item.Site} </span> </a>
                        
                      </div>
                    </td>
                    <td className='py-2 text-center w-[20vw] border border-gray-600 text-sm sm:text-lg'>
                      <div className='flex  flex-col sm:flex-row mx-3 sm:mx-4 items-center gap-3 cursor-pointer '>
                        <span className=' cursor-text w-[15vw] w2 sm:w-[10vw] md:w-[15vw] text-wrap break-words '>{item.Username} </span>
                        <div className='cursor pointer  ' onClick={() => copy(item.Username)}>

                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "paddingLeft": "3px",}}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            Colors="primary:#AEEEEE" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2  text-center w-[15vw] border border-gray-600 text-sm sm:text-lg '>
                      <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mx-3 cursor-pointer '>
                        <span className='cursor-not-allowed w-[10vw] overflow-clip text-wrap '>{"*".repeat(item.Password.length)} </span>
                        <div className='cursor pointer  ' onClick={() => copy(item.Password)}>

                          <lord-icon 
                            style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                              Colors="primary:#AEEEEE" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='w-[15vw] border border-gray-600 '>
                      <div className='flex flex-col sm:flex-row  justify-center items-center'>

                        <span className='cursor-pointer' onClick={() => edit(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                              Colors="primary:#AEEEEE"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </span>
                        <span className='cursor-pointer' onClick={() => Delete(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                              Colors="primary:#AEEEEE"
                            delay="1500"
                            style={{ "width": "25px", "height": "25px" }}>
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
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>

  )
}

export default Manager
