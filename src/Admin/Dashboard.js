import Menu from "./Menu";
import { Outlet } from 'react-router-dom';
function Dashboard() {
  
   return (
      <>
        <Menu />
        <Outlet />
      </>
    
   )
}

export default Dashboard;