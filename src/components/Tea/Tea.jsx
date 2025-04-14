import image9 from "../../images/9.jpg";
const Tea = () => {
    return (
        <div>
            <img src={image9} alt="" className="w-full !mt-[30px] border-b-35 border-yellow-200" />
            <div className="w-full flex justify-center">
                <div className=" bg-red-600 text-white absolute !mt-[-114px] !pr-[2%] !pl-[8%] !pb-[1%] !t-[1%] max-md:w-full">
                    <h4 className=" text-[40px]">چای گلستان</h4>
                    <h5 className="text-[20px]">معرفی محصول</h5>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className=" w-[55%] !m-auto leading-9">
                <h4 className=" text-red-600 !font-semibold text-[20px]">سابقه‌ای به قدمت یک عمر

                </h4>
                <p className="text-gray-500">چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای
                    آغاز یك معاشرت
                    دل‌چسب.
                    بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری
                    داده،‌
                    حس
                    خوب آرامش را به همراه دارد.</p>
                <br />
                <br />
                <p className="text-gray-500">برای مردمان ایران زمین نام <span className="text-red-500 !font-semibold">گلستان</span> با چای پیوند
                    خورده است؛‌
                    قدیمی‌ترین
                    محصول
                    مجموعه گلستان،‌ با مدرن‌ترین
                    و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به
                    نام
                    گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.</p>
                <br />
                <br />
                <br />
                <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 !mr-[10px]">
                    <a href="#" className="text-gray-500">
                         محصولات چای
                    </a>
                </div><br />
                <br />
                <br />
                <br />
            </div>

        </div>
    );
}

export default Tea;