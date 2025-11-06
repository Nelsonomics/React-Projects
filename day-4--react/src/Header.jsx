const Header = () => {
  return (
    <header className="text-center py-8 bg-gray-50 rounded-2xl shadow-sm">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        COLOR NUMBER GENERATOR
      </h1>
      <h2 className="text-lg text-gray-600 mb-6">
        This generates numbers between <span className="font-semibold">1–100</span> with color rules
      </h2>

      <ul className="space-y-2 text-gray-700 font-medium">
        <li>
          <span className="text-red-500 font-bold">Odd numbers</span> — Red color
        </li>
        <li>
          <span className="text-blue-500 font-bold">Even numbers</span> — Blue color
        </li>
        <li>
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-2 py-1 rounded-md font-bold">
            Prime numbers
          </span>{" "}
          — Red/Blue gradient
        </li>
      </ul>

      <p className="mt-6 text-gray-500 italic">
        Numbers will auto-generate with a refresh button at the end of the page.
      </p>
    </header>
  );
};

export default Header;
