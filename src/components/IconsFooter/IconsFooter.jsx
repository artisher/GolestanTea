import image15 from "../../images/15.png";
import image16 from "../../images/16.png";
import image17 from "../../images/17.png";
import image18 from "../../images/18.png";
import image19 from "../../images/19.png";

const IconsFooter = () => {
    return (
        <div className="iconSection flex gap-[10px] justify-center bg-[#c0c0c0]">
            <img src={image15} alt="" className="max-md:w-[60px]" />
            <img src={image16} alt="" className="max-md:w-[60px]" />
            <img src={image17} alt="" className="max-md:w-[60px]" />
            <img src={image18} alt="" className="max-md:w-[60px]" />
            <img src={image19} alt="" className="max-md:w-[60px]" />


        </div>
    );
}

export default IconsFooter;