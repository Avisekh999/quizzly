import DashboardProvider from '../context/dashboard/DashboardContext'
import AppLayout from '../components/layout/AppLayout'
import '../styles/fonts/font-styles.css'
import '../styles/globals.css'
// import  "../components/header.css";

const App = ({ Component, pageProps }) => {
  return (
    <DashboardProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </DashboardProvider>
  )
}
export default App