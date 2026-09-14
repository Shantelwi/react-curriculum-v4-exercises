import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  const [workingText, setWorkingText] = useState(question.question);

  const formatQuestionType = (type) =>
    type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');

  // ===== QUESTION ACTIONS =====

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };

  const handleCancel = () => {
    setWorkingText(question.question);

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (!confirmed) return;

    dispatch({
      type: 'DELETE_QUESTION',
      payload: {
        id: question.id,
      },
    });
  };

  // ===== OPTION ACTIONS =====

  const handleAddOption = () => {
    const optionText = prompt('New option');

    if (!optionText) return;

    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        optionText,
      },
    });
  };

  const handleEditOption = (option, index) => {
    const newText = prompt('Edit option', option);

    if (!newText) return;

    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText,
      },
    });
  };

  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };

  return (
    <div className={styles['question-item']}>
      {/* HEADER */}
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>

        <div className={styles['question-actions']}>
          <button
            className={styles['edit-btn']}
            onClick={isEditing ? handleCancel : handleEdit}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* QUESTION BODY */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {/* OPTIONS */}
      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>

          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>

                <button onClick={() => handleEditOption(option, index)}>
                  Edit
                </button>

                <button
                  disabled={question.options.length <= 2}
                  onClick={() => handleDeleteOption(index)}
                >
                  Delete
                </button>
              </li>
            ))}

            <button onClick={handleAddOption}>+ Add Option</button>
          </ul>
        </div>
      )}
    </div>
  );
}
