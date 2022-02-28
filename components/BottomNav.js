import { useContext, useState, useEffect } from 'react'
import { DashboardContext } from '../context/dashboard/DashboardContext'

// == Icons ==
import { FiHome } from 'react-icons/fi' // Feather Icons
import { MdOutlineLeaderboard, MdLogout } from 'react-icons/md' // Material Designs
import { GiDiamondTrophy } from 'react-icons/gi' // Grommet Icons

// == Stylesheets ==
import bottomNavStyles from './BottomNav.module.css'

const Header = () => {
  const { currentDashboardPage, updateCurrentDashboardPage } =
    useContext(DashboardContext)
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    setActiveTab(currentDashboardPage)
  }, [currentDashboardPage])

  return (
    <div className={bottomNavStyles.wrapper}>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={activeTab === 'dashboard' ? bottomNavStyles.activeTab : ''}
        onClick={() => updateCurrentDashboardPage('dashboard')}
      >
        <FiHome size={25} />
        {activeTab === 'dashboard' && <span>Dashboard</span>}
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={activeTab === 'leaderboard' ? bottomNavStyles.activeTab : ''}
        onClick={() => updateCurrentDashboardPage('leaderboard')}
      >
        <MdOutlineLeaderboard size={25} />
        {activeTab === 'leaderboard' && <span>Leaderboard</span>}
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={activeTab === 'quizzes' ? bottomNavStyles.activeTab : ''}
        onClick={() => updateCurrentDashboardPage('quizzes')}
      >
        <GiDiamondTrophy size={25} />
        {activeTab === 'quizzes' && <span>Quizzes</span>}
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={activeTab === 'logout' ? bottomNavStyles.activeTab : ''}
        onClick={() => updateCurrentDashboardPage('logout')}
      >
        <MdLogout size={25} />
        {activeTab === 'logout' && <span>Logout</span>}
      </div>
    </div>
  )
}

export default Header
