import "../VideoMag/VideoMag.css"


const VideoMag = () => {
    return (
        <div>
            <div className="videoSection">
                <div className="box1 --boxes">
                    
                    <h4 className="h4InBoxes boldWord">سالاد نودل</h4>
                    <p className="pInBoxes">انودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك
                        نودل
                        هاتی‌كارا
                        می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.</p>
                    <button className="btn "> <a href="#" className="aInBtn4">ویدیو های بیشتر</a></button>
                </div>
                <div className="box2 --boxes">
                    <h4 className="h4InBoxes  boldWord ">اینستاگرام هاتی نودل</h4>
                    <p className="pInBoxes">انودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم
                        عالی،‌ ارزش
                        غذایی
                        بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.</p>
                    <button className="btn"> <a href="#" className="aInBtn4">ویدیو های بیشتر</a></button>
                </div>
                <div className="box3  --boxes hidderVideo">
                    <h4 className="h4InBoxes boldWord">برنج گلستان</h4>
                    <p className="pInBoxes">اعطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌
                        كیفیت
                        زندگی بالاتر
                        از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.</p>
                    <button className="btn"><a href="#" className="aInBtn4">ویدیو های بیشتر</a> </button>
                </div>
            </div>
        </div>
    );
}

export default VideoMag;