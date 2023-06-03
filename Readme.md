# QuizCraft

QuizCraft is a quiz creation and testing application that allows users to create custom quizzes and test their knowledge in various subjects. With QuizCraft, you can easily create quizzes with multiple-choice questions, define correct answers, and share them with others for testing.

## Features

- Create quizzes: Users can create their own quizzes by adding multiple-choice questions and defining correct answers for each question.

- Customize quizzes: QuizCraft provides options to customize quizzes by setting time limits, specifying the number of questions, and adding additional instructions.

- Test mode: Users can enter test mode to take quizzes created by themselves or others. The application tracks their progress and displays results upon completion.

- Save and resume: QuizCraft allows users to save their progress and resume quizzes at a later time. This feature is helpful for longer quizzes that cannot be completed in one sitting.

- Share quizzes: Users can share their created quizzes with others by generating a unique code or URL. Recipients can then access and take the quiz using that code or URL.

## Installation

1. Clone the QuizCraft repository from GitHub:

   ```
   git clone https://github.com/your-username/quizcraft.git
   ```

2. Navigate to the project directory:

   ```
   cd quizcraft
   ```
3. Run the backend apis:
   ```
   cd quiz-craft-api
   ```
   ```
   docker-compose up -d
   ```
3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the application:

   ```
   npm start
   ```

5. Access the application in your web browser at `http://localhost:4200`.

## Usage

1. Launch the QuizCraft application in your web browser.

2. Sign up for a new account or log in with your existing credentials.

3. Create a new quiz by clicking on the "Create Quiz" button.

4. Add multiple-choice questions to your quiz by providing the question text and possible answer choices. Specify the correct answer for each question.

5. Customize your quiz by setting a time limit, specifying the number of questions to be displayed, and adding any additional instructions.

6. Save your quiz and generate a unique code or URL to share with others.

7. To take a quiz, click on the "Take Quiz" button and enter the provided code or URL.

8. Answer each question by selecting the appropriate option. The application will provide immediate feedback on each answer.

9. After completing the quiz, view your results, including the number of correct answers and your overall score.

10. Optionally, save your progress and resume the quiz at a later time.

## Contributing

Contributions to QuizCraft are welcome! If you have any bug reports, feature requests, or would like to contribute code improvements, please follow these steps:

1. Fork the QuizCraft repository on GitHub.

2. Create a new branch for your feature or bug fix.

3. Make the necessary code changes and write tests, if applicable.

4. Test your changes thoroughly to ensure they do not introduce any new issues.

5. Commit your changes and push them to your forked repository.

6. Submit a pull request to the main QuizCraft repository, explaining the changes you have made.

7. Your pull request will be reviewed, and any necessary feedback will be provided.

Happy quizzing!