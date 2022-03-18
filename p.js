function nextq(){
    window.location='q.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backo(){
        window.location="o.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="It is me the ghost haaaaa get out of here Get out";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }