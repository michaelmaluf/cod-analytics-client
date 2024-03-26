# COD Analytics Predictor Client

### [Link to application](https://codanalyticspredictor.com)

## Introduction
This project serves as the frontend for the COD Analytics Predictor application. The purpose of this web client is to present predictions for Call of Duty matches to users, leveraging data processed by Gradient Boosting Machines and served by the backend.

## Features
- Interactive UI for displaying match predictions.
- Diverse choices for making predictions across all teams, maps, and game modes in the Call of Duty League
- Integration with the COD Analytics Predictor Server for real-time data fetching.
- Responsive design for optimal viewing.

## Prerequisites
Before you start, ensure you have the following installed:
- Node.js 14.x or above.
- npm for managing packages.

## Installation
Clone the repository and navigate into the project directory:
- git clone https://github.com/yourusername/cod-analytics-predictor-client.git
- cd cod-analytics-predictor-client

### Install Dependencies
To set up your environment and install required dependencies, follow these steps:
1. Install the required node packages via npm install.

## Configuration
Create a .env file that replicates .env.example and fill all values.

## Usage
- npm run dev (visit http://localhost:5173/ to view the application)
- select the teams from the left and right hand sides, select the game mode and map from the carousels in the middle
- click on Generate Predictions to view the results tailored to the selections you made

## License
This project is licensed under the MIT License.