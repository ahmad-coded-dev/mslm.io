import footerLogo from '../images/Group 254.svg';

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="last_part">
            <a href="./index.html"><img src="${footerLogo}" /></a>
            <div>
                <h2>Userful Links</h2>
                <a href="about.html">About Us</a>
                <a href="contactus.html">Contact Us</a>
                <a href="career.html">Careers</a>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>
                    195-B Jasmine Heights, Sector C Bahria Town Lahore -
                    Pakistan.
                </p>
                <span>salam@mslm.io</span>
            </div>
        </div>

        <footer>Copyright © 2022. All right reserved</footer>
        `;
    }
}
customElements.define('the-footer', Footer);
