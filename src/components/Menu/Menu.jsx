import "../Menu/Menu.css"
import image13 from "../../../dist/images/13.png"
import React, { useState } from "react";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="myNav">
            <div className="imgDiv">
                <img src={image13} alt="" className="imgInMenu" />
            </div>
            {/* دکمه فقط در سایز کوچک نمایش داده شود */}
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            <nav className={isOpen ? "open" : ""}>
                <ul className="myUl">
                    <li><a href="#">صفحه اصلی</a></li>
                    <li><a href="#">شرکت گلستان</a></li>
                    <li><a href="#">محصولات</a></li>
                    <li><a href="#">وبلاگ</a></li>
                    <li><a href="#">قرعه کشی</a></li>
                    <li><a href="#">استخدام</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">EN</a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Menu;