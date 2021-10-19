const engineerCard = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}<h3>
                <h4>Engineer</h4><i class="fas fa-code"></i>
            </div>

            <div class="card-content">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
            </div>
        </div>
    </div>
    `
};

const managerCard = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fas fa-id-badge"></i>
            </div>

            <div class="card-content">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</p>
                <p class="officeNum">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

const internCard = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fas fa-book-reader"></i>
            </div>

            <div class="card-content">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

gen = (data) => {
    arr = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();

        switch(role) {
            case 'Manager':
                const mCard =  managerCard(employee);
                arr.push(mCard);
                break;
            case 'Engineer': 
                const eCard = engineerCard(employee);
                arr.push(eCard);
                break;
            case 'Intern':
                const iCard = internCard(employee);
                arr.push(iCard);
                break;
            default: 
                console.log("error");
        }
    }

    const employeeCards = arr.join('');

    const genTeam = genPage(employeeCards);
    return genTeam;


}

const genPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", initial-scale=1.0">
        <title>Team Profile Generator - Hugo Samayoa</title>
        <link rel="stylesheet" href="/fontawesome/css/all.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    `
}