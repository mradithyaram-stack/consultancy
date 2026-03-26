const fs = require('fs');
let html = fs.readFileSync('c:/const/index.html', 'utf8');
const css = fs.readFileSync('c:/const/style.css', 'utf8');
let js = fs.readFileSync('c:/const/script.js', 'utf8');

// Also Add logic to prevent modal form submission from refreshing the page
js += `
// Prevent default form submission for contact forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will get back to you shortly.');
        if(modal && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});
`;

html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + css + '\n</style>');
html = html.replace('<script src="script.js"></script>', '<script>\n' + js + '\n</script>');

fs.writeFileSync('c:/const/index.html', html);
console.log('Successfully inlined CSS and JS into index.html');
