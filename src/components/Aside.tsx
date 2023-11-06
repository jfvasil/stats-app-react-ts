import DesktopSideBar from "./DesktopSideBar"
import MobileDrawer from "./MobileDrawer"


const Aside = () => {
  return (
    <>
    <div className="lg:hidden">
        <MobileDrawer />
    </div>
    <div className="hidden lg:block">
        <DesktopSideBar />
    </div>
    </>
  )
}

export default Aside