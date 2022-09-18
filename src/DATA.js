import React from 'react';
import {
  FaMusic,
  FaAnchor,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMap,
} from 'react-icons/fa';

// import image002 from './assets/img/img_002.jpeg'

const DATA = {
  navBarList: [
    'Events',
    'Team',
    //'Editions',  // atm info only for fsw23. plan is to build a history.
    // 'Gallery',  // same as before
    'Rates',
    'FAQ',
  ],
  teaser:
    'Your story starts with us. This is a simple example of a Landing Page you can build It features multiple CSS components based on the Tailwindcss design system.',
  cardInfo: [
    {
      title: 'New routes per journey',
      description:
        'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      icon: 'fa_map',
    },
    {
      title: 'Curated playlist',
      description:
        'A careful selection of the foundational songs as well as new modern hits.',
      icon: 'fa_music',
    },
    {
      title: 'Paradise scenery',
      description:
        'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
      icon: 'fa_anchor',
    },
  ],

  homeDataAboutUS: {
    head: 'A neverending passion',
    text: `The extension comes with three pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.`,
    img: './assets/img/img_002.jpeg',
    bulletPoints: [
      {
        icon: <FaMusic />,
        shortText: 'Carefully curated songs',
      },
      {
        icon: <FaMap />,
        shortText: 'Amazing route/navigation in our journey',
      },
      {
        icon: <FaAnchor />,
        shortText: 'Stops Along the way',
      },
    ],
  },

  ourValuesList: {
    head: 'All aboard!',
    text: `Next steps to join our crew. Beware of our phase.
           `,
    values: [
      {
        head: 'Booking Phase',
        text: `
                  - Pay until end of December 2021 save 50€.
                  - If there are not enough people within a budget to build a boat, those people will be downgraded and get the difference in money back
                  - No reimbursement possible (you may give or sell your place to a friend).
                `,
      },
      {
        head: 'Boat Reservation Phase',
        text: 'Every Budget level will build a pot (gold, silver, bronze). With those pots we will book the best boats & skipper possible (more people, better bargain)',
      },
      {
        head: 'Crew Allocation Phase',
        text: 'By the end of March all necessary boats will be chartered and the forrózeiros will get to know the boats they will be in as well as their fellow sailing crew & skipper. The people will be allocated in order of payment booking to the available boats',
      },
    ],
  },

  fotoCard: {
    title: 'Top Notch Services',
    description:
      'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.',
    url: './assets/img/img_002.jpeg',
  },

  socialLinks: [
    {
      name: 'Facebook',
      stl: <FaFacebookF />,
      link: '',
      color: 'rgba(37, 99, 235, 1)',
    },
    {
      name: 'Twitter',
      stl: <FaTwitter />,
      link: '',
      color: 'rgba(96, 165, 250, 1)',
    },
    {
      name: 'Instagram',
      stl: <FaInstagram />,
      link: '',
      color: 'rgba(244, 114, 182, 1)',
    },
  ],

  otherLinks: {
    'Useful Links': [
      {
        name: 'About Us',
        link: '',
      },
      {
        name: 'Blog',
        link: '',
      },
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Tickets',
        link: '',
      },
    ],
    'Other Resources': [
      {
        name: 'Terms & Conditions',
        link: '',
      },
      {
        name: 'Privacy Policy',
        link: '',
      },
      {
        name: 'Contact Us',
        link: '',
      },
    ],
  },

  faqInfo: [
    {
      subject: 'Booking & Payment',
      topics: [
        {
          question: 'I want to join for the second time?',
          answer: "Hey Sailor! Probably, we've met before so yes.",
        },
        {
          question: 'I want to join for the second time. Do I get a discount?',
          answer:
            "Hey Sailor! Probably, we've met before so yes, you get a discount since you join for the second time. It's best to send an email at info@swingnsail.com to know more.",
        },
        {
          question: 'How do I reserve a spot or cabin?',
          answer:
            'Booking can be easily done through our registration form. If you need to make a question, send us an email at info@swingnsail.com',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },
    {
      subject: 'Accommodation / Transportation',
      topics: [
        {
          question: 'I want to join for the second time?',
          answer: "Hey Sailor! Probably, we've met before so yes.",
        },
        {
          question: 'I want to join for the second time. Do I get a discount?',
          answer:
            "Hey Sailor! Probably, we've met before so yes, you get a discount since you join for the second time. It's best to send an email at info@swingnsail.com to know more.",
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },
    {
      subject: 'Forró',
      topics: [
        {
          question: 'Will we have Forró workshops?',
          answer:
            'YES!!! Our Forró teachers will give their best to make at least one proper Forró workshop per day. The place might be on the beach, on the harbor, on a square (wherever we feel comfortable). According to the level of our participants, we will organize different classes.',
        },
        {
          question: 'Where will we dance Forró?',
          answer:
            'The staff boat is a big catamaran boat, with a big saloon, we will remove the table and have a „dance floor“. We can join all the boats in a "raft" and we\'ll have more possibilities to dance. And of course we will also dance on land.',
        },
        {
          question: 'How do I reserve a spot or cabin?',
          answer:
            'Booking can be easily done through our registration form. If you need to make a question, send us an email at info@swingnsail.com',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },

    {
      subject: 'General',
      topics: [
        {
          question: 'What other activities can we do during the trip?',
          answer:
            'There will be multiple options to go swimming and snorkeling, sunbathing on deck or on the beach, to go for a walk or hiking on land, finding some time to do Yoga etc.',
        },
        {
          question: 'Sailing without any sailing experiences?',
          answer:
            'hat is not a problem! We will have experienced skippers and some experienced sailors in our team. If you are still in doubt ask the crew from 2019.',
        },
        {
          question: 'How do I reserve a spot or cabin?',
          answer:
            'Booking can be easily done through our registration form. If you need to make a question, send us an email at info@swingnsail.com',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no \n refund \n will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },
  ],

  teamData: {
    title: 'Here is our crew!',
    description: `According to the National Oceanic and Atmospheric Administration,
                  Ted, Scambos, NSIDClead scientists, forró is for all.`,
    team: [
      {
        name: 'Bernardo Low-Beer',
        position: 'Organizer & Captain',
        social: [
          { facebook: 'https://www.facebook.com/lowbeer' },
          { insta: 2 },
          { linkedin: '' },
        ],
        foto: 'team-1-800x800.jpg',
      },
      {
        name: 'Romina Hadid',
        position: 'Marketing specialist',
        social: [
          { facebook: '' },
          { insta: '' },
          { linkedin: '' },
          { tiktok: '' },
          { youtube: '' },
        ],
        foto: 'team-2-800x800.jpg',
      },
      {
        name: 'Alexa Smith',
        position: 'Associate',
        social: [{ facebook: '' }, { insta: '' }, { tiktok: '' }],
        foto: 'team-3-800x800.jpg',
      },
      {
        name: 'Milena-Marie Zöller',
        position: 'Founder and Ceo',
        social: [
          { facebook: 'https://www.facebook.com/milenamarie.zoller' },
          { linkedin: '' },
        ],
        foto: 'team-4-470x470.png',
      },
    ],
  },
  teamDataFull: [
    {
      id: 'megky-papageorgiou',
      name: 'MEGKY PAPAGEORGIOU',
      description: `It was a summery night in Athens when Megky-while eating pizza and
                      drinking orange juice on her balcony- came up with the idea of combining
                      two of her passions in a festival; Lindy hop dancing and travelling to
                      the mesmerizing`,
      groupName: 'FOUNDER/ORGANIZER',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg',
    },
    {
      id: 'tony-jackson',
      name: 'TONY JACKSON',
      description: `Tony is based in London where he teaches swing dance classes. When
                      he doesn't, he travels around the world to teach and develop his dance.
                      He has participated in major Lindy Hop and Solo competitions.
                      Tony is based in London where he teaches swing dance classes. When
                      he doesn't, he travels around the world to teach and develop his dance.
                      He has participated in major Lindy Hop and Solo competitions.
                      he doesn't, he travels around the world to teach and develop his dance.
                      He has participated in major Lindy Hop and Solo competitions.
                      Tony is based in London where he teaches swing dance classes. When
                      he doesn't, he travels around the world to teach and develop his dance.
                      He has participated in major Lindy Hop and Solo competitions.`,
      groupName: 'TEACHERS',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2018/12/tony-jackson.jpg',
    },
    {
      id: 'minou-ericson',
      name: 'MINOU ERICSON',
      description: `It was a summery night in Athens when Megky-while eating pizza and
        drinking orange juice on her balcony- came up with the idea of combining
        two of her passions in a festival; Lindy hop dancing and travelling to
        the mesmerizing.
        It was a summery night in Athens when Megky-while eating pizza and
        drinking orange juice on her balcony- came up with the idea of combining
        two of her passions in a festival; Lindy hop dancing and travelling to
        the mesmerizing.`,
      groupName: 'TEACHERS',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg',
    },
    {
      id: 'ben-white',
      name: 'Ben White',
      description: `It was a summery night in Athens when Megky-while eating pizza and
        drinking orange juice on her balcony- came up with the idea of combining
        two of her passions in a festival; Lindy hop dancing and travelling to
        the mesmerizing…`,
      groupName: 'SAIL PARTNERS',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2018/12/martin-lasthein.jpg',
    },
    {
      id: 'the-dead-hoofers',
      name: 'THE DEAD HOOFERS',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      groupName: 'BAND',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2019/01/12193502_761436817294878_5432749165568786100_n.jpg',
    },
    {
      id: 'christos-aronis',
      name: 'CHRISTOS ARONIS',
      description: `It was a summery night in Athens when Megky-while eating pizza and
        drinking orange juice on her balcony- came up with the idea of combining
        two of her passions in a festival; Lindy hop dancing and travelling to
        the mesmerizing…`,
      groupName: 'TEACHERS',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg',
    },
    {
      id: 'the-jeepers-creepers',
      name: 'THE JEEPERS CREEPERS',
      description: `The Jeepers Creepers band is a group of musicians from Athens(Greece)
        that specialises in playing the really beautiful popular or more rare tunes of the
        1920's, 1930's, 1940's. The band was named after the popular Harry Warren's tune that became…`,
      groupName: 'BAND',
      imgPath:
        'https://swingnsail.com/wp-content/uploads/2018/12/tony-jackson.jpg',
    },
  ],

  eventsData: [
    {
      id: '01',
      title: 'Marina Baotic / Split Marina',
      city: 'Split',
      region: 'Croatia',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      teachers: ['Tiago Moraes', 'Terra (Jiordano Pasqualini)'],
      musicians: [],
      skippers: ['Bernardo Low-Beer', 'Josip Drinovac', 'Sven De Causmaecker'],
      boats: ['Lagoon 45', 'Lagoon 40', 'Bavaria 50'],
      imgPath:
        'https://www.baotic-yachting.com/datastore/imagestore/original/1607695568DJI_0102.jpg',
      date: ['May 25, 2019', 'June 01, 2019'],
      participants: 33,
      cost: '',
      currency: 'EUR',
    },
    {
      id: '02',
      title: 'Marina Baotic / Split Marina',
      city: 'Split',
      region: 'Croatia',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      teachers: [],
      musicians: [],
      skippers: ['Bernardo Low-Beer'],
      boats: ['Monohaul'],
      imgPath:
        'https://www.baotic-yachting.com/datastore/imagestore/original/1607695503DJI_0065.jpg',
      date: ['August 08, 2020', 'August 15, 2020'],
      participants: 12,
      cost: '',
      currency: 'EUR',
    },
    {
      id: '03',
      title: 'Cala dei Sardi / Marina Portisco',
      city: 'Olbia',
      region: 'Sardinia / Corsica',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      teachers: ['Anax'],
      musicians: [],
      skippers: [
        'Bernardo Low-Beer',
        'Sven De Causmaecker',
        'Iljya Kalai',
        'Thomas Florian',
      ],
      boats: ['Lagoon 45', 'Lagoon 40', 'Lagoon 44', 'Bavaria 50'],
      imgPath:
        'https://www.marinebusinessworld.com/photos/marineindustry/yysw363396.jpg',
      date: ['October 10, 2021', 'October 10, 2021'],
      participants: 46,
      cost: '',
      currency: 'EUR',
    },
    {
      id: '04',
      title: 'Poltu Quatu / Marina Cannigione',
      city: 'Olbia',
      region: 'Sardinia / Corsica',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      teachers: ['Diana Richter'],
      musicians: ['Gabriel Walsch'],
      skippers: [
        'Bernardo Low-Beer',
        'Sven De Causmaecker',
        'Iljya Kalai',
        'Gerrit Fachinger',
      ],
      boats: ['Lagoon 44', 'Lagoon 42', 'Lagoon 39', 'Oceanis 48'],
      imgPath:
        'https://d1y5anlg0g4t8d.cloudfront.net/709/gallery/medium/marina03-1024x768.jpg',
      date: ['May 28, 2022', 'June 04, 2022'],
      participants: 48,
      cost: '',
      currency: 'EUR',
    },
    {
      id: '05',
      title: '???',
      city: 'Athens',
      region: 'Greece',
      description: `Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire.
      Our favourite Athenian Swing Band who plays for the dancers! Ready to
      dance at Swing'n'Sail's opening party? The Dead Hoofers is a band that aims to the revival
      of the toe-tapping swing music from the 30's and the 40's.Their repertoire`,
      teachers: ['Matheus Antunes'],
      musicians: [''],
      skippers: [
        'Bernardo Low-Beer',
        'Gerrit Fachinger',
        'Sven De Causmaecker',
        'Iljya Kalai',
      ],
      boats: ['Lagoon 44', 'Lagoon 42', 'Lagoon 39', 'Oceanis 48'],
      imgPath:
        'https://www.athenasail.com/wp-content/uploads/2019/03/Sosta-bagno-nell-isola-di-Spargi-1030x687.jpg',
      date: ['May 27, 2023', 'June 03, 2023'],
      participants: null,
      cost: '',
      currency: 'EUR',
    },
  ],

  ratesData: [
    {
      title: 'Gold',
      description:
        'The best and most exclusive option here blablabla you will not regret.',
      included: [
        '17 days living in a sailing boat',
        'Skippers',
        '5 Swing Parties (2/5 will take place in Athens and 3/5 in selected venues of the islands we are visiting)',
        '14 hours of swing classes and more',
        'Fuel and water, bikinis',
      ],
      notIncluded: [
        'Food anfdad beverages',
        'Accommodation ifdsa n Athens (two nights)',
        '4 hours of swinfdsa fdsag classes',
        'Bus tickfsdaf dsa et (+70,00 € Roundtrip ticket)',
      ],
      accommodation: '', // saloon OR bow cabin
      groups: '',
      disclaimer: {
        availability: [false, true, true],
        boatSize: '',
      },
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in lovf dsa fdsae? Since Swing'n'Sail seems to be the perfediscount. Send us an email at info@swingnsail.com to know more about it.",
      ],
    },
    {
      title: 'Silver',
      description:
        'Short description about this plan. A paragraph describing a feature will be enough.',
      included: [
        '7 days living in a sailing boat',
        'Skipper',
        '5 Swing Parties (2/5 will take place in Athens and 3/5 in selected venues of the islands we are visiting)',
        '4 hours of swing classes',
        'Fuel and water',
      ],
      notIncluded: [
        'Food and beverages',
        'Accommodation in Athens (two nights)',
        '4 hours of swing classes',
        'Bus ticket (+70,00 € Roundtrip ticket)',
      ],
      accommodation: '', // saloon OR bow cabin
      groups: '',
      disclaimer: {
        full: [true, false, false],
        boatSize: '',
      },
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in love? Since Swing'n'Sail seems to be the perfect landscape for engagement and marriage proposals (we experienced two so far) we give 5% discount to dancing couples in love! Send us an email at info@swingnsail.com to know more about it.",
        'You are a Greek dancer? Considering our financial and political situation our country experiences, yes, you get a discount. Send us an email at info@swingnsail.com to know more about it.',
      ],
    },
    {
      title: 'Bronze',
      description:
        'Economic class, blablabla but you are going to have much fun anyway',
      included: [
        '7 days living',
        'Skipper',
        '5 Swing Parties only',
        '40 minutes of swing classes',
        'Fuel and water',
      ],
      notIncluded: [
        'Food and beverages',
        'Accommodation in Athens (two nights)',
        '4 hours of swing classes',
        'Bus ticket (+70,00 € Roundtrip ticket)',
      ],
      accommodation: '', // saloon OR bow cabin
      groups: '',
      disclaimer: {
        full: [false, false, false],
        boatSize: '',
      },
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in love? Since Swing'n'Sail seems to be the perfect landscape for engagement and marriage proposals (we experienced two so far) we give 5% discount to dancing couples in love! Send us an email at info@swingnsail.com to know more about it.",
        'You are a Greek dancer? Considering our financial and political situation our country experiences, yes, you get a discount. Send us an email at info@swingnsail.com to know more about it.',
      ],
    },
  ],
};

export default DATA;

/*
General:
  - About Us, Motivation, FAQ, Contact
    -- We can make rates linked to the latest fsw event

- Edition:
  fsw22, ...
  fsw23, routes, rates, photos, general, special guests...

- Rates:
  gold, silver, bronze



  https://www.outsideinc.com/
*/
