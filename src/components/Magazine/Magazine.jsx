import "../Magazine/Magazine.css"
import image12 from "../../../dist/images/12.jpg"
import image11 from "../../../dist/images/11.jpg"
import image10 from "../../../dist/images/10.jpg"
const Magazine = () => {
    return (
        <div>
            <div className="magSection">
                <h4 className="h4InMagSection boldWord">مجله گلستان</h4>
                <div className="boxesInMagSection">
                    <div className="box1 --boxes hidderMag">
                        <img src={image10} alt="" />
                        <div className="contentInBoxes">
                            <h4 className="h4InBoxes boldWord ">ماکارونی با سبزیجات</h4>
                            <p>ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد.
                                در
                                این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…</p>

                            <button className="btn aInBtn3">ادامه مطلب</button>
                        </div>
                    </div>
                    <div className="box2 --boxes"><img src={image11} alt="" />
                        <div className="contentInBoxes">
                            <h4 className="h4InBoxes boldWord">سوپ مکزیکی</h4>
                            <p>اگوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به
                                مدت
                                نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…</p>
                            <button className="btn aInBtn3">ادامه مطلب</button>
                        </div>
                    </div>
                    <div className="box3 --boxes"><img src={image12} alt="" />
                        <div className="contentInBoxes">
                            <h4 className="h4InBoxes boldWord">چیلاکیله</h4>
                            <p>ااحتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را
                                تهیه کنید
                                و نوش جان کنید جزئی جدانشدنی از فهرست</p>
                            <button className="btn aInBtn3">ادامه مطلب</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Magazine;