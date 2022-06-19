// All you JavaScript code for assignment 4 should be in this file

// Fungsi yang digunakan untuk Mode Gelap (Dark Mode)
function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Fungsi yang digunakan untuk menambahkan konten ke dalam tabel (insertcontent)
function insertcontent(c){
    var td = document.createElement("td");
    var content = document.createTextNode(c); 
    td.appendChild(content);
    return td;
}

// Fungsi yang doigunakan untuk memasukkan bendera ke dalam tabel (insertflag)
function insertflag(code){
    var td = document.createElement("td");
    var flag = document.createElement("img"); 
    flag.src = "flags/" + code + ".png";
    flag.width = "30";
    flag.setAttribute("alt", "");
    td.appendChild(flag);
    return td;
}

// Fungsi yang digunakan untuk menampilkan kode area negara, nama negara, benua, luas wilayah, populasi, bahasa, dan ibukota (show)
function show(language, min, max, filter, continent, title){
    var title = document.querySelector("#subtitle").innerHTML = title;
    var table = document.querySelector("#outputTable");
    var refresh = document.querySelector("tbody");
    if (refresh) { table.removeChild(refresh); }

    var tbody = document.createElement("tbody");
    for (var i = 0; i < countries.length; ++i){
        if ((continent == "Any" || countries[i].Continent == continent) &&
            (min == 0 || eval('countries[i].' + filter) > min) &&
            (max == 0 || eval('countries[i].' + filter) < max))
            {
                var row = document.createElement("tr");
                row.appendChild(insertflag(countries[i].Code));   
                row.appendChild(insertcontent(countries[i].Code));   
                row.appendChild(insertcontent(eval('countries[i].Name.' + language)));   
                row.appendChild(insertcontent(countries[i].Continent));   
                row.appendChild(insertcontent(countries[i].AreaInKm2));   
                row.appendChild(insertcontent(countries[i].Population));   
                row.appendChild(insertcontent(countries[i].Capital));
                tbody.appendChild(row);
            }
    }
    table.appendChild(tbody);
}

// Menampilkan jendela fungsi melalui Menu-Menu
window.onload = function () {
    // Menghasilkan daftar negara (Tanpa Batas / Jarak)
    var menu_1 = document.querySelector("#menu_1");
    menu_1.onclick = show("English", 0, 0, "Population", "Any", "List of Countries and Dependencies");

    // Menghasilkan daftar negara yang difilter berdasarkan populasi (Minimal)
    var menu_21 = document.querySelector("#menu_21");
    menu_21.onclick = function () {
        show("English", 100000000, 0, "Population", "Any", "List of Countries and Dependencies - Population greater than 100 million");
    }
    // Menghasilkan daftar negara yang difilter berdasarkan populasi (Dengan Rentang Jumlah)
    var menu_22 = document.querySelector("#menu_22");
    menu_22.onclick = function () {
        show("English", 1000000, 2000000, "Population", "Any", "List of Countries and Dependencies - Population between 1 and 2 million");
    }
    // Area yang lebih dari 1 juta km persegi (Amerika)
    var menu_31 = document.querySelector("#menu_31");
    menu_31.onclick = function () {
        show("English", 1000000, 0, "AreaInKm2", "Americas", "List of Countries and Dependencies - Area greater than 1 million Km2, Americas");
    }

    // Area yang lebih dari 1 juta km persegi Asia)
    var menu_32 = document.querySelector("#menu_32");
    menu_32.onclick = function () {
        show("English", 0, 0, "AreaInKm2", "Asia", "List of Countries and Dependencies - All countries in Asia");
    }

    // Bahasa Inggris
    var menu_41 = document.querySelector("#menu_41");
    menu_41.onclick = function () {
        show("English", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in English");
    }

    // Bahasa Arab
    var menu_42 = document.querySelector("#menu_42");
    menu_42.onclick = function () {
        show("Arabic", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Arabic");
    }

    // Bahasa China
    var menu_43 = document.querySelector("#menu_43");
    menu_43.onclick = function () {
        show("Chinese", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Chinese (中文)");
    }
    
    // Bahasa Perancis
    var menu_44 = document.querySelector("#menu_44");
    menu_44.onclick = function () {
        show("Franch", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in French");
    }
    
    // Bahasa Hindi
    var menu_45 = document.querySelector("#menu_45");
    menu_45.onclick = function () {
        show("Hindi", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Hindi");
    }
    
    // Bahasa Korea
    var menu_46 = document.querySelector("#menu_46");
    menu_46.onclick = function () {
        show("Korean", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Korean");
    }
    
    // Bahasa Jepang
    var menu_47 = document.querySelector("#menu_47");
    menu_47.onclick = function () {
        show("Japanese", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Japanese");
    }
    
    // Bahasa Russia
    var menu_48 = document.querySelector("#menu_48");
    menu_48.onclick = function () {
        show("Russian", 0, 0, "Population", "Any", "List of Countries and Dependencies – Country / Dep. Name in Russian");
    }
}