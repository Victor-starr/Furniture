import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../service/userService.js";
let context = null;
const root = document.querySelector(".container");

let template = () => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>
`;
export function showLogin(ctx) {
  ctx.render(template(), root);
  context = ctx;
}
async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password} = Object.fromEntries(formData);
  if (!email || !password) {
    alert("All fields are required");
  }
  await userService.login({ email, password });
  context.updateNav();
  context.goTo("/");
}
