import ResumeContent from "../ResumeContent/ResumeContent";
import "../Resume/Resume.css"
import image15 from "../../../dist/images/15.jpg"

const Resume = () => {
    return (<div>
        <div className="resSection">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h5 className="headers h5InResSection">مسئوليت‌های اجتماعی شركت گلستان
            </h5>
            <hr />
            <h5 className="secH5InResSection"> <span className="Word3">Golestan</span> Social Responsibility</h5>
            <h5 className="h5Hospital">Mahdi Hospital
            </h5>
            

        </div>
        <img src={image15} alt="" className="imgHospital" />
        <ResumeContent />
    </div>);
}

export default Resume;