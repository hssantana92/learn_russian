export type LessonCategories = {
    name: string;
    description: string; 
    dbName: string;
  }

  export type Lesson = {
    lessonNumber: number;
    russianPhrase: string;
    englishTranslation: string[];
    englishPhonetic: string;
  }

  export type LessonResult = {
    lessonNumber: number;
    userAnswer: string;
    actualAnswer: string;
    isPassed: boolean;
  }

  export type ProgressObject = {
    [key: number]: number;
};