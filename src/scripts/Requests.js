import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"

const plumbers = getPlumbers();

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const requestHTML = (request) => {
let requestId = request.id
return `<li>${request.description}
<select class="plumbers" id="plumbers">
<option value="">Choose</option>
${
    plumbers.map(
        plumber => {
            return `<option value="${requestId}--${plumber.id}">${plumber.name}</option>`
        }
    ).join("")
}
</select>
        <button class="request__delete"
                id="request--${requestId}">
            Delete
        </button>
    </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(requestHTML).join("")
            }
        </ul>
    `

    return html
}

