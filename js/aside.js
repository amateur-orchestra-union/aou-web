const aside = /*html*/ `
<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="about.html" onclick="closeNav()">About</a>
    <a href="conductor.html" onclick="closeNav()">Conductor</a>
    <a href="#chef" onclick="closeNav()">Chef</a>
    <a href="#staff" onclick="closeNav()">Staff</a>
    <a href="#archive" onclick="closeNav()">Archive</a>
</div>
`;

export const createAside = () => {
  const asideEl = document.querySelector("aside");
  asideEl.innerHTML = aside;
};
