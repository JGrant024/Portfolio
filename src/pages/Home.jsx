import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faPython,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { createClient } from "@supabase/supabase-js";

const Home = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("Feedback")
      .insert([{ feedback }]);
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Feedback submitted:", data);
      setFeedback(""); // Clear the textarea after submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white/80 rounded-lg p-10 shadow-xl">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Welcome to Jonathan's Portfolio
        </h1>
        <p className="text-xl text-gray-600 mt-4 text-center">
          Discover my projects and skills.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="Jonathan_Grant_Resume_2024.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            Resume
          </a>
          <a
            href="https://github.com/JGrant024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonathangrant04/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Tech Stack
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHtml5}
                className="w-12 h-12 text-orange-600"
              />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="w-12 h-12 text-blue-600"
              />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faReact}
                className="w-12 h-12 text-blue-500"
              />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faJsSquare}
                className="w-12 h-12 text-yellow-500"
              />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faPython}
                className="w-12 h-12 text-blue-500"
              />
              <span>Python</span>
            </div>
          </div>
        </div>
        {/* About Me Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 text-center">
            I'm a passionate software developer with a focus on creating
            impactful web applications. My journey in tech started with a
            curiosity for how websites work, and it is now growing into a
            full-fledged career. Stay tuned for more updates on my projects and
            experiences.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Check Out My Deployed Site!
          </h2>
          <p className="text-xl text-gray-600 text-center mb-6">
            Dive into my work and explore the EssentialD Skin Care website,
            showcasing my skills in action.
          </p>
          <div className="text-center">
            <a
              href="https://essentiald-skin-care.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md text-lg transition duration-300"
            >
              Visit Essential'D Skin Care
            </a>
          </div>
        </div>
        <div className="mt-10 text-center">
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              className="w-full max-w-lg p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              rows="5"
              placeholder="I would love for you to leave some feedback!"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <br />
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
