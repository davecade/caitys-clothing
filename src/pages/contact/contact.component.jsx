import React from 'react'
import './contact.styles.scss'
import portrait from '../../assets/caity-portrait.jpg'
import CustomButton from '../../components/custom-button/custom-button.component'

const contactPage = () => {
    return (
        <div className="contact-container">
            <img src={portrait} alt="" className="portrait" />
            <div className="contain-section">
                <div id="contact">
                    <div class="container">
                        <div class="lead">
                            <h1>Contact Me</h1>
                            <div class="bottom-line"></div>
                            <p>Here is how you can reach me</p>
                        </div>

                        <div class="contact-form">
                            <form action="" class="form">
                                <div class="input-fields">
                                    <input type="text" class="name" placeholder="Name"/>
                                    <input type="wmail" class="email" placeholder="Email Address"/>
                                    <input type="text" class="subject" placeholder="Subject"/>
                                    <input type="text" class="phone" placeholder="Phone Number"/>
                                    <textarea class="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
                                </div>
                                <CustomButton type="submit" class="btn-dark">Submit</CustomButton>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <div id="contact-info">
                    <div class="container">
                        <div class="info-fields">
                            <div>
                                <i class="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>dave@something.com</p>
                            </div>
                            <div>
                                <i class="fas fa-phone"></i>
                                <h3>Phone</h3>
                                <p>(02)-8756-9241</p>
                            </div>
                            <div>
                                <i class="fas fa-address-card"></i>
                                <h3>Address</h3>
                                <p>50 Reinhardt St, Sydney Australia</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default contactPage
