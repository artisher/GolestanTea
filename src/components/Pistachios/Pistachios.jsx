import image9 from "../../../dist/images/9.jpg"

const Pistachios = () => {
    return (
        <div>
            <img src={image9} className="bgImg PistachiosImg" />
            <div className="boxInSlider sliderInProductsSection2">
                <h4 className="h4InSlider">پسته های گلستان</h4>
                <h5 className="h5InSlider">معرفی محصول</h5>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <div className="selfCenter">
                <h4 className="boldWord h4InProductsSection">آجیل های خوش خنده
                </h4>
                <p className="colorfull">خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی
                    می‌نامند، یك پمپ
                    خون‌ساز
                    قوی و
                    تسكین دهنده قلب و اعصاب.</p>
                <br />
                <br />
                <p className="colorfull"><span className="boldWord">پسته گلستان</span> اما حسابش از دیگر پسته‌های بازار
                    جداست. مرغوب‌ترین پسته
                    خام
                    از
                    بهترین باغ‌های پسته ایران
                    دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و
                    نمک،
                    بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.</p>
                <br />
                <br />
                <button className="btn"><a href="#" className="aInBtn2"> ناتس گلستان </a>
                </button>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default Pistachios;