import { GetLessonCategories } from '@/app/controllers/ServerLessonController'
import Card from '../../components/Card'
import '../../css/cover.css'
import { getSession } from '@auth0/nextjs-auth0';
import { redirect, RedirectType } from 'next/navigation';


export default async function Categories(){

    const user = await getSession();

    if (user == null){
        redirect('/api/auth/login', RedirectType.push);
    }
    

    const lessonCategories = await GetLessonCategories();


    return (
        
                
        Object.entries(lessonCategories).map(([lessonKey, lessonValue])=>
            
            <Card data={lessonValue}></Card>
            
            )

            

    )
}
