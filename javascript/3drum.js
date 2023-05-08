

var numberOfButton = document.querySelectorAll("button").length;
// for (var i = 0; i < numberOfButton; i++) {
//     document
//         .querySelectorAll("button")
//     [i].addEventListener("keydown", function (e) {
//         // console.log(this.innerHTML);

        
//     });
// }
    document.addEventListener("keydown",function (e){
        // alert(e.key);
        makeSound(e.key);
  
    });

    function makeSound(keypass){
        switch (keypass) {
            case "w":
                var tom1 = new Audio("/img/drum/tom-1.mp3");
                tom1.play();

                break;
            case "a":
                var tom2 = new Audio("/img/drum/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("/img/drum/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("/img/drum/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("/img/drum/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("/img/drum/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("/img/drum/kick-bass.mp3");
                kick.play();
                break;
            default:
                break;
        }
    }