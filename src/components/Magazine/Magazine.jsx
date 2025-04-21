import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
const Magazine = () => {
    return (
        <div>
            <div className="">
                <h4 className=" text-red-600 text-[32px] !font-bold !mr-[160px] !mb-[50px]">مجله گلستان</h4>
                <div className=" flex flex-wrap justify-center gap-[20px] [background-color:rgb(168,222,152)] !pb-[50px]">
                    <div className=" w-[350px] bg-white !mt-[100px] h-[600px]">
                        <img src={image11} alt="" className="w-full" />
                        <div className="!p-[15px] w-[350px] h-[600px] ">
                            <h4 className="text-[20px]  text-red-600 !font-bold !mb-[8px]">ماکارونی با سبزیجات</h4>
                            <p>ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد.
                                در
                                این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…</p>

                            <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 !mt-[20px]">
                                <a href="#" className="text-gray-500">
                                    ادامه مطلب
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] bg-white !mt-[100px] h-[600px]">
                        <img src={image12} alt="" className="w-full" />
                        <div className="!p-[15px] w-[350px] h-[600px]">
                            <h4 className="text-[20px] text-red-600 !font-bold !mb-[8px]">سوپ مکزیکی</h4>
                            <p>اگوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به
                                مدت
                                نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…</p>
                            <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 !mt-[20px]">
                                <a href="#" className="text-gray-500">
                                    ادامه مطلب
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" max-md:hidden  w-[350px] bg-white !mt-[100px] h-[600px]">
                        <img src={image13} alt="" className="w-full" />
                        <div className="!p-[15px] w-[350px] h-[600px]">
                            <h4 className="text-[20px] text-red-600 !font-bold !mb-[8px]">چیلاکیله</h4>
                            <p>احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را
                                تهیه کنید
                                و نوش جان کنید جزئی جدانشدنی از فهرست</p>
                            <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 !mt-[20px] ">
                                <a href="#" className="text-gray-500">
                                    ادامه مطلب
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Magazine;