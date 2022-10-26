var nama = document.getElementById('nama')
var phone = document.getElementById('phone')
var nop = document.getElementById('nop')
var rd = document.getElementById('rd')
var rt = document.getElementById('rt')
var voucher = document.getElementById('voucher')

function validate(){
    if(nama.value==''){
        alert("Name Field Cannot be empty")
        document.getElementById('nama').style='border-color: red'
        return false;
    }else if(nama.length < 3){
        alert("Name must be more than 3 letters!")
        document.getElementById('nama').style='border-color: red'
        return false;
    }

    if(phone.value==''){
        alert("Phone Field Cannot be empty")
        document.getElementById('phone').style='border-color: red'
        return false;
    }else if(phone.length < 5 || phone.length > 12){
        alert("Phone Number invalid")
        document.getElementById('Phone').style='border-color: red'
        return false;
    }

    if(nop.value==''){
        alert("Number of Person Field Cannot be empty")
        document.getElementById('nop').style='border-color: red'
        return false;
    }else if(nop > 10){
        alert("Reservation cannot exceed 10 people")
        document.getElementById('nop').style='border-color: red'
        return false;
    }

    var d = new Date(dob)
    var now = new Date()
    if(rd.value==''){
        alert("Reservation Date Field Cannot be empty")
        document.getElementById('rd').style='border-color: red'
        return false;
    }else if(d<now){
        alert("Reservation Date already past!")
        document.getElementById('rd').style='border-color: red'
        return false;
    }

    if(rt.value==''){
        alert("Reservation Time Field Cannot be empty")
        document.getElementById('rt').style='border-color: red'
        return false;
    }
    
    if(voucher.length > 15){
        alert("Voucher Code Error")
        document.getElementById('voucher').style='border-color: red'
        return false;
    }
}