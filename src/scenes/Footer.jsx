import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-24 bg-red">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            nicholas maina
          </p>
          <p className="font-playfair text-md text-yellow">
            2023 nick. All Rights Reserved.
          </p>
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
