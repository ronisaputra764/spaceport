import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { LuSend } from "react-icons/lu";
import { GrShareOption } from "react-icons/gr";
import AnimatedContent from "./AnimatedContent";
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";


export default function GetInTouch() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_u46a9ch',
            'template_3t2by2x',
            form.current,
            'n-_Lnz5o5rc4RDTO6'
        )
            .then(() => {
                setLoading(false);
                setDone(true);
                form.current.reset();
            }, (error) => {
                console.error('Email error:', error);
                setLoading(false);
            });
    };

    return (

        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0}
        >
            <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-[#2d2b45] w-full xl:w-[400px] p-6 rounded-3xl shadow-md flex flex-col"
            >
                <div className='text-white poppins-semibold flex justify-between mb-4 items-center'>
                    <p className="bg-clip-text inline text-2xl poppins-semibold bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 ">Get In Touch</p>
                    <span className="text-indigo-400 text-3xl"><GrShareOption /></span>
                </div>
                <p className="text-white/50 text-sm mb-4">Have something to discuss? Send me a message and let's talk.</p>

                <hr className='text-gray-400 mb-4' />

                <div className="relative">
                    <LuUser className="absolute left-4 top-1/2 transform text-xl -translate-y-[19px] text-gray-400" />
                    <input
                        type="text"
                        name="user_name"
                        required
                        maxLength={50}
                        placeholder="Your name"
                        className="pl-11 pr-4 py-4 mb-4 rounded-xl bg-[#1d1b34] text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-full"
                    />
                </div>

                <div className="relative">
                    <MdOutlineEmail className="absolute left-4 top-1/2 transform text-xl -translate-y-[19px] text-gray-400" />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="pl-11 pr-4 py-4 mb-4 rounded-xl bg-[#1d1b34] text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-full"
                    />
                </div>

                <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-9 transform text-xl -translate-y-[19px] text-gray-400" />
                    <textarea
                        name="message"
                        required
                        maxLength={200}
                        placeholder="Your Message"
                        className="pl-11 pr-4 py-4 mb-4 rounded-xl bg-[#1d1b34] w-full text-white resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        rows={4}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500  to-indigo-500 text-white py-2 rounded-xl hover:opacity-90"
                >
                    <span className="flex justify-center items-center gap-2">
                        <LuSend className="text-xl" />
                        {loading ? 'Sending...' : 'Send Message'}
                    </span>
                </button>

                {done && (
                    <p className="text-green-400 mt-3 text-sm">✅ Message sent successfully!</p>
                )}
            </form>
        </AnimatedContent>


    );
}
