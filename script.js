
const cases = {

    clock: {
        number: "CASE Nº 001",
        title: "Der letzte Glockenschlag",

        intro: "Ein wertvolles Diamantarmband ist aus dem Arbeitszimmer von Lord Ashford verschwunden. Das Zimmer war abgeschlossen. Drei Personen waren im Haus. Wer steckt dahinter?",

        story: `
            <p><strong>DER VORFALL</strong></p>
            <p>Am Dienstagabend lud Lord Ashford zu einem kleinen Empfang in sein Londoner Stadthaus ein.</p>
            <p>Um 22:00 Uhr zeigte er seinen Gästen ein wertvolles Diamantarmband. Eine Stunde später war es verschwunden.</p>
            <p>Die Polizei stellte fest: Das Fenster war von innen verschlossen. Die Tür wurde um 22:30 Uhr abgeschlossen.</p>
            <p><strong>Die drei Verdächtigen:</strong></p>
            <p>🎩 Mr. Black – der Geschäftspartner</p>
            <p>🌹 Miss Rose – die Nichte</p>
            <p>🧤 Mr. Grey – der Butler</p>
            <p>Alle behaupten, zur entscheidenden Zeit woanders gewesen zu sein.</p>
        `,

        clues: [
            {
                name: "🕰️ Die Standuhr",
                detail: "Die Standuhr im Arbeitszimmer blieb um 22:15 Uhr stehen. Der Uhrmacher bestätigt: Sie wurde nicht beschädigt. Jemand hat sie absichtlich angehalten."
            },
            {
                name: "☕ Die Teetasse",
                detail: "Auf dem Schreibtisch steht eine noch warme Teetasse. Auf dem Unterteller steht mit Bleistift: 10:30."
            },
            {
                name: "👞 Die Fussabdrücke",
                detail: "Vor dem Schreibtisch befinden sich Fussabdrücke. Sie stammen von Schuhen mit einer kleinen Sternenverzierung an der Sohle."
            },
            {
                name: "📜 Das Gästebuch",
                detail: "Miss Rose schrieb um 22:20 Uhr: «Ich war die ganze Zeit im Wintergarten.»"
            }
        ],

        puzzle: `
            <h3>🧩 Rätsel 1: Wer war im Zimmer?</h3>
            <p>Du findest heraus, dass nur eine Person Schuhe mit einer kleinen Sternenverzierung besitzt.</p>
            <p>Mr. Black trägt normale Lederschuhe. Mr. Grey trägt Stiefel mit einer glatten Sohle. Miss Rose trägt Schuhe mit kleinen Sternen.</p>
            <p>Wer war vor dem Schreibtisch?</p>
            <div id="answer-options"></div>
        `,

        answers: ["rose"],
        solution: "Miss Rose war im Arbeitszimmer. Ihre Schuhe passen zu den Fussabdrücken. Die angehaltene Uhr sollte den Zeitpunkt des Vorfalls verschleiern. Die übrigen Hinweise zeigen, dass ihre Geschichte nicht stimmt.",
        culprit: "Miss Rose",

        options: ["Mr. Black", "Miss Rose", "Mr. Grey"]
    },


    letter: {
        number: "CASE Nº 002",
        title: "Der Brief ohne Absender",

        intro: "Ein geheimnisvoller Brief landet auf dem Schreibtisch eines berühmten Londoner Detektivs. Darin steht eine verschlüsselte Nachricht. Ein neues Verbrechen scheint angekündigt zu sein.",

        story: `
            <p><strong>DER VORFALL</strong></p>
            <p>Am frühen Morgen erhält die Zeitungsredaktion einen Brief ohne Absender.</p>
            <p>Der Brief enthält nur eine Nachricht:</p>
            <p><em>«Trefft mich dort, wo die Zeit niemals schläft. Wenn die Glocke dreimal schlägt, ist es zu spät.»</em></p>
            <p>Darunter steht eine Zahlenfolge: <strong>2 – 1 – 14 – 11</strong></p>
            <p>Die Polizei vermutet, dass ein wertvolles Dokument gestohlen werden soll.</p>
            <p>Es gibt drei mögliche Orte: den Bahnhof, die Bibliothek und den Park.</p>
        `,

        clues: [
            {
                name: "✉️ Der Brief",
                detail: "Die Zahlenfolge lautet 2 – 1 – 14 – 11. Jede Zahl steht für einen Buchstaben im Alphabet."
            },
            {
                name: "📰 Die Zeitung",
                detail: "In der heutigen Zeitung steht: «Die grosse Bahnhofsuhr wurde gestern repariert.»"
            },
            {
                name: "🔔 Die Notiz",
                detail: "Auf einer zweiten Notiz steht: «Dort, wo die Züge kommen und gehen.»"
            },
            {
                name: "🖋️ Die Handschrift",
                detail: "Der Brief wurde mit einer alten Schreibmaschine geschrieben. Der Buchstabe E ist leicht beschädigt."
            }
        ],

        puzzle: `
            <h3>🧩 Rätsel 2: Entschlüssle die Botschaft</h3>
            <p>A = 1, B = 2, C = 3 und so weiter.</p>
            <p>Entschlüssle diese Zahlenfolge:</p>
            <h2 style="letter-spacing:12px;color:#e3c98f;">2 – 1 – 14 – 11</h2>
            <p>Welches Wort entsteht?</p>
            <input class="puzzle-input" id="text-answer" placeholder="Deine Lösung ...">
            <button class="puzzle-button" onclick="checkTextAnswer('bank')">NACHRICHT ENTSCHLÜSSELN</button>
            <div class="puzzle-feedback" id="feedback"></div>
        `,

        answers: ["bank"],
        solution: "2 = B, 1 = A, 14 = N und 11 = K. Das Wort lautet BANK. Der Hinweis auf die Züge und die Bahnhofsuhr führt zum Bahnhof. Der Brief sollte die Ermittler dorthin locken.",
        culprit: "Der Absender des Briefes bleibt zunächst geheim.",

        options: ["Park", "Bank", "Haus"]
    },


    museum: {
        number: "CASE Nº 003",
        title: "Das Geheimnis im Museum",

        intro: "Ein berühmtes Gemälde verschwindet während einer Abendveranstaltung. Drei Personen geben unterschiedliche Aussagen ab. Eine davon kann nicht stimmen.",

        story: `
            <p><strong>DER VORFALL</strong></p>
            <p>Im Londoner Museum wird das berühmte Gemälde «Die goldene Stunde» vermisst.</p>
            <p>Das Bild verschwand zwischen 18:30 und 19:00 Uhr.</p>
            <p>Die drei Personen im Gebäude sagen Folgendes:</p>
            <p>🎨 Miss Green: «Ich war im Atelier und habe gemalt.»</p>
            <p>📚 Mr. Brown: «Ich war in der Bibliothek und habe gelesen.»</p>
            <p>🎩 Lady White: «Ich war im Garten und habe telefoniert.»</p>
            <p>Die Museumsuhr zeigt, dass um 18:45 Uhr ein Stromausfall stattfand.</p>
        `,

        clues: [
            {
                name: "🔦 Die Taschenlampe",
                detail: "Eine Taschenlampe wurde im Atelier gefunden. Sie war eingeschaltet, obwohl Miss Green behauptet, die ganze Zeit gemalt zu haben."
            },
            {
                name: "📖 Das Bibliotheksbuch",
                detail: "Mr. Brown hat ein Buch ausgeliehen. Der Stempel zeigt eindeutig: 18:20 Uhr."
            },
            {
                name: "🌧️ Der Garten",
                detail: "Um 18:40 Uhr begann es zu regnen. Auf dem Boden vor der Gartentür sind keine frischen Fussabdrücke zu sehen."
            },
            {
                name: "🖼️ Der Bilderrahmen",
                detail: "Der Rahmen des verschwundenen Bildes wurde vorsichtig abgenommen. Es gibt keine Hinweise auf einen Kampf oder eine Beschädigung."
            }
        ],

        puzzle: `
            <h3>🧩 Rätsel 3: Wer lügt?</h3>
            <p>Der Stromausfall begann um 18:45 Uhr. Im Atelier gibt es keine Fenster und nur eine Deckenlampe. Die Taschenlampe wurde dort gefunden.</p>
            <p>Wer hat die unglaubwürdigste Aussage gemacht?</p>
            <div id="answer-options"></div>
        `,

        answers: ["green"],
        solution: "Miss Green ist die Person mit der unglaubwürdigsten Aussage. Sie behauptet, gemalt zu haben, obwohl das Atelier während des Stromausfalls völlig dunkel war und die Taschenlampe dort benutzt wurde. Die Hinweise machen sie verdächtig – auch wenn weitere Ermittlungen nötig wären, um den Diebstahl endgültig zu beweisen.",
        culprit: "Miss Green",

        options: ["Miss Green", "Mr. Brown", "Lady White"]
    }

};

let currentCase = null;
let foundClues = new Set();
let solvedCases = new Set();
let points = 0;

const modal = document.getElementById("caseModal");
const notebook = document.getElementById("notebook");


function openCase(id) {

    currentCase = id;
    foundClues = new Set();

    const data = cases[id];

    document.getElementById("modal-number").textContent = data.number;
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-intro").textContent = data.intro;
    document.getElementById("story").innerHTML = data.story;
    document.getElementById("puzzle").innerHTML = data.puzzle;

    document.getElementById("result").innerHTML = "";

    const clueArea = document.getElementById("clues");
    clueArea.innerHTML = "";

    data.clues.forEach((clue, index) => {

        const wrapper = document.createElement("div");

        const button = document.createElement("button");
        button.className = "clue-button";
        button.textContent = clue.name;

        const detail = document.createElement("div");
        detail.className = "clue-detail";
        detail.textContent = clue.detail;

        button.addEventListener("click", () => {

            detail.classList.toggle("visible");

            if (!foundClues.has(index)) {

                foundClues.add(index);
                button.classList.add("found");

                addNotebookEntry(data.number + ": " + clue.name);

                showToast("🔎 Hinweis entdeckt! +5 Punkte");
                addPoints(5);
            }

        });

        wrapper.appendChild(button);
        wrapper.appendChild(detail);
        clueArea.appendChild(wrapper);

    });

    if (data.options) {
        createOptions(data.options);
    }

    modal.classList.add("show");
    document.body.style.overflow = "hidden";

}


function closeCase() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}


function createOptions(options) {

    const area = document.getElementById("answer-options");

    if (!area) return;

    area.innerHTML = "";

    options.forEach((option, index) => {

        const button = document.createElement("button");
        button.className = "clue-button";
        button.textContent = option;

        button.onclick = () => checkOption(index);

        area.appendChild(button);

    });

}


function checkOption(index) {

    const data = cases[currentCase];

    if (solvedCases.has(currentCase)) {
        showToast("Diesen Fall hast du bereits gelöst!");
        return;
    }

    const selected = data.options[index].toLowerCase();

    const correct = data.answers.includes(selected);

    if (correct) {
        solveCase();
    } else {
        showToast("Das ist noch nicht ganz richtig. Untersuche die Hinweise!");
    }

}


function checkTextAnswer(correctAnswer) {

    if (solvedCases.has(currentCase)) {
        showToast("Diesen Fall hast du bereits gelöst!");
        return;
    }

    const input = document.getElementById("text-answer");
    const feedback = document.getElementById("feedback");

    const answer = input.value.trim().toLowerCase();

    if (answer === correctAnswer) {
        feedback.textContent = "✓ Richtig! Du hast die Nachricht entschlüsselt.";
        solveCase();
    } else {
        feedback.textContent = "Das stimmt noch nicht. Denke an das Alphabet!";
    }

}


function solveCase() {

    const data = cases[currentCase];

    if (solvedCases.has(currentCase)) return;

    solvedCases.add(currentCase);

    addPoints(30);

    document.getElementById("result").innerHTML = `
        <div class="result-box">
            <h3>🏆 FALL GELÖST!</h3>
            <p>${data.solution}</p>
            <p><strong>Deine Ermittlungsleistung:</strong> Du hast den Fall erfolgreich abgeschlossen!</p>
            <p>⭐ Du erhältst 30 zusätzliche Detektiv-Punkte.</p>
        </div>
    `;

    addNotebookEntry("🏆 " + data.number + " erfolgreich gelöst");

    showToast("🏆 Fall gelöst! +30 Punkte");

}


function addPoints(amount) {

    points += amount;

    document.getElementById("points").textContent = points;

}


function addNotebookEntry(text) {

    if (notebook.querySelector(".empty-note")) {
        notebook.innerHTML = "";
    }

    const entry = document.createElement("div");
    entry.className = "notebook-entry";
    entry.textContent = "✦ " + text;

    notebook.appendChild(entry);

}


function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);

}


function openSecret() {

    const message = document.getElementById("secret-message");

    message.textContent = "Pssst ... Manche Geheimnisse öffnen sich nur um Mitternacht. 🗝️";

    showToast("Du hast eine geheime Nachricht gefunden!");

}


function footerSecret() {

    showToast("Ein guter Detektiv schaut auch ganz unten nach ... 🕵️");

}


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeCase();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeCase();
    }

});
