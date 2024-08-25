'use server'

import { Lesson, LessonCategories, LessonResult, ProgressObject } from "../types/lesson";
import DB_CONTROLLER from "./DatabaseController";


export async function GetLessons(dbName: string){
    const collection = await DB_CONTROLLER(dbName);

    let lessonArray: Lesson[] = [];

    try {
        const cursor = collection.find();

        for await (const lesson of cursor) {

            let temporaryLesson: Lesson = {
                lessonNumber: lesson.lessonNumber,
                russianPhrase: lesson.russianPhrase,
                englishTranslation: lesson.englishTranslation,
                englishPhonetic: lesson.englishPhonetic
            };

            lessonArray.push(temporaryLesson);
          }

        cursor.close()

      } catch (err) {
        
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
      }

      


      return lessonArray;

}


export async function GetUserLesson(userName: string){
    const collection = await DB_CONTROLLER('user')

    const findOneQuery = { user: userName };

    try {

        const findOneResult = await collection.findOne(findOneQuery);


        return findOneResult?.progress as ProgressObject;

    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }

}

export async function GetLessonCategories(){

    const lessonCategories: LessonCategories[] = [];

    const lessonCategoryOne: LessonCategories = {
        name: "Basic",
        description: "Learn basic travel phrases in Russian.",
        dbName: 'basic'
    }

    const lessonCategoryOneEnglish: LessonCategories = {
        name: "Basic (English to Russian)",
        description: "Translate basic travel phrases from English to Russian",
        dbName: 'basicToRussian'
    }

    const lessonCategoryTwo: LessonCategories = {
        name: "Accomodation",
        description: "Learn what to say at your hotel",
        dbName: 'accomodation'
    }
    const lessonCategoryThree: LessonCategories = {
        name: "Restaurant",
        description: "Learn what to say when you're eating out",
        dbName: 'restaurant'
    }
    const lessonCategoryFour: LessonCategories = {
        name: "Shopping",
        description: "Learn what to say when you're out shopping",
        dbName: 'shopping'
    }

    lessonCategories.push(lessonCategoryOne);
    lessonCategories.push(lessonCategoryOneEnglish);
    lessonCategories.push(lessonCategoryTwo);
    lessonCategories.push(lessonCategoryThree);
    lessonCategories.push(lessonCategoryFour);

    return lessonCategories;

}

export async function NextLesson(lessonResults: LessonResult){

    const collection = await DB_CONTROLLER('user')

    const findOneQuery = { user: "test" };

    const updateDoc = { $inc: { [`progress.${lessonResults.lessonNumber - 1}`]: 1 } }


    try {
        const updateResult = await collection.findOneAndUpdate(
          findOneQuery,
          updateDoc,
        );
      } catch (err) {
        console.error(`Something went wrong trying to update one document: ${err}\n`);
      }
}

