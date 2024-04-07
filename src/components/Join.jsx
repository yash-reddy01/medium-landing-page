import cubeImage from "../assets/cube.png";
import { Button } from "./utility/Button";

export const Join = () => {
    return <div className="grid md:grid-cols-2 border border-t-0 border-black">
        <div className="pl-8 h-auto w-auto hidden md:block">
            <img src={cubeImage} height={500} width={500} />
        </div>
        <div className="border border-black border-t-0 border-b-0">
            <div className="text-5xl md:text-7xl lg:text-8xl ml-8 mt-8 pr-28 md:pr-20 mb-12 md:mb-24">
                Read, write, and expand your world.
            </div>
            <div className="ml-2 mb-8 md:mb-4">
                <Button text={"Get started"} css="bg-green-600 text-white" />
            </div>
        </div>
    </div>
}