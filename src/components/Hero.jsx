export default function Hero() {
    return (
        <div className="absolute flex flex-col h-full w-full">
            <video
                preload="auto"
                autoPlay
                playsInline
                muted
                loop
                controls={false}
                className="rotate-180 absolute top-[-600px] left-0 w-full h-full object-cover will-change-transform"
            >
                <source src="/public_blackhole.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
