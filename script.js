// script.js (Updated - Cursor Changes Per Object + Individual Descriptions)
console.log("script.js loaded (custom cursor code)");

// Get custom cursor element and its parts
const cursorCharacter = document.getElementById("cursor-character");
const cursorImg = cursorCharacter ? cursorCharacter.querySelector("img") : null;
const speechBubble = cursorCharacter ? cursorCharacter.querySelector(".speech-bubble") : null;

// Default values using your provided URLs
const defaultCursorImage = "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/Remove%20background%20project.png?v=1743135884633";
const defaultSpeech = "Welcome. What are you hoping to find?";

// Set initial default values
if (cursorImg) cursorImg.src = defaultCursorImage;
if (speechBubble) speechBubble.textContent = defaultSpeech;

// When hovering over the guide (cursor character), set the system cursor to the guide's image
if (cursorCharacter && speechBubble) {
  cursorCharacter.addEventListener("mouseenter", () => {
    // Specify hotspot coordinates (e.g., 16 16) after the URL
    document.body.style.cursor = `url('${defaultCursorImage}') 16 16, auto`;
    speechBubble.textContent = "You’ve become the guide.";
  });
  cursorCharacter.addEventListener("mouseleave", () => {
    document.body.style.cursor = `url('${defaultCursorImage}') 16 16, auto`;
    speechBubble.textContent = defaultSpeech;
  });
}

// Array of custom cursor images for each object (using your provided URLs)
const objectCursors = [
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/Tactical%20Knife%20%26%20Night%20Vision%20Device--cursor--SweezyCursors.png?v=1744120642408",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/cute-cursors-pixel-heart-cursor.png?v=1744120826828",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/cute-cursors-pixel-heart-cursor.png?v=1744120826828",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/cute-cursors-pixel-heart-cursor.png?v=1744120826828",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/Turquoise%20Futuristic%20Arrow%203D--cursor--SweezyCursors.png?v=1744120505470",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/fire%20extinguisher%20cursor.png?v=1744120735333",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/scared%20cursor.png?v=1744120510937",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/bored%20cursor.png?v=1744120515342",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/cursoji-smiling-and-relieved-face-cursor-pack.png?v=1745694106974",
  "https://cdn.glitch.global/8f3c7e5e-b0a6-453f-87c1-c2255e286c8a/cursoji-face-with-rolling-eyes-and-unamused-face-cursor-pack.png?v=1745702376099"
];

// Unique speech text per object
const objectTexts = [
  "Engarde!!",
  "Nice necklace.",
  "Ooo those look really pretty!",
  "What a nice necklace! I wish I had one.",
  "Ooo, how futuristic!",
  "Woah, woah, woah! Don't bring me too close! I may have a fire extinguisher, but that doesn't mean I want to get burned.",
  "Ugh that thing creeps me out!",
  "Ugh! Boring!!",
  "Aww it's soo cute and fluffy",
  "Ugh, older brothers are soo annoying"
];

// Update custom cursor and system cursor when hovering over object cards
const objectCards = document.querySelectorAll(".object-card");
objectCards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    const newCursor = objectCursors[index] || defaultCursorImage;
    // Update the system cursor with hotspot coordinates
    document.body.style.cursor = `url('${newCursor}') 16 16, auto`;
    // Also update the custom cursor image
    if (cursorImg) {
      cursorImg.src = newCursor;
    }
    // Update the speech bubble text for this object
    if (speechBubble) {
      speechBubble.textContent = objectTexts[index] || "What secrets do you hold?";
    }
  });
  card.addEventListener("mouseleave", () => {
    // Revert system cursor and custom cursor to default with hotspot coordinates
    document.body.style.cursor = `url('${defaultCursorImage}') 16 16, auto`;
    if (cursorImg) {
      cursorImg.src = defaultCursorImage;
    }
    if (speechBubble) {
      speechBubble.textContent = defaultSpeech;
    }
  });
  card.addEventListener("click", () => {
    if (speechBubble) {
      speechBubble.textContent = `You opened Object ${index + 1}.`;
    }
  });
});


// Sorting logic (placeholders)
function sortObjectCards(compareFn, showAll = true) {
  const container = document.getElementById("object-grid");
  const cards = Array.from(container.querySelectorAll(".object-card"));

  // Show or hide all based on type filter (if needed)
  cards.forEach((card) => {
    if (showAll) {
      card.style.display = "flex";
    }
  });

  // Sort and re-append to DOM
  cards.sort(compareFn);
  cards.forEach((card) => container.appendChild(card));
}

window.sortByImagined = () => {
  const container = document.getElementById("object-grid");
  const cards = Array.from(container.querySelectorAll(".object-card"));

  cards.forEach((card) => {
    if (card.dataset.type === "imagined") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
};

window.sortByReal = () => {
  const container = document.getElementById("object-grid");
  const cards = Array.from(container.querySelectorAll(".object-card"));

  cards.forEach((card) => {
    if (card.dataset.type === "real") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
};

window.sortByName = () => {
  sortObjectCards((a, b) => {
    const nameA = a.dataset.name?.toLowerCase() || "";
    const nameB = b.dataset.name?.toLowerCase() || "";
    return nameA.localeCompare(nameB);
  });
};

window.sortByArchiveID = () => {
  sortObjectCards((a, b) => {
    const idA = a.dataset.id || "";
    const idB = b.dataset.id || "";
    return idA.localeCompare(idB);
  });
};
document.querySelectorAll('.popup-img-container img').forEach(img => {
  img.addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('lightbox-img').src = this.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

document.getElementById('lightbox').addEventListener('click', function () {
  this.style.display = 'none';
});


document.querySelectorAll('.archive-tag-img').forEach(img => {
  img.addEventListener('click', function (e) {
    e.stopPropagation(); // so you can click the tag without closing popup
    const tagId = this.getAttribute('data-archive');
    const infoDiv = document.getElementById('archive-info-' + tagId);
    const popupInner = document.getElementById('archive-popup-inner');
    if (infoDiv) {
      popupInner.innerHTML = infoDiv.innerHTML;
    } else {
      popupInner.innerHTML = '<p>No archive info found.</p>';
    }
    document.getElementById('archive-popup-modal').style.display = 'flex';
  });
});

document.getElementById('archive-popup-close').addEventListener('click', function () {
  document.getElementById('archive-popup-modal').style.display = 'none';
});
document.getElementById('archive-popup-modal').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

