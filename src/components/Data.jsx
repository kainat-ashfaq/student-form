function Data(){
    // $(window).on("load resize ", function() {
    //     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    //     $('.tbl-header').css({'padding-right':scrollWidth});
    //   }).resize();
   const userData = JSON.parse(localStorage.getItem("details"))
    return(
        <>
        
        <>
  <h1>USER DATA</h1>
  <div className="tbl-header">
    <table cellPadding={0} cellSpacing={0} border={0}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>FATHER NAME</th>
          <th>EMAIL</th>
          <th>DATE-OF-BIRTH</th>
          <th>GENDER</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellPadding={0} cellSpacing={0} border={0}>
      <tbody>
        {
userData.map((det,index)=>(
    <tr key={index}>
        <td>{det.name}</td>
        <td>{det.fatherName}</td>
        <td>{det.email}</td>
        <td>{det.dateOfBirth}</td>
        <td>{det.gender}</td>
    </tr>
))

        }
      
        
        
       
      </tbody>
    </table>
  </div>
</>

        
        </>
    )
}
export default Data
