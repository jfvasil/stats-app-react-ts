import Aside from "../components/Aside"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MultiCard from "../components/MultiCard"
import Logout from "../components/Logout"

const Profile = () => {
  return (
    <>
    <div className="pb-5 z-9">
    <Header />
    </div>
    <div className=" container pt-16">
        <div className="flex">
            <Aside />
            <div className="flex-4">
                <MultiCard />
            </div>
        </div>
    </div>
    <Logout />
    <Footer />
    </>
  )
}

export default Profile