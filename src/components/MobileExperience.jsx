import AnimatedContent from './AnimatedContent';

export default function MobileExperience() {
    return (
        <div className="py-10 px-4 overflow-x-hidden">

            {/* Timeline Mobile */}
            <div className="relative ">
                {/* Garis timeline vertikal */}

                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-purple-500 border-purple-500"></div>

                {/* Item 1 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r mt-10 from-purple-500  to-cyan-500">
                            <div className="bg-[#2d2b45] rounded-2xl p-5">
                                <div className="flex gap-3 mb-3">
                                    <img src="assets/icons/bwalogo.svg" width={40} alt="" />
                                    <div className='text-xs'>
                                        <p className="text-white font-semibold">UI Engineer Intern</p>
                                        <p className="text-gray-500">Built With Angga</p>
                                        <p className="text-gray-500">01 Feb 2023 - 31 July 2023</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="text-white/60 text-xs list-disc custom-bullets mb-2 ">
                                        <li className="mb-1">
                                            Implemented responsive design principles, delivering a consistent user experience on various screen sizes.
                                        </li>
                                        <li className="mb-1">
                                            Provided constructive feedback during peer code reviews, fostering a culture of collaboration and mutual growth within the team.
                                        </li>
                                        <li className="mb-1">
                                            Improved conversion rates by analyzing user behavior data and refining UI elements accordingly.
                                        </li>
                                        <li>
                                            Actively participated in sprint planning meetings, ensuring alignment between project goals and deadlines while addressing potential roadblocks early on.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    {/* Bullet point */}
                    <div className="absolute mt-[9px] left-0 top-4 w-10 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex items-center justify-center font-semibold">
                        1
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500  to-cyan-500">
                            <div className="p-5 rounded-2xl bg-[#2d2b45]">
                                <div className="flex text-xs gap-3 mb-3 items-center">
                                    <img src="assets/icons/gemilang.jpeg" className="rounded-full w-10 h-10" alt="" />
                                    <div>
                                        <p className="text-white font-semibold">Frontend Web Developer</p>
                                        <p className="text-gray-500 ">PT Wiraswasta Gemilang Indonesia</p>
                                        <p className="text-gray-500 ">14 August 2023 - 26 Juny 2024   </p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="text-white/60 text-xs list-disc custom-bullets mb-2">
                                        <li className="mb-1">Worked closely with UX/UI designers to translate complex designs into functional web pages without compromising aesthetics or usability.</li>
                                        <li className="mb-1">Resolved front-end bugs promptly, ensuring optimal website performance at all times.</li>
                                        <li className="mb-1">Implemented SEO best practices in coding and content structure for improved search engine visibility.</li>
                                        <li className="mb-1">Provided technical support to clients during website launch, addressing any issues or concerns quickly and professionally.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute mt-[10px] left-0 top-4 w-10 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex items-center justify-center font-semibold">
                        2
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500  to-cyan-500">
                            <div className=" p-5 rounded-2xl  bg-[#2d2b45]">
                                <div className="flex gap-3 mb-3 items-center">
                                    <img src="assets/icons/intikom.jpeg" className="rounded-full w-10 h-10" alt="" />
                                    <div className='text-xs'>
                                        <p className="text-white font-semibold">Fullstack Web Developer</p>
                                        <p className="text-gray-500">PT. Intikom Berlian Mustika</p>
                                        <p className="text-gray-500">21 July 2024 - 20 January 2025</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="text-white/60 text-xs list-disc custom-bullets mb-2">
                                        <li className='mb-1'>Used Javascript, SQL and HTML to develop app-solutions.</li>
                                        <li className='mb-1'>Increased website performance by optimizing front-end and back-end code for faster loading times.</li>
                                        <li className='mb-1'>Applied responsive design principles to ensure consistent display and functionality across a wide range of devices, including mobile phones, tablets, and desktop computers.</li>
                                        <li className='mb-1'>Created easy-to-use APIs for third-party integrations, enhancing the functionality of existing applications without compromising on performance or security.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute left-0 mt-[10px] top-4 w-10 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex items-center justify-center font-semibold">
                        3
                    </div>
                </div>

                {/* Item 4 */}
                <div className="relative pl-14">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500">
                            <div className="flex flex-col  justify-around ">
                                <div className="p-5 rounded-2xl bg-[#2d2b45]">
                                    <div className="flex gap-3 ms-6 mb-3 items-center">
                                        <div className='text-xs'>
                                            <p className="text-white font-semibold">Freelance Web Developer</p>
                                            <p className="text-gray-500 ">20 Feb 2025 - Present</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="text-white/60 text-xs list-disc custom-bullets mb-2">
                                            <li className="mb-1">Understand what the client needs and offer solutions</li>
                                            <li className="mb-1">Designing Entity Relationship Diagram (ERD) to make it easier to create tables and fields</li>
                                            <li className="mb-1">
                                                Designing user flow to be able to visualize the user journey</li>
                                            <li className="mb-1">Implement all things that have been agreed upon into project</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute left-0 mt-[8px] top-4 w-10 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex items-center justify-center font-semibold">
                        4
                    </div>
                </div>
            </div>
        </div>
    );
}