const header = /*html*/ `
<div class="topnav" id="myTopnav">
    <a href="index.html" class="active">
        <picture>
            <source media="(max-width: 700px)" srcset="images/logos/aou_logo.png" sizes="">
            <img class="logo" src="images/logos/aou_watermark.png" alt="">
        </picture>
    </a>
    <ul>
        <a href="about.html">About</a>
        <a href="conductor.html">Conductor</a>
        <a href="#chef">Chief</a>
        <a href="#staff">Staff</a>
        <a href="#archive">Archive</a>
    </ul>
    <a href="javascript:void(0);" class="icon" onclick="openNav()">
        <i class="fa fa-bars"></i>
    </a>
</div>
`;

export const createHeader = () => {
  const headerEl = document.querySelector("header");
  headerEl.innerHTML = header;
};
