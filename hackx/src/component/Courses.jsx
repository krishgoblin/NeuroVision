const Courses = () => {
    return (
      <div className="relative w-full max-w-[90vw] h-auto mx-auto mt-8">
        <div className="w-full h-auto bg-gradient-to-b from-green-200 to-blue-200 rounded-xl p-4">
          <div className="flex justify-around">
            <img className="w-40 h-40 md:w-52 md:h-52" alt="Science" src="D:\Code\Projects\Hackathons\mujhackx\hackx\src\component\science.png" />
            <img className="w-40 h-40 md:w-52 md:h-52" alt="Maths" src="D:\Code\Projects\Hackathons\mujhackx\hackx\src\component\Maths.png" />
            <img className="w-40 h-40 md:w-52 md:h-52" alt="English" src="D:\Code\Projects\Hackathons\mujhackx\hackx\src\component\Eng.png" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;
  