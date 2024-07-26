import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

let context = null;
const root = document.querySelector(".container");

let template = (errors = {}, submitted = false) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${findError(errors, "make", submitted)}" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${findError(errors, "model", submitted)}" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${findError(errors, "year", submitted)}" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${findError(errors, "description", submitted)}" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${findError(errors, "price", submitted)}" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${findError(errors, "img", submitted)}" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;

function findError(errors, prop, submitted) {
    if (!submitted || !errors) {
        return '';
    }
    return errors[prop] ? 'is-invalid' : 'is-valid';
}

export async function showCreate(ctx) {
    ctx.render(template(), root);
    context = ctx;
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let { make, model, year, description, price, img, material } = Object.fromEntries(formData);
    year = Number(year);
    price = Number(price);
    let errors = {};
    let hasError = false;

    if (make.length < 4) {
        errors.make = true;
        hasError = true;
    }
    if (model.length < 4) {
        errors.model = true;
        hasError = true;
    }
    if (year < 1950 || year > 2050) {
        errors.year = true;
        hasError = true;
    }
    if (description.length < 10) {
        errors.description = true;
        hasError = true;
    }
    if (price <= 0) {
        errors.price = true;
        hasError = true;
    }
    if (!img) {
        errors.img = true;
        hasError = true;
    }

    context.render(template(errors, true), root); // I changed here, this was the old one: if (hasError) { return render(template(errors), root); }

    if (!hasError) {
       await dataService.create({ make, model, year, description, price, img, material });
       context.goTo('/');
    }
}
