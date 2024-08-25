import { Lesson, LessonResult } from "../types/lesson";
import { NextLesson } from "./ServerLessonController";


export default function SubmitLesson(lessonFormData: FormData, lessonData: Lesson){

    // Get Uers Submission
    const userAnswer = lessonFormData.get('wordAttempt') as string;

    let exists: boolean = false;

    const lessonAnswer = lessonData.englishTranslation;

    lessonAnswer.forEach((englishTranslation, index) => {
        console.log(userAnswer)
        if (userAnswer === englishTranslation){
            
            exists = true
        }
    })
 

    const lessonResult: LessonResult = {
        lessonNumber: lessonData.lessonNumber,
        userAnswer: userAnswer,
        actualAnswer: lessonAnswer[0],
        isPassed: exists
    }

    // Is answer is correct, update db cluster with new lesson value, and return lessonResults.
    if (exists){
        NextLesson(lessonResult)
        return lessonResult;
    }

    // If incorrect, return lessonResults
    return lessonResult;

}

export function hasWhiteSpace(phrase: string) {
    return phrase.indexOf(' ') >= 0;
  }

export function refreshPage(){
    window.location.reload();
} 

// This function returns the percenatage of lessons which have been completed.
// A lesson will be considered complete once it has been completed 5 times
export function returnProgress(progressValues: Array<number>){
    const numberOfLessonsNotComplete = progressValues.length;
    const numberOfLessonsCompleted = 38 - numberOfLessonsNotComplete;

    // Get sum of how many times a lesson has been completed
    const sumOfNotCompletedLessons = progressValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumOfCompletedLessons = numberOfLessonsCompleted * 5;
    const totalSum = sumOfNotCompletedLessons + sumOfCompletedLessons;

    // Calculate Percentage (38 * 5 = 190)
    const progressPercentage = Math.round((totalSum / 190) * 100);

    return progressPercentage;
}
