# Game of Life
A simple implementation of Conway's Game of Life using React Native and Expo. This app allows users to interact with a grid of cells, applying the rules of Conway's Game of Life to simulate cellular automata.

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) for development.

## Prerequisites

Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/client) app on your mobile device for running the app locally

## Project Setup
1. **Clone the repository:**
```sh
git clone https://github.com/Lazar4o/GameOfLife.git
cd GameOfLife
```
2. **Install dependencies:**
```sh
npm install
```
3. **Start the development server:**
```sh
npx expo start --clear
```
4. **Scan the QR code with Expo Go:**
- Open the Expo Go app on your mobile device and scan the QR code provided in the terminal to run the app on your device.
  
## Usage

### ** The Game of Life app allows you to: **
- Interact with a 20x20 grid of cells.
- Toggle cell states between alive and dead before starting the simulation.
- Start, pause, and reset the simulation.
- (BONUS) Randomize the initial state of the grid.

### ** Rules of the Game of Life: **
1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies (overpopulation).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

## Customize Configuration
For more details on configuration, see the Expo Configuration Reference.

## Contributing
Contributions are welcome! Please refer to the repository's issues page to discuss potential changes or enhancements.

## License
Distributed under the MIT License. See LICENSE file for more information.

Feel free to adjust the content according to the actual features and configurations of your app. This structure helps provide clear setup instructions and comprehensive information about the project in a professional format.
