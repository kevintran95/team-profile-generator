
const managerCard = (manager) => {
    return `<div class="card" style="width: 18rem;" id="manager-card">
    <div class="card-header name">Name: ${manager.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${manager.getRole()}</li>
        <li class="list-group-item id">ID: ${manager.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item office-number">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`;
};

const engineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;" id="engineer-card">
    <div class="card-header name">Name: ${engineer.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${engineer.getRole()}</li>
        <li class="list-group-item id">ID: ${engineer.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item github">GitHub: ${engineer.getGithub()}</li>
    </ul>
</div>`;
};

const internCard = (intern) => {
    return `<div class="card" style="width: 18rem;" id="intern-card">
    <div class="card-header name">Name: ${intern.getName()}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item role">Role: ${intern.getRole()}</li>
        <li class="list-group-item id">ID: ${intern.getId()}</li>
        <li class="list-group-item email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item school">School: ${intern.getSchool()}</li>
    </ul>
</div>`;
};
