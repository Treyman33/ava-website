import Navbar from '../components/Navbar.jsx'
import { useState } from 'react'
import ap9 from '../assets/ap9.jpg'

function Lessons() {
    const [lessonType, setLessonType] = useState("individual")

    return (
        <>
            <Navbar />

            <section id="hero" className="hero">
                <img
                    src={ap9}
                    alt="Child participating in a swimming lesson"
                    className="l-hero-img"
                />

                <div className="l-hero-content">
                    <h1>Lessons</h1>

                </div>
            </section>

            <main className="lessons-page">

                <section className="lesson-selection-section">
                    <div className="section-heading">
                        <p className="section-eyebrow">Choose Your Lesson</p>
                        <h2>Find the Right Fit for Your Swimmer</h2>
                        <p>
                            Every lesson is adjusted to match the swimmer's age,
                            comfort level, experience, and personal goals.
                        </p>
                    </div>

                    <div className="lesson-toggle">
                        <button
                            type="button"
                            className={lessonType === "individual" ? "active" : ""}
                            onClick={() => setLessonType("individual")}
                        >
                            Individual Lessons
                        </button>

                        <button
                            type="button"
                            className={lessonType === "group" ? "active" : ""}
                            onClick={() => setLessonType("group")}
                        >
                            Group Lessons
                        </button>
                    </div>

                    {lessonType === "individual" ? (
                        <div className="lesson-details-card">
                            <div className="lesson-description">
                                <p className="lesson-label">Private Instruction</p>
                                <h3>Individual Swim Lessons</h3>

                                <p>
                                    Individual lessons provide one-on-one
                                    instruction designed around your swimmer's
                                    specific needs. These lessons are ideal for
                                    beginners, nervous swimmers, children working
                                    toward water independence, or experienced
                                    swimmers wanting to improve their technique.
                                </p>

                                <div className="lesson-facts">
                                    <div className="lesson-fact">
                                        <span>Lesson Length</span>
                                        <strong>Regular : 30 Minutes <br /> Infant : 15 Minutes</strong>
                                    </div>

                                    <div className="lesson-fact">
                                        <span>Class Size</span>
                                        <strong>1 Swimmer</strong>
                                    </div>

                                    <div className="lesson-fact">
                                        <span>Instruction</span>
                                        <strong>Fully Personalized</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing-card">
                                <p className="pricing-title">Lesson Rates</p>

                                <div className="price-option">
                                    <div>
                                        <h4>Regular Lesson</h4>
                                        <p>For swimmers ages 3 and older</p>
                                    </div>

                                    <div className="price">
                                        <strong>$50</strong>
                                        <span>per lesson</span>
                                    </div>
                                </div>

                                <div className="price-option">
                                    <div>
                                        <h4>Infant Lesson</h4>
                                        <p>For swimmers ages 0–2</p>
                                    </div>

                                    <div className="price">
                                        <strong>$30</strong>
                                        <span>per lesson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="lesson-details-card">
                            <div className="lesson-description">
                                <p className="lesson-label">
                                    Small-Group Instruction
                                </p>

                                <h3>Group Swim Lessons</h3>

                                <p>
                                    Group lessons allow siblings or children who
                                    already know one another to learn together in
                                    a comfortable and encouraging environment.
                                    Groups work best when swimmers are close in
                                    age and have similar swimming abilities.
                                </p>

                                <p>
                                    These lessons are especially helpful for
                                    children returning to swimming after time
                                    away or swimmers who feel more confident
                                    learning alongside someone familiar.
                                </p>

                                <div className="lesson-facts">
                                    <div className="lesson-fact">
                                        <span>Lesson Length</span>
                                        <strong>30 Minutes</strong>
                                    </div>

                                    <div className="lesson-fact">
                                        <span>Group Size</span>
                                        <strong>2–3 Swimmers</strong>
                                    </div>

                                    <div className="lesson-fact">
                                        <span>Recommended For</span>
                                        <strong>Siblings or Friends</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing-card">
                                <p className="pricing-title">Lesson Rate</p>

                                <div className="price-option">
                                    <div>
                                        <h4>Group Lesson</h4>
                                        <p>2–3 swimmers per group</p>
                                    </div>

                                    <div className="price">
                                        <strong>$40</strong>
                                        <span>per swimmer</span>
                                    </div>
                                </div>

                                <p className="pricing-note">
                                    Group lessons are available to siblings or
                                    families who already know one another.
                                </p>
                            </div>
                        </div>
                    )}
                </section>

                <section className="skills-section">
                    <div className="section-heading">
                        <p className="section-eyebrow">Skill Development</p>
                        <h2>What Swimmers Can Work On</h2>
                        <p>
                            Lesson content depends on each swimmer's current
                            ability, comfort level, and goals.
                        </p>
                    </div>

                    <div className="skills-grid">
                        <article className="skill-card">
                            <h3>Beginning Swimmers</h3>

                            <ul>
                                <li>Becoming comfortable in the water</li>
                                <li>Safely entering and exiting the pool</li>
                                <li>Blowing bubbles and breath control</li>
                                <li>Front and back floating</li>
                                <li>Kicking and basic arm movements</li>
                                <li>Building independent swimming skills</li>
                            </ul>
                        </article>

                        <article className="skill-card">
                            <h3>Intermediate Swimmers</h3>

                            <ul>
                                <li>Freestyle technique</li>
                                <li>Backstroke technique</li>
                                <li>Side breathing</li>
                                <li>Treading water</li>
                                <li>Deep-water confidence</li>
                                <li>Improving endurance and coordination</li>
                            </ul>
                        </article>

                        <article className="skill-card">
                            <h3>Advanced Swimmers</h3>

                            <ul>
                                <li>Breaststroke development</li>
                                <li>Butterfly fundamentals</li>
                                <li>Starts and turns</li>
                                <li>Stroke refinement</li>
                                <li>Swimming efficiency</li>
                                <li>Competitive swimming preparation</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className="information-section">
                    <div className="policy-card">
                        <p className="section-eyebrow">Important Information</p>
                        <h2>Cancellation Policy</h2>

                        <ul>
                            <li>
                                Please provide at least 24 hours' notice when
                                canceling or rescheduling a lesson.
                            </li>

                            <li>
                                Lessons canceled with less than 24 hours' notice
                                will be charged the full lesson price.
                            </li>

                            <li>
                                If weather, lightning, or unsafe pool conditions
                                prevent a lesson, the lesson can be rescheduled
                                at no additional cost.
                            </li>

                            <li>
                                If your swimmer is sick, please contact me as
                                soon as possible before the scheduled lesson.
                            </li>

                            <li>
                                Swimmers who arrive late may receive a shortened
                                lesson so that the following lesson can begin on
                                time.
                            </li>
                        </ul>

                    </div>

                    <div className="recommendations-card">
                        <p className="section-eyebrow">Preparing for Lessons</p>
                        <h2>Parent Recommendations</h2>

                        <ul>
                            <li>Arrive approximately 5–10 minutes early.</li>
                            <li>
                                Have your swimmer dressed and ready before the
                                lesson begins.
                            </li>
                            <li>Bring a swimsuit, towel, and water bottle.</li>
                            <li>
                                Goggles are recommended, especially for swimmers
                                practicing strokes.
                            </li>
                            <li>
                                Apply sunscreen before outdoor lessons when
                                needed.
                            </li>
                            <li>
                                Encourage your swimmer, but avoid coaching from
                                the side of the pool during the lesson.
                            </li>
                            <li>
                                Celebrate small improvements and keep practice
                                positive between lessons.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="lesson-expectations-section">
                    <div className="section-heading">
                        <p className="section-eyebrow">What to Expect</p>
                        <h2>A Positive and Personalized Approach</h2>
                    </div>

                    <div className="expectations-grid">
                        <article>
                            <h3>Every Swimmer Is Different</h3>
                            <p>
                                Children progress at different speeds. Lessons
                                are adjusted based on confidence, experience,
                                attention span, and physical ability.
                            </p>
                        </article>

                        <article>
                            <h3>Consistency Matters</h3>
                            <p>
                                Weekly lessons and regular opportunities to
                                practice can help swimmers retain skills and
                                build confidence more effectively.
                            </p>
                        </article>

                        <article>
                            <h3>Safety Comes First</h3>
                            <p>
                                Water safety, comfort, and good swimming habits
                                are emphasized throughout every level of
                                instruction.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="lesson-faq-section">
                    <div className="section-heading">
                        <p className="section-eyebrow">Common Questions</p>
                        <h2>Lesson FAQs</h2>
                    </div>

                    <div className="faq-grid">
                        <article className="faq-card">
                            <h3>How many lessons will my child need?</h3>
                            <p>
                                Every swimmer is different. The number of lessons
                                depends on their age, previous experience,
                                comfort in the water, and swimming goals.
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>Can parents watch the lesson?</h3>
                            <p>
                                Parents are welcome to observe. It is usually
                                best to allow the swimmer to focus on the
                                instructor without receiving additional
                                directions from the poolside.
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>What should my child bring?</h3>
                            <p>
                                Please bring a swimsuit, towel, water bottle, and
                                goggles if your child uses them. Infants and
                                toddlers may also need an appropriate swim
                                diaper.
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>What happens during bad weather?</h3>
                            <p>
                                Outdoor lessons may be postponed due to
                                lightning, severe weather, or unsafe pool
                                conditions. You will be contacted about
                                rescheduling when necessary.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="lessons-cta">
                    <p className="section-eyebrow">Start Swimming</p>
                    <h2>Ready to Schedule a Lesson?</h2>

                    <p>
                        Whether your swimmer is entering the water for the first
                        time or working to improve advanced strokes, lessons are
                        personalized to help them become safer and more
                        confident.
                    </p>

                    <a onClick={() =>window.open('https://forms.gle/yK6MQFgN2CxF2DKy8','_blank')} 
                        className="lessons-cta-button">
                        Client Intake
                    </a>
                </section>
            </main>
        </>
    )
}

export default Lessons