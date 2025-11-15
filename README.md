# Regalo Wale

## Project Overview
Regalo Wale is a web application that features a series of interactive mini-games, including a puzzle, a word search, and a quiz. Users must enter a password to access the games, and upon completing all three, they will unlock a final surprise page.

## Features
- **Password Protection**: Users must enter the password "BIMBO" to access the games.
- **Mini-Games**:
  - **Puzzle Game**: A fun and engaging puzzle to solve.
  - **Word Search**: A grid filled with hidden words for users to find.
  - **Quiz**: A multiple-choice quiz that tests users' knowledge.
- **Final Surprise Page**: After completing all games, users can access a page that features a button to play "Afortunada" by Francisca Valenzuela.

## File Structure
```
regalo-wale
├── src
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── games
│   │   ├── puzzle.html
│   │   ├── wordsearch.html
│   │   ├── quiz.html
│   │   └── final.html
│   ├── components
│   │   ├── password.html
│   │   └── header.html
│   └── data
│       ├── words.json
│       └── quiz.json
├── assets
│   └── audio
│       └── afortunada.mp3
├── package.json
└── README.md
```

## Getting Started
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   ```
2. **Navigate to the Project Directory**: 
   ```
   cd regalo-wale
   ```
3. **Open the Project**: Open `src/index.html` in your web browser to start the application.

## Technologies Used
- HTML
- CSS
- JavaScript

## Future Enhancements
- Add more mini-games.
- Improve the user interface and experience.
- Implement user authentication for a personalized experience.

## License
This project is licensed under the MIT License.