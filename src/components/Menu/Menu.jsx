import React, { useState } from "react";
import image1 from "../../images/1.png";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<div>
        <div className="relative">
            {/* منو */}
            <header className="w-full md:w-[80.5%] fixed top-0 justify-center flex   m-auto bg-neutral-900 text-white z-50 h-[100px]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-lg font-bold"><div className="pt-[100px]">
                        <img src={image1} className="top-[1px] md:top-[35px] absolute right-[10%]  " />
                    </div></div>

                    {/* منوی اصلی (دسکتاپ) */}
                    <ul className="hidden md:flex gap-9">
                        <li ><a href="#">صفحه اصلی</a></li>
                        <li ><a href="#">شرکت گلستان</a></li>
                        <li ><a href="#">محصولات</a></li>
                        <li ><a href="#">وبلاگ</a></li>
                        <li ><a href="#">قرعه کشی</a></li>
                        <li ><a href="#">استخدام</a></li>
                        <li ><a href="#">تماس با ما</a></li>
                        <li><a href="#" className="p-[10px]">EN</a></li>
                    </ul>

                    {/* دکمه موبایل */}
                    <button
                        className="md:hidden text-2xl absolute left-[30px]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* منوی موبایل */}
                {isOpen && (
                    <ul className="flex absolute w-full top-[100px] flex-col items-center gap-4 py-4 bg-neutral-800 md:hidden">
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">شرکت گلستان</a></li>
                        <li><a href="#">محصولات</a></li>
                        <li><a href="#">وبلاگ</a></li>
                        <li><a href="#">قرعه کشی</a></li>
                        <li><a href="#">استخدام</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                )}
            </header>

            {/* بقیه محتوا با فاصله از منو */}

        </div >
    </div >
    );
};
export default Menu;