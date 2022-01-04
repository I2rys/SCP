//Dependencies
const Axios = require("axios")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <url>")
    process.exit()
}

void async function Main(){
    try{
        const response = await Axios({
            method: "GET",
            url: Self_Args[0],
            headers: {
                origin: "https://attacker.com"
            }
        })
    
        JSON.stringify(response.headers).indexOf("https://attacker.com") != -1 ? console.log("The website is vulnerable to CORS.") : console.log("The website is not vulnerable to CORS.")
    }catch{
        console.log("Invalid url.")
    }
}()