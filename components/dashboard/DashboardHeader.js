import { useContext } from 'react'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import { MdAddBox } from 'react-icons/md'
import { DashboardContext } from '../../context/dashboard/DashboardContext'
import dashboardHeaderStyles from './DashboardHeader.module.css'

const DashboardHeader = () => {
  const { updateCurrentDashboardPage } = useContext(DashboardContext)
  return (
    <div className={dashboardHeaderStyles.wrapper}>
      {/* Logo */}
      <div className={dashboardHeaderStyles.logo}>
        <img src='/logo.png' alt='quizzly logo' />
      </div>
      <div className={dashboardHeaderStyles.menuItems}>
        {/* Brains */}
        <div className={`${dashboardHeaderStyles.menuItem} ${dashboardHeaderStyles.brainChip}`}>
          <IconButton
            color='success'
            size='large'
            sx={{ p: 0 }}
            onClick={() => updateCurrentDashboardPage('payment')}
          >
            <MdAddBox />
          </IconButton>
          <span>10</span>
          <div className={dashboardHeaderStyles.imgWrapper}>
            <img src='/brain.png' alt='quizzly brain icon' />
          </div>
        </div>
        {/* Profile */}
        <div
          className={`${dashboardHeaderStyles.menuItem} ${dashboardHeaderStyles.profileImg}`}
          onClick={() => updateCurrentDashboardPage('profile')}
        >
          <img src='/profile.jpg' alt='quizzly user profile image' />
        </div>
      </div>
    </div>
  )
}
export default DashboardHeader
