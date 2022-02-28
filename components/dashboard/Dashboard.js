import dashboardStyles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={dashboardStyles.wrapper}>
      <img className={dashboardStyles.dashboardImg} src='/dashboard.svg' />
      <div className={dashboardStyles.dashboardText}>
        <h2 className={dashboardStyles.dashboardTitle}>Hi, Username</h2>
        <p className={dashboardStyles.dashboardPara}>Welcome to the Quizzly</p>
      </div>
    </div>
  )
}
export default Dashboard
