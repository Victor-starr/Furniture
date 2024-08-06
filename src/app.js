import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { userService } from "./service/userService.js";
import { showCreate } from "./view/showCreate.js";
import { showDetails } from "./view/showDetails.js";
import { showHome } from "./view/showHome.js";
import { showLogin } from "./view/showLogin.js";
import { showReg } from "./view/showReg.js";
import { userUtil } from "./util/userUtil.js";
import { deleteItem } from "./view/deleteView.js";
import { showEdit } from "./view/showEdit.js";
import { showMyProducts } from "./view/showMyProducts.js";

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page(updateCtx);
page('/', showHome);
page('/register', showReg);
page('/login', showLogin);
page('/logout', logOut);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/delete/:id',deleteItem);
page('/edit/:id', showEdit);
page('/publication', showMyProducts);
page.start();// don't touch
updateNav(); // don't touch

// don't touch this functions updateCtx, goTO, updateNav
function updateCtx(ctx, next) {
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    ctx.render = render;
    next();
}

function goTo(path) {
    page.redirect(path);
}

// when you want to check if the user is login or not do this:
function updateNav() {
    const user = userUtil.getUserData();
    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
    } else {
        guestNav.style.display = 'inline-block';
        userNav.style.display = 'none';
    }
}

// don't touch logout
async function logOut() {
    await userService.logout();
    updateNav();
    goTo("/");
}
