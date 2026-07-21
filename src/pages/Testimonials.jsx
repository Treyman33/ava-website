import Navbar3 from '../components/Navbar3.jsx'
import aw4 from '../assets/aw4.jpg'
import testimonials from '../data/testimonials.js'
import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-router-dom';


function Testimonials() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStars, setFilterTerm] = useState(0);
    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);
    const [sortTerm, setSortTerm] = useState('');
    const [page, setPage] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const dropdownRef = useRef(null);
    const dropdownRef2 = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            dropdownRef2.current &&
            !dropdownRef2.current.contains(event.target)
        ) {
            setDropDown(false);
            setDropDown2(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    let filteredTestimonials;
    let sortedTestimonials;
    if (searchTerm === ""){filteredTestimonials = testimonials}
    else {
    let lowerSearchTerm = searchTerm.trim().toLowerCase()
    filteredTestimonials = testimonials.filter(testimonial => {
        const firstName = testimonial.firstName.toLowerCase()
        const lastName = testimonial.lastName.toLowerCase()
        const review = testimonial.review.toLowerCase()
        return (
            firstName.includes(lowerSearchTerm) ||
            lastName.includes(lowerSearchTerm) ||
            review.includes(lowerSearchTerm)
        )
    })
    }
    if (filterStars !== 0){
        filteredTestimonials = filteredTestimonials.filter(testimonial => {
            return (
                testimonial.rating === filterStars
            )
        })
    }
    if (sortTerm === ''){sortedTestimonials = filteredTestimonials}
    else if (sortTerm === 'fnAZ') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => a.firstName.localeCompare(b.firstName))
    }
    else if (sortTerm === 'fnZA') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => b.firstName.localeCompare(a.firstName))
    }
    else if (sortTerm === 'lnAZ') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => a.lastName.localeCompare(b.lastName))
    }
    else if (sortTerm === 'lnZA') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => b.lastName.localeCompare(a.lastName))
    }
    else if (sortTerm === 'rDsc') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => b.rating - a.rating)
    }
    else if (sortTerm === 'rAsc') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => a.rating - b.rating)
    }
    else if (sortTerm === 'dDsc') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => b.dateSubmitted.localeCompare(a.dateSubmitted))
    }
    else if (sortTerm === 'dAsc') {
        sortedTestimonials = filteredTestimonials.toSorted((a,b) => a.dateSubmitted.localeCompare(b.dateSubmitted))
    }
    {sortedTestimonials = sortedTestimonials.slice(page*10, (page+1)*10)}
    
    function dropDownMenu(){
    
        if (dropDown === true && filterStars === 0){
            return(
                <div className = "t-dropdown-menu">           
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(5) , setDropDown(false), setPage(0)}}> 5 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(4) , setDropDown(false), setPage(0)}}> 4 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(3) , setDropDown(false), setPage(0)}}> 3 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(2) , setDropDown(false), setPage(0)}}> 2 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(1) , setDropDown(false), setPage(0)}}> 1 Star Reviews</button>
                </div>
            )
        }
        else if(dropDown === true && filterStars!== 0){
            return(
                <div className = "t-dropdown-menu">
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(0) , setDropDown(false), setPage(0)}}> Clear Filter</button>          
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(5) , setDropDown(false), setPage(0)}}> 5 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(4) , setDropDown(false), setPage(0)}}> 4 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(3) , setDropDown(false), setPage(0)}}> 3 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(2) , setDropDown(false), setPage(0)}}> 2 Star Reviews</button>
                    <button className = "t-filter-button" onClick={() => {setFilterTerm(1) , setDropDown(false), setPage(0)}}> 1 Star Reviews</button>
                </div>
            )
        }
    }
    function dropDownMenu2(){
    
        if (dropDown2 === true && sortTerm === ''){
            return(
                <div className = "t-dropdown-menu-2">           
                    <button className = "t-sort-button" onClick={() => {setSortTerm("fnAZ") , setDropDown2(false), setPage(0)}}> First Names: A → Z</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("fnZA") , setDropDown2(false), setPage(0)}}> First Names: Z → A</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("lnAZ") , setDropDown2(false), setPage(0)}}> Last Names: A → Z</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("lnZA") , setDropDown2(false), setPage(0)}}> Last Names: Z → A</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("rDsc") , setDropDown2(false), setPage(0)}}> Reviews: 5 → 1</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("rAsc") , setDropDown2(false), setPage(0)}}> Reviews: 1 → 5</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("dDsc") , setDropDown2(false), setPage(0)}}> Date: New → Old</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("dAsc") , setDropDown2(false), setPage(0)}}> Date: Old → New</button>
                </div>
            )
        }
        else if(dropDown2 === true && sortTerm !== ''){
            return(
                <div className = "t-dropdown-menu-2">
                    <button className = "t-sort-button" onClick={() => {setSortTerm("") , setDropDown2(false), setPage(0)}}> Remove Sort</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("fnAZ") , setDropDown2(false), setPage(0)}}> First Names: A → Z</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("fnZA") , setDropDown2(false), setPage(0)}}> First Names: Z → A</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("lnAZ") , setDropDown2(false), setPage(0)}}> Last Names: A → Z</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("lnZA") , setDropDown2(false), setPage(0)}}> Last Names: Z → A</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("rDsc") , setDropDown2(false), setPage(0)}}> Reviews: 5 → 1</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("rAsc") , setDropDown2(false), setPage(0)}}> Reviews: 1 → 5</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("dDsc") , setDropDown2(false), setPage(0)}}> Date: New → Old</button>
                    <button className = "t-sort-button" onClick={() => {setSortTerm("dAsc") , setDropDown2(false), setPage(0)}}> Date: Old → New</button>
                </div>
            )
        }
    }
    function pagination() {
        const hasNextPage = (page + 1) * 10 < filteredTestimonials.length;
        const hasPreviousPage = page > 0;

        return (
            <div className = "paginationButtons">
                {hasPreviousPage && (
                    <button className="t-back-button" onClick={() => setPage(page - 1)}>←</button>
                )}

                <label>{"Page " + (page + 1)}</label>

                {hasNextPage && (
                    <button className= "t-forward-button" onClick={() => setPage(page + 1)}>→</button>
                )}
            </div>
        );
    }
    function ratingMenu() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div className="ratingContainer">
                {numbers.map((n) => (
                    <div className="ratingStars" key={n}>
                        <button 
                            onClick={() => setRating(n)} 
                            type="button"
                        >
                            {rating >= n ? "★" : "☆"}
                        </button>
                    </div>
                ))}
                {rating !== 0 && (
                    <div className="ratingClear">
                        <button 
                            onClick={() => setRating(0)} 
                            type="button"
                        >
                            x
                        </button>
                    </div>
                )}
            </div>
        );
    }
    function handleSubmit(){
        const userReview = {firstName,lastName,rating,review};
        console.log(userReview);
    }
    return (
        
        <>
        <Navbar3/>
        <section id="hero" className="hero"> <img src={aw4} alt="Swimming lessons hero" className="t-hero-img" />
            <div className="t-hero-content">
                <h1>Testimonials</h1>
                <p>Thank you to all the families that trusted me with their children. </p>
            </div>     
        </section>
        <section className="t-section">
            <h2 className="section-title">
                Hear From the Families
            </h2>

            <div className="t-box">
                <div className="t-controls">
                    <label className="t-search-label">
                        Search:
                        <input 
                            className="t-search" 
                            value={searchTerm} 
                            onChange={e => {
                                setSearchTerm(e.target.value) 
                                setPage(0)
                                setDropDown(false)
                                setDropDown2(false)
                                }
                            } 
                            placeholder="Search Here" 
                        />
                    </label>

                    <div className="t-dropdown-container" ref={dropdownRef}>
                        <button 
                            className="t-dropdown" 
                            onClick={() => {setDropDown(!dropDown), setDropDown2(false)}}
                        >
                            Filter ↓
                        </button>
                        {dropDownMenu()}
                </div>

                <div className="t-dropdown-container" ref={dropdownRef2}>
                    <button 
                        className="t-dropdown" 
                        onClick={() => {setDropDown2(!dropDown2), setDropDown(false)}}
                    >
                        Sort ↓
                    </button>
                    {dropDownMenu2()}
                </div>
            </div>
                {sortedTestimonials.length === 0 ? (
                    <p>No testimonials found.</p>
                ) : (
                sortedTestimonials.map((t) => (
                    <div className="t-testimonial-card" key={t.id}>
                        <div className="t-testimonial-header">
                            <div className="t-testimonial-info">
                                <h3 className="t-testimonial-name">
                                    {t.firstName} {t.lastName}
                                </h3>
                                <span className="t-testimonial-rating">
                                    {"★".repeat(t.rating)}
                                </span>
                            </div>
                            <span className="t-testimonial-date">
                                {t.dateSubmitted}
                            </span>
                        </div>
                        <div className="t-testimonial-divider"></div>
                        <p className="t-testimonial-review">
                            {t.review}
                        </p>
                    </div>
                    ))
                )}
                {sortedTestimonials.length > 0 && pagination()}
            </div>
        </section>
        <form onSubmit={handleSubmit}>
            <label>First Name <input type='text' value={firstName} onChange={e => {setFirstName(e.target.value) }}/></label>
            <label>Last Name <input type='text' value={lastName} onChange={e => {setLastName(e.target.value) }}/></label>
            <label>Rating{ratingMenu()}</label>
            <label>Review <input type='textarea' value={review} onChange={e => {setReview(e.target.value) }}/></label>
            <button type='submit'>Submit</button>
        </form>
        </>
    );
}

export default Testimonials;