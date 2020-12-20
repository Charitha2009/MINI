var myCards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "+4", "R", "S", "W"] ;
window.onload = newGame ;

function newGame() {
    document.getElementById("counter").innerHTML = 0 ;
    var c0 = document.getElementById("card0") ;  
    var c1 = document.getElementById("card1") ;  
    var c2 = document.getElementById("card2") ;  
    var c3 = document.getElementById("card3") ;  
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ;  
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    c0.innerHTML = "N" ;
    c1.innerHTML = "N" ;
    c2.innerHTML = "N" ;
    c3.innerHTML = "N" ;
    c4.innerHTML = "N" ;
    c5.innerHTML = "N" ;
    c6.innerHTML = "N" ;
    c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
    c21.innerHTML = "N" ;
    c22.innerHTML = "N" ;
    c23.innerHTML = "N" ;
    c24.innerHTML = "N" ;
    c25.innerHTML = "N" ;
    c26.innerHTML = "N" ;
    c27.innerHTML = "N" ;
    tc.innerHTML = myCards[Math.floor(Math.random() * 10)] ;
    colorize(c0) ; colorize(c1) ; colorize(c2) ; colorize(c3) ; colorize(c4) ; colorize(c5) ; colorize(c6) ; colorize(c7) ; colorize(c8) ; colorize(c9) ; colorize(c10) ; colorize(c11) ; colorize(c12) ; colorize(c13) ; colorize(c14) ; colorize(c15) ; colorize(c16) ; colorize(c17) ; colorize(c18) ; colorize(c19) ; colorize(c20) ; colorize(c21) ; colorize(c22) ; colorize(c23) ; colorize(c24) ; colorize(c25) ; colorize(c26) ; colorize(c27) ; colorize(tc) ;
}

function colorize(card) {
    var c0 = document.getElementById("card0") ;  
    var c1 = document.getElementById("card1") ;  
    var c2 = document.getElementById("card2") ;  
    var c3 = document.getElementById("card3") ;  
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ;  
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
        card.style.backgroundColor = "#DF0001" ;
        card.style.color = "white" ;
        card.style.fontSize = "25px" ;
        break ;
        case 1:
        card.style.backgroundColor = "#FFD302" ;
        card.style.color = "white" ;
        card.style.fontSize = "25px" ;
        break ;
        case 2:
        card.style.backgroundColor = "#019B4A" ;
        card.style.color = "white" ;
        card.style.fontSize = "25px" ;
        break ;
        case 3:
        card.style.backgroundColor = "#0093E1" ;
        card.style.color = "white" ;
        card.style.fontSize = "25px" ;
        break ;
    } ;
    document.getElementById("tableCard").style.fontSize = "50px" ;
    if (card.innerHTML == "+4" || card.innerHTML == "W") {card.style.backgroundColor = "black"} ;
    if (card.innerHTML == "N") {card.style.backgroundColor = "darkgreen" ; card.style.fontSize = 0} ;
    c0.style.fontSize = 0 ;
    c1.style.fontSize = 0 ;
    c2.style.fontSize = 0 ;
    c3.style.fontSize = 0 ;
    c4.style.fontSize = 0 ;
    c5.style.fontSize = 0 ;
    c6.style.fontSize = 0 ;
    c7.style.fontSize = 0 ;
    c8.style.fontSize = 0 ;
    c9.style.fontSize = 0 ;
    c10.style.fontSize = 0 ;
    c11.style.fontSize = 0 ;
    c12.style.fontSize = 0 ;
    c13.style.fontSize = 0 ;
} 

function playCard(cardID) {
    document.getElementById("counter").innerHTML = 0 ;
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    switch (cardID) {
        case 14:
        if (c14.style.backgroundColor == "black") {
            putBlackCard(c14)
        } else if (c14.style.backgroundColor == tc.style.backgroundColor || c14.innerHTML == tc.innerHTML) {
            putCard(c14)
        } ;
        break ;
        case 15:
        if (c15.style.backgroundColor == "black") {
            putBlackCard(c15)
        } else if (c15.style.backgroundColor == tc.style.backgroundColor || c15.innerHTML == tc.innerHTML) {
            putCard(c15)
        } ;
        break ;
        case 16:
        if (c16.style.backgroundColor == "black") {
            putBlackCard(c16)
        } else if (c16.style.backgroundColor == tc.style.backgroundColor || c16.innerHTML == tc.innerHTML) {
            putCard(c16)
        } ;
        break ;
        case 17:
        if (c17.style.backgroundColor == "black") {
            putBlackCard(c17)
        } else if (c17.style.backgroundColor == tc.style.backgroundColor || c17.innerHTML == tc.innerHTML) {
            putCard(c17)
        } ;
        break ;
        case 18:
        if (c18.style.backgroundColor == "black") {
            putBlackCard(c18)
        } else if (c18.style.backgroundColor == tc.style.backgroundColor || c18.innerHTML == tc.innerHTML) {
            putCard(c18)
        } ; 
        break ;
        case 19:
        if (c19.style.backgroundColor == "black") {
            putBlackCard(c19)
        } else if (c19.style.backgroundColor == tc.style.backgroundColor || c19.innerHTML == tc.innerHTML) {
            putCard(c19)
        } ;
        break ;
        case 20:
        if (c20.style.backgroundColor == "black") {
            putBlackCard(c20)
        } else if (c20.style.backgroundColor == tc.style.backgroundColor || c20.innerHTML == tc.innerHTML) {
            putCard(c20)
        } ;
        break ;
        case 21:
        if (c21.style.backgroundColor == "black") {
            putBlackCard(c21)
        } else if (c21.style.backgroundColor == tc.style.backgroundColor || c21.innerHTML == tc.innerHTML) {
            putCard(c21)
        } ;
        break ;
        case 22:
        if (c22.style.backgroundColor == "black") {
            putBlackCard(c22)
        } else if (c22.style.backgroundColor == tc.style.backgroundColor || c22.innerHTML == tc.innerHTML) {
            putCard(c22)
        } ;
        break ;
        case 23:
        if (c23.style.backgroundColor == "black") {
            putBlackCard(c23)
        } else if (c23.style.backgroundColor == tc.style.backgroundColor || c23.innerHTML == tc.innerHTML) {
            putCard(c23)
        } ;
        break ;
        case 24:
        if (c24.style.backgroundColor == "black") {
            putBlackCard(c24)
        } else if (c24.style.backgroundColor == tc.style.backgroundColor || c24.innerHTML == tc.innerHTML) {
            putCard(c24)
        } ;
        break ;
        case 25:
        if (c25.style.backgroundColor == "black") {
            putBlackCard(c25)
        } else if (c25.style.backgroundColor == tc.style.backgroundColor || c25.innerHTML == tc.innerHTML) {
            putCard(c25)
        } ; 
        break ;
        case 26:
        if (c26.style.backgroundColor == "black") {
            putBlackCard(c26)
        } else if (c26.style.backgroundColor == tc.style.backgroundColor || c26.innerHTML == tc.innerHTML) {
            putCard(c26)
        } ;
        break ;
        case 27:
        if (c27.style.backgroundColor == "black") {
            putBlackCard(c27)
        } else if (c27.style.backgroundColor == tc.style.backgroundColor || c27.innerHTML == tc.innerHTML) {
            putCard(c27)
        } ;
        break ;
    } ;
}

function putCard(cardVar) {
    var tc = document.getElementById("tableCard") ;
    if (cardVar.innerHTML == "R" || cardVar.innerHTML == "S") {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        document.getElementById("result").innerHTML = "It's your turn again!" ;
        colorize(cardVar) ;
    } else if (cardVar.innerHTML == "+2") {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        colorize(cardVar) ;
        document.getElementById("result").innerHTML = "Computer drew two cards!" ;
        setTimeout(drawTwoCPU, 500) ;
    } else {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        colorize(cardVar) ;
        document.getElementById("result").innerHTML = "It's computer's turn!" ;
        setTimeout(playCPU, 500) ;
    } ;
    if (c14.innerHTML == "N" && c15.innerHTML == "N" && c16.innerHTML == "N" && c17.innerHTML == "N" && c18.innerHTML == "N" && c19.innerHTML == "N" && c20.innerHTML == "N" && c21.innerHTML == "N" && c22.innerHTML == "N" && c23.innerHTML == "N" && c24.innerHTML == "N" && c25.innerHTML == "N" && c26.innerHTML == "N" && c27.innerHTML == "N") {
        alert("You win!") ;
        newGame() ;
    } ;
}

function putBlackCard(cardVar) {
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    if (cardVar.innerHTML == "W") {
        var userInput = prompt("What color do you want your Wild card to be?", "R, Y, G or B?") ;
        switch (userInput.toUpperCase()) {
            case "R":
            tc.style.backgroundColor = "#DF0001" ;
            tc.innerHTML = "W" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case "Y":
            tc.style.backgroundColor = "#FFD302" ;
            tc.innerHTML = "W" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case "G":
            tc.style.backgroundColor = "#019B4A" ;
            tc.innerHTML = "W" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case "B":
            tc.style.backgroundColor = "#0093E1" ;
            tc.innerHTML = "W" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
        } ;
        document.getElementById("result").innerHTML = "It's computer's turn!" ;
        setTimeout(playCPU, 500) ;
    } else {
        if (c14.style.backgroundColor != tc.style.backgroundColor && c15.style.backgroundColor != tc.style.backgroundColor && c16.style.backgroundColor != tc.style.backgroundColor && c17.style.backgroundColor != tc.style.backgroundColor && c18.style.backgroundColor != tc.style.backgroundColor && c19.style.backgroundColor != tc.style.backgroundColor && c20.style.backgroundColor != tc.style.backgroundColor && c21.style.backgroundColor != tc.style.backgroundColor && c22.style.backgroundColor != tc.style.backgroundColor && c23.style.backgroundColor != tc.style.backgroundColor && c24.style.backgroundColor != tc.style.backgroundColor && c25.style.backgroundColor != tc.style.backgroundColor && c26.style.backgroundColor != tc.style.backgroundColor && c27.style.backgroundColor != tc.style.backgroundColor) {
            var userInput = prompt("What color do you want your Wild Draw Four card to be?", "R, Y, G or B?") ;
            switch (userInput.toUpperCase()) {
                case "R":
                tc.style.backgroundColor = "#DF0001" ;
                tc.innerHTML = "+4" ;
                cardVar.innerHTML = "N" ;
                colorize(cardVar) ;
                break ;
                case "Y":
                tc.style.backgroundColor = "#FFD302" ;
                tc.innerHTML = "+4" ;
                cardVar.innerHTML = "N" ;
                colorize(cardVar) ;
                break ;
                case "G":
                tc.style.backgroundColor = "#019B4A" ;
                tc.innerHTML = "+4" ;
                cardVar.innerHTML = "N" ;
                colorize(cardVar) ;
                break ;
                case "B":
                tc.style.backgroundColor = "#0093E1" ;
                tc.innerHTML = "+4" ;
                cardVar.innerHTML = "N" ;
                colorize(cardVar) ;
                break ;
            } ;
            document.getElementById("result").innerHTML = "Computer drew four cards!" ;
            setTimeout(drawFourCPU, 500) ;
        } ;
    } ;    
    if (c14.innerHTML == "N" && c15.innerHTML == "N" && c16.innerHTML == "N" && c17.innerHTML == "N" && c18.innerHTML == "N" && c19.innerHTML == "N" && c20.innerHTML == "N" && c21.innerHTML == "N" && c22.innerHTML == "N" && c23.innerHTML == "N" && c24.innerHTML == "N" && c25.innerHTML == "N" && c26.innerHTML == "N" && c27.innerHTML == "N") {
        alert("You win!") ;
        newGame() ;
    } ;
} 

function playCPU() {
    document.getElementById("counter").innerHTML = 0 ;
    var c0 = document.getElementById("card0") ; 
    var c1 = document.getElementById("card1") ; 
    var c2 = document.getElementById("card2") ; 
    var c3 = document.getElementById("card3") ; 
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ; 
    var tc = document.getElementById("tableCard") ;
    if (c0.style.backgroundColor == tc.style.backgroundColor || c0.innerHTML == tc.innerHTML && c0.style.backgroundColor != "black") {
        putCPU(c0)
    } else if ((c1.style.backgroundColor == tc.style.backgroundColor || c1.innerHTML == tc.innerHTML) && c1.style.backgroundColor != "black") {
        putCPU(c1)
    } else if ((c2.style.backgroundColor == tc.style.backgroundColor || c2.innerHTML == tc.innerHTML) && c2.style.backgroundColor != "black") {
        putCPU(c2)
    } else if ((c3.style.backgroundColor == tc.style.backgroundColor || c3.innerHTML == tc.innerHTML) && c3.style.backgroundColor != "black") {
        putCPU(c3)
    } else if ((c4.style.backgroundColor == tc.style.backgroundColor || c4.innerHTML == tc.innerHTML) && c4.style.backgroundColor != "black") {
        putCPU(c4)
    } else if ((c5.style.backgroundColor == tc.style.backgroundColor || c5.innerHTML == tc.innerHTML) && c5.style.backgroundColor != "black") {
        putCPU(c5)
    } else if ((c6.style.backgroundColor == tc.style.backgroundColor || c6.innerHTML == tc.innerHTML) && c6.style.backgroundColor != "black") {
        putCPU(c6)
    } else if ((c7.style.backgroundColor == tc.style.backgroundColor || c7.innerHTML == tc.innerHTML) && c7.style.backgroundColor != "black") {
        putCPU(c7)
    } else if ((c8.style.backgroundColor == tc.style.backgroundColor || c8.innerHTML == tc.innerHTML) && c8.style.backgroundColor != "black") {
        putCPU(c8)
    } else if ((c9.style.backgroundColor == tc.style.backgroundColor || c9.innerHTML == tc.innerHTML) && c9.style.backgroundColor != "black") {
        putCPU(c9)
    } else if ((c10.style.backgroundColor == tc.style.backgroundColor || c10.innerHTML == tc.innerHTML) && c10.style.backgroundColor != "black") {
        putCPU(c10)
    } else if ((c11.style.backgroundColor == tc.style.backgroundColor || c11.innerHTML == tc.innerHTML) && c11.style.backgroundColor != "black") {
        putCPU(c11)
    } else if ((c12.style.backgroundColor == tc.style.backgroundColor || c12.innerHTML == tc.innerHTML) && c12.style.backgroundColor != "black") {
        putCPU(c12)
    } else if ((c13.style.backgroundColor == tc.style.backgroundColor || c13.innerHTML == tc.innerHTML) && c13.style.backgroundColor != "black") {
        putCPU(c13)
    } else if (c0.style.backgroundColor == "black") {
        putBlackCPU(c0)
    } else if (c1.style.backgroundColor == "black") {
        putBlackCPU(c1)
    } else if (c2.style.backgroundColor == "black") {
        putBlackCPU(c2)
    } else if (c3.style.backgroundColor == "black") {
        putBlackCPU(c3)
    } else if (c4.style.backgroundColor == "black") {
        putBlackCPU(c4)
    } else if (c5.style.backgroundColor == "black") {
        putBlackCPU(c5)
    } else if (c6.style.backgroundColor == "black") {
        putBlackCPU(c6)
    } else if (c7.style.backgroundColor == "black") {
        putBlackCPU(c7)
    } else if (c8.style.backgroundColor == "black") {
        putBlackCPU(c8)
    } else if (c9.style.backgroundColor == "black") {
        putBlackCPU(c9)
    } else if (c10.style.backgroundColor == "black") {
        putBlackCPU(c10)
    } else if (c11.style.backgroundColor == "black") {
        putBlackCPU(c11)
    } else if (c12.style.backgroundColor == "black") {
        putBlackCPU(c12)
    } else if (c13.style.backgroundColor == "black") {
        putBlackCPU(c13)
    } else {
        drawCPU()
    } ;
}

function putCPU(cardVar) {
    var c0 = document.getElementById("card0") ; 
    var c1 = document.getElementById("card1") ; 
    var c2 = document.getElementById("card2") ; 
    var c3 = document.getElementById("card3") ; 
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ; 
    var tc = document.getElementById("tableCard") ;
    if (cardVar.innerHTML == "R" || cardVar.innerHTML == "S") {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        colorize(cardVar) ;
        document.getElementById("result").innerHTML = "It's computer's turn again!" ;
        setTimeout(playCPU, 500) ;
    } else if (cardVar.innerHTML == "+2") {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        colorize(cardVar) ;
        document.getElementById("result").innerHTML = "You drew two cards!" ;
        setTimeout(drawTwoCards, 500) ;
    } else {
        tc.innerHTML = cardVar.innerHTML ;
        tc.style.backgroundColor = cardVar.style.backgroundColor ;
        cardVar.innerHTML = "N" ;
        colorize(cardVar) ;
        document.getElementById("result").innerHTML = "It's your turn!" ;
    } ;
    if (c0.innerHTML == "N" && c1.innerHTML == "N" && c2.innerHTML == "N" && c3.innerHTML == "N" && c4.innerHTML == "N" && c5.innerHTML == "N" && c6.innerHTML == "N" && c7.innerHTML == "N" && c8.innerHTML == "N" && c9.innerHTML == "N" && c10.innerHTML == "N" && c11.innerHTML == "N" && c12.innerHTML == "N" && c13.innerHTML == "N") {
        alert("You lose!") ;
        newGame() ;
    } ;
}

function putBlackCPU(cardVar) {
    var tc = document.getElementById("tableCard") ;
    if (cardVar.innerHTML == "W") {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
            tc.innerHTML = "W" ;
            tc.style.backgroundColor = "#DF0001" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 1:
            tc.innerHTML = "W" ;
            tc.style.backgroundColor = "#FFD302" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 2:
            tc.innerHTML = "W" ;
            tc.style.backgroundColor = "#019B4A" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 3:
            tc.innerHTML = "W" ;
            tc.style.backgroundColor = "#0093E1" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
        } ;
        document.getElementById("result").innerHTML = "It's your turn!" ;
    } else {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
            tc.innerHTML = "+4" ;
            tc.style.backgroundColor = "#DF0001" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 1:
            tc.innerHTML = "+4" ;
            tc.style.backgroundColor = "#FFD302" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 2:
            tc.innerHTML = "+4" ;
            tc.style.backgroundColor = "#019B4A" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
            case 3:
            tc.innerHTML = "+4" ;
            tc.style.backgroundColor = "#0093E1" ;
            cardVar.innerHTML = "N" ;
            colorize(cardVar) ;
            break ;
        } ;
        document.getElementById("result").innerHTML = "You drew four cards!" ;
        setTimeout(drawFourCards, 500) ;
    } ;
    if (c0.innerHTML == "N" && c1.innerHTML == "N" && c2.innerHTML == "N" && c3.innerHTML == "N" && c4.innerHTML == "N" && c5.innerHTML == "N" && c6.innerHTML == "N" && c7.innerHTML == "N" && c8.innerHTML == "N" && c9.innerHTML == "N" && c10.innerHTML == "N" && c11.innerHTML == "N" && c12.innerHTML == "N" && c13.innerHTML == "N") {
        alert("You lose! ") ;
        newGame() ;
    } ;
}

function drawCard() {
    var count = document.getElementById("counter").innerHTML ;
    if (count == 0) {
        document.getElementById("counter").innerHTML = count + 1 ;
        var c14 = document.getElementById("card14") ;  
        var c15 = document.getElementById("card15") ;  
        var c16 = document.getElementById("card16") ;  
        var c17 = document.getElementById("card17") ;  
        var c18 = document.getElementById("card18") ;  
        var c19 = document.getElementById("card19") ;  
        var c20 = document.getElementById("card20") ;  
        var c21 = document.getElementById("card21") ;  
        var c22 = document.getElementById("card22") ;  
        var c23 = document.getElementById("card23") ;  
        var c24 = document.getElementById("card24") ;  
        var c25 = document.getElementById("card25") ;  
        var c26 = document.getElementById("card26") ;  
        var c27 = document.getElementById("card27") ; 
        var tc = document.getElementById("tableCard") ;
        if (c14.innerHTML == "N") {
            c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c14) ;
        } else if (c15.innerHTML == "N") {
            c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c15) ;
        } else if (c16.innerHTML == "N") {
            c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c16) ;
        } else if (c17.innerHTML == "N") {
            c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c17) ;
        } else if (c18.innerHTML == "N") {
            c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c18) ;
        } else if (c19.innerHTML == "N") {
            c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c19) ;
        } else if (c20.innerHTML == "N") {
            c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c20) ;
        } else if (c21.innerHTML == "N") {
            c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c21) ;
        } else if (c22.innerHTML == "N") {
            c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c22) ;
        } else if (c23.innerHTML == "N") {
            c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c23) ;
        } else if (c24.innerHTML == "N") {
            c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c24) ;
        } else if (c25.innerHTML == "N") {
            c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c25) ;
        } else if (c26.innerHTML == "N") {
            c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c26) ;
        } else if (c27.innerHTML == "N") {
            c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
            colorize(c27) ;
        } else {
            setTimeout(playCPU, 500)
        } ;
        if ((c14.innerHTML != tc.innerHTML && c14.style.backgroundColor != tc.style.backgroundColor) && (c15.innerHTML != tc.innerHTML && c15.style.backgroundColor != tc.style.backgroundColor) && (c16.innerHTML != tc.innerHTML && c16.style.backgroundColor != tc.style.backgroundColor) && (c17.innerHTML != tc.innerHTML && c17.style.backgroundColor != tc.style.backgroundColor) && (c18.innerHTML != tc.innerHTML && c18.style.backgroundColor != tc.style.backgroundColor) && (c19.innerHTML != tc.innerHTML && c19.style.backgroundColor != tc.style.backgroundColor) && (c20.innerHTML != tc.innerHTML && c20.style.backgroundColor != tc.style.backgroundColor) && (c21.innerHTML != tc.innerHTML && c21.style.backgroundColor != tc.style.backgroundColor) && (c22.innerHTML != tc.innerHTML && c22.style.backgroundColor != tc.style.backgroundColor) && (c23.innerHTML != tc.innerHTML && c23.style.backgroundColor != tc.style.backgroundColor) && (c24.innerHTML != tc.innerHTML && c24.style.backgroundColor != tc.style.backgroundColor) && (c25.innerHTML != tc.innerHTML && c25.style.backgroundColor != tc.style.backgroundColor) && (c26.innerHTML != tc.innerHTML && c26.style.backgroundColor != tc.style.backgroundColor) && (c27.innerHTML != tc.innerHTML && c27.style.backgroundColor != tc.style.backgroundColor) && c14.style.backgroundColor != "black" && c15.style.backgroundColor != "black" && c16.style.backgroundColor != "black" && c17.style.backgroundColor != "black" && c18.style.backgroundColor != "black" && c19.style.backgroundColor != "black" && c20.style.backgroundColor != "black" && c21.style.backgroundColor != "black" && c22.style.backgroundColor != "black" && c23.style.backgroundColor != "black" && c24.style.backgroundColor != "black" && c25.style.backgroundColor != "black" && c26.style.backgroundColor != "black" && c27.style.backgroundColor != "black") {
            document.getElementById("result").innerHTML = "It's computer's turn!" ;
            setTimeout(playCPU, 500) ;
        } ;
    } else {
        document.getElementById("result").innerHTML = "You can only draw once!" ;
    } ;
}

function drawTwoCards() {
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    setTimeout(playCPU, 500) ;
} ;

function drawFourCards() {
    var c14 = document.getElementById("card14") ;  
    var c15 = document.getElementById("card15") ;  
    var c16 = document.getElementById("card16") ;  
    var c17 = document.getElementById("card17") ;  
    var c18 = document.getElementById("card18") ;  
    var c19 = document.getElementById("card19") ;  
    var c20 = document.getElementById("card20") ;  
    var c21 = document.getElementById("card21") ;  
    var c22 = document.getElementById("card22") ;  
    var c23 = document.getElementById("card23") ;  
    var c24 = document.getElementById("card24") ;  
    var c25 = document.getElementById("card25") ;  
    var c26 = document.getElementById("card26") ;  
    var c27 = document.getElementById("card27") ; 
    var tc = document.getElementById("tableCard") ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    if (c14.innerHTML == "N") {
        c14.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c14) ;
    } else if (c15.innerHTML == "N") {
        c15.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c15) ;
    } else if (c16.innerHTML == "N") {
        c16.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c16) ;
    } else if (c17.innerHTML == "N") {
        c17.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c17) ;
    } else if (c18.innerHTML == "N") {
        c18.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c18) ;
    } else if (c19.innerHTML == "N") {
        c19.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c19) ;
    } else if (c20.innerHTML == "N") {
        c20.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c20) ;
    } else if (c21.innerHTML == "N") {
        c21.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c21) ;
    } else if (c22.innerHTML == "N") {
        c22.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c22) ;
    } else if (c23.innerHTML == "N") {
        c23.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c23) ;
    } else if (c24.innerHTML == "N") {
        c24.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c24) ;
    } else if (c25.innerHTML == "N") {
        c25.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c25) ;
    } else if (c26.innerHTML == "N") {
        c26.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c26) ;
    } else if (c27.innerHTML == "N") {
        c27.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c27) ;
    } ;
    setTimeout(playCPU, 500) ;
} ;

function drawCPU() {
    var c0 = document.getElementById("card0") ; 
    var c1 = document.getElementById("card1") ; 
    var c2 = document.getElementById("card2") ; 
    var c3 = document.getElementById("card3") ; 
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ;  
    var tc = document.getElementById("tableCard") ;
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
    if (c0.innerHTML == tc.innerHTML || c0.style.backgroundColor == tc.style.backgroundColor || c0.style.backgroundColor == "black" || c1.innerHTML == tc.innerHTML || c1.style.backgroundColor == tc.style.backgroundColor || c1.style.backgroundColor == "black" || c2.innerHTML == tc.innerHTML || c2.style.backgroundColor == tc.style.backgroundColor || c2.style.backgroundColor == "black" || c3.innerHTML == tc.innerHTML || c3.style.backgroundColor == tc.style.backgroundColor || c3.style.backgroundColor == "black" || c4.innerHTML == tc.innerHTML || c4.style.backgroundColor == tc.style.backgroundColor || c4.style.backgroundColor == "black" || c5.innerHTML == tc.innerHTML || c5.style.backgroundColor == tc.style.backgroundColor || c5.style.backgroundColor == "black" || c6.innerHTML == tc.innerHTML || c6.style.backgroundColor == tc.style.backgroundColor || c6.style.backgroundColor == "black" || c7.innerHTML == tc.innerHTML || c7.style.backgroundColor == tc.style.backgroundColor || c7.style.backgroundColor == "black" || c8.innerHTML == tc.innerHTML || c8.style.backgroundColor == tc.style.backgroundColor || c8.style.backgroundColor == "black" || c9.innerHTML == tc.innerHTML || c9.style.backgroundColor == tc.style.backgroundColor || c9.style.backgroundColor == "black" || c10.innerHTML == tc.innerHTML || c10.style.backgroundColor == tc.style.backgroundColor || c10.style.backgroundColor == "black" || c11.innerHTML == tc.innerHTML || c11.style.backgroundColor == tc.style.backgroundColor || c11.style.backgroundColor == "black" || c12.innerHTML == tc.innerHTML || c12.style.backgroundColor == tc.style.backgroundColor || c12.style.backgroundColor == "black" || c13.innerHTML == tc.innerHTML || c13.style.backgroundColor == tc.style.backgroundColor || c13.style.backgroundColor == "black") {
        setTimeout(playCPU, 500)
    } else {
        document.getElementById("result").innerHTML = "It's your turn!" ;
    } ;
}    

function drawTwoCPU() {
    var c0 = document.getElementById("card0") ; 
    var c1 = document.getElementById("card1") ; 
    var c2 = document.getElementById("card2") ; 
    var c3 = document.getElementById("card3") ; 
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ;  
    var tc = document.getElementById("tableCard") ;
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
}

function drawFourCPU() {
    var c0 = document.getElementById("card0") ; 
    var c1 = document.getElementById("card1") ; 
    var c2 = document.getElementById("card2") ; 
    var c3 = document.getElementById("card3") ; 
    var c4 = document.getElementById("card4") ;  
    var c5 = document.getElementById("card5") ;  
    var c6 = document.getElementById("card6") ;  
    var c7 = document.getElementById("card7") ;  
    var c8 = document.getElementById("card8") ;  
    var c9 = document.getElementById("card9") ;  
    var c10 = document.getElementById("card10") ;  
    var c11 = document.getElementById("card11") ;  
    var c12 = document.getElementById("card12") ;  
    var c13 = document.getElementById("card13") ;  
    var tc = document.getElementById("tableCard") ;
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
    if (c0.innerHTML == "N") {
        c0.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c0) ;
    } else if (c1.innerHTML == "N") {
        c1.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c1) ;
    } else if (c2.innerHTML == "N") {
        c2.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c2) ;
    } else if (c3.innerHTML == "N") {
        c3.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c3) ;
    } else if (c4.innerHTML == "N") {
        c4.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c4) ;
    } else if (c5.innerHTML == "N") {
        c5.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c5) ;
    } else if (c6.innerHTML == "N") {
        c6.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c6) ;
    } else if (c7.innerHTML == "N") {
        c7.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c7) ;
    } else if (c8.innerHTML == "N") {
        c8.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c8) ;
    } else if (c9.innerHTML == "N") {
        c9.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c9) ;
    } else if (c10.innerHTML == "N") {
        c10.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c10) ;
    } else if (c11.innerHTML == "N") {
        c11.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c11) ;
    } else if (c12.innerHTML == "N") {
        c12.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c12) ;
    } else if (c13.innerHTML == "N") {
        c13.innerHTML = myCards[Math.floor(Math.random() * 15)] ;
        colorize(c13) ;
    } ; 
}



function showCards() {
    document.getElementById("card0").style.visibility = "visible" ;
    document.getElementById("card1").style.visibility = "visible" ;
    document.getElementById("card2").style.visibility = "visible" ;
    document.getElementById("card3").style.visibility = "visible" ;
    document.getElementById("card4").style.visibility = "visible" ;
    document.getElementById("card5").style.visibility = "visible" ;
    document.getElementById("card6").style.visibility = "visible" ;
    document.getElementById("card7").style.visibility = "visible" ;
    document.getElementById("card8").style.visibility = "visible" ;
    document.getElementById("card9").style.visibility = "visible" ;
    document.getElementById("card10").style.visibility = "visible" ;
    document.getElementById("card11").style.visibility = "visible" ;
    document.getElementById("card12").style.visibility = "visible" ;
    document.getElementById("card13").style.visibility = "visible" ;
}

function hideCards() {
    document.getElementById("card0").style.visibility = "hidden" ;
    document.getElementById("card1").style.visibility = "hidden" ;
    document.getElementById("card2").style.visibility = "hidden" ;
    document.getElementById("card3").style.visibility = "hidden" ;
    document.getElementById("card4").style.visibility = "hidden" ;
    document.getElementById("card5").style.visibility = "hidden" ;
    document.getElementById("card6").style.visibility = "hidden" ;
    document.getElementById("card7").style.visibility = "hidden" ;
    document.getElementById("card8").style.visibility = "hidden" ;
    document.getElementById("card9").style.visibility = "hidden" ;
    document.getElementById("card10").style.visibility = "hidden" ;
    document.getElementById("card11").style.visibility = "hidden" ;
    document.getElementById("card12").style.visibility = "hidden" ;
    document.getElementById("card13").style.visibility = "hidden" ;
}