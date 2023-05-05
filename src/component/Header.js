import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import '../style/header.css'

export default function Header(){
    return(
        <div>
            <Container fluid className='navbarContainer'>
                <Navbar className='navshadow'>
                    <Navbar.Brand href='/MPITechTest/task3'>OLIN</Navbar.Brand>
                    <Navbar.Text className='ms-auto'>
                        <FontAwesomeIcon icon={faQuestionCircle} className='questionIcon' />
                        Pusat Bantuan
                    </Navbar.Text>
                </Navbar>
            </Container>
        </div>
    )
}