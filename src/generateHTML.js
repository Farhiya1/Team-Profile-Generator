// Function responsible for taking out array of team members and creating html for each
const generateTeamMembersHtml = (teamMembers) => {};

// Function which creates cards using HTML, for teamMembers
const formatData = (data) => {
  // Loops over employees and returns informmation on the card for each team member
  return data.map((employee) => {
    let x = "Boss";
    let y = employee.officeNumber;
    if (employee.title == "intern") {
      console.log("employee", employee);
      x = "school name";
      y = employee.school;
    }
    if (employee.title == "engineer") {
      x = "Github Account";
      y = employee.github;
    }
    return ` <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${employee.name}</h3>
                    <h4>${employee.title}</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${employee.id}</p>
                    <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p class="office">${x}: ${y}</p>
                </div>
            </div>
        </div> `;
  });
};

// Function for creating basic HTML and exporting teamMembers
module.exports = (teamMembers) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="Output/style.css">
</head>

<body>

    ${formatData(teamMembers)}
</body>
</html>
    `;
};
