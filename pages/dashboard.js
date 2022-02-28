import { useContext } from 'react'
import { DashboardContext } from '../context/dashboard/DashboardContext'

// == Dashboard Layout for Bottom-Navigation ==
import DashboardLayout from "../components/layout/DashboardLayout"

// == Dashboard Pages ==
import Dashboard from "../components/dashboard/Dashboard"
import Leaderboard from "../components/dashboard/Leaderboard"
import Quizzes from "../components/dashboard/Quizzes"
import Settings from "../components/dashboard/Settings"
import Payment from "../components/dashboard/Payment"
import Profile from "../components/dashboard/Profile"

const DashboardPage = () => {
    const { currentDashboardPage } = useContext(DashboardContext)

    // == Handle which page to render based on route ==
    let dashboardPageToRender
    if(currentDashboardPage === 'dashboard'){
        dashboardPageToRender = <Dashboard />
    } else if(currentDashboardPage === 'leaderboard'){
        dashboardPageToRender = <Leaderboard />
    } else if(currentDashboardPage === 'quizzes'){
        dashboardPageToRender = <Quizzes />
    } else if(currentDashboardPage === 'settings'){
        dashboardPageToRender = <Settings />
    } else if(currentDashboardPage === 'payment') {
        dashboardPageToRender = <Payment />
    } else if(currentDashboardPage === 'profile') {
        dashboardPageToRender = <Profile />
    }

    return <DashboardLayout>
        {dashboardPageToRender}
    </DashboardLayout>
}
export default DashboardPage