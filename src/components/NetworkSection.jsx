import { Profile } from "./utility/Profile";
import Image from "../assets/image.png";

export const NetworkSection = () => {
  return (
    <div className="bg-skin">
      <div className="flex flex-col justify-center items-center px-4 py-8 md:px-16 md:mx-16 md:py-8 lg:mx-48 xl:px-48">
        <div className="text-5xl md:text-7xl text-center  font-serif font-thinner">
          A living network of curious minds.
        </div>
        <div className="py-4 px-16 md:font-light tracking-normal ">
          <p>
            Anyone can write on Medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You'll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
      </div>
      <div className="py-8 grid grid-cols-3 md:grid-cols-3 gap-4">
        <Profile icon={Image} name="Erica Dhawan" css="border-b-0" />
        <Profile icon={Image} name="Devon Price" css="border-b-0" />
        <Profile icon={Image} name="GEN" css="border-b-0" />
        <Profile icon={Image} name="Scott Galloway" css="border-b-0" />
        <Profile icon={Image} name="Kaki Okumura" css="border-b-0" />
        <Profile icon={Image} name="Hal H. Harris" css="border-b-0" />
        <Profile icon={Image} name="OneZero" css="border-b-0" />
        <Profile icon={Image} name="Carvell Wallace" css="border-b-0" />
        <Profile icon={Image} name="Elemental" css="border-b-0" />
        <Profile icon={Image} name="Sarah Cottrell" />
        <Profile icon={Image} name="Forge" />
        <Profile icon={Image} name="LEVEL" />
      </div>
    </div>
  );
};