import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate=useNavigate();
    const handleCock =()=>{
        navigate('/ContactedMe')
    }
    return ( 
        <div>
            <h3>COntact page</h3>
            <button onClick={handleCock}> Click me</button>
        </div>
     );
}
 
export default Contact;