const siteData = {
  nav: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Events", href: "events.html", page: "events" },
    { label: "Guests", href: "guests.html", page: "guests" },
    { label: "Contact Us", href: "index.html#connect", page: "contact" },
    { label: "About", href: "index.html#about", page: "about" },
  ],
  features: [
    {
      title: "परम्परा",
      emoji: "🌿",
      text: "परम्परा - हरियाणा की जड़ों और सांस्कृतिक विरासत का उत्सव मनाते हुए।",
    },
    {
      title: "रचनात्मकता",
      emoji: "🎭",
      text: "रचनात्मकता - कला, संगीत, नृत्य और सशक्त अभिव्यक्ति का एक मंच।",
    },
    {
      title: "समुदाय",
      emoji: "🤝",
      text: "समुदाय - साझा अनुभवों के माध्यम से लोगों को एक साथ जोड़ते हुए।",
    },
  ],
  guestsPreview: [
    { name: "Sh. Manohar Lal Khattar", role: "Former CM, Haryana",image: "assets/Rectangle 1-3.png" },
    { name: "Sh. Nayab Singh Saini", role: "CM, Haryana",image: "assets/Rectangle 2.png" },
    { name: "Smt. Savitri Jindal", role: "Prominent Industrialist/Social Leader",image: "assets/Rectangle 3.png" },
    { name: "Sh. Anurag Thakur", role: "Prominent Political Leader",image: "assets/Rectangle 4.png" },
    { name: "Sh. Bhupender Yadav", role: "Union Minister",image: "assets/Rectangle 5.png" },
    { name: "Sh. Ram Madhav", role: "Prominent Author Leader",image: "assets/Rectangle 6.png" },
  ],
 
events: [
  { 
    title: "Exhibition Inauguration", 
    date: "April 3, 2026", 
    category: "03:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Opening of exhibition"
  },
  { 
    title: "Film Screening: Anand Math", 
    date: "April 3, 2026", 
    category: "03:30 PM onwards", 
    poster: "assets/website Teaser 1.png",
    description: "Film screening"
  },
  { 
    title: "Kavi Sammelan", 
    date: "April 3, 2026", 
    category: "06:00 PM – 07:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Poetry symposium"
  },
  { 
    title: "Kahe Kabira (Bhajan Clubbing)", 
    date: "April 3, 2026", 
    category: "07:00 PM – 08:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Musical performance"
  },
  { 
    title: "Musical Night (Supwa Band)", 
    date: "April 3, 2026", 
    category: "08:00 PM – 10:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Live band performance"
  },
  { 
    title: "Inaugural Session", 
    date: "April 4, 2026", 
    category: "10:00 AM – 11:00 AM", 
    poster: "assets/website Teaser 1.png",
    description: "Opening ceremony"
  },
  { 
    title: "Media: Virtual vs Actual Narrative", 
    date: "April 4, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Panel discussion"
  },
  { 
    title: "Demography Change & National Security", 
    date: "April 4, 2026", 
    category: "12:15 PM – 01:30 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Discussion"
  },
  { 
    title: "Cinema & Ideology: Celebrity Interaction", 
    date: "April 4, 2026", 
    category: "02:00 PM – 03:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Celebrity talk"
  },
  { 
    title: "Partition of India: Pain & Lessons", 
    date: "April 4, 2026", 
    category: "03:15 PM – 04:30 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Engaging discussions on culture, society, and ideas."
  },
  { 
    title: "Cultural Program", 
    date: "April 4, 2026", 
    category: "06:00 PM – 10:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Evening cultural events"
  },
  { 
    title: "RSS: 100 Years of Dedication & Service", 
    date: "April 5, 2026", 
    category: "10:00 AM – 11:45 AM", 
    poster: "assets/website Teaser 1.png",
    description: "Talk + film"
  },
  { 
    title: "World Heading Toward War", 
    date: "April 5, 2026", 
    category: "11:45 AM – 01:30 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Global discussion"
  },
  { 
    title: "Climate Change: Destruction vs Development", 
    date: "April 5, 2026", 
    category: "02:00 PM – 03:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Panel discussion"
  },
  { 
    title: "Gen Z Dialogue: Passion & Dreams", 
    date: "April 5, 2026", 
    category: "03:15 PM – 04:30 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Youth panel"
  },
  { 
    title: "Constitution, Voting, and Politics", 
    date: "April 5, 2026", 
    category: "04:30 PM – 05:45 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Political discussion"
  },
  { 
    title: "Valedictory Session", 
    date: "April 5, 2026", 
    category: "06:00 PM – 07:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Closing ceremony"
  },
  { 
    title: "Cultural Program", 
    date: "April 5, 2026", 
    category: "07:00 PM – 10:00 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Evening cultural events"
  },
  { 
    title: "Poetry Workshop: Dil To Poet Hai Ji...", 
    date: "April 4, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Poetry workshop"
  },
  { 
    title: "Storytelling Workshop: Kahani Abhi Baaki Hai Mere Dost...", 
    date: "April 4, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Storytelling workshop"
  },
  { 
    title: "AI, Writing, and Creativity", 
    date: "April 4, 2026", 
    category: "02:00 PM – 03:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Creative discussion"
  },
  { 
    title: "Film Screening: Savarkar", 
    date: "April 4, 2026", 
    category: "03:30 PM onwards", 
    poster: "assets/website Teaser 1.png",
    description: "Film screening"
  },
  { 
    title: "Screenplay Writing Workshop", 
    date: "April 5, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Screenwriting workshop"
  },
  { 
    title: "Travel Writing Workshop", 
    date: "April 5, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Travel writing"
  },
  { 
    title: "Book Writing Workshop", 
    date: "April 5, 2026", 
    category: "02:00 PM – 03:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Book writing"
  },
  { 
    title: "Film Screening: Shatak", 
    date: "April 5, 2026", 
    category: "03:30 PM onwards", 
    poster: "assets/website Teaser 1.png",
    description: "Film screening"
  },
  { 
    title: "Book Launch and Discussion", 
    date: "April 4, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Book event"
  },
  { 
    title: "Contribution of Haryana to Literature and Journalism", 
    date: "April 4, 2026", 
    category: "02:00 PM – 03:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Discussion"
  },
  { 
    title: "Haryanvi Song & Music Trends", 
    date: "April 5, 2026", 
    category: "11:00 AM – 12:15 PM", 
    poster: "assets/website Teaser 1.png",
    description: "Music discussion"
  }
],


  guestCategories: [
    {
      title: "Chief Guests & Key Dignitaries",
      people: [
        { name: "Sh. Manohar Lal Khattar", role: "Former CM, Haryana",image: "assets/Rectangle 1-3.png" },
    { name: "Sh. Nayab Singh Saini", role: "CM, Haryana",image: "assets/Rectangle 2.png" },
    { name: "Smt. Savitri Jindal", role: "Prominent Industrialist/Social Leader",image: "assets/Rectangle 3.png" },
    { name: "Sh. Anurag Thakur", role: "Prominent Political Leader",image: "assets/Rectangle 4.png" },
    { name: "Sh. Bhupender Yadav", role: "Union Minister",image: "assets/Rectangle 5.png" },
    { name: "Sh. Ram Madhav", role: "Prominent Author Leader",image: "assets/Rectangle 6.png" },
      ],
    },
    {
      title: "Literature, Academic & Spiritual Guests",
      people: [
        { name: "Nivedita Bhinde", role: "Social Leader Speaker",image: "assets/Rectangle 7.png" },
        { name: "Jitendra Bajaj", role: "Scholar Author",image: "assets/Rectangle 8.png" },
        { name: "Krishna Nand Sagar", role: "Author Scholar",image: "assets/Rectangle 9.png" },
        { name: "Sh. Manoj Ji", role: "Social Leader Keynote Speaker",image: "assets/Rectangle 10.png" },
        { name: "Prof. Narsi Ram Bishnoi", role: "Vice-Chancellor, GJUS&T",image: "assets/Rectangle 11.png" },
        { name: "Sh. Hitesh Shankar", role: "Editor, Panchjanya",image: "assets/Rectangle 12.png" },
        { name: "Sh. Sunil Ambekar", role: "National Organising Secretary Author",image: "assets/Rectangle 13.png" },
        { name: "Sh. Sachchidanand Joshi", role: "Member Secretary, IGNCA",image: "assets/Rectangle 14.png" },
        { name: "Prof. Kuldip Chand Agnihotri", role: "Renowned Scholar Author",image: "assets/Rectangle 15.png" },
        { name: "Sh. Shankaranand", role: "Spiritual Social Leader",image: "assets/Rectangle 16.png" },
      ],
    },
    {
      title: "Cinema & Arts Personalities",
      people: [
        { name: "Kangana Ranaut", role: "Actress Director",image: "assets/Rectangle 17.png" },
        { name: "Raveena Tandon", role: "Actress",image: "assets/Rectangle 19.png" },
        { name: "Adah Sharma", role: "Actress",image: "assets/Rectangle 21.png" },
        { name: "Randeep Hooda", role: "Actor Director",image: "assets/Rectangle 23.png" },
        { name: "Yashpal Sharma", role: "Actor",image: "assets/Rectangle 25.png" },
        { name: "Dr. Chandra Prakash", role: "Director Actor",image: "assets/Rectangle 20.png" },
        { name: "Vishnu Sharma", role: "Author Cinema Critic",image: "assets/Rectangle 22.png" },
      ],
    },
    {
      title: "Media & Journalism Guests",
      people: [
        { name: "Akhilesh Mishra", role: "Former Diplomat Author",image: "assets/Rectangle 26.png" },
        { name: "Reema Gautam", role: "Moderator",image: "assets/Rectangle 27.png" },
        { name: "Tripti Shrivastava", role: "Moderator",image: "assets/Rectangle 29.png" },
        { name: "Manoj Verma", role: "Moderator",image: "assets/Rectangle 31.png" },
        { name: "Anurag Punetha", role: "Journalist Moderator",image: "assets/Rectangle 32.png" },
        { name: "Ankit Awasthi", role: "Educator YouTuber",image: "assets/Rectangle 33.png" },
        { name: "Anil Pandey", role: "Journalist_Moderator",image: "assets/Rectangle 34.png" },
        { name: "Chetan Chauhan", role: "Journalist",image: "assets/Rectangle 35.png" },
        { name: "Amit Dubey", role: "Cyber Expert Author",image: "assets/Rectangle 36.png" },
        { name: "Akhilesh Sharma", role: "Senior Journalist",image: "assets/Rectangle 37.png" },
        { name: "Dinesh Gautam", role: "Senior Journalist",image: "assets/Rectangle 38.png" },
      ],
    },
    {
      title: "Workshop Mentors & Creative Authors",
      people: [
        { name: "Tripti Singhal Somani", role: "Entrepreneur",image: "assets/Rectangle 39.png" },
        { name: "Nikhil Yadav", role: "Youth Leader Speaker",image: "assets/Rectangle 41.png" },
        { name: "Nidhin Valsan", role: "IPS Motivational Speaker",image: "assets/Rectangle 43.png" },
        { name: "Nidhin Valsan", role: "IPS Motivational Speaker",image: "assets/Rectangle 45.png" },
        { name: "Pratyush Ranjan", role: "Digital Media Expert",image: "assets/Rectangle 47.png" },
        { name: "Anuj Khare", role: "Satirist Journalist",image: "assets/Rectangle 40.png" },
        { name: "Rahul Choudhary Neel", role: "Travel Writer",image: "assets/Rectangle 42.png" },
        { name: "Rahgir", role: "Travel Writer Singer",image: "assets/Rectangle 44.png" },
        { name: "Kaynat Kazi", role: "Travel Writer Photographer",image: "assets/Rectangle 46.png" },
        { name: "Shailesh Bharatwanshi", role: "Publisher Hind Yugm",image: "assets/Rectangle 48.png" },
        { name: "Divya Prakash Dubey", role: "Renowned Author",image: "assets/Rectangle 49.png" },
        { name: "Naveen Choudhary", role: "Author",image: "assets/Rectangle 50.png" },
        { name: "Piyush Pandey", role: "Satirist Writer",image: "assets/Rectangle 51.png" },
        { name: "Vishal Pandey", role: "Vishal Pandey",image: "assets/Rectangle 52.png" },
        { name: "Nilotpal Mrinal", role: "Sahitya Akademi Yuva Puraskar Winner Author",image: "assets/Rectangle 53.png" },
      ],
    },
    {
      title: "Cultural Performers & Artists",
      people: [
        { name: "Sachchidanand Bharti", role: "Environmentalist",image: "assets/Rectangle 54.png" },
        { name: "Peepal Baba", role: "Environmentalist Speaker",image: "assets/Rectangle 56.png" },
        { name: "Naad Nritya Mandli", role: "Dance Group",image: "assets/Rectangle 58.png" },
        { name: "Aditi College (DU) Troupe", role: "Bantware Ka Dard Theatre Group",image: "assets/Rectangle 60.png" },
        { name: "Bharti Upadhyay", role: "Storyteller",image: "assets/Rectangle 62.png" },
        { name: "Vineet Chauhan", role: "Famous Poet - Bharat Gatha",image: "assets/Rectangle 55.png" },
      ],
    },
    {
      title: "Coordinating Bodies",
      people: [
        { name: "GJUS&T Hisar", role: "",image: "assets/Rectangle 63.png" },
        { name: "JILD, Delhi", role: "",image: "assets/Rectangle 64.png" },
      ],
    },
  ],
  contact: {
    address: [
      "iConnect Office, PDUIIC Building,",
      "GJUS&T, Hisar, Haryana - 125001",
    ],
    accommodation: ["+91 9012345678 (Yuvansh)", "+91 9012345678 (Naina)"],
    eventQueries: ["+91 9012345678 (Vansh)", "+91 9012345678 (Naina)"],
    mail: "iconnectgjust@gmail.com",
   socials: [
    { name: "Instagram", icon: "bx bxl-instagram", link: "https://www.instagram.com/iconnectgjust/" },
    { name: "X", icon: "bx bxl-twitter", link: "https://x.com/iconnectgjust" },
    { name: "WhatsApp", icon: "bx bxl-whatsapp", link: "https://www.whatsapp.com/channel/0029VaELUPEGU3BNfgEAmU0h" },
    { name: "LinkedIn", icon: "bx bxl-linkedin", link: "https://www.linkedin.com/company/iconnect-gjust/" },
    { name: "Facebook", icon: "bx bxl-youtube", link: "https://www.youtube.com/@iConnectGJUST" },
  ]
  },
};
