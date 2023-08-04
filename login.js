
function formkontrol() {

    adi = document.getElementById('ad').value;
    sifre = document.getElementById('sifre').value;

    let hata = new Array();
    let sembol = '*|,:<>[]{}`;()@&$#%!+-"/';

    let sembolvar = false;
    for (let i = 0; i < sifre.length; i++) {
        if (sembol.indexOf(sifre.charAt(i)) != -1) {
            sembolvar = true;
        }
    }

    if (adi === "süleyman" && sifre === "123456") {

        function yonlendir() {
            window.location.assign("vocabulary.html");
        }
        window.onload = yonlendir;
        yonlendir();
    } else {
        if (adi == "")
            hata.push('Kullanıcı adınızı giriniz');
        else if (adi.length < 1)
            hata.push('lütfen 1 haneden fazla giriniz');


        if (sifre == '')
            hata.push('Şifrenizi yazınız');
        else {
            if (sifre === 123456789) {
                alert.push('Şifre 123456789 olamaz');
            }
            else if (sifre.length < 6)
                hata.push('Şifre 6 karekterden daha uzun olmalıdır.');

            else if (sifre.search(/[a-z]/) < 0)
                hata.push("Şifre en az bir Küçük harf içermelidir.");

            else if (sifre.search(/[A-Z]/) < 0)
                hata.push("Şifre en az bir Büyük harf içermelidir.");

            else if (sifre.search(/[0-9]/) < 0)
                hata.push("Şifre en az bir rakam içermelidir.");



        }

        if (hata.length > 0) {
            alert(hata.join("\n"));
            return false;
        }
        else {

            alert("başarılı");

        }


    }
    //C:\Users\Administrator\Desktop\html dersler\iniglizce sayfam
    //buraya return true diyebiliriz

}
