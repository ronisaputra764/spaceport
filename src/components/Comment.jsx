import { FaRegComment } from "react-icons/fa";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore';
import { LuSend } from "react-icons/lu";
import AnimatedContent from "./AnimatedContent";

dayjs.extend(relativeTime);
export default function Comment() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const commentData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setComments(commentData);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !message) return;
        setLoading(true);
        try {
            await addDoc(collection(db, 'comments'), {
                name,
                message,
                createdAt: serverTimestamp(),
            });
            setName('');
            setMessage('');
            fetchComments();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
        setLoading(false);
    };

    return (
        <div className='w-full xl:w-[700px]'>
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
                    onSubmit={handleSubmit}
                    className="bg-[#2d2b45] p-6 pb-10 rounded-3xl shadow-md flex flex-col"
                >
                    <p className='text-white poppins-semibold text-xl flex mb-4 items-center'>
                        <span className='bg-purple-400/20 text-lg text-indigo-400 py-2 px-2 rounded-xl me-2'>
                            <FaRegComment />
                        </span>
                        Comments
                        <span className='text-indigo-400 ms-1'>
                            ({comments.length})
                        </span>
                    </p>
                    <hr className='text-gray-400 mb-4' />
                    <span className='text-white text-sm font-[400] mb-1'>Name <span className="text-red-400">*</span></span>
                    <input
                        type="text"
                        maxLength={50}
                        placeholder="Enter your name"
                        className="px-4 py-4 mb-4 rounded-xl bg-[#1d1b34] text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className='text-white font-[400] text-sm mb-1'>Message <span className="text-red-400">*</span></span>
                    <textarea
                        placeholder="Write your message here..."
                        className="px-4 py-4 rounded-xl mb-4 bg-[#1d1b34] text-white resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        rows={4}
                        maxLength={200}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-xl hover:opacity-90"
                    >
                        <span className="flex justify-center items-center gap-2">
                            <LuSend className="text-xl" />
                            {loading ? 'Posting...' : 'Post Comment'}
                        </span>

                    </button>

                    <div className="mt-6 space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                        {comments.map((c) => (
                            <div key={c.id} className="bg-[#1d1b34] text-white border border-gray-500/50 hover:bg-[#1d1b34]/20 hover:-translate-y-1 transition-all duration-100 p-4 rounded-xl">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[15px] font-semibold">{c.name}</p>
                                    <p className="text-[13px] text-gray-500">
                                        {c.createdAt?.seconds ? dayjs(c.createdAt.toDate()).fromNow() : ''}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-400">{c.message}</p>
                            </div>
                        ))}
                    </div>
                </form>

            </AnimatedContent>
        </div>


    );
}
