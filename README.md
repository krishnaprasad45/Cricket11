
# <span style="color:#007bff;">Fantasy Cricket App 🏏 - Team Entries and Result Processing</span>

## <span style="color:#28a745;">Description</span>
Developed a fantasy cricket application where users can create teams and enter them into contests. The app will process the results based on real match outcomes and calculate the users' points.

### <span style="color:#ffc107;">Instructions to Run the App</span>
1. This project developed only the server side.
2. Clone the repository SERVER - `git clone https://github.com/krishnaprasad45/Cricket11`
3. Install dependencies using `npm install`
4. Start the development server using `npm start`
5. Note: Secret values are protected in the .env file; it’s not accessible to you. Create your own .env file and run the project.

### <span style="color:#17a2b8;">Server development tools, libraries, and technologies used</span>
1. Clean Architecture
2. Node.js and Express.js
3. MongoDB Atlas and Mongoose (Cloud Database and Schema modeling)
4. TypeScript
5. CORS (To securely communicate with resources from other domains)
6. ESLint (To maintain consistent coding standards and identify potential errors)
7. Error Handling Middleware - Handle and control errors more efficiently.
8. Logging Middleware - Track Requests and Responses. It logs errors that occur in the application, making it easier to identify and fix issues.
9. MongoDB Aggregation Pipeline - To sort, filter, add fields, and project in a single stage.

### <span style="color:#28a745;">How it works?</span>
1. Users should create a team from the available players list. Every cricket team entry must have 11 players based on the following criteria:

   | Player Type     | Min | Max |
   |-----------------|-----|-----|
   | Wicket Keeper   | 1   | 8   |
   | Batter          | 1   | 8   |
   | All Rounder     | 1   | 8   |
   | Bowler          | 1   | 8   |

Once the user has selected 11 players, they have to assign a captain and vice-captain for the team. The captain will give 2x points scored by them in the actual match. The vice-captain will give 1.5x points scored by them in the actual match.

Batting Points:
- Run: +1
- Boundary Bonus: +1
- Six Bonus: +2
- 30 Run Bonus: +4
- Half-century Bonus: +8
- Century Bonus: +16
- Dismissal for a Duck: -2 (Batter, Wicket-Keeper & All-Rounder only)

Bowling Points:
- Wicket (Excluding Run Out): +25
- Bonus (LBW / Bowled): +8
- 3 Wicket Bonus: +4
- 4 Wicket Bonus: +8
- 5 Wicket Bonus: +16
- Maiden Over: +12

Fielding Points:
- Catch: +8
- 3 Catch Bonus: +4
- Stumping: +12
- Run Out: +6

2. Based on the match result and the players selected, users will get points. The user with the highest points will win. If multiple teams have the top score, they are also considered winners!
3. Users can see the list of teams registered based on the rank and points earned.

[![Thumbnail](https://static.vecteezy.com/system/resources/previews/015/873/760/original/click-here-icon-in-flat-style-pointer-clicking-illustration-on-isolated-background-web-button-sign-business-concept-vector.jpg)](https://drive.google.com/file/d/1hHDPFMKTCOmg8w5ioH3bOkZ3bIjNSOYJ/view?usp=sharing)
