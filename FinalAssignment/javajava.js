//submit form

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const formMessage = document.createElement("p");
    formMessage.style.color = "green";
    formMessage.style.fontWeight = "bold";
    form.appendChild(formMessage);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        formMessage.textContent = "Thank you for your wise words my friend -- We shall be in touch.";
        form.reset();
    });
});

//voting table thing

document.addEventListener('DOMContentLoaded', function() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        const previewBtn = card.querySelector('.preview-btn');
        const voteBtn = card.querySelector('.vote-btn');
        const votesSpan = card.querySelector('.votes span');
        
        previewBtn.addEventListener('click', () => {
            const description = card.getAttribute('data-description');
            alert(description);
        });

        voteBtn.addEventListener('click', () => {
            let votes = parseInt(votesSpan.textContent);
            votes++;
            votesSpan.textContent = votes;
            card.style.transform = 'scale(1.1)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
});