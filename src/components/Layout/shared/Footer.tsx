const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 md:mb-0 md:mr-8">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">example@email.com</p>
          {/* Add more contact information as needed */}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Developer Hub</h3>
          <p className="text-sm mb-2">
            Explore our developer resources and contribute to our projects on
            GitHub.
          </p>
          <a
            href="https://github.com/yourdevhub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
