import './App.css';
import { useState } from 'react';

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
  // const [isOn, setIsOn] = useState(false);

  const [indexNum, setIndexNum] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkAns = (userSelected, correctAns) => {
    console.log("userSelected=====>",userSelected)
    console.log("correctAns=====>",correctAns)
  
    if(userSelected === correctAns){
      setMarks(marks+1);
    }

    if(indexNum+1 === questions.length){
      setResult(true);
    }

    setIndexNum(indexNum+1);
  };
  return (
// <div>
//   <button onClick={()=>setIsOn(!isOn)}  >{isOn ? "On" : "Off"}</button>
//   {isOn && <h1>ON</h1>}
// </div>
    <div>
      <div>
        {result ? <h1 className='App-header'>Your Mark is {marks}</h1> :
          <div>
              <h1 className='style-quiz'>QUIZ</h1>
              <h1 className='style-h1'><b>Question {indexNum+1}: </b>{questions[indexNum].question}</h1>
              <hr />
            <div className='grid-view'>
              {questions[indexNum].options.map((e,i)=> {
                return (
                  <div className='grid-item'>
                    <button className='opt-btn' onClick={()=>checkAns(e, questions[indexNum].answer)}>
                      {i+1}: <b>{e}</b>
                    </button>
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