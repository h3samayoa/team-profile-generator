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