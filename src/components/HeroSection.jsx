import Image from "../assets/hero-section.svg";

export const HeroSection = () => {
  return (
    <div className="border border-t-0 border-black ">
      <div className="text-6xl p-10 text-center mr-20 mt-20 mb-20 pl-24">
        Every idea needs a Medium.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-b-0 border-black ">
          <div className="flex flex-col justify-center items-center m-8 lg:m-8 px-4">
            <p className="py-4 text-md md:text-base">
              The best ideas can change who we are. Medium is where those ideas
              take shape, take off, and spark powerful conversations. We're an
              open platform where over 100 million readers come to find
              insightful and dynamic thinking. Here, expert and undiscovered
              voices alike dive into the heart of any topic and bring new ideas
              to the surface. Our purpose is to spread these ideas and deepen
              understanding of the world.
            </p>
            <p className="text-md md:text-base">
              We're creating a new model for digital publishing. One that
              supports nuance, complexity, and vital storytelling without
              giving in to the incentives of advertising. It's an environment
              that's open to everyone but promotes substance and authenticity.
              And it's where deeper connections forged between readers and
              writers can lead to discovery and growth. Together with millions
              of collaborators, we're building a trusted and vibrant ecosystem
              fueled by important ideas and the people who think about them.
            </p>
          </div>
        </div>
        <div className="border border-black border-l-0 border-b-0 flex justify-center items-center">
          <img
            src={Image}
            alt=""
            className="m-8 md:m-12 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};