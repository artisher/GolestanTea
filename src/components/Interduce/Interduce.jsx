import image3 from "../../../dist/images/3.png"
import image4 from "../../../dist/images/4.png"
import image5 from "../../../dist/images/5.png"
import image6 from "../../../dist/images/6.png"
import "../Interduce/Interduce.css"
const Interduce = () => {
    return (
        <div>
            <div className="secSection">
                <br />
                <hr />
                <div className="contentInInterduce">
                    <h3 className="h3InFirstSection boldWord headers">معرفی گلستان
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
                    <h3 className="h3InFirstSection boldWord headers">محصولات گلستان
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
            <div className="boxInSecSection colorfull boxHidder">
                <div className="box1 boxes">
                    <img src={image3} />
                    <h4 className="hInBoxes">مشتریان گلستان</h4>
                </div>
                <div className="box2 boxes">
                    <img src={image4} />
                    <h4 className="hInBoxes">محصولات گلستان</h4>
                </div>
                <div className="box3 boxes">
                    <img src={image5} />
                    <h4 className="hInBoxes"> مراكز فروش
                    </h4>
                </div>
                <div className="box4 boxes">
                    <img src={image6} />
                    <h4 className="hInBoxes"> سرمایه انسانی</h4>
                </div>

            </div>
            <hr />
            <br />
        </div>
    );
}

export default Interduce;