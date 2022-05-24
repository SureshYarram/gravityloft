import search from "../Images/Search 3.png"
import Graphics from "../Images/graphics.png"

export const Home = ()=>{

    return(
        <>
        <div>
         
      <div className="updiv">
               <div className="leftdiv">
                   <div className="content">
                       <p className="color">We are</p>
                       <p>the best way to connect </p>
                       <p>with Industry Experts</p>
                   </div>
                   <div className="loremcontent">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet saepe, a porro .
                   </div>
               </div>
               <div id="rightdiv">
                   <p>Get Trial version 
to find experts</p>
           
           <label htmlFor="">Full Name</label><br />
           <input className="input" type="text" /><br />
           <label htmlFor="">Email Address</label><br />
           <input className="input" type="text" />
           <button id="btn">Get Started</button>
               </div>
              </div>

              <p className="text">Expert Cloud</p>
              <p className="loremtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 
     <div className="clouddiv">  
         <div className="childdiv">
             <div className="left">
                 <p className="color">Search.</p>
                 <p>Top Experts with advanced search.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Get started </p>
             </div>
             <div className="right">
                 <img className="search" src={search} alt="" />
             </div>
         </div>
         <div className="childdiv">
             <div className="left"></div>
             <div className="right"></div>
         </div>
         <div className="childdiv">
         <div className="left">
             <p className="color">Collaborate.</p>
             <p>with Experts is easy now.</p>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             </p>
             <p>Get Started</p>
         </div>
             <div className="right">
             <img className="search" src={Graphics} alt="" />
             </div>
         </div>
     </div>
     <p className="text">FAQ</p>
     <p className="loremtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div className="faq"></div>
     <div className="contact"></div>
     </div>

</>
    )
}

