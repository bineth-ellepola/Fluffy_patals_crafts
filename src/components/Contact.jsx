import "../style/Contact.css";
const Contact = () => {
    return (
        <section className="contact">           
            <h3>Contact Us</h3>
            <form className="contact-form"> 
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}   
export default Contact;