import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";



const VideoMag = () => {
    return (
        <div>
            <div className=" flex gap-[15px] justify-center !m-[60px]">
                <div className=" w-[300px] shadow-lg h-[500px]">
                    <img src={image11} alt="" className="w-full " />
                    <h4 className=" text-red-600 !font-bold text-[19px]">سالاد نودل</h4>
                    <p className="!mb-[10px]">انودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك
                        نودل
                        هاتی‌كارا
                        می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.</p>
                    <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 ">
                        <a href="#" className="text-gray-500">
                            ویدیو های بیشتر
                        </a>
                    </div>  </div>
                <div className=" w-[300px] shadow-lg h-[500px]">
                    <img src={image12} alt="" className="w-full" />
                    <h4 className="text-red-600 !font-bold text-[19px] ">سالاد نودل</h4>
                    <p className="!mb-[10px]">انودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك
                        نودل
                        هاتی‌كارا
                        می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.</p>
                    <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 ">
                        <a href="#" className="text-gray-500">
                            ویدیو های بیشتر
                        </a>
                    </div>  </div>
                <div className=" w-[300px] shadow-lg max-md:hidden h-[500px]">
                    <img src={image13} alt="" className="w-full" />
                    <h4 className="text-red-600 !font-bold text-[19px]">سالاد نودل</h4>
                    <p className="!mb-[10px]">انودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك
                        نودل
                        هاتی‌كارا
                        می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.</p>
                    <div className="bg-amber-50 h-[50px] p-[10px] absolute w-[130px] flex justify-center items-center rounded-md  border border-gray-500 ">
                        <a href="#" className="text-gray-500">
                            ویدیو های بیشتر
                        </a>
                    </div>  </div>
            </div>
        </div >
    );
}

export default VideoMag;