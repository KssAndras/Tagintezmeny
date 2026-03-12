// Dinamikusan betöltjük a navbar HTML tartalmát
document.getElementById("navbar-placeholder").innerHTML = `
<nav id="mainNav" class="navbar navbar-expand-lg" style="background-color: #477f99; position: fixed; width: 100%; top: 0; z-index: 1000;">
  <div class="container-fluid px-3">
    <a href="index.html">
      <img class="logo" src="Kepek/logo.png" width="40px" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" style="border-color: white;">
      <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Intézményünkről</a>
          <ul class="dropdown-menu" style="background-color: #477f99;">
            <li><a class="dropdown-item text-white" href="tortenete.html">Története</a></li>
            <li><a class="dropdown-item text-white" href="eletkepek.html">Életképek</a></li>
            <li><a class="dropdown-item text-white" href="tipus.html">Típusa</a></li>
            <li><a class="dropdown-item text-white" href="tevekenysegek.html">Új név (Tárgyi és egyéb)</a></li>
            <li><a class="dropdown-item text-white" href="osztalyok.html">Osztályok</a></li>
            <li><a class="dropdown-item text-white" href="http://kadaskisuj.hu/tantestulet#tagintezmeny">Tantestület</a></li>
            <li><a class="dropdown-item text-white" href="tanarblog.html">Tanár blog</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Fontos infók</a>
          <ul class="dropdown-menu" style="background-color: #477f99;">
            <li><a class="dropdown-item text-white" href="https://klik038402017.e-kreta.hu">E-KRÉTA belépés</a></li>
            <li><a class="dropdown-item text-white" href="http://kadaskisuj.hu/node/3999">e-ügyintézés</a></li>
            <li><a class="dropdown-item text-white" href="elerhetosegek.html">Elérhetőségek</a></li>
            <li><a class="dropdown-item text-white" href="#">Tanév rendje</a></li>
            <li><a class="dropdown-item text-white" href="2526_Egyseges_munkaterv_esemenynaptar.pdf" target="_blank">Eseménynaptár</a></li>
            <li><a class="dropdown-item text-white" href="#">Mérések</a></li>
            <li><a class="dropdown-item text-white" href="#">Szülőknek</a></li>
            <li><a class="dropdown-item text-white" href="http://kadaskisuj.hu/node/5146">Iskolakert</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link text-white" href="aktualitasok.html">Aktualitások</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="szakiskola.html">Szakiskola</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Kollégium</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Diáksarok</a>
          <ul class="dropdown-menu" style="background-color: #477f99;">
            <li><a class="dropdown-item text-white" href="#">Akikre büszkék </br>vagyunk</a></li>
            <li><a class="dropdown-item text-white" href="#">Erzsébet Tábor</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

// Navbar hover stílus dropdown itemekre
document.querySelectorAll(".dropdown-item").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#989fa4";
  });
  item.addEventListener("mouseout", function () {
    this.style.backgroundColor = "transparent";
  });
});

// Navbar zsugorítása görgetéskor
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("mainNav");
  navbar.classList.toggle("navbar-shrink", window.scrollY > 50);
});

// Kattintásra bezárja a mobil menüt ha máshova kattintasz
document.addEventListener("click", function (e) {
  const navbar = document.getElementById("navbarContent");
  const toggler = document.querySelector(".navbar-toggler");
  if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    if (bsCollapse) bsCollapse.hide();
  }
});
