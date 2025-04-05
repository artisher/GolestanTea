import telegram from "../../../dist/images/telegram.png";
import facebook from "../../../dist/images/facebook.png";
import linkdin from "../../../dist/images/linkdin.png";
import instagram from "../../../dist/images/instagram.png";
import aparat from "../../../dist/images/aparat.png";
import "../IconsFooter/IconsFooter.css"
const IconsFooter = () => {
    return (
        <div className="iconSection">
            <a href="#"><img src={facebook} alt="" className="facebookimg" /></a>
            <a href="#"><img src={linkdin} alt="" className="linkdinimg" /></a>
            <a href="#"><img src={instagram} alt="" className="instagramimg" /></a>
            <a href="#"><img src={telegram} alt="" className="telegramimg" /></a>
            <a href="#"><img src={aparat} alt="" className="aparatimg" /></a>

        </div>
    );
}

export default IconsFooter;