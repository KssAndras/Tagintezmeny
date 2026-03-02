// Dinamikusan betöltjük a navbar HTML tartalmát
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-transparent">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
        <i class="fa fa-bars"></i>
    </label>
    <a href="index.html">
        <img class="logo" src="Kepek/logo.png" width="40px" />
    </a>
    <ul>
        <li class="dropdown">
            <a href="#">Intézményünkről</a>
            <ul class="dropdown-content">
                <a href="tortenete.html">Története</a>
                <a href="eletkepek.html">Életképek</a>
                <a href="tipus.html">Típusa</a>
                <a href="tevekenysegek.html">Új név (Tárgyi és egyéb) </a>
                <a href="osztalyok.html">Osztályok</a>
                <a href="http://kadaskisuj.hu/tantestulet#tagintezmeny">Tantestület</a>
                <a href="tanarblog.html">Tanár blog</a>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Fontos infók</a>
            <ul class="dropdown-content">
                <a href="https://klik038402017.e-kreta.hu">E-KRÉTA belépés</a>
                <a href="http://kadaskisuj.hu/node/3999">e-ügyintézés</a>
                <a href="#">Elérhetőségek</a>
                <a href="#">Tanév rendje</a>
                <a href="2526_Egyseges_munkaterv_esemenynaptar.pdf" target="_blank">Eseménynaptár</a>
                <a href="#">Mérések</a>
                <a href="#">Szülőknek</a>
                <a href="http://kadaskisuj.hu/node/5146">Iskolakert</a>
            </ul>
        </li>
        <li><a href="aktualitasok.html">Aktualitások</a></li>
        <li><a href="szakiskola.html">Szakiskola</a></li>
        <li><a href="#">Kollégium</a></li>
        <li class="dropdown">
            <a href="#">Diáksarok</a>
            <ul class="dropdown-content">
                <a href="#">Akikre büszkék vagyunk</a>
                <a href="#">Erzsébet Tábor</a>
            </ul>
        </li>
        
        <li class="close-icon">
            <label for="check"><i class="fa fa-times"></i></label>
        </li>
    </ul>
</nav>
`;

// Hamburger menü működése
document.querySelector(".checkbtn").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// Navbar zsugorítása görgetéskor
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-shrink", window.scrollY > 50);
});
