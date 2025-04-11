import { useEffect, useRef, useState } from "react";
import { IoCodeSharp } from "react-icons/io5";
import { PiMedal } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";

const tabs = [
    {
        id: 0,  // Diubah menjadi 0 agar sesuai dengan indeks awal
        icon: <IoCodeSharp />,
        title: "Projects"
    },
    {
        id: 1,
        icon: <PiMedal />,
        title: "Certificates"
    },
    {
        id: 2,
        icon: <RiStackLine />,
        title: "Tech Stack"
    },
];

export default function Tab({ setContent }) {
    const tabRef = useRef(null);
    const [tabWidth, setTabWidth] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);

    const updateWidth = () => {
        if (tabRef.current) {
            const parentWidth = tabRef.current.getBoundingClientRect().width;
            const numberOfTabs = tabs.length;
            const newTabWidth = parentWidth / numberOfTabs;
            setTabWidth(newTabWidth);
        }
    };

    const tabClick = (id) => {
        setCurrentTab(id);
        setContent(id);
    };

    useEffect(() => {
        updateWidth(); // Panggil sekali saat mount
        const resizeObserver = new ResizeObserver(updateWidth);

        if (tabRef.current) {
            resizeObserver.observe(tabRef.current);
        }

        return () => {
            if (tabRef.current) {
                resizeObserver.unobserve(tabRef.current);
            }
        };
    }, [tabs.length]);

    return (
        <div className="z-10 w-[90%] sm:w-[80%] mx-auto bg-white/5 backdrop-blur-none flex items-center py-2 sm:py-4 justify-between relative rounded-full" ref={tabRef}>
            {tabs.map((tab) => {
                return (
                    <button
                        className={`relative z-20 hover:text-purple-400 text-[10px] sm:text-sm transition-all duration-300 py-2 sm:py-3 flex poppins-semibold flex-col items-center font-semibold ${currentTab === tab.id ? "text-white hover:text-white" : "text-white/50 hover:scale-110 "
                            }`}
                        style={{ width: tabWidth }}
                        key={tab.id}
                        onClick={() => tabClick(tab.id)}
                    >
                        <span className="text-sm sm:text-xl mb-1">{tab.icon}</span>
                        <span>{tab.title}</span>
                    </button>
                );
            })}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[#7042F88B] to-purple-800 rounded-full transition-all duration-300"
                style={{
                    width: tabWidth,
                    transform: `translateX(${currentTab * tabWidth}px)`
                }}>
            </div>
        </div>
    );
}