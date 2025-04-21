import "../Footer/Footer.css"
import image23 from "../../images/23.png";
import image22 from "../../images/22.png";
import image21 from "../../images/21.png";
import image20 from "../../images/20.png";
import IconsFooter from "../IconsFooter/IconsFooter";
const Footer = () => {
    return (<div>
        <div className="footer">
            <div className="icons">
                <IconsFooter />
            </div>
            <div className="border-t-[30px] border-red-600 bg-[#282828]">
                <div className="text-white text-center flex gap-[30px] justify-center flex-wrap">
                    <div className="">
                        <img src={image23} alt="" />
                        <div className="">
                            <h5 className=" border-y-1 border-[#828991]">چای گلستان</h5>
                            <h6><a href="#" >چای ممتاز هندوستان​</a></h6>
                            <h6><a href="#">چای ممتاز ارل گری​</a></h6>
                            <h6><a href="#">چای سيلان عطری</a></h6>
                            <h6><a href="#">چای ممتاز سيلان​</a></h6>
                            <h6><a href="#">چای صبحانه گلستان​</a></h6>
                        </div>
                    </div>
                    <div className="">
                        <img src={image22} alt="" />
                        <div className="">
                            <h5 className=" border-y-1 border-[#828991]">تی بگ گلستان</h5>
                            <h6><a href="#">تی بگ بلک لاين</a></h6>
                            <h6><a href="#">تی بگ ارل گری</a></h6>
                            <h6><a href="#">دمنوش نعناع</a></h6>
                            <h6><a href="#">دمنوش بابونه</a></h6>
                            <h6><a href="#">منوش چای سبز</a></h6>
                        </div>
                    </div>
                    <div className="">
                        <img src={image21} alt="" />
                        <div className="">
                            <h5 className=" border-y-1 border-[#828991]">ادویه گلستان</h5>
                            <h6><a href="#">زعفران ممتاز خراسان</a></h6>
                            <h6><a href="#">ادویه کاری</a></h6>
                            <h6><a href="#">ادویه ماست و خیار</a></h6>
                            <h6><a href="#">فلفل سياه خالص</a></h6>
                            <h6><a href="#">زردچوبه ممتاز</a></h6>
                        </div>
                    </div>
                    <div className="">
                        <img src={image20} alt="" />
                        <div className="">
                            <h5 className=" border-y-1 border-[#828991]">حبوبات گلستان</h5>
                            <h6><a href="#">لوبيا قرمز ممتاز</a></h6>
                            <h6><a href="#">لوبيا چيتی گلستان</a></h6>
                            <h6><a href="#">عدس كانادايی</a></h6>
                            <h6><a href="#">نخود زودپز كرمانشاه</a></h6>
                            <h6><a href="#">لوبيا سفيد گلستان</a></h6>
                        </div>
                    </div>
                </div>
                <div className=" text-center justify-center !mt-[30px] text-[#bbbbbb] px-[10px] text-[13px]">
                    <h6 className="text-[13px]">All Right Reserved Golestan Company 2022-2025
                    </h6>
                    <p className="text-[#828991]">Design By: Golestan Studio
                    </p>
                </div>
            </div>

        </div>
    </div>);
}

export default Footer;