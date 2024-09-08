document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blog-form');
    
    // new sidebar link
    document.getElementById('add-link').addEventListener('click', function () {
        const container = document.getElementById('sidebar-links-container');
        const newLink = document.createElement('div');
        newLink.className = 'sidebar-link';
        newLink.innerHTML = `
            <input type="url" class="sidebar-link-href" placeholder="Link URL" required>
            <input type="text" class="sidebar-link-text" placeholder="Link Text" required>
            <button type="button" class="remove-link">Remove</button>
        `;
        container.appendChild(newLink);

        // remove link functionality
        newLink.querySelector('.remove-link').addEventListener('click', function () {
            container.removeChild(newLink);
        });
    });

    // new content section
    document.getElementById('add-section').addEventListener('click', function () {
        const container = document.getElementById('content-sections-container');
        const newSection = document.createElement('div');
        newSection.className = 'content-section';
        newSection.innerHTML = `
            <select class="content-type" required>
                <option value="">Select Type</option>
                <option value="heading">Heading</option>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="quote">Quote</option>
            </select>
            <input type="text" class="content-text" placeholder="Text" required>
            <input type="text" class="content-id" placeholder="ID (for headings)">
            <input type="url" class="content-src" placeholder="Image URL">
            <input type="text" class="content-alt" placeholder="Image Alt Text">
            <input type="text" class="quote-author" placeholder="Quote Author">
            <button type="button" class="remove-section">Remove</button>
        `;
        container.appendChild(newSection);

        // remove section functionality
        newSection.querySelector('.remove-section').addEventListener('click', function () {
            container.removeChild(newSection);
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // sidebar links
        const sidebarLinks = Array.from(document.querySelectorAll('.sidebar-link')).map(link => ({
            href: link.querySelector('.sidebar-link-href').value,
            text: link.querySelector('.sidebar-link-text').value
        }));

        // content sections
        const contentSections = Array.from(document.querySelectorAll('.content-section')).map(section => {
            const type = section.querySelector('.content-type').value;
            const text = section.querySelector('.content-text').value;
            const id = section.querySelector('.content-id').value;
            const src = section.querySelector('.content-src').value;
            const alt = section.querySelector('.content-alt').value;
            const author = section.querySelector('.quote-author').value;

            return { type, text, id, src, alt, author };
        });

        // build JSON object
        const blogData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            headerImage: document.getElementById('headerImage').value,
            sidebarLinks,
            content: contentSections
        };

        // log to console
        console.log('Blog Data:', JSON.stringify(blogData, null, 2));
    });
});


// Send JSON to the server
// fetch('/api-endpoint', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(blogData)
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Success:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });
