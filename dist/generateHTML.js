function generateHTML(teamMembers)
FileSystem.writerfileSync('index.hteml', generateHTML, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Your HTML file is created.');
    }
});

const managerHTML = function(manager) {
    return `
    
}