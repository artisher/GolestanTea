import GiveAway from "../GiveAway/GiveAway";
import Interduce from "../Interduce/Interduce";
import Menu from "../Menu/Menu";
import Products from "../Products/Products";
import "../App/App.css"
import Magazine from "../Magazine/Magazine";
import VideoMag from "../VideoMag/VideoMag";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
const App = () => {
    /* created for 1920px , 1000px, 340px*/
    return (<div>
        <div className="main flex justify-center overflow-x-hidden">
            <div className=" w-full m-auto md:w-[81.2%] border">
                <Menu />
                <GiveAway />
                <Interduce />
                <Products />
                <Magazine />
                <VideoMag />
                <Resume />
                <Footer />
            </div>
        </div>
    </div>
    );
}

export default App;