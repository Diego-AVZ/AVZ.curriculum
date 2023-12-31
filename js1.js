var tt = document.getElementById("ttext");
var tt2 = document.getElementById("F");
var tt3 = document.getElementById("B");
var tt4 = document.getElementById("full");

tt2.addEventListener("click", function(){
    tt.innerText = "Front-End";
    tt.style.background =
      "linear-gradient(20deg, rgb(26 130 0), rgb(72 162 72))";
      document.getElementById("tproj1").style.display = "none";
      document.getElementById("tproj2").style.display = "none";
      document.getElementById("tproj3").style.display = "block";
})

tt3.addEventListener("click", function () {
  tt.innerText = "Back-End";
  tt.style.background =
    "linear-gradient(20deg, rgb(111 0 130), rgb(162 72 72))";
    document.getElementById("tproj1").style.display = "none";
    document.getElementById("tproj2").style.display = "block";
    document.getElementById("tproj3").style.display = "none";

});

tt4.addEventListener("click", function () {
  tt.innerText = "Full-Stack";
  tt.style.background = "linear-gradient(20deg, rgb(0, 50, 130), rgb(72, 118, 162))";
  document.getElementById("tproj1").style.display = "block";
  document.getElementById("tproj2").style.display = "none";
  document.getElementById("tproj3").style.display = "none";
});

var mp1 = document.getElementById("mp1");
var mp2 = document.getElementById("mp2");

mp1.addEventListener("click", function(){ 
    document.getElementById("proj2").style.display = "block";
    document.getElementById("name2").innerText = "Nebula Academy";
    document.getElementById("thisProImg2").src = "pro1.png";
    document.getElementById("pdesc").style.fontSize = "1.4vw";
    document.getElementById("pdesc").innerText =
      "Nebula Academy is a user-friendly learning platform that employs a practical approach, guiding users through hands-on exercises to enhance their understanding of DeFi. In the inaugural course, which is currently the sole offering, participants are instructed on utilizing a web3 wallet such as Metamask. Notably, Nebula Academy incorporates a gamified element by awarding points for completed tasks, fostering an engaging and rewarding learning experience.";
})

mp2.addEventListener("click", function () {
  document.getElementById("proj2").style.display = "block";
  document.getElementById("name2").innerText = "AlphaBase UserZone";
  document.getElementById("thisProImg2").src = "UserZone.png";
  document.getElementById("pdesc").innerText =
    "AlphaBase is a state-of-the-art social platform revolutionizing cryptocurrency insights. It establishes a decentralized bond between AlphaProvs and AlphaScouts, enabling the seamless sharing of privileged information. Through the innovative SignalAscend algorithm, signals are strategically positioned in the global list based on the AlphaScore, creating a dynamic and fair hierarchy. AlphaBase not only redefines the crypto landscape but also introduces a novel earning model, making it a collaborative ecosystem where users contribute, earn, and thrive.";
  document.getElementById("pdesc").style.fontSize = "1.3vw";
});

var but1 = document.getElementById("but1");
var ani1 = document.getElementById("ani1");

but1.addEventListener("mouseover", function(){
  ani1.style.width = "500px";
  ani1.style.height = "500px";
  document.getElementById("but1").style.color = "black";
  document.getElementById("but1").style.textShadow = "none";
})

but1.addEventListener("mouseout", function () {
  ani1.style.width = "1px";
  ani1.style.height = "1px";
  document.getElementById("but1").style.color = "white";
  document.getElementById("but1").style.textShadow =
    "0px 0px 10px rgb(0, 0, 0)";

});


//____________________________________________________________
//BOTs TELEGRAM

var mes = document.getElementById("mesIn");

function sendToTelegram() {

    const botToken = "6793857811:AAGwtXd5rWJddn_LamSZqBOwdFPMDgAKgcc";

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    var message = mes.value;

    const messageData = {
      chat_id: -4084847055,
      text: message,
    };

    console.log("sending to Telegram. . . ");

    fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Mensaje enviado con éxito:", data);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
      });

}
