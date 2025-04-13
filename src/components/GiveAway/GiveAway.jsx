import image2 from "../../images/2.png";

const GiveAway = () => {
    return (
        <div>
            <div className="flex h-[500px] max-md:h-[700px] justify-center [background:linear-gradient(190deg,_rgba(252,252,252,1)_0%,_rgba(246,246,246,1)_35%,_rgba(238,238,238,1)_69%,_rgba(200,200,200,1)_100%)] p-4 ">
                <div className="w-[450px] top-[150px] absolute ">
                    <h1 className="text-red-600 text-[30px] mt-[200px] ">قرعه‌کشی مصرف‌کنندگان گلستان</h1>
                    <h2 className="text-[20px] text-gray-700 ">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</h2>
                    <p className="line-clamp-4 leading-loose text-gray-500 ">هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی
                        روی
                        بسته به شماره 30007405 در
                        قرعه کشی‌های دوره‌ای سال 1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
                    </p>
                </div>
                <div className="bg-amber-50 h-[50px] p-[10px] absolute top-[400px] w-[130px] flex justify-center items-center rounded-md md:right-[500px] border border-gray-500">
                    <a href="#" className="text-gray-500">
                        اطلاعات بیشتر
                    </a>
                </div>
                <img src={image2} alt="" className="absolute left-90 top-30 max-md:top-[330px] max-md:left-1/2 -translate-x-1/2 " />

            </div>
        </div>
    );
}

export default GiveAway;