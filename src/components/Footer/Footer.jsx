

const Footer = () => {
    return (
        <>
            <footer>
                <section className="ft-main">
                <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Get free updates before others do!</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                   
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">eBooks</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>
                  
                </section>


                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2023 by Sofía Sitjar May</li>
                    </ul>
                </section>
            </footer>
        </>
    )
};

export default Footer;