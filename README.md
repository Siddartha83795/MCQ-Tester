
# MCQ Tester - Offline Quiz Application

An offline multiple-choice question testing application for educational institutions. This application allows staff to manage students, create quizzes, and view results, while students can take quizzes and track their performance.

## Features

- **Two User Roles**:
  - **Staff**: Register students, manage questions, view results
  - **Students**: Take quizzes, view personal results

- **Quiz Management**:
  - Create questions with multiple-choice options
  - Organize questions by subject
  - Randomized question order for each attempt

- **Student Management**:
  - Register students with USN (University Seat Number)
  - Track student performance across different subjects

- **Results & Analytics**:
  - View detailed quiz results
  - Export results to CSV for further analysis

## Getting Started

### For Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### For Production (Web)

1. Build the application:
   ```
   npm run build
   ```
2. Serve the built files:
   ```
   npm run serve
   ```

## Default Credentials

The application comes with pre-configured test accounts:

- **Staff Account**:
  - Username: `admin`
  - Password: `admin123`

- **Student Account**:
  - USN: `ENG23CT0001`
  - Password: `student123`

## Technology Stack

- React with TypeScript
- Tailwind CSS for styling
- Local storage for data persistence (offline functionality)

## Future Enhancements

- Electron packaging for native desktop applications
- Data export/import functionality
- Question bank import from CSV
- Timer for quizzes
- Question types beyond multiple choice
