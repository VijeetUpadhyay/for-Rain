// Select the initial buttons and elements
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Function to load the second page content
function loadSecondPage() {
    const wrapper = document.querySelector(".wrapper");

    // Clear the existing content and replace with new content
    wrapper.innerHTML = `
        <h2 class="question">We've been seeing eachother for quite a while, and I really care about you and like you a lot. I'm sorry if things has been moving slow but I wannna finally ask you, can I be your man?</h2>
        <img class="gif" alt="funny gif" src="https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif" />
        <div class="btn-group">
            <button class="yes-btn">Yes</button>
            <button class="no-btn">No</button>
        </div>
    `;

    // Attach event listeners to the new buttons
    const newYesBtn = document.querySelector(".yes-btn");
    const newNoBtn = document.querySelector(".no-btn");

    // Yes button click leads to the final page
    newYesBtn.addEventListener("click", loadThirdPage);

    // No button hover event for the second page
    newNoBtn.addEventListener("mouseover", () => {
        moveButtonRandomly(newNoBtn);
    });
}

// Function to load the third (final) page content
function loadThirdPage() {
    const wrapper = document.querySelector(".wrapper");

    // Replace the content with the final page
    wrapper.innerHTML = `
        <h2 class="question">Lesgooooooo! 🎉</h2>
        <img class="gif" alt="celebration gif" src="https://media.giphy.com/media/nOFnRcbOk56i1VTlyA/giphy.gif" />
    `;
}

// Function to move the button randomly within the wrapper
function moveButtonRandomly(button) {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    const maxX = wrapperRect.width - btnRect.width;
    const maxY = wrapperRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// First page Yes button click event - loads second page
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I've got something important to ask 😨";
    gif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";

    // Delay before loading the second page
    setTimeout(() => {
        loadSecondPage();
    }, 2000); // 2 seconds delay for effect
});

// First page No button hover event
noBtn.addEventListener("mouseover", () => {
    moveButtonRandomly(noBtn);
});


