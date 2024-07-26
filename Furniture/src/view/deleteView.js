import { dataService } from "../service/dataService.js";

export async function deleteItem(ctx) {
    const id = ctx.params.id;
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        await dataService.del(id);
        ctx.goTo('/');
    }
}
