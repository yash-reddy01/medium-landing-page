import { Button } from "./utility/Button";
import ProfileImage from "../assets/profile-medium.png";

export const Stats = () => {
  return (
    <div className="bg-black">
      <div className="border-b border-white grid grid-cols-1 md:grid-cols-2 ">
        <div className="text-white text-5xl w-auto h-auto border-b md:text-8xl font-thicker md:border-r border-white px-5 py-4">
          <p>
            Over 100 <br />
            million <br />
            readers and growing.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start md:m-auto">
          <div className="m-8 md:m-8">
            <img src={ProfileImage} alt="" className="w-48 md:w-auto" />
          </div>
          <div className="text-white text-left px-4 md:mx-12 md:pr-24 lg:pr-36">
            <p>
              "Medium is a great place to read and learn from a wide range of
              authors. It's not muddied up by ads. It feels like one of the few
              pure places to go online."
            </p>
          </div>
          <div className="mx-4 md:mx-12 text-white my-4 md:my-12">
            <p>Jackie Colburn</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 md:mx-24 mt-8 md:mt-16 md:px-24 lg:mx-36">
        <div className="mb-8 md:mb-12">
          <div className="text-white text-4xl md:text-6xl lg:text-7xl text-center font-thicker mb-4 md:mb-8">
            <p>Create the space for your thinking to take off.</p>
          </div>
          <div className="text-white text-sm px-4 md:mx-12">
            <p className="lg:w-auto xl:px-32">
              A blank page is also a door. At Medium you can walk through it.
              It's easy and free to share your thinking on any topic, connect
              with an audience, express yourself with a range of publishing
              tools, and even earn money for your work.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button css="text-green-500 border-green-500" text="Write on Medium" />
          </div>
        </div>
      </div>
    </div>
  );
};