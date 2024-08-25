'use client'
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lesson, LessonResult } from "../types/lesson";
import React from "react";
import SubmitLesson, { refreshPage } from "../controllers/ClientLessonController";


export default function SingleLesson(props: any) {

    function onSubmit(formData: FormData, lessonData: Lesson){

        const lessonResults: LessonResult = SubmitLesson(formData, lessonData);

        if (lessonResults.isPassed == true){
            $("#staticBackdrop").modal("show")
        } else {
            $("#staticBackdropIncorrect").modal("show")
        }
    
    }

    function check(e: any) {
        if(e.key === "Enter") {
            console.log('test');
        }
      } 

    const lessonData = props.data;

    const progress = props.progress as number;


    return (
        <>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Correct!</h1>
            </div>
            <div className="modal-body">
                <text>{`${lessonData.russianPhrase} (${lessonData.englishPhonetic}) means `}</text><strong>{`${lessonData.englishTranslation[0]}`}</strong>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => {refreshPage()}} data-bs-dismiss="modal">Continue</button>
            </div>
            </div>
        </div>
        </div>

        <div className="modal fade" id="staticBackdropIncorrect" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Sorry, that&aposs incorrect</h1>
            </div>
            <div className="modal-body">
                <text>{`${lessonData.russianPhrase} (${lessonData.englishPhonetic}) means `}</text><strong>{`${lessonData.englishTranslation[0]}`}</strong>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => {refreshPage()}} data-bs-dismiss="modal">Continue</button>
            </div>
            </div>
        </div>
        </div>

        <div className='fade-in' style={{width: '100%', marginBottom: '20px'}}>
        <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm" style={{textAlign: 'right'}}>
            <h5>Completion</h5>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
            </div>
        </div>
        <h4>Translate:</h4>
        <br></br>
        <strong><h4>{lessonData.russianPhrase}</h4></strong>
        <br></br>
        <strong><h5>Phonetic:</h5></strong>
        <h5>{lessonData.englishPhonetic}</h5>

        
    
        <form action={(lessonFormData) => {onSubmit(lessonFormData, lessonData)}}>
            <div className="form-group">
                <br></br>
                <h4>Translation:</h4>
                <input id="wordAttempt" name="wordAttempt" className="form-control" type="text" placeholder="Enter your answer" style={{marginBottom: '15px'}}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

        </>

        

    )

}




