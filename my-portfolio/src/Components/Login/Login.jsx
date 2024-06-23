import { BsGoogle } from "react-icons/bs";
import './Style.css'

const Login = () => {
  return (
    <div className='regImage'>
        <div className='bg-colos'>
            <div className='flex justify-center items-center h-full'> 
               <div className='w-[50%] mainbg-clor'>
               <form className='space-y-5'>
                <div>
                    <h2 className='text-3xl text-center font-[700]'>Login</h2>
                </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input className='w-full p-[10px] rounded-lg focus:border-l-2 focus:outline-none' placeholder='Email' type="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Password</label>
                        <input className='w-full p-[10px] rounded-lg focus:border-l-2 focus:outline-none' placeholder='Password' type="password" />
                    </div>
                    <div className='mt-[20px]'>
                        <button className='w-full py-[8px] rounded-lg border border-gray-200 text-gray-200 hover:bg-white hover:text-gray-700'>Submit</button>
                    </div>
                </form>
                <div>
                    <button className="mt-[30px] bg-white p-[10px] flex justify-center items-center gap-[15px] rounded-lg">
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

export default Login