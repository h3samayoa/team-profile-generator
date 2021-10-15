const Manager = require("../lib/Manager")

const EngineerCard = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}<h3>
                <h4>Engineer</h4><i class="fas fa-code"></i>
            </div>

            <div class="card-content">
                <p class="id"> ID: ${engineer.id}</p>
                <p class="email"
            </div>
        </div>
    </div>
    `
}