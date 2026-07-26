import Navbar from '../components/Navbar.jsx'
import { useState } from 'react'
import ap9 from '../assets/ap9.jpg'
 
function Lessons() {
    const [lessonType, setLessonType] = useState("individual");
    return (
    <>
        <Navbar/>
        <section id="hero" className="hero"> <img src={ap9} alt="Swimming lessons hero" className="l-hero-img" />
            <div className="l-hero-content">
                <h1>Lessons</h1>
            </div>
        </section>
        <div className = "lessons-section">
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
                    <p>1-on-1 Instruction</p>
                    <p>30 Minutes</p>
                    <p>Tailored Lessons to Fit Your Child's Needs.</p>
                    <p>Rates:</p> 
                    <p>• Regular $50 / 30 min Lesson </p>
                    <p>• Infant (0 - 2 years old) $30 / 30 min Lesson</p>
                </div>
            ) : (
            <div className="lesson-content">
                <p>2-3 Students Per Group Lesson</p>
                <p>30 Minutes</p>
                <p>Exclusive to siblings or families that know each other</p>
                <p>Best if kids have similar swimming abilities</p>
                <p>Best for Kids Who Are Picking Swimming Back Up After Some Time Away.</p>
                <p>Rates:</p> 
                <p>• $40 per Student / 30 min Lesson </p>
            </div>
            )}
        </div>
    </>
  );
}

export default Lessons;