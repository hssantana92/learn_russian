'use server'

import SingleLesson from "./SingleLesson"
import { Lesson, LessonCategories, LessonResult } from "../types/lesson";

import React from "react";

export default async function ServerLesson(props: any) {

    const lessons: Lesson[] = props.data;

    const singleLesson: Lesson = lessons[2];


    return (
        <SingleLesson data={singleLesson}></SingleLesson>
    )


}

