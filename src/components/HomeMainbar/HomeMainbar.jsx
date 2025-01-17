import React from 'react'
import { Link , useLocation , useNavigate} from 'react-router-dom';
import './HomeMainbar.css';
import QuestionList from "./QuestionList"
import { useSelector } from 'react-redux';

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate();
  const questionsList = useSelector(state => state.questionReducer);
  
  const checkAuth = () =>{
    if(user === null){
      navigate('/Auth');
      alert("Login to ask a question");
    }
    else{
      navigate('/AskQuestion');
    }
  }
  const location = useLocation();

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }


        <button onClick = {checkAuth} className='ask-btn'>Ask Question</button>

      </div>

      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> : 
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar