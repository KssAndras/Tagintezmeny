// Dinamikusan betöltjük a navbar HTML tartalmát
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-transparent">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
        <i class="fa fa-bars"></i>
    </label>
    <a href="index.html">
        <img class="logo" src="Kepek/logo.png" width="80px" />
    </a>
    <ul>
        <li><a href="tanarblog.html">Tanár blog</a></li>
        <li class="dropdown">
            <a href="#">Intézményünkről</a>
            <ul class="dropdown-content">
                <a href="tortenete.html">Története</a>
                <a href="eletkepek.html">Életképek</a>
                <a href="tipus.html">Típusa</a>
                <a href="targyifeltetel.html">Tárgyi feltételek</a>
                <a href="http://kadaskisuj.hu/tantestulet#tagintezmeny">Tantestület</a>
                <a href="tevekenysegek.html">Egyéb tevékenységek</a>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Fontos infók</a>
            <ul class="dropdown-content">
                <a href="https://klik038402017.e-kreta.hu">E-KRÉTA belépés</a>
                <a href="http://kadaskisuj.hu/node/3999">e-ügyintézés</a>
                <a href="#">Elérhetőségek</a>
                <a href="#">Tanév rendje</a>
                <a href="#">Eseménynaptár</a>
                <a href="#">Dokumentumaink</a>
                <a href="#">Szülőknek</a>
                <a href="#">Pályázatok</a>
            </ul>
        </li>
        <li><a href="#">Aktualitások</a></li>
        <li><a href="#">Szakiskola</a></li>
        <li class="dropdown">
            <a href="#">Diáksarok</a>
            <ul class="dropdown-content">
                <a href="#">Akikre büszkék vagyunk</a>
                <a href="#">Erzsébet Tábor</a>
            </ul>
        </li>
        <li><a href="#">Kollégium</a></li>
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
