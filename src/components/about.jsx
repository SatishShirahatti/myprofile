import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
					<p>Skillful and dynamic Senior web Developer having 9 years of experience in web development and
						hybrid mobile application development.</p>
					<p>Overall 9+ years experience, worked as a front-end developer in technologies such as ReactJS ,Angular
						JS, Mobile platforms with Xamarin etc. Addintionally Certified Scrum Master and have worked in
						numerious Digital projects using aglie methodology. Extensive experience in project / team management
						in ensuring high quality and timely delivery of projects in very dynamic environments:P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise </h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites 
 					using technologies ReactJS , redux, JavaScript,HTML5,CSS3,jquery 
					Bootstrap Twitter 3.0
					Microsoft Azure, CRM365</p>
                </div>
                </div>
            </div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-3">
								<span className="icon">
									<i className="icon-phone3" />
								</span>
								<div className="desc">
									<h3>Domains</h3>
									<ul className="about-ul">
										<li>HealthCare</li>
										<li>Insurance</li>
										<li>manufacture and service</li>
										<li>logistics and supply chain management</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-5">
								<span className="icon">
									<i className="icon-data" />
								</span>
								<div className="desc">
									<h3>Cerifications </h3>
									<ul className="about-ul">
										<li>Azure Fundamentals -2020</li>
										<li>Complete React Developer -2020</li>
										<li>Agile Scrum Master Certification -2017</li>
										<li>Scrum Fundamentals Certified -2017 </li>
										<li>health care Certification -2016</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-5">
								<span className="icon">
									<i className="icon-data" />
								</span>
								<div className="desc">
									<h3>Languages </h3>
									<ul className="about-ul">
									<li>English</li>
									<li>Norsk-A1-A2 Level </li>
									<li>Native : Hindi, Kannada</li>
								</ul>
								</div>
							</div>
						</div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
