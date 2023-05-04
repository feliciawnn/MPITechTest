import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


import '../style/userlogin.css'
export default function UserLanding(){
    return(
        <div className='UserLogin'>
            <div className='LightBg'>
                <Container>
                    <Navbar>
                        <Navbar.Brand href='/MPITechTest/task3'>OLIN</Navbar.Brand>
                        <Navbar.Text className='ms-auto'>
                            <FontAwesomeIcon icon={faQuestionCircle} className='questionIcon' />
                            Pusat Bantuan
                        </Navbar.Text>
                    </Navbar>
                </Container>
                
                <Container className='Text Container'>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h1>Selamat Datang di Solusi <br/> Perangkat Lunak Farmasi</h1>
                            <h3>Sistem Manajemen Apotek Online</h3>
                        </Col>
                        <Col xs={12} lg={6}>
                            <img src={require('../media/doctor.png')} className='DoctorImg'/>
                        </Col>
                    </Row>
                </Container>
            </div>
            

            <Container className='FormContainer'>
                <p><b>Silakan masuk ke dalam akun anda dan kelola apotek Anda.</b></p>
                <form className='LoginForm'>
                    <p className='TextLabel'><b>EMAIL</b></p>
                    <input type='text' placeholder='name@email.com'/>
                    
                    <p className='TextLabel'><b>PASSWORD</b></p>
                    <input type='password'placeholder='*****************'/>

                    <div className='PrefBtns'>
                        <div className='CheckWrapper'>
                            <input type='checkbox' id="rmbMe" />
                            <label for='rmbMe'>Ingat Saya</label>
                        </div>
                        <a className='ForgotPass'>Lupa Password?</a>
                    </div>

                    <input type='submit' value='Masuk' className='SubmitBtn'/>
                    <p className='RegisterText'>Belum Registrasi? Silahkan klik <a className='DaftarLink' href="/MPITechTest/task3/register">Daftar</a></p>
                </form>
            </Container>
        </div>
    )
}