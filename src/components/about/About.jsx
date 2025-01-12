import "./about.css"
import mp4 from "../../img/iremteacher.mp4"
import tesol from "../../img/tesol.jpg"
import ielts from "../../img/ielts.jpg"
import instagramqr from "../../img/instagramqr.png"


export default function About() {
    
  return (
    
    <div className="about">
    <div className="about-left">
        <div className="about-card bg">
        <video width="100%" height="100%" controls="controls">
  <source src={mp4} type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Tarayıcınız video etiketini desteklemiyor.
</video>
        </div>
        
    </div>
    <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
Hello, my name is İrem Aydın MAMMADLI. I graduated from Istanbul Aydın Univercity, Department of English Language Teaching, with HIGH HONOR DEGREE.
</p>

<p className="about-desc">
I have been offering private lessons to all age groups for 6 years. Currently, I am an English teacher at an international school and also give private lessons within a company.
In my lessons, I encourage student participation by focusing on student-centered education and giving importance to speaking.

Thank you for visiting my website. Please contact me for more information.
</p>
<p className="instagramaddress"> Instagram: <a href="https://www.instagram.com/englishwithiremm/" className="instagramaddress">englishwithiremm</a></p>


        <div className="about-link">
            <img src={tesol} alt="" className="about-linkImg"/>
            <img src={ielts} alt="" className="about-linkImg"/>
            <img src={instagramqr} alt="" className="about-linkImg"/>
           
           
        </div>
    </div>
</div>

  )
}
