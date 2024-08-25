'use client'

import '../css/card.css';
import { LessonCategories } from '../types/lesson';
import Link from 'next/link';

export default function Card(props: any){

    const lessonCategory: LessonCategories = props.data;
    

    return (
            <Link href={{pathname: '/lessons', query: {name: lessonCategory.dbName}}} className="card card-1" style={{width: '100%', marginBottom: '20px'}}>
                <h3>{lessonCategory.name}</h3>
                <p>{lessonCategory.description}</p>
            </Link>
            
    )
}