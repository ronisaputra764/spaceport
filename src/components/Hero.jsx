export default function Hero() {
    return (
        <div className="absolute flex flex-col h-full w-full ">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-600px] left-0 w-full h-full  "
            >
                <source src="/public_blackhole.webm" type="video/webm" />
            </video>
        </div>
    );
}