import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';


const Form = () => {
    const [value, onChange] = useState(new Date());

    return (
        <section id="form" className="form">
            <h2 className="form-title">Contact Us</h2>

            <form>
                <div className="form-elements">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <label htmlFor="date">Select a Date</label>
                    <Calendar onChange={onChange} value={value} />

                    <button type="submit" className="form-btn">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Form;
