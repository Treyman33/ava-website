import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import ap9 from '../assets/ap9.jpg'

function FAQs(){
    const [lessonType, setLessonType] = useState("individual")

    return (
        <>
            <Navbar />

            <section id="hero" className="hero">
                <img
                    src={ap9}
                    alt="Lessons Hero Image"
                    className="l-hero-img"
                />

                <div className="l-hero-content">
                    <h1>FAQs</h1>

                </div>
            </section>

            <main className="lessons-page">
                <section className="lesson-faq-section">
                    <div className="section-heading">
                        <p className="section-eyebrow">Have Questions?</p>
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            Find answers to the questions I hear most often from parents! If you don't see what you're looking for, feel free to reach out using the button below.
                        </p>
                    </div>

                    <div className="faq-grid">
                        <div className="section-heading">
                            <h3>Before Booking</h3>
                        </div>
                        <article className="faq-card">
                            <h3>What areas do you serve?</h3>
                            <p>
                                I offer lessons in the Point Loma, San Diego, and La Jolla areas.
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>Where are lessons held?</h3>
                            <p>
                                As I travel to meet my clients, lessons will be located at a private pool near your area.
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>What ages do I teach?</h3>
                            <p>
                                I teach infants (0-2 years old), all the way up to young teenagers.
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>What skill levels do I teach?</h3>
                            <p>
                                I accept clients with all levels of skill in swimming. From those who are afraid of water, to advanced swimmers looking to better refine their technique.
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>How long is each lesson?</h3> 
                            <p>
                                Regular lessons are 30 minutes, Infant lessons are 15 minutes. Longer lessons can be requested for an additional fee.
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>Will you teach at my pool?</h3>
                            <p>
                                If you have a private or community pool, I will teach in those!
                            </p>
                        </article>
                        <div className="section-heading">
                            <h3>Scheduling</h3>
                        </div>
                        <article className="faq-card">
                        <h3>How do I schedule lessons?</h3> 
                            <p>
                                Get in touch with me via my client intake form, you can find this at the top of every page!
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>Can I book multiple lessons at once?</h3>
                            <p>
                                Yes, you can set up multiple lesson dates / sessions at once!
                            </p>
                        </article>
                        <article className="faq-card">
                        <h3>How far in advance should I schedule?</h3> 
                            <p>
                                You can schedule up to 2 months in advance.
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>Can lessons be rescheduled?</h3>
                            <p>
                                Yes lessons can be rescheduled, but as I have other clients you will not always be guranteed an opening for a reschedule.
                            </p>
                        </article>
                         <div className="section-heading">
                            <h3>During Lessons</h3>
                        </div>
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
                            <h3>Should parents stay during the lesson?</h3>
                            <p>
                                Parents are welcome to stay and observe their kids lessons, but I ask that parents not interfere with the instruction.
                            </p>
                        </article>
                        <article className="faq-card">
                        <h3>What if my child is nervous or afraid of the water?</h3> 
                            <p>
                                That is perfectly normal for some children, and all the more reason for them to learn to swim. I will help them overcome their fear of the water, and teach them to swim!
                            </p>
                        </article>

                        <article className="faq-card">
                            <h3>How are lessons structured?</h3>
                            <p>
                                Each lesson structure will vary as the lesson is meant to match the swimmer(s) I am working with. 
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>What happens if we arrive late?</h3>
                            <p>
                                Lessons tend to be structured back-to-back so a late arrival is taking away from your swimmers instruction time. Lessons are still full price, as that 30 minute slot was booked.
                            </p>
                        </article>
                        <div className="section-heading">
                            <h3>Weather</h3>
                        </div>
                        <article className="faq-card">
                        <h3>What happens if it rains?</h3> 
                            <p>
                                Rain policy????
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>What happens if there is lightning?</h3>
                            <p>
                                Lightning in the immediate area, will mean a cancellation of lessons. I will communicate with you about this.
                            </p>
                        </article>
                        <article className="faq-card">
                        <h3>What if my child gets sick?</h3> 
                            <p>
                                24 hours cancellation notice is required, so I can attempt to rebook a slot. If 24 hours notice is not provided, I will request (half or full?) lesson fee charged.
                            </p>
                        </article>

                        <div className="section-heading">
                            <h3>Pricing/Payment</h3>
                        </div>
                        <article className="faq-card">
                            <h3>What payment methods do I accept?</h3>
                            <p>
                                I only accept Venmo or Cash.
                            </p>
                        </article>
                        <article className="faq-card">
                        <h3>When is payment due?</h3> 
                            <p>
                                When would you like payment due?
                            </p>
                        </article>
                        <article className="faq-card">
                            <h3>Do you offer package discounts?</h3>
                            <p>
                                Yes! I prefer to discuss packaged or long-term lesson packages privately as each case is individual.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="lessons-cta">
                    <p className="section-eyebrow">Your Questions</p>
                    <h2>I'd Love to Help! </h2>

                    <p>
                        Whether you're wondering about lesson options, scheduling, or anything
                        else, I'm happy to help. Click below to get in touch, and I'll get back to
                        you as soon as possible.
                    </p>

                    <a  href="mailto:ava@aemswimlessons.com"
                    className="lessons-cta-button">
                        Contact Me!
                    </a>
                </section>
            </main>
        </>
    )
}

    {/*Some good FAQs:

What ages do you teach?
How long is each lesson?
Where are lessons held?
Do parents stay during lessons?
What happens if it rains?
What if my child is scared of the water?
How many lessons will my child need?
Do you teach adults? */}

export default FAQs;