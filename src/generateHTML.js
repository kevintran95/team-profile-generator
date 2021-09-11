
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

function makeCards(teamMember) {
    const cardArray = [];
     
    for (let i = 0; i < teamMember.length; i++) {
        const employeeInfo = teamMember[i];
        const role = employeeInfo.getRole();

        if (role === "Manager") {
            const managerInfo = managerCard(employeeInfo);
            
            cardArray.push(managerInfo);
            
        } else {
            if (role === "Engineer") {
                const engineerInfo = engineerCard(employeeInfo);

                cardArray.push(engineerInfo);

            } else {
                if (role === "Intern") {
                    const internInfo = internCard(employeeInfo);

                    cardArray.push(internInfo);
                }
            }
        }
    } 

    const teamCards = cardArray.join("");
    return teamCards;
};

function generateHTML(teamCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!--Link to Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    
        <!--Link to Google fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Exo+2:wght@300&display=swap" rel="stylesheet">
    
        <!--Link to CSS-->
        <link rel=stylesheet href="./styles.css">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <h1>My Team</h1>
    
        <div class="container">
        ${makeCards(teamCards)}
        </div>
    
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="../index.js"></script>
        <scipt src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">
        </scipt>
    </body>
    
    </html>`
}
module.exports = generateHTML;