import image8 from "../../../dist/images/8.jpg"

const Tea = () => {
    return (
        <div>
            <img src={image8} className="img" />
            <div className="boxInSlider sliderInProductsSection">
                <h4 className="h4InSlider">چای گلستان</h4>
                <h5 className="h5InSlider">معرفی محصول</h5>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className="selfCenter">
                <h4 className="boldWord h4InProductsSection">سابقه‌ای به قدمت یک عمر

                </h4>
                <p className="colorfull">چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای
                    آغاز یك معاشرت
                    دل‌چسب.
                    بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری
                    داده،‌
                    حس
                    خوب آرامش را به همراه دارد.</p>
                <br />
                <br />
                <p className="colorfull">برای مردمان ایران زمین نام <span className="boldWord">گلستان</span> با چای پیوند
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
                <button className="btn btn3"><a href="#" className="aInBtn2"> محصولات چای </a> </button>
                <br />
                <br />
                <br />
                <br />
            </div>

        </div>
    );
}

export default Tea;