window.onload = function() {
    // Nama file yang ingin Anda baca
    var fileName = 'tes file.txt';

    // Jalankan fungsi untuk membaca file
    readFile(fileName, function(content) {
        // Memisahkan konten menjadi baris-baris
        var lines = content.split('\n');
        
        // Membuat array untuk menyimpan kata pertama, kedua, dan ketiga dari setiap baris
        var kitab = [];
        var ayat = [];
        var isi = [];

        // Memisahkan setiap baris menjadi tiga kata dan memasukkan ke dalam array yang sesuai
        lines.forEach(function(line) {
            var words = line.trim().split('|');
            kitab.push(words[0]); // Memasukkan kata pertama ke dalam array pertama
            ayat.push(words[1]); // Memasukkan kata kedua ke dalam array kedua
            
            // Memasukkan kata ketiga hingga akhir baris ke dalam array ketiga
            var lastElementIndex = words.length - 1;
            var lastElement = words[lastElementIndex];
            isi.push(lastElement);
        });
        
        i = Math.floor(Math.random() * 4);

        // Menampilkan hasilnya di HTML
        displayBook(kitab, ayat);
        displayQuote(isi);
    });
};

function readFile(fileName, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

function displayBook(kitab, ayat) {
    var fileContent = document.getElementById('book');

    // Menampilkan setiap data dari array di HTML
    
        var div = document.createElement('div');
        div.textContent = kitab[i] +' '+ ayat[i];
        fileContent.appendChild(div);
    
}
function displayQuote(isi) {
    var fileContent = document.getElementById('newQuote');

    // Menampilkan setiap data dari array di HTML
    
        var div = document.createElement('div');
        div.textContent = '"' + isi[i]+ '"';
        fileContent.appendChild(div);
    
}
