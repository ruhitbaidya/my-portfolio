import { BsGoogle } from "react-icons/bs";
import './Style.css'
import { useContext } from "react";
import { ContextProvide } from "../../UserAuth/UserAuth";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createUser, googleLogin} = useContext(ContextProvide)
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then((res)=> {
            if(res.user){
                reset()
                toast.success('user Create SuccessFully')
            }            
        })
        .catch((err)=> {
            if(err){
                toast.error(err)
            }
        })
      }
    const handelGoogleLogin = ()=>{
       googleLogin()
       .then((res)=> {
        if(res.user){
            reset()
            toast.success('user Create SuccessFully')
        }            
    })
    .catch((err)=> {
        if(err){
            toast.error(err)
        }
    })
    }
  return (
    <div className='regImage'>
        <div className='bg-colos'>
            <div className='flex justify-center items-center h-full'> 
                <ToastContainer />
               <div className='w-[50%] mainbg-clor'>
               <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div>
                    <h2 className='text-3xl text-center font-[700]'>Register</h2>
                </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input {...register("name")} className='w-full p-[10px] rounded-lg focus:border-l-2 focus:outline-none' placeholder='Name' type="text" />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input {...register("email")} className='w-full p-[10px] rounded-lg focus:border-l-2 focus:outline-none' placeholder='Email' type="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Password</label>
                        <input {...register("password")} className='w-full p-[10px] rounded-lg focus:border-l-2 focus:outline-none' placeholder='Password' type="password" />
                    </div>
                    <div className='mt-[20px]'>
                        <button className='w-full py-[8px] rounded-lg border border-gray-200 text-gray-200 hover:bg-white hover:text-gray-700'>Submit</button>
                    </div>
                </form>
                <div>
                    <button onClick={handelGoogleLogin} className="mt-[30px] bg-white p-[10px] flex justify-center items-center gap-[15px] rounded-lg">
                        <span><BsGoogle /></span>
                        <span>Google Login</span>
                    </button>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register