import { useState } from "react"
import { Link } from "react-router-dom"
 function Home() {

 const [Detail,setDetail] = useState({
    name:"",
    fatherName:"",
    email:"",
    dateOfBirth:""
})
const handleChange=(e)=>{
const {name,value} = e.target
setDetail((prev)=>{
    return{...prev,[name]:value}
})
}
function Submit(e){
    if(Detail.name == ""|| Detail.fatherName==""||Detail.dateOfBirth == ""||Detail.email==""){
        alert("fill all fields")
        return
    }
    var getData = JSON.parse(localStorage.getItem("details")) || [];
    e.preventDefault()
console.log(Detail)
getData.push(Detail);
localStorage.setItem("details",JSON.stringify(getData))

}
     
return(
    <>
    <form action="" >
    
  <div className="form-div">
    <div className="head-div">
      <h1>STUDENT FORM</h1>
    </div>
    <div className="input-div">
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" name="name" onChange={handleChange}/>
    </div>
    <div className="input-div">
      <label htmlFor="father-name">father-name:</label>
      <br />
      <input type="text"  name="fatherName" onChange={handleChange}/>
    </div>
    <div className="input-div">
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" onChange={handleChange}/>
    </div>
    <div className="input-div">
      <label htmlFor="date-of-birth">date-of-birth:</label>
      <br />
      <input type="date"  name="dateOfBirth" onChange={handleChange}/>
    </div>
    <div className="input-div">
      <label htmlFor="gender">Gender:</label>
      <br />
      <input type="radio" name="gender" onChange={handleChange}/>
      Male
      <input type="radio" name="gender" onChange={handleChange}/>
      Female
    </div>
    <div className="btn-div">
      <button className="btn" onClick={Submit} >Submit</button>
      <button className="btn-check">
    <Link to="/data"> 
    check
    </Link>
    </button>
    </div>
  </div>
</form>
    </>
)
    
}
export default Home