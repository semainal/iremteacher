import "./words.css"
import words from "../../img/words.png"
import adv from "../../img/IMPORTANT FOR WRITING.pdf"
import adv1 from "../../img/adv1.png"

export default function Words() {
  return (
 
    <div className="words">
        <h2 className="wordsTitle">Important Words</h2>
        <p className="worddecs">You can click on it to enlarge it.</p>
        <div className="container text-center">
  <div className="row">
    <div className="col-md-6 colTitle colbeginner">
      Beginner Level Words
      <img src={words} alt="" className="beginnerwords"/>
    </div>
  
    <div className="col-6 colTitle">
    Structures used at Advanced Level 
    <div className="boxAdv">
        <h4 className="boxAvdTitle">Important For Writing</h4>
        <img src={adv1} alt="" className="advimg"/>
        <br />
        <br />
    <a href={adv}>Click to Download</a>
    
    </div>
   

 
 
    </div>
    
        </div>
       
  </div>
 
  </div>
 
    
    
  )
}
