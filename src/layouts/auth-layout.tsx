import { Outlet } from 'react-router-dom'

function AuthenticationLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
    <img src="/assets/img/bg.png" alt="" className='absolute w-full h-full opacity-20 object-cover' />
      <Outlet />

    </div>
  )
}

export default AuthenticationLayout