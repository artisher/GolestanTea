import ResumeContent from "../ResumeContent/ResumeContent";
import "../Resume/Resume.css";
import image14 from "../../images/14.jpg"
const Resume = () => {
    return (<div>
        <div className="flex flex-col items-center flex-wrap !pb-[280px] bg-emerald-950 w-full border-b-35 border-yellow-200">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h5 className="headers text-[20px] text-white m-2">مسئوليت‌های اجتماعی شركت گلستان
            </h5>

            <hr />
            <h5 className="text-[22px] text-emerald-400 m-2"> <span className="text-cyan-400 text-[28px]">Golestan</span> Social Responsibility</h5>
            <h5 className="text-blue-100 text-[18px] m-2">Mahdi Hospital
            </h5>


        </div >
        <div className="w-full flex justify-center">

            <img src={image14} alt="" className="absolute !mt-[-250px]" />
        </div>
        <ResumeContent />
    </div >);
}   

export default Resume;