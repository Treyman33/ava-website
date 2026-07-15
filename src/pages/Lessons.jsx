import Navbar2 from '../components/Navbar2.jsx'
import { useState } from 'react'
import ap9 from '../assets/ap9.jpg'
 
function Lessons() {
    const [lessonType, setLessonType] = useState("individual");
    return (
    <>
        <Navbar2/>
        <section id="hero" className="hero"> <img src={ap9} alt="Swimming lessons hero" className="l-hero-img" />
            <div className="l-hero-content">
                <h1>Lessons</h1>
            </div>
        </section>
        <div className="lesson-toggle">
            <button className={lessonType === "individual" ? "active" : ""} onClick={() => setLessonType("individual")}>
                Individual Lessons
            </button>
            <button className={lessonType === "group" ? "active" : ""} onClick={() => setLessonType("group")}>
                Group Lessons
            </button>
        </div>
        {lessonType === "individual" ? (
            <div className="lesson-content">
                <p>TEST 1</p>
            </div>
        ) : (
        <div className="lesson-content">
            <p>TEST 2</p>
        </div>
        )}
    </>
  );
}

export default Lessons;