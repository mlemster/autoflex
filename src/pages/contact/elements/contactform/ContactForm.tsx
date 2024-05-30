import './ContactForm.scss'
import { useState } from 'react';

function ContactForm() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        setFormData({
          fname: '',
          lname: '',
          email: '',
          message: '',
        });
    
        alert('Form submitted!');
      };



return (
    <>
    <section id='contact-home'>
        <div className="contactform-container">
            <div className="contactform-items-left">
                <div className="contactform">
                    <div className="contactform-content">
                        <h1 className='contactform-header'>Contact us!</h1>
                            <div className="contactform-layout">
                                <form onSubmit={handleSubmit}>
                                    <div className="contactform-query">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            placeholder="Enter your first name"
                                            value={formData.fname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="contactform-query">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            placeholder="Enter your last name"
                                            value={formData.lname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="contactform-query">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="contactform-query message">
                                        <label>Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Enter your message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required

                                        />
                                    </div>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="contactform-items-right">
                <div className="contact-info">
                    <h1>
                        Reach us!
                    </h1>
                    <p>
                        Contact info: <br />
                        Phone number: 123 132 3121 <br />
                        Email: jörnäysti@autoflex.fi <br />
                    </p>
                </div>  
                <div className="mapholder">
                    <iframe className='maps-style' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.0331168974951!2d25.57907933927181!3d65.03333109446505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681d2e9f426273d%3A0xf5cff120f8921b41!2sPihakoivuntie%2C%2090630%20Oulu!5e0!3m2!1sfi!2sfi!4v1701422051257!5m2!1sfi!2sfi" width="600" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
);
}

export default ContactForm;