import image4 from "../../images/4.jpg";

const Rice = () => {
    return (

        <div>

            <img src={image4} alt="" className="w-full border-b-35 border-yellow-200" />
            <div className="w-full flex justify-center">
                <div className=" bg-red-600 text-white absolute !mt-[-114px] !pr-[2%] !pl-[8%] !pb-[1%] !t-[1%] max-md:w-full">
                    <h4 className=" text-[40px]">برنج گلستان</h4>
                    <h5 className="text-[20px]">معرفی محصول</h5>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <div className="w-[55%] !m-auto leading-9">
                <h4 className="text-red-600 !font-semibold text-[20px]">رکن اول غذای ایرانی
                </h4>
                <p className=" text-gray-500">مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج
                    ایرانی،‌ طارم و
                    هاشمی. این برنج‌ها از
                    بهترین
                    شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه
                    بسته‌بندی
                    و در
                    وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه
                    نیست.
                    با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.</p>
                <div className="!mt-[20px]">
                    <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500">
                        <a href="#" className="text-gray-500">
                            محصولات برنج
                        </a>
                    </div>
                    <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 !mr-[190px]">
                        <a href="#" className="text-gray-500">
                            آشپزخانه گلستان
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Rice;
