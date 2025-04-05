import "../GiveAway/GiveAway.css"
import image14 from "../../../dist/images/14.png"
const GiveAway = () => {
    return (
        <div>
            <div className="firstSection">
                <div className="contentInFirstSection">
                    <h1 className="h1InFirstSection">قرعه‌کشی مصرف‌کنندگان گلستان</h1>
                    <h2 className="h2InFirstSection">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</h2>
                    <p className="pInFirstSection">هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی
                        روی
                        بسته به شماره 30007405 در
                        قرعه کشی‌های دوره‌ای سال 1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
                    </p>
                </div>

                <button className="btnInFirstSection btn"><a href="#" className="aInBtn">اطلاعات بیشتر</a></button>
                <img src={image14} className="imgInFirstSection" />

            </div>
        </div>
    );
}

export default GiveAway;