import './App.css';
import { useState } from 'react';
import SMButton from './components/Option';
import QuestionNo from './components/QuestionNo';

function App() {

  const [questions] = useState([
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ],
    },
  ]);

  const [indexNum, setIndexNum] = useState(0);
  const [marks, setMarks] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(false);

  let quizName = "HTML Quiz";
  let questionAttempted = `Total Attempted ${attempt} Questions`;
  let marksObtained = `Your marks are ${marks}`;
  let totalMarks = `Total Marks for Quiz is ${questions.length}`;
  let pass = "You passed in quiz";
  let fail = "You failed in quiz";

  const checkAns = (userSelected, correctAns) => {
    console.log("userSelected=====>",userSelected)
    console.log("correctAns=====>",correctAns)
  
    if(userSelected === correctAns){
      setMarks(marks+1)
    }
    if(userSelected){
      setAttempt(attempt+1)
    }
    if(indexNum+1 === questions.length){
      setResult(true);
    }
    setIndexNum(indexNum+1);
  };

  function skipAnswer() {
    setIndexNum(indexNum+1)
    if(indexNum+1 === questions.length){
      setResult(true);
    }
  }

  let perc = marks / questions.length * 100

  let percentage = `Your percentage is ${perc}% `

  return (
    <div>
      <div>
        {result ? <h1 className='App-header'>{marksObtained}<br />{questionAttempted}<br />{percentage}<br />
        {perc >= 80 ? pass : fail}
        </h1> :
          <div>
              <h1 className='style-quiz'>{quizName}</h1>
              <p>{totalMarks}</p>
              <QuestionNo onClick={skipAnswer} className="queBtn" variant="outlined" label={`Question ${indexNum+1}
               of ${questions.length}`}/>
              <h1 className='style-h1'>{questions[indexNum].question}</h1>
              <hr />
            <div className='grid-view'>
              {questions[indexNum].options.map((e,i)=> {
                return (
                  <div className='grid-item'>
                    <SMButton className="opt-btn" key={i} onClick={() => checkAns(e, questions[indexNum].answer)}
                    label={e} variant="contained"/>
                  </div>
                )
              })}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;