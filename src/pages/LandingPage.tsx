import { Link } from "react-router-dom";
import bgImage from "/assets/images/LandingPageImage.png";

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Landing background"
        className="h-full w-full lg:object-fill object-cover shrink-0"
      />
      <div className="absolute inset-0 bg-green-100/15 bg-opacity-70 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl font-normal text-gray-900">
            Take control of your day, <br /> one task at a time.
          </h1>
          <p className="mt-4 max-w-xl font-normal mx-auto text-gray-600 text-base md:text-lg">
            Streamline your workflow, stay on top of your tasks, and achieve
            more every day. Our tools are built to help you focus, organize, and
            succeed — effortlessly.
          </p>
          <Link to="/dashboard/home">
            <button className="mt-8 bg-gray-700 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-400 transition font-normal cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
