import { Button } from "./utility/Button"
import leftImage from "../assets/left-image.png";
import rightImage from "../assets/right-image.png";

export const Membership = () => {
    return <div className="bg-light-green">
        <div className="flex flex-row justify-center items-center mx-64">
            <div className="mb-12 mt-16">
                <div className="text-black text-7xl text-center font-thicker mb-8 px-24">
                    <p>Get more with membership.</p>
                </div>
                <div className="text-black mx-56 text-sm text-center">
                    <p>
                        Become a Medium member to enjoy unlimited access and directly support the writers you read most.
                    </p>
                </div>
                <div className="flex justify-center mt-12"><Button css="text-white bg-light-green border-white" text={"See membership options"}/></div>
            </div>
        </div>
        <div className="border border-l-0 border-t-0 border-r-0 border-black grid grid-cols-2">
            <div className="text-black w-auto h-auto  border border-l-0 border-b-0 border-black px-5 py-4 ">
                <div className="text-5xl">
                    <p className="">Read as much as you want.</p>
                </div>
                <div className="my-8">
                    <img src={leftImage} alt="" height={250} width={250}/>
                </div>
                <div className="mb-4">
                    <p>
                        Enjoy unlimited access to every story across all of your devices.
                    </p>
                </div>
            </div>
            <div className="h-auto w-auto text-black border border-black border-l-0 border-b-0 px-5 py-4">
                <div className="text-5xl">
                    <p>Reward quality content.</p>
                </div>
                <div className="my-8 mb-7">
                   <img src={rightImage} alt="" height={250} width={250}/>
                </div>
                <div className="mb-4">
                    <p>
                        Your membership helps us pay writers, and keeps your experience ad-free.
                    </p>
                </div>
            </div>
        </div>
    </div>
}