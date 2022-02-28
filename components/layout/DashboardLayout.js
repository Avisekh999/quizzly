import DashboardHeader from '../dashboard/DashboardHeader'
import BottomNav from '../BottomNav'
import DasboardLayoutStyles from './DashboardLayout.module.css'

const DashboardLayout = ({ children }) => {
  return (
    <>
      {/* Dashboard Header */}
      <DashboardHeader />
      <div className={`container ${DasboardLayoutStyles.mainContent}`}>
        {/* Dashboard */}
        <div>{children}</div>
      </div>
      {/* Bottom Navigation */}
      <BottomNav />
    </>
  )
}
export default DashboardLayout
