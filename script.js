// ========== DATA STORAGE ==========

const topicsData = {
    elementary: [
        'My Favorite Hobby',
        'Why Reading is Important',
        'A Day at the Zoo',
        'My Best Friend',
        'How to Grow a Garden',
        'Dinosaurs Were Amazing',
        'The Ocean and its Creatures',
        'Why Exercise is Fun',
        'My Family\'s Traditions',
        'Animals I Would Like to Meet'
    ],
    middle: [
        'Social Media and Teen Life',
        'Environmental Conservation',
        'The Future of Technology',
        'Why Sports Builds Character',
        'Cyberbullying Prevention',
        'Time Management Tips',
        'Volunteering in Your Community',
        'Health and Nutrition',
        'Career Exploration',
        'Global Cultures and Traditions'
    ],
    high: [
        'Leadership in the Digital Age',
        'Climate Change Solutions',
        'Mental Health Awareness',
        'Education System Reform',
        'Social Justice Issues',
        'Entrepreneurship Opportunities',
        'Sustainable Living',
        'Career Development Strategies',
        'Global Citizenship',
        'Innovation and Technology'
    ],
    college: [
        'Artificial Intelligence and Ethics',
        'Global Economic Trends',
        'Higher Education Value',
        'Career Networking Success',
        'Social Responsibility',
        'Emerging Market Opportunities',
        'Work-Life Balance',
        'Innovation in Your Field',
        'Leadership Development',
        'Personal Branding'
    ],
    professional: [
        'Industry Disruption and Adaptation',
        'Executive Leadership',
        'Digital Transformation',
        'Organizational Culture',
        'Strategic Planning',
        'Risk Management',
        'Employee Engagement',
        'Market Analysis',
        'Innovation Strategy',
        'Future-Ready Organizations'
    ]
};

// Impromptu Questions for spontaneous speaking
const impromptuQuestionsData = {
    elementary: [
        'If you could have any superpower, what would it be and why?',
        'What is your favorite place in the world and why do you love it?',
        'If you could be any animal, which would you choose and why?',
        'What makes a good friend?',
        'If you could travel anywhere, where would you go?',
        'What is your favorite subject and why?',
        'If you could have lunch with anyone, who would it be?',
        'What does it mean to be brave?',
        'If you could invent something new, what would it be?',
        'What is something you are proud of?'
    ],
    middle: [
        'What does success mean to you?',
        'How do you handle failure or disappointment?',
        'What is the most important quality in a friend?',
        'How has technology changed your life?',
        'What is your biggest challenge and how do you overcome it?',
        'If you could change one thing about school, what would it be?',
        'What does it mean to be a good teammate?',
        'How do you stay motivated to achieve your goals?',
        'What is something you want to learn in the next year?',
        'How do you deal with peer pressure?'
    ],
    high: [
        'What does leadership mean to you?',
        'How do you balance school, work, and personal interests?',
        'What is your greatest strength and how do you use it?',
        'What challenges do you think young people face today?',
        'How do you define success in your own life?',
        'What values are most important to you and why?',
        'How do you handle disagreements with others?',
        'What is your dream career and why?',
        'How do you contribute to your community?',
        'What does it mean to have integrity?'
    ],
    college: [
        'What is the most significant lesson you have learned so far?',
        'How do you see yourself making a difference in the world?',
        'What is your biggest professional goal and how will you achieve it?',
        'How do you maintain work-life balance?',
        'What does ethical leadership look like to you?',
        'How do you handle failure or setbacks?',
        'What is the most important skill you have developed?',
        'How do you approach challenges in your career?',
        'What motivates you to excel?',
        'How do you build meaningful relationships in your professional life?'
    ],
    professional: [
        'What is your vision for the future of your industry?',
        'How do you foster innovation in your organization?',
        'What is the most valuable lesson you have learned in your career?',
        'How do you lead your team through change?',
        'What does corporate social responsibility mean to you?',
        'How do you maintain strategic focus amid competing priorities?',
        'What is your approach to decision-making?',
        'How do you develop your team members?',
        'What is the key to building a successful organization?',
        'How do you navigate disruption in your market?'
    ]
};

const speechOutlines = {
    persuasive: {
        structure: [
            {
                section: 'I. Introduction',
                points: [
                    'Hook: Start with a compelling story or statistic',
                    'Establish credibility: Show why you know about this topic',
                    'Present your thesis: State your main argument clearly'
                ]
            },
            {
                section: 'II. Body - Main Arguments',
                points: [
                    'Argument 1: Explain with supporting evidence',
                    'Argument 2: Build on the first argument',
                    'Argument 3: Strengthen your position with additional points',
                    'Address counterarguments: Show why alternatives are weaker'
                ]
            },
            {
                section: 'III. Evidence & Examples',
                points: [
                    'Use statistics and research findings',
                    'Include real-world examples or case studies',
                    'Provide expert testimonies or quotes',
                    'Connect evidence to your main arguments'
                ]
            },
            {
                section: 'IV. Conclusion',
                points: [
                    'Summarize your main points briefly',
                    'Restate your thesis powerfully',
                    'Call to action: Tell your audience what to do',
                    'End with a memorable statement or question'
                ]
            }
        ]
    },
    informative: {
        structure: [
            {
                section: 'I. Introduction',
                points: [
                    'Hook: Grab attention with an interesting fact or question',
                    'Preview your topic: Give an overview of what you\'ll cover',
                    'Establish relevance: Explain why the audience should care'
                ]
            },
            {
                section: 'II. Background Information',
                points: [
                    'Define key terms and concepts',
                    'Provide historical context if relevant',
                    'Explain the scope of your topic'
                ]
            },
            {
                section: 'III. Main Points (Organize by theme)',
                points: [
                    'Point 1: Present information with examples',
                    'Point 2: Build on previous information',
                    'Point 3: Add complexity and depth',
                    'Use visuals, charts, or demonstrations when helpful'
                ]
            },
            {
                section: 'IV. Analysis & Significance',
                points: [
                    'Explain the importance of this information',
                    'Show connections between points',
                    'Discuss current applications or implications'
                ]
            },
            {
                section: 'V. Conclusion',
                points: [
                    'Summarize the key information covered',
                    'Reinforce the relevance and importance',
                    'Suggest further resources or questions for exploration'
                ]
            }
        ]
    },
    storytelling: {
        structure: [
            {
                section: 'I. Introduction - Setting the Scene',
                points: [
                    'Establish time, place, and mood',
                    'Introduce your main character(s)',
                    'Create emotional connection with your audience'
                ]
            },
            {
                section: 'II. Exposition',
                points: [
                    'Provide necessary background information',
                    'Build context for the conflict',
                    'Develop character personalities and motivations'
                ]
            },
            {
                section: 'III. Rising Action',
                points: [
                    'Introduce obstacles or conflicts',
                    'Build tension gradually',
                    'Include vivid descriptions and dialogue',
                    'Keep your audience engaged and curious'
                ]
            },
            {
                section: 'IV. Climax',
                points: [
                    'Present the turning point of your story',
                    'Show the character\'s crucial decision or action',
                    'Maximum emotional impact'
                ]
            },
            {
                section: 'V. Resolution & Reflection',
                points: [
                    'Show the consequences of the climax',
                    'Tie up loose ends',
                    'Reflect on the lesson or meaning of the story',
                    'Connect to your audience\'s lives'
                ]
            }
        ]
    },
    motivational: {
        structure: [
            {
                section: 'I. Introduction - Hook with Inspiration',
                points: [
                    'Start with an inspiring quote or powerful statement',
                    'Share your personal connection to the topic',
                    'Make a bold promise about what they\'ll gain'
                ]
            },
            {
                section: 'II. Identify the Challenge',
                points: [
                    'Describe obstacles your audience faces',
                    'Show empathy and understanding',
                    'Validate their struggles and concerns'
                ]
            },
            {
                section: 'III. Share Your Story',
                points: [
                    'Tell how you overcame similar challenges',
                    'Be authentic and vulnerable',
                    'Include specific moments of difficulty and breakthrough',
                    'Show the journey, not just the destination'
                ]
            },
            {
                section: 'IV. Actionable Steps',
                points: [
                    'Provide practical strategies and tools',
                    'Explain why each step matters',
                    'Make steps clear and achievable',
                    'Use examples of successful implementation'
                ]
            },
            {
                section: 'V. Inspiring Call to Action',
                points: [
                    'Remind your audience of their potential',
                    'Challenge them to take the first step',
                    'Create accountability or support systems',
                    'End with an empowering and memorable message'
                ]
            }
        ]
    },
    impromptu: {
        structure: [
            {
                section: 'I. Opening (5-10 seconds)',
                points: [
                    'Thank the organizer/audience',
                    'Acknowledge the topic or question',
                    'Take a breath and smile'
                ]
            },
            {
                section: 'II. Thesis Statement (10-15 seconds)',
                points: [
                    'State your main idea clearly',
                    'Avoid rambling or "ums" and "ahs"',
                    'Be confident in your position'
                ]
            },
            {
                section: 'III. Supporting Points (30-45 seconds)',
                points: [
                    'Point 1: Give example or explanation',
                    'Point 2: Build on the first',
                    'Point 3: Strengthen your argument',
                    'Use personal anecdotes or observations'
                ]
            },
            {
                section: 'IV. Conclusion (10-15 seconds)',
                points: [
                    'Restate your thesis',
                    'Leave with memorable closing line',
                    'Thank the audience'
                ]
            }
        ]
    }
};

const quotesData = {
    'public-speaking': [
        { text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
        { text: 'Speak with purpose and your words will move mountains.', author: 'Unknown' },
        { text: 'A speech is poetry: cadence, rhythm, and imagery all work together.', author: 'Aristotle' },
        { text: 'The way your employees feel is exactly how your customers feel.', author: 'Sybil Evans' },
        { text: 'Talk low, talk slow, and don\'t say too much.', author: 'John Wayne' }
    ],
    'leadership': [
        { text: 'A leader is one who knows the way, goes the way, and shows the way.', author: 'John C. Maxwell' },
        { text: 'Leadership is not about being in charge. It\'s about taking care of those in your charge.', author: 'Simon Sinek' },
        { text: 'The greatest leader is not necessarily the one who does the greatest things.', author: 'Ronald Reagan' },
        { text: 'Leaders aren\'t born, they are made.', author: 'Vince Lombardi' },
        { text: 'Leadership is the capacity to translate vision into reality.', author: 'Warren Bennis' }
    ],
    'integrity': [
        { text: 'Integrity is choosing your thoughts and actions based on values rather than convenience.', author: 'Unknown' },
        { text: 'Real integrity is doing the right thing even when nobody\'s watching.', author: 'Unknown' },
        { text: 'The supreme quality for leadership is unquestionably integrity.', author: 'Dwight D. Eisenhower' },
        { text: 'Integrity is not a 90 percent thing, not a 95 percent thing; either you have it or you don\'t.', author: 'Peter Scotese' },
        { text: 'If you don\'t have integrity, you have nothing.', author: 'Henry Kravis' }
    ],
    'global-citizenship': [
        { text: 'We do not inherit the Earth from our ancestors; we borrow it from our children.', author: 'Native American Proverb' },
        { text: 'In the end, we will conserve only what we love, we will love only what we understand, and we will understand only what we are taught.', author: 'Baba Dioum' },
        { text: 'Every person has a role to play in building a better world.', author: 'Ban Ki-moon' },
        { text: 'Global citizenship is about understanding our shared humanity.', author: 'Unknown' },
        { text: 'The world is a book, and those who do not travel read only one page.', author: 'Saint Augustine' }
    ],
    'positivity': [
        { text: 'Keep your face always toward the sunshine, and shadows will fall behind you.', author: 'Walt Whitman' },
        { text: 'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.', author: 'Les Brown' },
        { text: 'Your attitude determines your altitude.', author: 'Zig Ziglar' },
        { text: 'Optimism is the faith that leads to achievement.', author: 'Helen Keller' },
        { text: 'The positive thinker sees the invisible, feels the intangible, and achieves the impossible.', author: 'Unknown' }
    ],
    'energy': [
        { text: 'Energy and persistence conquer all things.', author: 'Benjamin Franklin' },
        { text: 'Your energy introduces you before your mouth does.', author: 'Unknown' },
        { text: 'The world needs your energy and enthusiasm.', author: 'Unknown' },
        { text: 'Enthusiasm is the greatest asset you can possess.', author: 'Unknown' },
        { text: 'Bring enthusiasm to everything you do, and success will follow.', author: 'Unknown' }
    ],
    'confidence': [
        { text: 'Confidence is the first step to success.', author: 'Unknown' },
        { text: 'With confidence, you have won before you have started.', author: 'Marcus Garvey' },
        { text: 'No one can make you feel inferior without your consent.', author: 'Eleanor Roosevelt' },
        { text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
        { text: 'Self-confidence is the first requisite to great undertakings.', author: 'Samuel Johnson' }
    ],
    'entrepreneurship': [
        { text: 'The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.', author: 'Peter Drucker' },
        { text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
        { text: 'Success is walking from failure to failure with no loss of enthusiasm.', author: 'Winston Churchill' },
        { text: 'Innovation distinguishes between a leader and a follower.', author: 'Steve Jobs' },
        { text: 'Your business is not about your product. It\'s about your people.', author: 'Unknown' }
    ],
    'teamwork': [
        { text: 'Alone we can do so little; together we can do so much.', author: 'Helen Keller' },
        { text: 'Teamwork makes the dream work.', author: 'John C. Maxwell' },
        { text: 'The way your employees feel is exactly how your customers feel.', author: 'Sybil Evans' },
        { text: 'Great teams don\'t just happen; they\'re built.', author: 'Unknown' },
        { text: 'If you want to go fast, go alone. If you want to go far, go together.', author: 'African Proverb' }
    ],
    'growth': [
        { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { text: 'Growth happens outside your comfort zone.', author: 'Unknown' },
        { text: 'Your potential is endless. Your excuses are optional.', author: 'Unknown' },
        { text: 'We do not rise to the level of our goals; we fall to the level of our systems.', author: 'James Clear' },
        { text: 'Success is the sum of small efforts repeated day in and day out.', author: 'Robert Collier' }
    ],
    'courage': [
        { text: 'Courage is not the absence of fear, but rather the assessment that something else is more important than fear.', author: 'Franklin D. Roosevelt' },
        { text: 'Only the brave deserve the fair.', author: 'John Paul Jones' },
        { text: 'You gain strength, courage, and confidence by every experience in which you stop to look fear in the face.', author: 'Eleanor Roosevelt' },
        { text: 'Courage is the most important of all the virtues.', author: 'Maya Angelou' },
        { text: 'Be courageous. Challenge orthodoxy. Stand up for what you believe in.', author: 'Amal Clooney' }
    ],
    'gratitude': [
        { text: 'Gratitude turns what we have into enough.', author: 'Melody Beattie' },
        { text: 'The greatest wealth is health.', author: 'Unknown' },
        { text: 'Appreciating what you have is the first step to abundance.', author: 'Unknown' },
        { text: 'Gratitude is a powerful catalyst for happiness.', author: 'Amy Morin' },
        { text: 'When you are grateful, fear disappears and abundance appears.', author: 'Tony Robbins' }
    ],
    'discipline': [
        { text: 'Discipline is choosing between what you want now and what you want most.', author: 'Abraham Lincoln' },
        { text: 'The only discipline that lasts is self-discipline.', author: 'Unknown' },
        { text: 'Discipline is the bridge between goals and accomplishment.', author: 'Jim Rohn' },
        { text: 'Success is nothing more than a few simple disciplines practiced every day.', author: 'Jim Rohn' },
        { text: 'With great discipline comes great success.', author: 'Unknown' }
    ],
    'creativity': [
        { text: 'Creativity takes courage.', author: 'Henri Matisse' },
        { text: 'The chief enemy of creativity is good sense.', author: 'Pablo Picasso' },
        { text: 'You can\'t use up creativity. The more you use, the more you have.', author: 'Maya Angelou' },
        { text: 'Every artist was first an amateur.', author: 'Ralph Waldo Emerson' },
        { text: 'Creativity is intelligence having fun.', author: 'Albert Einstein' }
    ],
    'resilience': [
        { text: 'The master has failed more times than the beginner has even tried.', author: 'Stephen McCranie' },
        { text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.', author: 'Thomas Edison' },
        { text: 'Resilience is accepting your new reality, even if it\'s less good than the one you expected.', author: 'Elizabeth Edwards' },
        { text: 'Fall seven times, stand up eight.', author: 'Japanese Proverb' },
        { text: 'The comeback is always stronger than the setback.', author: 'Unknown' }
    ],
    'youth': [
        { text: 'Youth is not a time of life; it is a state of mind.', author: 'Unknown' },
        { text: 'Young people have the power to make the future they want to see.', author: 'Malala Yousafzai' },
        { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
        { text: 'Your voice matters. Your ideas matter. You matter.', author: 'Unknown' },
        { text: 'Young leaders will change the world.', author: 'Unknown' }
    ]
};

const jokesData = [
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'I told my computer I needed a break, and now it won\'t stop sending me Kit-Kat ads.',
    'Why don\'t scientists trust atoms? Because they make up everything!',
    'What do you call a fake noodle? An impasta!',
    'Why did the math book look so sad? Because it had too many problems!',
    'I\'m reading a book about anti-gravity. It\'s impossible to put down!',
    'Why don\'t eggs tell jokes? They\'d crack each other up!',
    'What\'s the best thing about Switzerland? I don\'t know, but their flag is a big plus.',
    'Why did the coffee file a police report? It got mugged!',
    'I tried to catch fog yesterday. Mist!',
    'What do you call a bear with no teeth? A gummy bear!',
    'Why don\'t skeletons fight each other? They don\'t have the guts!',
    'What do you call cheese that isn\'t yours? Nacho cheese!',
    'Why did the student do multiplication problems on the floor? The teacher told them not to use tables!',
    'What did one ocean say to the other ocean? Nothing, they just waved.',
    'Why don\'t cars ever get tired? Because they have plenty of horsepower!',
    'What do you call a sleeping bull? A bulldozer!',
    'Why was the equal sign so humble? Because it knew it wasn\'t less than or greater than anyone else!',
    'What do you call a pig that does karate? A pork chop!',
    'Why did the invisible man turn down the job? He couldn\'t see himself doing it!',
    'What did the ocean say to the beach? Nothing, it just waved.',
    'Why don\'t scientists ever play cards in the jungle? Too many cheetahs!',
    'What\'s orange and sounds like a parrot? A carrot!',
    'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    'What do you call an alligator in a vest? An investigator!',
    'Why do bees have sticky hair? Because they use honeycombs!',
    'What do you call a fish wearing a bowtie? Sofishticated!',
    'Why did the crayon go to school? It wanted to be a little brighter!',
    'What do you call a dinosaur that is a noisy sleeper? A bronchosaurus!',
    'Why don\'t oysters share their pearls? Because they\'re shellfish!'
];

// ========== UTILITY FUNCTIONS ==========

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function clearOutput(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = '<div class="output-content empty">Select options and click the button to generate content</div>';
}

function showLoading(elementId) {
    document.getElementById(elementId).innerHTML = '<div class="output-content"><div class="loading"></div> Generating...</div>';
}

// ========== TOPIC/IMPROMPTU QUESTIONS GENERATOR ==========

function generateTopics() {
    const ageGroup = document.getElementById('ageGroup').value;
    const output = document.getElementById('topicsOutput');

    if (!ageGroup) {
        output.innerHTML = '<div class="info-message">Please select an age group first!</div>';
        return;
    }

    showLoading('topicsOutput');

    setTimeout(() => {
        const topics = topicsData[ageGroup];
        let html = '<div class="success-message">✓ Topics generated successfully!</div>';
        html += '<div class="output-structure">';

        topics.forEach((topic, index) => {
            html += `<div class="output-item">
                <div class="output-item-title">${index + 1}. ${topic}</div>
            </div>`;
        });

        html += '</div>';
        html += '<button class="btn-copy" onclick="copyTopicsToClipboard()">📋 Copy All Topics</button>';

        output.innerHTML = html;
    }, 500);
}

function copyTopicsToClipboard() {
    const ageGroup = document.getElementById('ageGroup').value;
    const topics = topicsData[ageGroup];
    const text = topics.join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Topics copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy topics');
    });
}

// ========== IMPROMPTU QUESTIONS GENERATOR ==========

function generateImmpromtuQuestions() {
    const ageGroup = document.getElementById('ageGroup').value;
    const output = document.getElementById('topicsOutput');

    if (!ageGroup) {
        output.innerHTML = '<div class="info-message">Please select an age group first!</div>';
        return;
    }

    showLoading('topicsOutput');

    setTimeout(() => {
        const questions = impromptuQuestionsData[ageGroup];
        let html = '<div class="success-message">✓ Impromptu questions generated successfully!</div>';
        html += '<div class="output-structure">';

        questions.forEach((question, index) => {
            html += `<div class="output-item">
                <div class="output-item-title">${index + 1}. ${question}</div>
            </div>`;
        });

        html += '</div>';
        html += '<button class="btn-copy" onclick="copyImpromtuQuestionsToClipboard()">📋 Copy All Questions</button>';
        html += '<button class="btn btn-primary" style="margin-left: 0.5rem;" onclick="getRandomImpromptuQuestion()">🎲 Get Random Question</button>';

        output.innerHTML = html;
    }, 500);
}

function copyImpromtuQuestionsToClipboard() {
    const ageGroup = document.getElementById('ageGroup').value;
    const questions = impromptuQuestionsData[ageGroup];
    const text = questions.join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Questions copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy questions');
    });
}

function getRandomImpromptuQuestion() {
    const ageGroup = document.getElementById('ageGroup').value;
    
    if (!ageGroup) {
        alert('Please select an age group first!');
        return;
    }

    const questions = impromptuQuestionsData[ageGroup];
    const randomQuestion = getRandomItem(questions);
    const output = document.getElementById('topicsOutput');
    
    let html = '<div class="success-message">✓ Random impromptu question generated!</div>';
    html += `<div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 2rem; border-radius: 10px; text-align: center; margin-bottom: 1rem;">
        <div style="font-size: 1.3rem; font-weight: 600; line-height: 1.8;">"${randomQuestion}"</div>
    </div>`;
    html += '<button class="btn-copy" onclick="copyRandomQuestionToClipboard()">📋 Copy Question</button>';
    html += '<button class="btn btn-primary" style="margin-left: 0.5rem;" onclick="getRandomImpromptuQuestion()">🎲 Get Another</button>';
    html += '<button class="btn btn-secondary" style="margin-left: 0.5rem;" onclick="generateImmpromtuQuestions()">📋 View All</button>';

    output.innerHTML = html;
}

function copyRandomQuestionToClipboard() {
    const ageGroup = document.getElementById('ageGroup').value;
    const questions = impromptuQuestionsData[ageGroup];
    const randomQuestion = getRandomItem(questions);
    
    navigator.clipboard.writeText(randomQuestion).then(() => {
        alert('Question copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy question');
    });
}

// ========== OUTLINE GENERATOR ==========

function generateOutline() {
    const speechTitle = document.getElementById('speechTitle').value;
    const speechType = document.getElementById('speechType').value;
    const output = document.getElementById('outlineOutput');

    if (!speechTitle || !speechType) {
        output.innerHTML = '<div class="info-message">Please enter a speech title and select a speech type!</div>';
        return;
    }

    showLoading('outlineOutput');

    setTimeout(() => {
        const outline = speechOutlines[speechType];
        let html = `<div class="success-message">✓ Outline for "${speechTitle}" generated successfully!</div>`;
        html += '<div class="outline-structure">';

        outline.structure.forEach((section) => {
            html += `
                <div class="outline-section">
                    <div class="outline-section-title">${section.section}</div>
                    <ul class="outline-points">
            `;
            section.points.forEach((point) => {
                html += `<li>• ${point}</li>`;
            });
            html += `
                    </ul>
                </div>
            `;
        });

        html += '</div>';
        html += '<button class="btn-copy" onclick="copyOutlineToClipboard()">📋 Copy Outline</button>';

        output.innerHTML = html;
    }, 500);
}

function copyOutlineToClipboard() {
    const speechTitle = document.getElementById('speechTitle').value;
    const speechType = document.getElementById('speechType').value;
    const outline = speechOutlines[speechType];

    let text = `Speech Title: ${speechTitle}\nSpeech Type: ${speechType}\n\n`;
    
    outline.structure.forEach((section) => {
        text += `${section.section}\n`;
        section.points.forEach((point) => {
            text += `  • ${point}\n`;
        });
        text += '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
        alert('Outline copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy outline');
    });
}

// ========== QUOTE GENERATOR ==========

function generateQuote() {
    const quoteTopic = document.getElementById('quoteTopic').value;
    const output = document.getElementById('quoteOutput');

    if (!quoteTopic) {
        output.innerHTML = '<div class="info-message">Please select a quote topic first!</div>';
        return;
    }

    showLoading('quoteOutput');

    setTimeout(() => {
        const quote = getRandomItem(quotesData[quoteTopic]);
        let html = `
            <div class="success-message">✓ Quote generated!</div>
            <div class="quote-box">
                <div class="quote-text">"${quote.text}"</div>
                <div class="quote-author">— ${quote.author}</div>
            </div>
        `;
        html += '<button class="btn-copy" onclick="copyQuoteToClipboard()">📋 Copy Quote</button>';
        html += '<button class="btn btn-primary" style="margin-top: 0.5rem; margin-left: 0.5rem;" onclick="generateQuote()">Get Another Quote</button>';

        output.innerHTML = html;
    }, 500);
}

function copyQuoteToClipboard() {
    const quoteTopic = document.getElementById('quoteTopic').value;
    const quote = getRandomItem(quotesData[quoteTopic]);
    const text = `"${quote.text}" — ${quote.author}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy quote');
    });
}

// ========== JOKE GENERATOR ==========

function generateJoke() {
    const output = document.getElementById('jokeOutput');

    showLoading('jokeOutput');

    setTimeout(() => {
        const joke = getRandomItem(jokesData);
        let html = `
            <div class="success-message">✓ Joke generated!</div>
            <div class="joke-box">
                <div class="joke-content">${joke}</div>
            </div>
        `;
        html += '<button class="btn-copy" onclick="copyJokeToClipboard()">📋 Copy Joke</button>';
        html += '<button class="btn btn-primary" style="margin-top: 0.5rem; margin-left: 0.5rem;" onclick="generateJoke()">Get Another Joke</button>';

        output.innerHTML = html;
    }, 500);
}

function copyJokeToClipboard() {
    const joke = getRandomItem(jokesData);

    navigator.clipboard.writeText(joke).then(() => {
        alert('Joke copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy joke');
    });
}

// ========== NAVIGATION ==========

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Initialize outputs
    clearOutput('topicsOutput');
    clearOutput('outlineOutput');
    clearOutput('quoteOutput');
    clearOutput('jokeOutput');

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
