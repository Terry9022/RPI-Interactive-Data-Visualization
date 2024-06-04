import { Link } from "react-router-dom";

function Header() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 bg-white">
      <li className="me-2">
        <Link
          to="/"
          className={`inline-block p-4 rounded-t-lg ${
            location.pathname === "/"
              ? "text-blue-600 bg-gray-100 active"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Home
        </Link>
      </li>
      <li className="me-2">
        <Link
          to="/salaries"
          className={`inline-block p-4 rounded-t-lg ${
            location.pathname === "/salaries"
              ? "text-blue-600 bg-gray-100 active "
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Salaries among CS careers
        </Link>
      </li>
      <li className="me-2">
        <Link
          to="/competitiveness"
          className={`inline-block p-4 rounded-t-lg ${
            location.pathname === "/competitiveness"
              ? "text-blue-600 bg-gray-100 active "
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Competitiveness of entry-level jobs
        </Link>
      </li>
      <li className="me-2">
        <Link
          to="/influence-genai"
          className={`inline-block p-4 rounded-t-lg ${
            location.pathname === "/influence-genai"
              ? "text-blue-600 bg-gray-100 active "
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Influence of GenAI on job opportunities
        </Link>
      </li>
      <li className="me-2">
        <Link
          to="/job-postings"
          className={`inline-block p-4 rounded-t-lg ${
            location.pathname === "/job-postings"
              ? "text-blue-600 bg-gray-100 active "
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
        >
          Job postings in the CS field
        </Link>
      </li>
    </ul>
  );
}
export default Header;
