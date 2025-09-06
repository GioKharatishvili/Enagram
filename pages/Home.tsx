const Home = () => {
  return (
    <div>
      <div className="p-6">
        <div className="flex items-center gap-6">
          <div>
            <select className="border rounded-lg py-2 px-3" name="language" id="language-select">
              <option value="georgian">ქართული</option>
              <option value="english">English</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input className="scale-150" type="checkbox"></input>
            <p>ფორმატის შენარჩუნება</p>
          </div>
        </div>
        <hr className="text-[#EDEDED] mt-[17px]" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <textarea
              className="bg-[#F0F7FF] w-[542px] h-[432px] mt-6 p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
              placeholder="დაიწყე წერა..."
            ></textarea>
            <img src="../public/Arrow.png" className="w-[32px] h-[32px]" alt="Arrow" />
            <textarea
              className="bg-[#F0F7FF] w-[542px] h-[432px] mt-6 p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
              placeholder="დაიწყე წერა..."
            ></textarea>
          </div>
          <button className="bg-[#383A4899] text-white py-[10px] px-4 rounded-md text-sm cursor-pointer hover:opacity-90">
            შედარება
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
