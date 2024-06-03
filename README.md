# RPI_Capstone Project

This project is a web application developed for the RPI Capstone project. It provides data visualization and analysis insights for the WhatFix platform used by Johnson & Johnson (J&J).

## Project Structure

- `src/`: Contains the source code for the web application.
  - `App.jsx`: The main entry point of the application.
  - `index.css`: Global CSS styles for the application.
  - `main.jsx`: The main JSX file that renders the application.
  - `pages/`: Contains individual page components.
    - `EventType.jsx`: Renders data analysis images related to event types and displays text from `data.json`.
    - `UniqueUser.jsx`: Renders data analysis images related to unique users and displays text from `data.json`.
  - `data.json`: JSON file containing the text and metadata for data analysis images.
- `public/`: Contains public assets, data analysis images, and the `index.html` file.
- `README.md`: This file, providing an overview of the project.
- `package.json`: Configuration file for the project dependencies and scripts.
- `vite.config.js`: Configuration file for the Vite build tool.

## Data Analysis Pages

The project includes two dedicated pages for displaying data analysis insights:

1. **UniqueUser.jsx**: This page renders data analysis images related to unique users of the WhatFix platform. It retrieves the relevant image URLs and associated text from the `data.json` file located in the `public/` folder. Users can navigate to this page to view and explore the data analysis insights specifically related to unique user metrics.

2. **EventType.jsx**: This page focuses on rendering data analysis images related to different event types within the WhatFix platform. Similar to UniqueUser.jsx, it fetches the image URLs and corresponding text from the `data.json` file. Users can access this page to gain insights into the analysis of various event types and their associated metrics.

Both UniqueUser.jsx and EventType.jsx dynamically render the data analysis images and display the relevant text based on the information provided in the `data.json` file. This allows for a centralized and easily updatable source of data analysis content.

## Getting Started

1. Clone the repository and navigate to the project directory (`cd JJ_RPI_Capstone`).
2. Install the dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.
4. Open the application in your browser at `http://localhost:5173`.

## Dependencies

The project utilizes the following main dependencies:

- React: A JavaScript library for building user interfaces.
- react-router-dom: A library for handling routing in a React application.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

The README file includes information about the data analysis pages and how they render data analysis images from the public folder and retrieve text from data.json for displaying on their respective tab pages. The project also includes instructions for getting started, contributing, and licensing information.
