export type Event = {
	num: string;
	title: string;
	shortDescription: string;
	description: string;
	date: `${string}/${string}/${string}`;
	location: string;
	thumbnail: string;
	images: {
		src: string;
		alt: string;
	}[];
};

export const events: Event[] = [
	{
		num: '01',
		title: 'Consume OpenAI API with Deno',
		shortDescription:
			'This event primarily focused on Deno and the utilization of OpenAI models. The keynote speaker for the evening was Mr. Dimitri Casier, who effectively explained the fundamentals of Deno and the extensive AI models accessible through their REST API.',
		description:
			'This event primarily focused on Deno and the utilization of OpenAI models. The keynote speaker for the evening was Mr. Dimitri Casier, who effectively explained the fundamentals of Deno and the extensive AI models accessible through their REST API.<br><br>He started the talk with an overview of Deno and Prompt Engineering. In order to use AI as best as possible, you need to write extremely good prompts. This is really important, since the AI interprets sentences differently than humans. So part of using AI is getting better at writing prompts. By testing different structures in sentences and using different words, you can adapt your prompts for optimal use of the AI. This is called “Prompt Engineering”.<br>The next topic he talked about was Deno, a novel JavaScript runtime designed to address inherent issues in Node.js, created by Ryan Dahl. He highlighted that Deno operates on the server side and is written in Rust, a language considerably faster than C++, the language of Node.js. Deno not only seamlessly supports TypeScript out of the box but also guaranties security, offers a lot of default methods, support for top-level awaits in files, and more. Deno also provides a CLI to run files and projects securely. Things like testing and writing to files, are all included by Deno out of the box.<br>Another significant aspect discussed was the exploration of GPT behind the scenes. Demonstrating how to use GPT models via code and the Deno environment, Mr. Casier illustrated examples showcasing the practical applications of these models. From basic scenarios, such as simulating a model behaving like a future explorer conversing with a specific character, to more advanced applications, such as transforming hand-drawn ER diagrams into functional database code for projects. This showed us all the limitless possibilities of using AI models to create groundbreaking applications with real-world utility.<br><br>I personally enjoyed this talk a lot—it was interesting and fun to follow. It gave me plenty to think about and inspired me to create my own application using the new knowledge I gained. I want to thank Mr. Casier for the engaging and enjoyable talk. He made it really fun to listen to.',
		date: '2023/12/19',
		location: 'Howest campus Bruges',
		thumbnail: '/assets/events/01/cover.webp',
		images: [
			{
				src: '/assets/events/01/cover.webp',
				alt: 'Cover Deno vs Node.js',
			},
			{
				src: '/assets/events/01/image1.webp',
				alt: 'OpenAI',
			},
			{
				src: '/assets/events/01/image2.png',
				alt: 'Photo of Dimitri Casier presenting',
			},
		],
	},
	{
		num: '02',
		title: 'Lille invades Kortrijk: Kestra and Apache Pulsar',
		shortDescription:
			'The event, organized by BeJUG, brought together two remarkable speakers from Lille: Julien Jakubowski enthusiastically introduced Apache Pulsar, while Loïc Mathieu, although speaking a bit fast, provided an interesting insight into Kestra. Despite the challenges, the event offered valuable insights and inspiration, encouraging participants to explore new technologies within the Java and software engineering community.',
		description:
			"This event was organized by BeJUG, the Belgian Java User Group, and brought together two remarkable speakers, both hailing from Lille, who aimed to immerse us in two fascinating topics. The first speaker was Julien Jakubowski, who delved into the world of Apache Pulsar, an emerging streaming platform for event-driven applications. Julien managed to deliver his story clearly, outlining the principles of Apache Pulsar and enthusiastically answering audience questions. He frequently compared it to existing tools like Kafka and RabbitMQ, highlighting their pros and cons and discussing various ways to utilize the tool. His enthusiasm motivated the audience to give the tool a try. Personally, I found this topic very interesting.<br><br>Following this engaging presentation, it was Loïc Mathieu's turn to tell us more about Kestra, an open-source orchestrator for event-driven applications. Unfortunately, Loïc spoke a bit too quickly and struggled to fully engage the audience. His talk mainly consisted of verbal explanations, with little visual support such as slides or examples. Eventually, he moved on to a demo, which did provide a bit more insight into the story of Kestra. Despite the somewhat less polished presentation, I found the concept of Kestra intriguing!<br><br>The combination of engaging presentations, with Julien inspiring us and Loïc providing insight into an intriguing concept despite the challenges, made the event definitely worthwhile. Thanks to BeJUG and all involved for organizing this successful gathering, which not only informed participants but also inspired and motivated them to explore new technologies and concepts in the world of Java and software engineering.",
		date: '2024/02/26',
		location: 'Sweet Mustard',
		thumbnail: '/assets/events/02/cover.webp',
		images: [
			{
				src: '/assets/events/02/cover.webp',
				alt: 'Image 1',
			},
			{
				src: '/assets/events/02/image.jpeg',
				alt: 'Image 2',
			},
			{
				src: '/assets/events/02/image1.webp',
				alt: 'Image 3',
			},
			{
				src: '/assets/events/02/image2.webp',
				alt: 'Image 4',
			},
			{
				src: '/assets/events/02/image3.webp',
				alt: 'Image 5',
			},
		],
	},
	{
		num: '03',
		title: 'Het had waar kunnen zijn',
		shortDescription:
			'In this event, Tim Verheyden spoke about the connection between AI and fake news, shedding light on the challenges faced by journalists in countering misinformation and offering valuable insights into the evolving landscape of news media in the digital age.',
		description:
			"This interesting event, hosted by our local organization OC Marke and coordinated by the Voordrachtenreeks working group, featured Tim Verheyden as the keynote speaker. Drawing from his extensive experience as a journalist with VTM and as a reporter for renowned programs such as Pano and Canvas at VRT NWS, Verheyden delved into the connection between artificial intelligence (AI) and the spread of fake news.<br><br>Verheyden provided a comprehensive overview of AI and its impact on information. He explained how AI tools like ChatGPT and DALL-E can be used to create fake images, voices, and stories that mix truth with lies. By talking about recent events such as the 2016 US presidential elections, the global COVID-19 pandemic, and the ongoing conflict in Ukraine, Verheyden showed how fake news plays a big role in shaping what people think and in political strategies.<br><br>During his talk, Verheyden explained how fake news is made and spread. He talked about the difference between fake news that's made on purpose and fake news that's just wrong by mistake. He also talked about the difficulties that journalists face when they try to stop fake news from spreading.<br><br>Verheyden's way of talking and asking questions kept the audience interested and made them think hard about what they heard. Even though I already knew quite a bit about AI and fake news, hearing Verheyden talk about how they're connected from a news reporter's perspective was really interesting. It added a new layer to what I already knew and made the whole presentation really engaging. Overall, the event was a good way to learn about how technology, truth, and trust come together in today's world.",
		date: '2024/03/19',
		location: 'OC Marke, Kortrijk',
		thumbnail: '/assets/events/03/cover.webp',
		images: [
			{
				src: '/assets/events/03/cover.webp',
				alt: 'Fact vs Fake News',
			},
			{
				src: '/assets/events/03/image1.jpg',
				alt: 'Photo of powerpoint presentation',
			},
			{
				src: '/assets/events/03/image2.jpg',
				alt: 'Photo of powerpoint presentation',
			},
			{
				src: '/assets/events/03/image3.jpg',
				alt: 'Picture of Tim Verheyden',
			},
		],
	},
	{
		num: '04',
		title: 'Backup and disaster recovery',
		shortDescription:
			'An event centered around data recovery, backups, and Veeam, featuring a talk by Nico Losschaert, an expert in these fields. Following his enlightening discussions on data recovery, backups, and business infrastructure, Nico provided insights into his company, Orbit, offering attendees a glimpse into his daily routine as a data expert.',
		description:
			"This event was all about data recovery and backups. After explaining all concepts, the focus shifted to the tool Veeam, which is used to make restoring and backing up data easier. The talk was given by Nico Losschaert, who is an expert in data recovery, infrastructure, and using Veeam. Not only is he an expert in this field, he is part of the top 100 Veeam Legends in the world.<br><br>The talk itself was very interesting in my opinion. He had some interactions with the audience and took his time to explain everything in such a way that even the less technical people could understand.<br><br>After explaining the main concepts of data recovery, backups, and business infrastructure, Nico provided further insights into the company he works for: Orbit. This was particularly interesting as it provided attendees with a better understanding of Nico's daily routine and the experiences of a data expert.",
		date: '2024/04/29',
		location: 'Howest campus Bruges',
		thumbnail: '/assets/events/04/cover.jpg',
		images: [
			{
				src: '/assets/events/04/cover.jpg',
				alt: 'Cover',
			},
			{
				src: '/assets/events/04/image1.jpg',
				alt: 'Photo of Nico Losschaert presenting',
			},
		],
	},
	{
		num: '05',
		title: 'DAH24 Hackathon',
		shortDescription:
			'This event, organized by Howest, was a hackathon focused on Blockchain and AI, where 12 groups had 24 hours to learn and create applications. Despite being new to blockchain, my group researched and implemented it with the help of organizers. We chose to focus on the sex industry, seeing blockchain as an ideal fit for its anonymity and tracking capabilities. Despite its unconventional nature, our idea had merit. The hackathon was well-organized with food provided, and it was a valuable learning experience. I stayed awake the entire time to maximize learning and application development. Thanks to Howest for the opportunity, and I look forward to future events.',
		description:
			'This really fun event was organized by Howest. The event was a hackathon all about Blockchain and AI. The main goal was to build something with blockchain and AI as a base. With 12 groups in total, we all had 24 hours not only to learn as much as possible about Blockchain and AI but also to deliver a working application or system that uses this knowledge.<br><br>		For my group, blockchain was an undiscovered subject. So the first thing we did was research about blockchain and how to implement it in a real application. With the help of Berd, one of the main organizers of the hackathon, we started by making a really simple implementation of a blockchain system. After getting a little familiar with the technologies Remix, Solidity, and Metamask, we instantly started brainstorming ideas for our application. It rapidly became clear that we wanted to focus on the subject: the sex industry.<br>With the main concepts of blockchain in mind, this seemed like a perfect case to implement blockchain. The advantages of using a blockchain as a base for your application are, for example, that your data can be stored anonymously, decentralized, and immutable. Every change made to the data in a blockchain will be trackable because a block of data will be copied before updating. This results in a trackable data source. All of these main concepts, together with how to implement them, were new for me and really interesting.<br>Now, the topic we chose may sound weird, but if you think about it, it’s really not a bad idea. If you want to see more of our idea and what we actually created, you can view our presentation here.<br>The hackathon was pretty fun in my opinion. A lot of people from Applied Informatics were there, so not only was it really fun to see them again, but the event was also really well organized. Food and drinks were provided throughout the whole 24 hours.<br>In conclusion, I found the event to be an amazing experience. I learned a lot in those 24 hours. I learned the basics of blockchain and how to implement it, and I also pushed my limits in terms of sleep. Because in those 24 hours, I didn’t sleep at all to get the full experience and as much time as possible to learn and create the application.<br>Thanks to Howest for organizing this amazing event! I hope to see you at other hackathons as well!',
		date: '2024/04/20',
		location: 'Howest campus Bruges',
		thumbnail: '/assets/events/05/cover.png',
		images: [
			{
				src: '/assets/events/05/cover.png',
				alt: 'Cover',
			},
			{
				src: '/assets/events/05/image1.jpg',
				alt: 'Photo of our team',
			},
			{
				src: '/assets/events/05/image2.jpg',
				alt: 'Photo of a team presenting',
			},
		],
	},
	{
		num: '06',
		title: 'The Flutter-Belgium Meetup',
		shortDescription:
			'This event, organized by Flutter Belgium at Howest Bruges, was a fantastic opportunity to network and learn about Flutter & Dart. It began with refreshments and networking, followed by insightful lightning talks. Thijs Pirmez discussed his project on an AI-powered app for a pet food company, solving a critical delivery issue. Enzo Conty then highlighted techniques for improving app accessibility for users with disabilities. The evening concluded with more networking. Overall, it was an educational and enjoyable event, and I look forward to attending future Flutter meetups.',
		description:
			'This event was organized by Flutter Belgium, a group in Belgium for anyone interested in building apps with Flutter & Dart. The event took place at Howest Bruges, where we received a warm welcome from the whole community. It started off with some time to drink and eat some fries, which was nice because I got to network with many people who share the same interests.<br><br>Then, around 18:30, we all gathered in the conference room, where a few lightning talks were given by Flutter developers. Following these, Thijs Pirmez, a developer who works for Howest, gave a talk about a recent project he completed. He developed an app for a company that delivers animal food. The problem he had to solve was that the truck driver needed to deliver the food to the correct customer and connect the tube of the food to the correct pipe to fill the right container. If the driver made a mistake, it could cause food poisoning. Thijs was tasked with solving this problem by creating an app using Flutter and a bit of AI. He explained how he did this, which was very interesting and brought a lot of ideas and motivation for creating my own apps with Flutter.<br><br>Next up was a small break with some drinks. This was followed by a talk from Enzo Conty about "Accessibility First," where he discussed various techniques for solving accessibility issues. He first informed us about different forms of disabilities that can affect the user experience of an app or website. After a brief explanation of how these issues can impact users, he went over each disability he mentioned and provided solutions for addressing these problems. This talk was especially interesting to me because I rarely think about accessibility in my apps or websites. It\'s definitely something I will try to incorporate in my future projects, and now I know how to do that. Overall, it was a really good talk.<br><br>Finishing the talks with some more networking was really nice. I had the opportunity to talk with more experienced app developers.<br><br>Overall, it was a really fun event where I both learned a lot and made many new connections. I would definitely attend another Flutter event!',
		date: '2024/05/15',
		location: 'Howest campus Bruges',
		thumbnail: '/assets/events/06/cover.webp',
		images: [
			{
				src: '/assets/events/06/cover.webp',
				alt: 'Cover',
			},
			{
				src: '/assets/events/06/image1.png',
				alt: 'Photo of Thijs Pirmez presenting',
			},
			{
				src: '/assets/events/06/image2.jpg',
				alt: 'Flutter Belgium powerpoint presentation',
			},
			{
				src: '/assets/events/06/image3.jpg',
				alt: 'Selfie with Jean Baptiste and Jari Valentine',
			},
		],
	},
	{
		num: '07',
		title: 'Talk at Athena Heule',
		shortDescription:
			'Prince and I presented our Applied Informatics program to the Crossmedia class at Athena Heule. We covered Software Engineering and ICT & Blockchain Consultancy, followed by a hands-on workshop on "Vue.js." The students were engaged and excited to learn about web frameworks. We concluded with a demo of our projects and received positive feedback. Looking forward to doing it again next year!',
		description:
			'This event was organized by me, in collaboration with the lecturers of Athena. Together with my friend and classmate, Prince, we presented our study program in Applied Informatics. I provided a detailed overview of the Software Engineering major, which I am currently pursuing. Prince, on the other hand, focused on ICT & Blockchain Consultancy. The talk was given to the Crossmedia class, which consists of 40 students who all know the basics of HTML, CSS, and JavaScript, making them an ideal audience for our presentation.<br><br>We began our talk by introducing ourselves to the class, offering insight into who we are and what we do. As a former student of Athena Heule, I was already familiar with the teachers and the course content. We then informed the students about the courses they could take at Howest, both in Bruges and Kortrijk. We explained the structure of our program, detailing what they would learn over the three years.<br><br>Following our presentation on Applied Informatics, we conducted a workshop. Since the students were already familiar with basic web development, we introduced them to web frameworks. We started with a brief explanation of what web frameworks are, their advantages, and some popular frameworks currently used in the industry. For the workshop, we chose to demonstrate "Vue.js" because it closely resembles HTML, CSS, and JavaScript.<br><br>The first step was installing Node.js, which is necessary to run a Vue project. This proved to be the most challenging part because the students needed passwords to install the program on their school computers. Once that was resolved, we showed them how to initialize a Vue project and explained the project\'s structure. We then took some time to navigate the project and demonstrated how to run it. Some students were particularly interested and engaged with the workshop, while others simply observed our demonstration. To keep things simple, we focused on explaining what a component is and how to create one.<br><br>Most of the students were excited and eager to learn more, although some were less engaged. After showcasing a small part of Vue and highlighting the advantages of using a framework, we wrapped up our talk with a demo of our own projects.<br><br>Prince and I really enjoyed the event and were pleased with how it went. We thanked the students for their attention and had a brief chat with the lecturers afterward. Personally, I think I will do it again next year. It was a fun and rewarding experience!',
		date: '2024/05/22',
		location: 'Athena Heule',
		thumbnail: '/assets/events/07/cover.jpg',
		images: [
			{
				src: '/assets/events/07/cover.jpg',
				alt: 'Cover',
			},
			{
				src: '/assets/events/07/image1.jpg',
				alt: 'Guust helping students with Vue.js',
			},
			{
				src: '/assets/events/07/image2.jpg',
				alt: 'Showing a website made with Vue.js',
			},
			{
				src: '/assets/events/07/image3.jpg',
				alt: 'Photo of the classroom',
			},
			{
				src: '/assets/events/07/image4.jpg',
				alt: 'Photo of the classroom with all students',
			},
			{
				src: '/assets/events/07/image5.jpg',
				alt: 'Photo of explaining Vue.js',
			},
		],
	},
	{
		num: '08',
		title: 'Life of a software developer',
		shortDescription:
			'Mike Seghers, Founder and Technology Coach at Sweet Mustard, gave an insightful talk at Howest Bruges about the life of a software engineer. He shared his journey, explained key roles like UX designer and Scrum Master, and discussed modern work methods like Scrum and Agile. Mike also provided career tips, recommended books and podcasts, and shared personal experiences from his time at companies like VRT. The interactive session was engaging and informative, leaving everyone excited for more. Definitely an event worth attending!',
		description:
			"This was an event at Howest Bruges where Mike Seghers, the Founder and Technology Coach at Sweet Mustard, gave a talk about the life of a software engineer. It was super insightful and relatable, especially for anyone interested in tech.<br>Mike started by sharing his journey from when he first started in the field to what it's like being a software engineer today. He talked about the different roles involved in making software, like UX designers, Scrum Masters, and Product Owners. It was cool to learn what each role does and why they're important.<br>He also gave a great rundown on modern work methods, explaining concepts like Scrum and Agile. Hearing how these are used in real-world scenarios was really eye-opening. Mike shared some awesome tips for growing in your career, recommended useful books and podcasts, and talked about his experiences at big companies like VRT.<br>What made the talk really engaging was how interactive Mike was with the audience. Even though he talked for over two hours, it never felt boring. He answered tons of questions, which made the session even more interesting. It was great to hear not just about general practices but also his personal experiences.<br>Overall, it was a fantastic talk. I learned a lot and had a great time. I'd definitely go to another one of Mike's talks in the future!",
		date: '2024/05/28',
		location: 'Howest Campus Bruges',
		thumbnail: '/assets/events/08/cover.jpg',
		images: [
			{
				src: '/assets/events/08/cover.jpg',
				alt: 'Cover',
			},
			{
				src: '/assets/events/08/image1.jpg',
				alt: 'Photo of PowerPoint presentation',
			},
		],
	},
];
