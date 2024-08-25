import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from "mongodb";
import { Lesson } from '@/app/types/lesson';

type ResponseData = {
    message: string
  }

export default async function handler(req: NextApiRequest,res: NextApiResponse<ResponseData>) {
    if (req.method === "GET") {


        const client = new MongoClient(process.env.MDB as string);
        await client.connect();
    
        const database = client.db('lr_db');
        const collection = database.collection('basic');
    
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
    
          } catch (err) {
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
          }
    
          const myJsonString = JSON.stringify(lessonArray);
    
          res.status(200).json({ message: myJsonString})

    }
}