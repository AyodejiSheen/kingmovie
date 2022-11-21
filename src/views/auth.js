import { Outlet } from 'react-router-dom'



export const Auth = () => {
    return(
        <>
        
        <section className="auth_page  flex flex-wrap min-h-screen w-screen">
            <Outlet/>
        </section>
        
        </>
    )
}