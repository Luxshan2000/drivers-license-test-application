import React from 'react'
import './styles/footerStyle.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function FooterComponent() {
  return (
    <div id="myFooter" className="container-fluid myFooter">
    <footer className="pt-5 p-2">
        <div className="row">

            <div className="col-md-6 col-lg-3 col-sm-12 pb-sm-2">
                <h5>Contact details</h5>
                <ul className="nav flex-column">
                    <li className="nav-item p-0"><a  className="nav-link p-0 text-muted">Phone No: 0773038402</a></li>
                    <li  className="nav-item p-0"><a  className="nav-link p-0 text-muted">Email: Luxshanlux2000@gmail.com</a></li>
                    <li className="nav-item p-0"><a  className="nav-link p-0 text-muted">Address: Neththaliyaru, Visuvamadu West, Visuvamadu, Mullaitivu.</a></li>
                </ul>
            </div>


            <div class="col-md-6 col-lg-3 col-sm-12 pb-sm-2 pb-2">
                <h5>My links</h5>
                <ul class="nav flex-column">
                    <li className="nav-item p-0"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item p-0"><a href="/views/about.html" class="nav-link p-0 text-muted">About Me</a></li>
                    <li className="nav-item p-0"><a href="/views/project.html" class="nav-link p-0 text-muted">Projects</a></li>
                    <li className="nav-item p-0"><a href="/views/resume.html" class="nav-link p-0 text-muted">Resume</a></li>
                </ul>
            </div>

            <div className="col-md-12 col-lg-6 col-sm-12  mb-3">
                <form>
                    <h5>Put Your Valuable Feedback</h5>
                    <p>As someone who is always striving to improve, I would love to hear your feedback.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Your Feedback</label>
                        <input style={{"background-color": "#f1f8e9"}} id="newsletter1" type="text" className="form-control text-dark" placeholder="Comment" />
                        <button className="btn btn-success" type="button">Post</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="d-flex flex-column  row text-center  border-top">
            <ul className="list-unstyled justify-content-center d-flex pt-3">
                <li ><a className="link-dark" href="https://www.linkedin.com/in/luxshan-thavarasa/"><i className="fa-brands text-info fa-2x fa-linkedin"></i></a></li>
                <li ><a className="link-dark" href="https://github.com/Luxshan2000"><i className="fa-brands text-dark fa-2x fa-github"></i></a></li>
                <li ><a className="link-dark" href="https://web.facebook.com/lux.luxshan.5"><i className="fa-brands text-info fa-2x fa-facebook"></i></a></li>
                <li ><a className="link-dark" href="https://wa.me/+94773038402?text=Hey!%20LuxShan"><i className="fa-brands fa-2x text-success fa-whatsapp"></i></a></li>
                <li ><a className="link-dark" href="mailto: luxshanlux2000@gmail.com"><i className="fa-regular fa-2x text-info fa-envelope"></i></a></li>
            </ul>
        </div>
        <div className="d-flex flex-column text-center  row justify-content-center">
            <p>Thavarasa Luxshan</p>
            <p>&copy;2023 All rights reserved.</p>
        </div>
    </footer>
</div>
  )
}

export default FooterComponent