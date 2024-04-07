import { Button } from "./utility/Button"

export const LearnMore = () => {
    return <div className="grid md:grid-cols-2 border border-black">
        <div className="h-auto w-auto m-6">
            <div className="text-6xl pr-12 font-thin md:text-7xl  md:pr-24 font-serif">
                Learn more about us. Or Join us.
            </div>
        </div>
        <div className="flex flex-col border border-b-0 border-black">
            <div className="border border-t-0 border-l-0 border-r-0 border-black">
                <div className="text-4xl mt-8 ml-8 font-serif font-thin">
                    The Medium blog
                </div>
                <div className="ml-8 mt-2 md:mr-32 lg:mr-64">
                    Visit our company blog for the latest news, product updates, and tips and tricks.
                </div>
                <div className="mt-12 md:mt-28 mb-12">
                <Button text="Read our blog" css="text-green-600 border-green-600 bg-white"/>
                </div>
            </div>
            <div>
                <div className="text-4xl mt-8 ml-8 font-serif font-thin">
                    Work at Medium
                </div>
                <div className="ml-8 mt-2 md:mr-32 lg:mr-64">
                    Our team is home to engineers, journalists, artists, and creatives of all stripes.
                </div>
                <div className="mt-12 md:mt-28 mb-12">
                <Button text="View open positions" css="text-green-600 border-green-600 bg-white" />
                </div>
            </div>
        </div>
    </div>
}