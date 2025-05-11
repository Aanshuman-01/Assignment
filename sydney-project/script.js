 const eventsSection = document.getElementById('event-list');
        const emailModal = document.getElementById('emailModal');
        const emailModalBackdrop = document.getElementById('emailModalBackdrop');
        const newsletterButton = document.getElementById('newsletter-button');
        const submitEmailButton = document.getElementById('submitEmailButton');
        const cancelEmailButton = document.getElementById('cancelEmailButton');
        const emailInput = document.getElementById('emailInput');
        const emailError = document.getElementById('emailError');
        const newsletterSignup = document.getElementById('newsletter-signup');


        let eventsData = [
            {
                title: "Sydney City-Angelica Mesiti: The Rites of When",
                date: "Sun 11 May '25",
                description: "Immersive installation exploring rituals, seasons, and community through video and sound.",
                imageUrl: "https://assets.atdw-online.com.au/images/74d83fc8640c40e2cdc6e50f64c94ab9.jpeg?rect=380%2C0%2C1800%2C1350&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY0MjBkODg5MDEyY2Y4Zjc3ZjE3NmRjOSIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/events/angelica-mesiti-the-rites-when",
            },
            {
                title: "Sydney City",
                date: "Sun 11 May '25-Wed 31 Dec '25",
                description: "Illuminate Sydney-Interactive celebrity party with lights, music, and Sydney-inspired projections.",
                imageUrl: "https://assets.atdw-online.com.au/images/2d9d8e2f8fb6fc9f8c26edefb5d6c1c7.jpeg?rect=0%2C0%2C1600%2C1200&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY2MWNkZmQzNGFmY2ViYmYzNTVlZWRjNiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1536&h=864&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/events/illuminate-sydney",
            },
             {
                title: "MJ the Musical",
                date: "Sun 11 May '25-Sun 03 Aug '25",
                description: "Musical celebrating legendary artistry and creativity, now playing in Sydney.",
                imageUrl: "https://assets.atdw-online.com.au/images/e22c2f67f2846310a24e4b1df34922e0.jpeg?rect=221%2C0%2C3557%2C2668&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY1NmQ2NDNlZWJkNTkzNjcwODlhMzMzMSIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-city/pyrmont/events/mj-the-musical",
            },
            {
                title: "Carnival Carnage 7D Experience",
                date: "Sun 11 May '25-Wed 31 Dec '25",
                description: "Thrilling motion simulator with lasers, creepy clowns, and chaotic adventure.",
                imageUrl:"https://assets.atdw-online.com.au/images/eeb231f18d0b123e2e0f415701e8dc80.jpeg?rect=0%2C0%2C1600%2C1200&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY2MjA3ZTZhODI4YjJjMmU2N2Q0YTk2ZSIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/events/carnival-carnage-7d-experience",
            },
            {
                title: " Persian Film Festival Australia|Sydney",
                date: "24 April-11 May 2025",
                description: "Bold films, powerful stories, screenings and Q&As across Australia.",
                imageUrl: "https://assets.atdw-online.com.au/images/44d9c0db487b28442d2f7b0aa8a50f4a.jpeg?rect=0%2C0%2C1600%2C1200&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY3ZWIyZDcyOGZhMzQyNDU0YTk3NmEyZSIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-east/moore-park/events/persian-film-festival-australia-sydney",
            },
            {
                title: "Sydney Comedy Festival",
                date: "Sun 11May'25-Sun 18May'25",
                description: "Massive annual comedy festival featuring diverse performances across multiple venues.",
                imageUrl: "https://assets.atdw-online.com.au/images/cf8b30a84375e1d0906e750ef615efcd.jpeg?rect=0%2C0%2C1600%2C1200&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY2OGRmODdlYTJmMWU5NTAxMmUyOTcwOCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/inner-sydney/marrickville/events/sydney-comedy-festival-0",
            },
            {
                title: "Drag Bingo and Trivia Bottomless Brunch",
                date: "Sun 11 May '25-Sat 20 Dec '25",
                description: "Drag Queens take over Manly bridge for a fabulous Bingo Brunch.",
                imageUrl: "https://assets.atdw-online.com.au/images/c0a1945c5751c92887a659c3a67b6670.jpeg?rect=0%2C0%2C6667%2C5000&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY0YjllMTEwNTMwMjMzM2UzMTEzYWQzMiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-north/manly/events/drag-bingo-and-trivia-bottomless-brunch",
            },  
            {
                title: "Round 11 - Wests Tigers v South Sydney Rabbitohs",
                date: "Sun 18 May'25",
                description: "Tigers face Rabbitohs in thrilling Sunday night footy clash.",
                imageUrl: "https://assets.atdw-online.com.au/images/52de42d36e6a9c00478b232c24817817.jpeg?rect=142%2C0%2C2276%2C1707&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY4MGMzNmI1YzhlNDNmZTk1YWJkNGQxZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-west/campbelltown/events/round-11-wests-tigers-v-south-sydney-rabbitohs",
            },
            {
                title: "International Mining and Resources Conference",
                date: "Tue 21Oct'25-Thu 23Oct'25",
                description: "Major mining conference unites global leaders for collaboration and networking.",
                imageUrl: "https://assets.atdw-online.com.au/images/fb0c4fd117809b5b1c14e10500b6ffa7.jpeg?rect=122%2C0%2C2243%2C1682&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjY3ZGFmY2I1YmMxM2IxNmMyYmNhZTM2YiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=900&fm=jpg",
                websiteUrl: "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/events/international-mining-and-resources-conference",
            },
        ];

        function displayEvents() {
            eventsSection.innerHTML = '';
            eventsData.forEach((event) => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';

                const eventContent = document.createElement('div');
                eventContent.className = 'event-content';

                const titleElement = document.createElement('h2');
                titleElement.textContent = event.title;

                const dateElement = document.createElement('p');
                dateElement.textContent = `Date: ${event.date}`;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = event.description;

                const imageElement = document.createElement('img');
                imageElement.src = event.imageUrl;
                imageElement.alt = event.title;

                eventContent.appendChild(titleElement);
                eventContent.appendChild(dateElement);
                eventContent.appendChild(descriptionElement);
                eventContent.appendChild(imageElement);

                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'button-container';
                const getTicketsButton = document.createElement('button');
                getTicketsButton.textContent = 'Get Tickets';
                getTicketsButton.addEventListener('click', () => {
                    // Open the email modal when the button is clicked
                    document.body.classList.add('modal-open');
                    emailModal.style.display = 'block';
                    emailModalBackdrop.style.display = 'block';
                    // Store the event URL for later redirection
                    sessionStorage.setItem('eventUrl', event.websiteUrl);
                });
                buttonContainer.appendChild(getTicketsButton);

                eventCard.appendChild(eventContent);
                eventCard.appendChild(buttonContainer);
                eventsSection.appendChild(eventCard);
            });
        }

        newsletterButton.addEventListener('click', () => {
            document.body.classList.add('modal-open');
            emailModal.style.display = 'block';
            emailModalBackdrop.style.display = 'block';
            sessionStorage.setItem('eventUrl', 'https://www.sydney.com/events');
        });

        cancelEmailButton.addEventListener('click', () => {
            document.body.classList.remove('modal-open');
            emailModal.style.display = 'none';
            emailModalBackdrop.style.display = 'none';
            emailInput.value = ''; // Clear the input field
            emailError.style.display = 'none'; // Hide any error message
        });

        submitEmailButton.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (!isValidEmail(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                return;
            }

            emailError.style.display = 'none'; // Hide error message on successful validation
            // In a real application, you would send this email to your server
            console.log('Email submitted:', email);

            // Redirect the user to the event website
            const eventUrl = sessionStorage.getItem('eventUrl');
            if (eventUrl) {
                window.location.href = eventUrl;
            } else {
                window.location.href = 'https://www.sydney.com/';
            }

            document.body.classList.remove('modal-open');
            emailModal.style.display = 'none';
            emailModalBackdrop.style.display = 'none';
            emailInput.value = ''; // Clear the input
            sessionStorage.removeItem('eventUrl');
        });

        function isValidEmail(email) {
        const parts = email.split('@');
        if (parts.length !== 2)
             return false;
         
        const domain = parts[1];
        return domain.includes('.') && domain.indexOf('.') !== 0 && domain.indexOf('.') !== domain.length - 1;
        }
        
        // Initial display of events
        displayEvents();