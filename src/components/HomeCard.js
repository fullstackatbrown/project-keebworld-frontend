import React from "react";
import "./HomeCard.css";
import tempImage from "./cherry-stabilizer.png";

function HomeCard({ img, title, description }) {
  return (
    <>
      {/* <div classname="card_wrap">
        <div className="card">
          <img src={img} alt="icon"></img>
          <div class="container">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div> */}
      <div className="card">
        <div class="icon-container">
          <img src={img} alt="icon" class="home-card-img"></img>
        </div>

        <div class="container">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

// function HomeCard({ img, title, description }) {
//   return (
//     <>
//       <div className="card">
//         <img src="img_avatar.png" alt="Avatar" style="width:100%"></img>
//         <div class="container">
//           <h4>
//             <b>John Doe</b>
//           </h4>
//           <p>ArchitectEngineer</p>
//         </div>
//       </div>
//     </>
//   );
// }

export default HomeCard;
