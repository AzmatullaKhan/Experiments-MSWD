import Photo from './images/Photo.jpg'
const Idcard = () => {
	return ( 
		<div className="w3-display-middle id-card" style={{textAlign:'center',border:"1px dashed black",borderRadius:"40px"}} >
        <h5 style={{fontWeight:'bold',textAlign:'center'} }>KONERU LAKSHMIAH EDUCATIONAL FOUNDATION</h5>
        <h4>IDENTITY CARD</h4>
		<div className="image">
			<img src={Photo} alt="Gowtham" style={{maxWidth:"200px", borderRadius:"20px", border:"1px dotted black"}} />
		</div>
        <table align="center">
            <tr>
                <td><h5 style={{textAlign:"left"}}>Registration number </h5></td>
                <td><h5>2200031641</h5></td>
            </tr>
            <tr>
                <td><h5 style={{textAlign:"left"}} >Name </h5></td>
                <td><h5>Ala Gowtham Siva Kumar</h5></td>
            </tr>
            <tr>
                <td><h5 style={{textAlign:"left"}}>Department </h5></td>
                <td><h5>Computer science</h5></td>
            </tr>
            <tr>
                <td><h5 style={{textAlign:"left"}}>Academic Year </h5></td>
                <td><h5>2022 - 2026</h5></td>
            </tr>
        </table>
    </div>
	 );
}
 
export default Idcard;