import "../Footer/Footer.css"
import IconsFooter from "../IconsFooter/IconsFooter";
const Footer = () => {
    return (<div>
        <div className="footer">
            <div className="icons">
                <IconsFooter />
            </div>
            <div className="mainFooter">
                <div className="sectionsInFooter">
                    <div className="sec1">
                       //
                        <div className="contentInfooter">
                            <h5 className="h5InFooter">چای گلستان</h5>
                            <h6><a href="#">چای ممتاز هندوستان​</a></h6>
                            <h6><a href="#">چای ممتاز ارل گری​</a></h6>
                            <h6><a href="#">چای سيلان عطری</a></h6>
                            <h6><a href="#">چای ممتاز سيلان​</a></h6>
                            <h6><a href="#">چای صبحانه گلستان​</a></h6>
                        </div>
                    </div>
                    <div className="sec2"> //
                        <div className="contentInfooter">
                            <h5 className="h5InFooter">تی بگ گلستان</h5>
                            <h6><a href="#">تی بگ بلک لاين</a></h6>
                            <h6><a href="#">تی بگ ارل گری</a></h6>
                            <h6><a href="#">دمنوش نعناع</a></h6>
                            <h6><a href="#">دمنوش بابونه</a></h6>
                            <h6><a href="#">منوش چای سبز</a></h6>
                        </div>
                    </div>
                    <div className="sec3"> ///
                        <div className="contentInfooter">
                            <h5 className="h5InFooter">ادویه گلستان</h5>
                            <h6><a href="#">زعفران ممتاز خراسان</a></h6>
                            <h6><a href="#">ادویه کاری</a></h6>
                            <h6><a href="#">ادویه ماست و خیار</a></h6>
                            <h6><a href="#">فلفل سياه خالص</a></h6>
                            <h6><a href="#">زردچوبه ممتاز</a></h6>
                        </div>
                    </div>
                    <div className="sec4">///
                        <div className="contentInfooter">
                            <h5 className="h5InFooter">حبوبات گلستان</h5>
                            <h6><a href="#">لوبيا قرمز ممتاز</a></h6>
                            <h6><a href="#">لوبيا چيتی گلستان</a></h6>
                            <h6><a href="#">عدس كانادايی</a></h6>
                            <h6><a href="#">نخود زودپز كرمانشاه</a></h6>
                            <h6><a href="#">لوبيا سفيد گلستان</a></h6>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <h6>All Right Reserved Golestan Company 2022-2025
                    </h6>
                    <p>Design By: Golestan Studio
                    </p>
                </div>
            </div>

        </div>
    </div>);
}

export default Footer;