import React from 'react'
import './contact.styles.scss'
import portrait from '../../assets/caity-portrait.jpg'
import CustomButton from '../../components/custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'

const contactPage = ({history}) => {
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
                            <div class="input-fields">
                                <input type="text" class="name" placeholder="Name"/>
                                <input type="wmail" class="email" placeholder="Email Address"/>
                                <input type="text" class="subject" placeholder="Subject"/>
                                <input type="text" class="phone" placeholder="Phone Number"/>
                                <textarea class="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
                            </div>
                            <CustomButton onClick={() => history.push('/submitted')} class="btn-dark">Submit</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(contactPage)
