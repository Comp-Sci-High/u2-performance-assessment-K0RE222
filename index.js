const prompt = require('prompt-sync')()
console.log("Welcome to the Minecraft Server Status chatbot");
  let apiLink;
 let serverType = prompt("Does your server run on the Bedrock or Java version of Minecraft?:");
  if (serverType === "Java"){
    apiLink = "https://api.mcsrvstat.us/3/"
  }else if (serverType === "Bedrock"){
    apiLink = "https://api.mcsrvstat.us/bedrock/3/"
 }
  let serverAddress = prompt("What is your server address?:");
  let fullLink;
fullLink = apiLink + serverAddress;

async function serverStatus(fullLink) {
  const response = await fetch(fullLink)
  const data = await response.json()
  console.log(data.online)
  if (data.online === true){
    console.log("Your server is online!")
  }else if (data.online === false){
    console.log("Your server is offline.")
  }
}
console.log(fullLink)
serverStatus(fullLink)


async function imageGenerate() {
  const options = {
       method:'POST',
       headers:{
        Authorization: `Bearer`,
        'Content-Type':'application/json',
      },
       body:JSON.stringify({
        prompt:"the old Minecraft tutorial world"
       })
     };
     const response = await fetch("https://api.openai.com/v1/images/generations", options)
     const data = await response.json()
     console.log(data)
}
console.log("Thank you for playing, heres a generated image to celebrate!")
imageGenerate()



