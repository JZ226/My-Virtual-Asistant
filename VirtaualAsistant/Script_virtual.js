let  Button = document.querySelector(".btn")
let Content = document.querySelector(".cntnt")
let Voice = document.querySelector(".voice")
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<=10){
        speak("Good Morning Zaib Sir me your asistant speaking")
    }
    else if(hours>=11 && hours<=17){
        speak("Good After Noon Zaib Sir me your assistant speaking")
    }
    else{
        speak("Good Evening Zaib Sir me your asistant speaking")
    }
}
 window.addEventListener('keypress',()=>{
   wishme()
  })

let Speek_by_us = window.SpeechRecognition || window.webkitSpeechRecognition 
let recogination = new Speek_by_us()
 
recogination.onresult =(event)=>{
    let currentindex = event.resultIndex
    let transcript = event.results[currentindex][0].transcript
    Content.innerHTML=transcript
    take_user_command(transcript.toLowerCase())
}


Button.addEventListener('click',()=>{
  recogination.start()
   Button.style.display="none"
      Voice.style.display="block"
})
 function take_user_command(msg){
      Button.style.display="flex"
      Voice.style.display="none"
     if(msg.includes("hello") || msg.includes("hello jami") || msg.includes("hey") || msg.includes("hey jami")){
        speak("Hey,How i can help you?")
     }
     else if(msg.includes("who are you") || msg.includes("who created you")){
        speak("I am a Virtual Asistant created by Jahanzaib Bajwa")
     }
     else if(msg.includes("so you help me in my job now")){
        speak("Yes Sure Sir,Why not")
     }
     else if(msg.includes("you are good")){
        speak("Thankyou Sir")
     }
     else if(msg.includes("you are my best friend now")){
        speak("Sure Budie,other world go in hell")
     }
     else if(msg.includes("you are cute") || msg.includes("you done a job incredible")){
        speak("this is my pleasure")
     }
     else if(msg.includes("how are you")){
        speak("I am good")
     }
     else if(msg.includes("open youtube") || msg.includes("open my youtube")){
      speak("Okay Sir me opening youtube")
      window.open("https://www.youtube.com")
     }
     else if(msg.includes("open my facebook") || msg.includes("open facebook")){
      speak("okay Sir me opening facebook")
      window.open("https://www.facebook.com")
     }
     else if(msg.includes("open chat gpt")){
      speak("okay me opening chat GPT")
      window.open("https://chatgpt.com")
     }
     else if(msg.includes("open my instagram") || msg.includes("open instagram")){
      speak("okay me opening instagram")
      window.open("https://instagram.com")
     }
     else if(msg.includes("open my whatsapp") || msg.includes("open whatsapp")){
      speak("okay opening whatsapp")
      window.open("whatsapp://")
     }
     else if(msg.includes("who is amen") || msg.includes("who is aymen")){
      speak("Aymen is Jahanzaib Best friend")
     }
     else if(msg.includes("tang karti hai") || msg.includes("aman is my girl friend")){
      speak("Give me Aymen contact number me see her who she is")
     }
     else{
        speak(`This is I found in internet regarding ${msg}`)
        window.open(`https://www.google.com/search?q=${msg}`)
     }
 }