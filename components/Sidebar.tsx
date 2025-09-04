const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-1/6 h-screen bg-[#132450]">
      <div className="flex flex-col items-center ">
        <div className="flex items-center pt-11 pr-12 pb-12 gap-3">
          <img src="ძირითადი-ლოგო-ai.png" alt="ENAGRAM Logo" />
          <img src="ENAGRAM.png" alt="ENAGRAM Text" />
        </div>
        <div className="flex flex-col gap-8 text-sm text-white font-normal font-[Helvetica]">
          <div className="flex items-center gap-2">
            <img src="check.png" alt="Checkmark" />
            <p>მართლმწერი</p>
          </div>
          <div className="relative flex items-center gap-2">
            <img src="white-outline.png" alt="Outline" className="absolute scale-140" />
            <img src="spelling.png" alt="Spelling" className="relative" />
            <p className="text-[#132450] relative">ტექსტის შედარება</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="mic.png" alt="Microphone" />
            <p>ხმა ტექსტი</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="sound.png" alt="Sound Waves" />
            <p>ტექსტი ხმა</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="document.png" alt="Programming Document" />
            <p>PDF კონვერცია</p>
          </div>
        </div>
      </div>
      <div className="text-white">
        <hr className="w-52" />
        <p>test</p>
      </div>
    </div>
  );
};

export default Sidebar;
