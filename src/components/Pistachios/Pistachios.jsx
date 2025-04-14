
import image10 from "../../images/10.jpg";
const Pistachios = () => {
    return (
        <div>
            <img src={image10} alt="" className="w-full border-b-35 border-yellow-200" />
            <div className="w-full flex justify-center">
                <div className=" bg-red-600 text-white absolute !mt-[-114px] !pr-[2%] !pl-[8%] !pb-[1%] !t-[1%] max-md:w-full">
                    <h4 className=" text-[40px]">پسته گلستان</h4>
                    <h5 className="text-[20px]">معرفی محصول</h5>
                </div>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <div className="w-[55%] !m-auto leading-9">
                <h4 className="text-red-600 !font-semibold text-[20px] ">آجیل های خوش خنده
                </h4>
                <p className="text-gray-500">خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی
                    می‌نامند، یك پمپ
                    خون‌ساز
                    قوی و
                    تسكین دهنده قلب و اعصاب.</p>
                <br />
                <br />
                <p className="text-gray-500"><span className="text-red-600 !font-semibold">پسته گلستان</span> اما حسابش از دیگر پسته‌های بازار
                    جداست. مرغوب‌ترین پسته
                    خام
                    از
                    بهترین باغ‌های پسته ایران
                    دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و
                    نمک،
                    بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.</p>
                <br />
                <br />
                <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 ">
                    <a href="#" className="text-gray-500">
                        محصولات چای
                    </a>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default Pistachios;