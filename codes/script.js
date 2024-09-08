document.addEventListener('DOMContentLoaded', function() {
    // sample data
    const blogData = {
        title: "How to run a successful business with your partner (and stay together)",
        description: "Starting a business with your spouse or significant other is an exciting but delicate process...",
        headerImage: "https://images.unsplash.com/photo-1517456045241-3501321fa12d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sidebarLinks: [
            { href: "#introduction", text: "Introduction" },
            { href: "#choosing-structure", text: "Choosing the best structure" }
        ],
        content: [
            {
                type: "heading",
                level: 2,
                text: "Introduction",
                id: "introduction" // ID for smooth scrolling
            },
            {
                type: "text",
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1514415008039-efa173293080?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Content Image"
            },
            {
                type: "heading",
                level: 2,
                text: "Choosing the Best Structure",
                id: "choosing-structure" // ID for smooth scrolling
            },
            {
                type: "text",
                content: "Laborum unde dolores reiciendis quidem. Laborum accusamus sequi assumenda nam suscipit modi at! Rem repudiandae consequuntur, eaque ducimus nam reiciendis quo facilis, modi assumenda nisi error numquam voluptas quos cum!"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1557946853-2538933cbfc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Another Content Image"
            },
            {
                type: "quote",
                text: "“The success of a business partnership is largely determined by how well the partners communicate and work together. Trust and respect are key.”",
                author: "Expert Name"
            }
        ]
    };

    // Inject header content
    document.getElementById('blog-title').textContent = blogData.title;
    document.getElementById('blog-description').textContent = blogData.description;
    document.getElementById('header-image').src = blogData.headerImage;

    // Inject sidebar links
    const sidebarLinks = document.getElementById('sidebar-links');
    blogData.sidebarLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;

        const icon = document.createElement('img');
        icon.src = './assets/images/arrow.svg';
        icon.alt = 'Icon';
        icon.className = 'icon';

        li.appendChild(a);
        li.appendChild(icon);
        sidebarLinks.appendChild(li);
    });

    // Inject content
    const contentContainer = document.getElementById('content-container');
    blogData.content.forEach(item => {
        if (item.type === 'heading') {
            const heading = document.createElement(`h${item.level}`);
            heading.textContent = item.text;
            heading.id = item.id; // ID for smooth scrolling
            contentContainer.appendChild(heading);
        } else if (item.type === 'text') {
            const p = document.createElement('p');
            p.textContent = item.content;
            contentContainer.appendChild(p);
        } else if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            contentContainer.appendChild(img);
        } else if (item.type === 'quote') {
            const blockquote = document.createElement('blockquote');
            const p = document.createElement('p');
            p.textContent = item.text;
            const span = document.createElement('span');
            span.textContent = `— ${item.author}`;
            p.appendChild(span);
            blockquote.appendChild(p);
            contentContainer.appendChild(blockquote);
        }
    });
});
