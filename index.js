const fs = require("fs");
const readline = require("readline");
const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


let questions = [
    'Author\n',
    'Project Title\n',
    'Dependecies\n',
    'Tests run\n',
    'Deployment url\n'
]


cli.question(questions[0], (response0) => {
    cli.question(questions[1], (response1) => {
        cli.question(questions[2], (response2) => {
            cli.question(questions[3], (response3) => {
                cli.question(questions[4], (response4) => {

                   let interaction = `### ${questions[0]}# ${response0}\n\n### ${questions[1]}# ${response1}\n\n### ${questions[2]}# ${response2}\n\n### ${questions[3]}# ${response3}\n\n### ${questions[4]}# ${response4}`;

                    fs.writeFile('readme.md', interaction, error => {
                        if (error) throw error;
                        console.log('readme.md was succesfully created');
                        process.exit()
                    })
                })
            })
        })
    })
})