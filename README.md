# Quiz Master
Try the [GitHub Pages Demo](https://oscarkannerstedt.github.io/Mi-fed23-js-grundkurs-gruppuppgift-clementinerna/).

## Authors
@armin-164
@jessworks
@Montadar0
@Fatimaazizassi
@oscarkannerstedt

## Index
1. Description
2. Tech stack
3. Screenshots
4. Validation reports
5. Lighthouse


## Description
Quiz Master is a game with the following structure.
- The game consists of 20 multiple-choice questions where only one answer is correct. 
- One round consists of ten questions with the option to play another round. 
- Both questions and multiple-choice answers are shuffled and only appear once, even if the game is played another round. 
- Press ‘start quiz’ button to start game. A stopwatch starts rolling and questions appear one at a time. 
- Answer a question and press the ‘submit answer’ button for the next question to appear. 
- A progress bar shows number of questions answered and a counter shows number of correct answers.  
- When the first round is done the stopwatch pauses, a ‘play again’ button and a pop-up appears. The pop-up shows the game-score and game-time. 
- When the ‘play again’ button is pressed the stopwatch is reset, and the game begins again using the remaining ten questions. 

## Tech stack
- Html & Css/Scss
- Javascript/Typescript
- Prettier & ESLint


## Screenshots
### Start screen, desktop
![Start screen, desktop](/src/assets/images/quiz-start-screen-dt.png "Start screen, desktop")

### Question, desktop
![Question, desktop](/src/assets/images/quiz-question-dt.png "Question, desktop")

### Game over, desktop
![Game over, desktop](/src/assets/images/quiz-game-over-dt.png "Game over, desktop")

### Question, tablet
![Question, tablet](/src/assets/images/quiz-question-tablet.png "Question, tablet")

### Question, tablet
![Question, mobile](/src/assets/images/quiz-question-mobile.png "Question, mobile")

## Validation reports
![Validation HTML](/validation/html%20validation.png "Validation HTML")

![Validation CSS](/validation/css%20validation.png "Validation CSS")

## Lighthouse
![Lighthouse report](/validation/lighthouse.png "Lighthouse report")




[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZejtqupA)
# Projektmall FED23D
Läs instruktionerna på kurswebben för att komma igång.

## Betyg
Klicka i vilka krav ni har gjort:

- [x] Exempel på utförd/ikryssad uppgift
- [ ] Ej utförd uppgift

### För Icke Godkänt
- [ ] Du har inte deltagit i arbetet och/eller gjort commits (det syns tydligt i Insights-fliken på ert repo)
- [ ] Du/ni har inte följt instruktionerna
- [ ] Du/ni uppvisar avsaknad av kunskaper i såväl HTML, CSS som JavaScript och du/ni har ignorerat semantik och tillgänglighet

### För Godkänt
#### Kodkvalitet
- [X] Koden är korrekt formaterad.
- [X] Koden innehåller enstaka buggar, men fungerar på det stora hela.
- [X] Ni har gjort åtminstone en mobilversion; om ni återanvänder samma layout i tablet/desktop så går det bra.
- [X] Sidan ska vara någorlunda snygg (CSS).
- [X] Ni har checkat av "vanliga misstag" från tidigare uppgifter, såväl HTML & CSS som JavaScript.
- [X] Sidan är tillgänglighetsgranskad.
- [X] Sidan är validerad.
- [X] Ni har gjort en Lighthouse-analys på live-sidan.

#### Funktionsbeskrivning
- [X] Skapa ett quiz med minst 20 frågor
- [X] Varje fråga ska ha 3 svarsalternativ och endast 1 svarsalternativ ska vara korrekt
- [X] Frågorna ska presenteras i slumpmässig ordning, och du ska visa 10 frågor per spelomgång
- [X] Om användaren väljer att spela igen, så ska inte samma 10 frågor komma upp på nytt
- [X] Du ska få poäng för rätt svar
- [X] Det ska bara visas en fråga åt gången på skärmen
- [X] Det ska finnas en tidräkning (uppåt). Tidräkningen ska stanna när alla frågor har besvarats.
- [X] Det ska visas en bekräftelseruta som visar hur många frågor spelaren svarade rätt på (av totalt antal frågor), och hur lång tid det tog.
- [X] Varje person ska ha gjort minst två pull requests.

### För plus i kanten
#### Kodkvalitet
- [X] Koden följer konventioner och praxis.
- [X] Projektets utförande är ambitiöst och väl genomarbetat. Ni har inte tagit på er för mycket, utan sett till att det ni har är genomarbetat.
- [X] Ni har tagit höjd för responsiv design (CSS) och CSS:en är välskriven.
- [X] Koden är korrekt formaterad med ESLint och Prettier.
- [X] Projektets kod är självdokumenterande. Där det är otydligt har du skrivit till kommentarer. Exempelvis heter variabler och funktioner på ett sådant sätt att det är tydligt vad de gör.
- [X] Ni har aktivt arbetat för att minska kodupprepning, men det är OK om det förekommer en del. Ibland kan kodupprepning t.ex. vara bra för att koden blir tydligare att läsa, så all upprepning är inte av ondo.
- [X] Ingen spaghettikod :spaghetti:
- [X] Anonyma funktioner används med omsorg.
- [X] Koden och projektet har en logisk struktur.
- [X] Ni har skrivit en ordentlig README (projektbeskrivning, skrämdumpar, deltagare i arbetet).

#### Funktionsbeskrivning
- [X] Det ska finnas en "progess bar" som visar hur många av frågorna som hittills har besvarats
- [ ] Flera svarsalternativ ska kunna vara korrekta
- [ ] Du får olika poäng beroende på hur snabbt du svarar på frågan (ni får komma på själva hur det ska funka, dokumentera i README:n)
- [ ] Du får minuspoäng om du svarar fel
- [ ] Du ska kunna välja vem du vill spela som, eller skapa en ny användare (förutsättningen här är att man använder samma webbläsare; använd local storage). Se exempelskiss nedan.
- [ ] Implementera ett highscore (max 10 platser) med hjälp av local storage
- [ ] Det ska finnas med en animation för rätt svar, och en animation för fel svar. Det kan t.ex. vara en stjärna som roterar, byter färg, eller en knapp som skakar. Vad ni gör spelar ingen roll, men ni ska implementera det med hjälp av GSAP.
- Välj ett av nedan:
  - [ ] Man ska kunna välja att spela mellan lätta, medelsvåra och svåra frågor. Planera hur detta påverkar highscoren.
  - [ ] Det ska vara som en julkalender: bakom varje lucka (24 st) så visas det X antal nya frågor per dag.
