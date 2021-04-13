const index = require('../index');

const makeTeam = team => {
//A method for a template to render manager info

//A method for engineer

//A method for intern



}


module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Development Team Cards</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@1&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <header>My Team</header>
    <body>
        <main class="row">
          ${{Team}}
        </main>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src="assets/js/index.js"></script>
    </body>
    </html>`
    
}

// In the src folder, create a page-template.js
// const generateTeam = team => {
// const  generateManager = manager = {
//     ` return ${manager.getName()} etc etc`
// }
// const html = [];
//     html.push(team
//         .filter(employee => employee.getRole() === "Manager")
//         .map(manager => generateManager(manager))
//     );
//     return html.join("");
// }
// module.exports = team => {
//   HTML TEMPLATE
//       WHERE YOU WANT TO SHOW THE USER CONTENT
//     <div>
//       ${generateTeam(team)}
//     </div>
// }

