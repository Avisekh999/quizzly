const Layout = ({ children }) => {
    return <>
        {/* Show this if on larger screens */}
        <div id="notification-wrapper"> 
            <div className="notification">
                <h2>This is a mobile-first website and hence cannot be accessed on your PC. So, pick up your phone, and let’s get started.</h2>
            </div>
        </div> 
        {/* Show this if on smaller screens */}
        <div id="app">{children}</div>
    </>
}
export default Layout