const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white/80 rounded-lg p-10 shadow-xl">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mt-4 text-center">
          Discover my projects and skills
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="Jonathan_Grant_Resume .pdf"
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
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.849c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.841-2.338 4.687-4.566 4.933.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.747 0 .267.18.578.688.48A10.97 10.97 0 0022 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonathangrant04/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.765c1.396-2.586 7-2.777 7 2.476v5.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
