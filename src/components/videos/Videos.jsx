import "./videos.css"
import img1 from "../../img/img1.jpg"
import img2 from "../../img/img2.jpg"
import img3 from "../../img/img3.jpg"
import img4 from "../../img/img4.jpg"
import img5 from "../../img/img5.jpg"
import img6 from "../../img/img6.jpg"
import img7 from "../../img/img7.jpg"

import video1 from "../../img/video1.mp4"

export default function Videos() {
  return (
    <div className='videos'>
<h2 className="videosTitle">Videos & Pictures</h2>

<h4 className="videosBody">Videos</h4>
<div className="videosCardBody">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <video width="100%" height="100%" controls="controls">
       <source src={video1} type="video/mp4" />
       <source src="video.ogg" type="video/ogg" />
       Tarayıcınız video etiketini desteklemiyor.
     </video>
      
    </div>

  </div>
  <div className="col">
    <div className="card h-100">
    <video width="100%" height="100%" controls="controls">
       <source src={video1} type="video/mp4" />
       <source src="video.ogg" type="video/ogg" />
       Tarayıcınız video etiketini desteklemiyor.
     </video>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <video width="100%" height="100%" controls="controls">
       <source src={video1} type="video/mp4" />
       <source src="video.ogg" type="video/ogg" />
       Tarayıcınız video etiketini desteklemiyor.
     </video>
      
    </div>
  </div>
 
</div>

    </div>

    <h4 className="videosBody">Pictures</h4>
    <div className="picturesCardBody">
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <img src={img1} alt="" width="150px" height="200px" className="imgs"/>
    </div>
    <div class="col">
      <img src={img2} alt="" width="150px" height="200px" className="imgs"/>
    </div>
    <div class="col">
    <img src={img3} alt="" width="150px" height="200px" className="imgs"/>
    </div>
    <div class="col">
      <img src={img4} alt="" width="150px" height="200px" className="imgs"/>
      </div>
    <div class="col">
    <img src={img5} alt="" width="150px" height="200px" className="imgs"/>
    </div>
    <div class="col">
    <img src={img6} alt="" width="150px" height="200px" className="imgs"/>
    </div>
    <div class="col">
    <img src={img7} alt="" width="150px" height="200px" className="imgs"/>
    </div>
  </div>
  </div>

    </div>
    </div>
  )
}
