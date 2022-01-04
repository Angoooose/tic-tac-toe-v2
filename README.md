# tic-tac-toe-v2

A web application for playing tic-tac-toe against a computer opponent (CPU) with varying levels of difficulty. Built using React.

# Explanation of CPU behavior

If you're interested in the code, all CPU logic can be found at `/src/logic/`.

**Hard:**
1.  Checks for a move to win the game.
2. Checks for a move to stop the player from winning.
3. Find the optimal win path (if multiple, it is randomly chosen from them).
4. Makes random choice.

**Normal:**
The chances on the first two checks are an attempt to simulate human error within the CPU.

1.  [90% chance] Checks for a move to win the game.
2. [33% chance] Checks for a move to stop the player from winning.
3. [100%] Find the optimal win path (if multiple, it is randomly chosen from them).
4. [100%] Makes random choice.

**Easy:**
1. Makes random choice.

# Requirements
- NodeJS
- NPM

# To use
1. Clone the repository to your local machine using the following command:
```
git clone https://github.com/Angoooose/tic-tac-toe-v2
```
2. Execute `npm install` to install the needed NPM packages.
3. Execute  `npm start`, this should open the application in your browser at `localhost:3000`.
