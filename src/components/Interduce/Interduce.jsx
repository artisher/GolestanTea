import image4 from "../../images/4.jpg";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.png";
import image8 from "../../images/8.png";
import "../Interduce/Interduce.css"
const Interduce = () => {
    return (
        <div>
            <div className="secSection">
                <br />
                <hr />
                <div className="w-[65%] !m-auto justify-center leading-10">
                    <h3 className="!mb-[10px] text-[23px] text-red-600 !font-semibold">معرفی گلستان
                    </h3>
                    <p className="colorfull">آنچه که امروز با نام مجموعه <span className="boldWord">گلستان </span> می‌شناسیم در
                        سال 1329 بنیان
                        نهاده
                        شد.
                        زمانی که شرکت
                        گلستان فعالیت خود
                        را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به
                        تدریج
                        تقویت
                        شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش
                        پیدا
                        کرد.
                        <span className="boldWord">گلستان</span> پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های
                        اندوخته
                        شده در
                        این سال‌ها
                        کالاهایی قابل
                        اعتماد و با کیفیت تولید نماید.
                    </p>
                    <br />
                    <br />
                    <p className="colorfull">هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای
                        دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی
                        و
                        مشتری
                        محوری از جمله عوامل مهم در استراتژی <span className="boldWord">شرکت
                            گلستان </span> است.</p>

                    <br />
                    <br />
                    <h3 className="!mb-[10px] text-[23px] text-red-600 !font-semibold">محصولات گلستان
                    </h3>
                    <p className="colorfull"><span className="boldWord"> نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان
                        دارد. گلستان
                        ممتازترین
                        محصولات خود را با
                        این نام تجاری
                        عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر
                        بفرد
                        دارند
                        و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.</p>
                </div>
            </div>
            <div className="boxInSecSection flex !mt-[100px] colorfull justify-center gap-[22px]">
                <div className="box1 boxes">
                    <img src={image8} alt="" />
                    <h4 className="!p-[20px] border-b-2">مشتریان گلستان</h4>
                    <br />
                </div>
                <div className="box2 boxes">
                    <img src={image7} alt="" />
                    <h4 className="!p-[20px] border-b-2">محصولات گلستان</h4>
                    <br />
                </div>
                <div className="box3 boxes">
                    <img src={image6} alt="" />
                    <h4 className="!p-[20px] border-b-2"> مراكز فروش
                    </h4>
                    <br />
                </div>
                <div className="box4 boxes">
                    <img src={image5} alt="" />
                    <h4 className="!p-[20px] border-b-2"> سرمایه انسانی</h4>
                    <br />

                </div>


            </div>
            <br />
                    <br />
                    <br />
                    <br />
                    <br />
            <hr />
            <br />
        </div>
    );
}

export default Interduce;