import React, { useState, useEffect } from 'react'

// Create context object
export const DashboardContext = React.createContext()

// Create context provider
const DashboardProvider = ({ children }) => {
  // == Initial State ==
  const [state, setState] = useState({ currentDashboardPage: '' })

  // == Update current dashboard page ==
  const updateCurrentDashboardPage = (page) => {
    localStorage.setItem('currentDashboardPage', page)
    setState({ ...state, currentDashboardPage: page })
  }

  useEffect(() => {
    setState({ ...state, currentDashboardPage: localStorage.getItem('currentDashboardPage') || 'dashboard' })
  },[])

  return (
    <DashboardContext.Provider
      value={{
        currentDashboardPage: state.currentDashboardPage,
        updateCurrentDashboardPage,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
