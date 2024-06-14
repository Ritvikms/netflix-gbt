const VideoTitle =({title,overview}) =>{
    return <div className="w-screen aspect-video pt-[15%] px-24 absolute  text-white bg-gradient-to-r from-black"> 
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div>
            <button className="bg-white text-black rounded-lg p-4  px-10 text-xl font-bold hover:bg-opacity-70">▶️ Play</button>
            <button className="mx-2 bg-gray-700 text-white rounded-lg p-4 px-10 text-xl bg-opacity-80">ℹ️ More Info</button>
        </div>
    </div>
}

export default VideoTitle;