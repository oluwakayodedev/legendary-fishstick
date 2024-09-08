const numberWords = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
let sectionCount = 2;

document
  .getElementById("addSectionButton")
  .addEventListener("click", function () {
    if (sectionCount > numberWords.length) {
      // disable button if limit reached
      document.getElementById("addSectionButton").disabled = true;
      return;
    }
    const sectionsContainer = document.querySelector(".sections");
    const newSection = document.createElement("div");
    newSection.className = "section";

    const sectionNumber = numberWords[sectionCount - 1];
    // 
    newSection.innerHTML = `
        <details>
            <summary>Section ${sectionNumber}:</summary>
            <label for="sectionTitle">Section Title:</label>
            <input type="text" id="sectionTitle" name="sectionTitle">
            
            <div class="editor-toolbar">
                <button type="button" class="boldBtn"><img src="./assets/images/bold.svg" alt="Bold"></button>
                <button type="button" class="italicBtn"><img src="./assets/images/italic.svg" alt="Italic" class="italic"></button>
                <button type="button" class="quoteBtn"><img src="./assets/images/quote.svg" alt="Quote"></button>
                <button><img src="./assets/images/image.svg" alt="Add Image" class="pic"></button>
            </div>                            
            
            <textarea class="sectionContent" placeholder="Write your content here..."></textarea>
        </details>
    `;

    sectionsContainer.appendChild(newSection);
    sectionCount++;
  });

  document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const headerImage = "https://example.com/image.jpg"; // placeholder image URL

    const sections = document.querySelectorAll('.section');
    const content = [];

    sections.forEach((section, index) => {
        const sectionTitle = section.querySelector('input[name="sectionTitle"]').value;
        const sectionContent = section.querySelector('.sectionContent').value;

        // section, title and content to content array
        content.push({
            type: "heading",
            level: 2,
            text: sectionTitle,
            id: `section-${index + 1}`
        });
        content.push({
            type: "text",
            content: sectionContent
        });
    });

    // build JSON data
    const blogData = {
        title: title,
        description: description,
        headerImage: headerImage,
        sidebarLinks: content.filter(item => item.type === 'heading').map(heading => ({
            href: `#${heading.id}`,
            text: heading.text
        })),
        content: content
    };

    console.log(blogData);
});

// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('boldBtn')) {
//         const contentArea = event.target.closest('.section').querySelector('.sectionContent');
//         contentArea.value += '**bold text**'; // Simple Markdown formatting example
//     }
//     if (event.target.classList.contains('italicBtn')) {
//         const contentArea = event.target.closest('.section').querySelector('.sectionContent');
//         contentArea.value += '*italic text*'; // Simple Markdown formatting example
//     }
//     if (event.target.classList.contains('quoteBtn')) {
//         const contentArea = event.target.closest('.section').querySelector('.sectionContent');
//         contentArea.value += '> quote text'; // Simple Markdown formatting example
//     }
// });
