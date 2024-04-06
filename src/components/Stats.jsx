import { Button } from "./utility/Button";
import ProfileImage from "../assets/profile-medium.png";

export const Stats = () => {
    return <div className="bg-black">
        <div className="border border-l-0 border-t-0 border-r-0 border-white grid grid-cols-2">
            <div className="text-white w-auto h-auto text-8xl font-thicker border border-l-0 border-b-0 border-t-0 px-5 py-4">
                <p className="">Over 100 <br />million <br />readers and growing.</p>
            </div>
            <div className="m-auto">
                <div className="m-8">
                    <img src={ProfileImage} alt="" width={300}/>
                </div>
                <div className="text-white text-left mx-12 pr-36">
                    <p>
                        "Medium is a great place to read and learn from a wide range of authors. It's not muddied up by ads. It feels like one of the few pure places to go online."
                    </p>
                </div>
                <div className="mx-12 text-white my-12">
                    <p>Jackie Colburn</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center mx-64 mt-16">
            <div className="mb-12">
                <div className="text-white text-7xl text-center font-thicker mb-8">
                    <p>Create the space for your thinking to take off.</p>
                </div>
                <div className="text-white mx-56 text-sm">
                    <p>
                        A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for <center>your work.</center>
                    </p>
                </div>
                <div className="flex justify-center mt-12"><Button css="text-green-500 border-green-500" text={"Write on Medium"}/></div>
            </div>
        </div>
    </div>
}