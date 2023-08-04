import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionInput, setFormTitle } from '../redux/actions/formActions';

const FormTitleHeader = (props) => {
    console.log(props.formId)
    const questions = useSelector((state) => state.addQuestion.questions)
    const formTitle = useSelector((state) => state.form.formTitle)
    const dispatch = useDispatch()
    const questionId = Math.floor(100 + Math.random() * 900);
    const addNewQuestionhandler = () => {
        const element = {
            "questionId": questionId,
            "question": "",
            "formId": props.formId,
            "type": "Short Answer",
            "name": formTitle
        }
        dispatch(addQuestionInput(element))
    }

    const titleChangeHandler = (e) => {
        dispatch(setFormTitle(e.target.value))

    }
    questions.map(question => {
        question.name = formTitle
    })

    return (
        <div className='row'>
            <form className='col-11'>
                <div className="form-group">
                    <input name='name' type="text" className="form-control" placeholder="Form Title" onChange={titleChangeHandler} defaultValue={formTitle} required />
                </div>
            </form>

            {formTitle && (<div className='col-1'>
                <p className="bi bi-plus-circle" style={{ fontSize: '30px' }} onClick={addNewQuestionhandler}></p>
            </div>)}
        </div>
    )
}

export default FormTitleHeader
