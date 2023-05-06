import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faCloudArrowUp, faFile} from '@fortawesome/free-solid-svg-icons'

import '../style/userregister.css'
import StepBar from './StepBar'
import Header from './Header'

export default function UserRegister(){
    const[loaded, setLoaded] =useState(false)

    const [city, setCity] =useState('')
    const [province, setProvince] = useState([])
    const [nib, setNib] = useState(null)
    const [page, setPage] = useState(2)

    const selectProvinsi = document.getElementById("provinsi")
    const selectKota = document.getElementById('kota');

    function fillProvince(){
        console.log('Filling province dropdown', selectProvinsi)
        fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`)
            .then((response) => response.json())
            .then((provinces) => {
                var data = provinces;
                var tampung = `<option disabled selected>Provinsi *</option>`;
                data.forEach((element) => {
                    tampung += `<option data-prov="${element.id}" value="${element.name}">${element.name}</option>`;
                });
                document.getElementById("provinsi").innerHTML = tampung;
            });
        setLoaded(true)
    }

    function checkValidty(e){
        e.preventDefault()
        setPage(2)
    }

    const handleChange = (file) => {
        setNib(file);
    };

    function PageOne(){
        return(
            <div className='UserRegister'>
                <Container className='FormContainer'>
                    <Row>
                        <Col>
                            <StepBar pageNum={1} />
                        </Col>
                        <Col>
                            <form id='RegisterForm'>
                                <p className="FormTitle"><b>Input Data Perusahaan</b></p>
                                <select> {/* dummy values*/}
                                    <option value="" disabled selected required>Bidang Usaha *</option>
                                    <option value="a">Teknologi</option>
                                    <option value="a">Medical</option>
                                    <option value="a">Pendidikan</option>
                                    <option value="a">Pariwisata</option>
                                </select>
    
                                <input type="text" placeholder="Nama Perusahaan *" required />
                                <input type="text" placeholder="NPWP Perusahaan *" required />
                                <input type="text" placeholder="Alamat Sesuai NPWP *" required />            
    
                                <select id="provinsi">
                                    <option value="" disabled selected required>Provinsi *</option>
                                </select>
    
                                <select id='kota'>
                                    <option value="" disabled selected required>Kota/Kabupaten </option>
                                </select>
    
                                <select id='kecamatan'>
                                    <option value="" disabled selected required>Kecamatan </option>
                                </select>
    
                                <input type="text" placeholder="Kode Pos *" required />
    
                                <p className="FormSubtitle"><b>Upload Kelengkapan Data</b></p>
                                <div className='UploadFileContainer'>
                                    <FileUploader
                                        handleChange={handleChange}
                                        name="file"
                                    >
                                        <div className='UploadFileWrapper'>
                                            <p className='UploadTitle'><FontAwesomeIcon icon={faFile} className='UploadTitleIcon'/>NIB</p>
                                            <FontAwesomeIcon icon={faCloudArrowUp} /><br />
                                            <p>Unggah NIB Valid</p>
                                        </div>
                                    </FileUploader>
                                </div>
                                <input type="submit" value="Selanjutnya" className="registerNextBtn" onClick={(e) => checkValidty(e)} />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    function PageTwo(){
        return(
            <div>
                <Container className='FormContainer'>
                    <Row>
                        <Col>
                            <StepBar pageNum={2} />
                        </Col>
                        <Col>
                            <form id='RegisterForm'>
                                <p className="FormTitle"><b>Register Akun OLIN</b></p>
                                <input type="email" placeholder="Email *" required />
                                <input type="password" placeholder="Kata Sandi *" required />
                                <input type="password" placeholder="Konfirmasi Kata Sandi *" required />
                                <div className='TncWrapper'>
                                    <input type='checkbox' id="tnc" />
                                    <label for='tnc' className='tncLabel'>Dengan membuat akun, Anda menyetujui <a className='orangeText'>Ketentuan Penggunaan dan Pemberitahuan Privasi </a>aplikasi OLIN</label>
                                </div>

                                <button onClick={() => setPage(1)} className='BackBtn'>Kembali</button>
                                <input type="submit" value="Register" className="registerBtn" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
    // Add splash screen
    if(!loaded){
        fillProvince()
        return(
            <div>
                Please wait...
            </div>
        )
    }
    else{
        if(page == 1){
            return(
                <div>
                    <Header />
                    <PageOne />
                </div>
            )
        }
        if(page == 2){
            return(
                <div>
                    <Header />
                    <PageTwo />
                </div>
            )
        }
    }
    
}