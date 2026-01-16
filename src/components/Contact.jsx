import "../style/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r3rawy9",
      "template_a8c5n1k",
      e.target,
      "FLvV549-RxmtpNtZf"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.error(error);
      }
    );
  };

  return (
  <section className="contact">
    <h3>Contact Us</h3>

    <div className="contact-container">
      {/* LEFT SIDE – FORM */}
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="name" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Message:</label>
        <textarea name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {/* RIGHT SIDE – SOCIAL LINKS */}
      <div className="contact-social">
        <h4>Place your orders</h4>

        <a
          href="https://wa.me/94718179298"
          target="_blank"
          rel="noopener noreferrer"
          className="social whatsapp"
        >
          📱 WhatsApp
        </a>

        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="social facebook"
        >
          📘 Facebook
        </a>

        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social instagram"
        >
          📸 Instagram
        </a>
      </div>
    </div>
  </section>
);

};

export default Contact;
