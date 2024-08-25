import '../../css/fadein.css';
import '../../css/cover.css'
import '../../css/card.css';
import { GetLessons, GetUserLesson } from '@/app/controllers/ServerLessonController';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import ServerLesson from '@/app/components/ServerLesson';
import SingleLesson from '@/app/components/SingleLesson';
import { useSearchParams } from 'next/navigation';
import { count } from 'console';
import { returnProgress } from '@/app/controllers/ClientLessonController';
import { redirect, RedirectType } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';

export default async function LessonsPage({props, searchParams}:  {props: any; searchParams?: { [key: string]: string | string[] | undefined }; }){

    const user = await getSession();

    if (user == null){
        redirect('/api/auth/login', RedirectType.push);
    }

    const dbName = searchParams!.name as string;

    // Get Data from MongoDB Cluster
    const results = await Promise.all([
        GetLessons(dbName),
        GetUserLesson('test')
    ])

    // Store Data in local vars
    const lesson = results[0];
    const progress = results[1];

    //const randomLesson = progress![2]
    // Init array to store keys where the progress level is less than or equal to 5.
    // We assume 5 correct answers passes the lesson
    const randomArray: Array<number> = [];
    const progressValues: Array<number> = []

    Object.entries(progress!).forEach(([key, value]) => {
        if (value < 5){
            randomArray.push(key as unknown as number);
            progressValues.push(value);
        } 
    });

    const progressPercentage = returnProgress(progressValues)

    // Generate random lesson number from the array
    const randomLessonNumber = randomArray[Math.floor(Math.random() * randomArray.length)];

    const singleLesson = lesson[randomLessonNumber];
    return (

        <SingleLesson data={singleLesson} progress={progressPercentage}></SingleLesson>
        
    )
}