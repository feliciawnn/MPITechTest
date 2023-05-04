import React, { useState, useEffect } from 'react'

export default function UserRegister(){
    const[loaded, setLoaded] =useState(false)

    const [city, setCity] =useState('')
    const [province, setProvince] = useState([])
    


    // useEffect(() => {
    //     fetch("https://api.goapi.id/v1/regional/provinsi?api_key=zQARyGqSW5EgMYd4lzBWM3zTHPEjCk")
    //     .then((res) => res.json())
    //     .then((json) => setProvince(json.data))
    //     .then(
    //         province.map((data) => fetch("https://api.goapi.id/v1/regional/kota?provinsi_id="+ data.id + "&api_key=zQARyGqSW5EgMYd4lzBWM3zTHPEjCk")
    //         .then((res) => console.log(res)))
    //         // .then((json) => setCity(json.data)))
    //         // province.map((data) => console.log(data.id))

    //     )
    // })

    // if(province.length == 0){
    //     return(
    //         <div>
    //             <p>sabar</p>
    //         </div>
    //     )
    // }

    const selectProvinsi = document.getElementById("provinsi")
    const selectKota = document.getElementById('kota');

    // function test2(){
        // fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`)
        //     .then((response) => response.json())
        //     .then((provinces) => {
        //         var data = provinces;
        //         var tampung = `<option >Pilih</option>`;
        //         data.forEach((element) => {
        //             tampung += `<option data-prov="${element.id}" value="${element.name}">${element.name}</option>`;
        //         });
        //         document.getElementById("provinsi").innerHTML = tampung;
        //     });

    // if(selectProvinsi){
        // selectProvinsi.addEventListener('change', (e) => {
        //     console.log("PROV CHANGE")
        // var provinsi = e.target.options[e.target.selectedIndex].dataset.prov;
        // fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${provinsi}.json`)
        //     .then((response) => response.json())
        //     .then((regencies) => {
        //         var data = regencies;
        //         var tampung = `<option>Pilih</option>`;
        //         document.getElementById('kota').innerHTML = '<option>Pilih</option>';
        //         document.getElementById('kecamatan').innerHTML = '<option>Pilih</option>';
        //         document.getElementById('kelurahan').innerHTML = '<option>Pilih</option>';
        //         data.forEach((element) => {
        //             tampung += `<option data-prov="${element.id}" value="${element.name}">${element.name}</option>`;
        //         });
        //         document.getElementById("kota").innerHTML = tampung;
        //     });
        // });

        // selectKota.addEventListener('change', (e) => {
        //     var kota = e.target.options[e.target.selectedIndex].dataset.prov;
        //     fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${kota}.json`)
        //         .then((response) => response.json())
        //         .then((districts) => {
        //             var data = districts;
        //             var tampung = `<option>Pilih</option>`;
        //             document.getElementById('kecamatan').innerHTML = '<option>Pilih</option>';
        //             document.getElementById('kelurahan').innerHTML = '<option>Pilih</option>';
        //             data.forEach((element) => {
        //                 tampung += `<option data-prov="${element.id}" value="${element.name}">${element.name}</option>`;
        //             });
        //             document.getElementById("kecamatan").innerHTML = tampung;
        //         });
        // });
    //}//}    

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
    
    if(!loaded){
        fillProvince()
        return(
            <div>
                sabar
            </div>
        )
    }
    return(
        <div>
            <form id='RegisterForm'>
                <p className="FormTitle"><b>Input Data Perusahaan</b></p>
                <select>
                    <option value="" disabled selected required>Bidang Usaha *</option>
                    <option value="a">a</option>
                    <option value="a">a</option>
                    <option value="a">a</option>
                    <option value="a">a</option>
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
                <input type="file" />

                <input type="submit" value="Selanjutnya" className="registerNextBtn" />
            </form>
        </div>
    )
    
}