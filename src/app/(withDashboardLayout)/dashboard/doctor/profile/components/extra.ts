// export const original = {
//     title: 'Global Economic Summit 2024: Key Outcomes and Future Implications',
//     description: 'The Global Economic Summit 2024 has concluded with several key decisions affecting the future of international trade and economics. Leaders from around the world have outlined their strategies and visions for the upcoming years.',
//     sourceLink: 'https://globalnews.example.com/economic-summit-2024-outcomes',
//     image: 'https://globalnews.example.com/images/economic-summit-2024.jpg',
//     slug: 'global-economic-summit-2024-key-outcomes',
//     categories: ['Economics', 'Global News', 'Summits'],
//     isPublished: false,
//     name: {
//       first: 'Alexander',
//       last: 'Hamilton',
//       childName: {
//         first_child: 'Eliza',
//         second_child: 'James',
//         third_child: {
//           name: 'Mary',
//           age: 5,
//           interests: {
//             activities: ['Drawing', 'Reading'],
//             favoriteBooks: [
//               {
//                 title: 'Alice in Wonderland',
//                 author: 'Lewis Carroll'
//               },
//               {
//                 title: 'Peter Pan',
//                 author: 'J.M. Barrie'
//               }
//             ]
//           },
//           education: {
//             preschool: {
//               name: 'Happy Kids Preschool',
//               address: {
//                 street: '456 Oak Avenue',
//                 city: 'Metropolis',
//                 postal_code: '54321',
//                 country: 'USA'
//               }
//             },
//             kindergarten: {
//               name: 'Bright Future Kindergarten',
//               address: {
//                 street: '789 Maple Street',
//                 city: 'Gotham',
//                 postal_code: '67890',
//                 country: 'USA'
//               }
//             }
//           }
//         },
//         mother: [
//           {
//             mother_name: 'Sophia',
//             mother_last: 'Johnson',
//             mother_father: {
//               father1: [
//                 {
//                   father_first: {
//                     first_name: 'Robert',
//                     first_name2: 'Edward'
//                   },
//                   last_name: 'Johnson',
//                 },
//                 {
//                   father_first: {
//                     first_name: 'Thomas',
//                     first_name2: 'Henry'
//                   },
//                   last_name: 'Williams',
//                 }
//               ],
//               father2: [
//                 {
//                   father_first: {
//                     first_name: 'James',
//                     first_name2: 'William'
//                   },
//                   last_name: 'Brown'
//                 }
//               ]
//             }
//           },
//           {
//             age: 48,
//             year: 2024,
//             hobbies: ['Traveling', 'Cooking', 'Gardening'],
//             address: {
//               street: '101 River Road',
//               city: 'Riverside',
//               postal_code: '11223',
//               country: 'USA'
//             },
//             work: {
//               current_job: {
//                 title: 'Senior Economist',
//                 company: 'Global Finance Corp',
//                 address: {
//                   street: '202 Financial Plaza',
//                   city: 'Downtown',
//                   postal_code: '33445',
//                   country: 'USA'
//                 },
//                 projects: [
//                   {
//                     project_name: 'Sustainable Development',
//                     budget: '1.2M USD',
//                     team_members: [
//                       'Alice Cooper',
//                       'Bob Dylan'
//                     ]
//                   },
//                   {
//                     project_name: 'Market Analysis 2024',
//                     budget: '800K USD',
//                     team_members: [
//                       'Charlie Brown',
//                       'David Smith'
//                     ]
//                   }
//                 ]
//               }
//             }
//           }
//         ]
//       }
//     }
//   }

export const original = {
  title: 'Global Economic Summit 2024: Key Outcomes and Future Implications',
  description: 'The Global Economic Summit 2024 has concluded with several key decisions affecting the future of international trade and economics. Leaders from around the world have outlined their strategies and visions for the upcoming years.',
  sourceLink: 'https://globalnews.example.com/economic-summit-2024-outcomes',
  image: 'https://globalnews.example.com/images/economic-summit-2024.jpg',
  slug: 'global-economic-summit-2024-key-outcomes',
  categories: ['Economics', 'Global News', 'Summits'],
  isPublished: false,
  author: {
    name: {
      first: 'Alexander',
      last: 'Hamilton',
      aliases: ['Alex', 'A.H.'],
      titles: ['Dr.', 'Professor'],
      contact: {
        email: 'alexander.hamilton@example.com',
        phone: '+1234567890'
      }
    },
    biography: {
      birthdate: '1975-06-15',
      birthplace: 'New York, USA',
      education: [
        {
          institution: 'Harvard University',
          degree: 'PhD Economics',
          year: 2000
        },
        {
          institution: 'University of Chicago',
          degree: 'Master of Economics',
          year: 1998
        }
      ],
      details: [
        {
          id: 1,
          type: 'Category',
          attributes: {
            name: 'Science',
            description: 'Scientific articles and research',
            subcategories: [
              {
                id: 101,
                name: 'Physics',
                articles: [
                  {
                    articleId: 'a1',
                    title: 'Quantum Mechanics Basics',
                    authors: [
                      {
                        name: 'Dr. Alice Johnson',
                        affiliation: 'MIT'
                      },
                      {
                        name: 'Dr. Bob Smith',
                        affiliation: 'Harvard University'
                      }
                    ],
                    publicationDate: '2024-01-15'
                  },
                  {
                    articleId: 'a2',
                    title: 'Theory of Relativity',
                    authors: [
                      {
                        name: 'Dr. Carol Green',
                        affiliation: 'Stanford University'
                      }
                    ],
                    publicationDate: '2024-03-22'
                  }
                ]
              },
              {
                id: 102,
                name: 'Chemistry',
                articles: [
                  {
                    articleId: 'b1',
                    title: 'Organic Chemistry Overview',
                    authors: [
                      {
                        name: 'Dr. David Lee',
                        affiliation: 'Caltech'
                      }
                    ],
                    publicationDate: '2024-02-10'
                  }
                ]
              }
            ]
          }
        },
        {
          id: 2,
          type: 'Research Area',
          attributes: {
            name: 'Environmental Science',
            description: 'Research on environmental impact and conservation',
            subareas: [
              {
                id: 201,
                name: 'Climate Change',
                studies: [
                  {
                    studyId: 's1',
                    title: 'Impact of Global Warming',
                    researchers: [
                      {
                        name: 'Dr. Emily White',
                        institution: 'University of Oxford'
                      }
                    ],
                    date: '2024-04-05'
                  }
                ]
              }
            ]
          }
        }
      ],
      awards: [
        {
          name: 'Nobel Prize in Economics',
          year: 2015
        },
        {
          name: 'Economist of the Year',
          year: 2010
        }
      ]
    }
  },
  events: [
    {
      name: 'Opening Ceremony',
      date: '2024-07-01',
      time: '09:00 AM',
      location: 'Convention Center Hall A',
      speakers: [
        {
          name: 'Jane Doe',
          title: 'Minister of Finance',
          country: 'Canada'
        },
        {
          name: 'John Smith',
          title: 'CEO of Global Ventures',
          country: 'USA'
        }
      ],
      sessions: [
        {
          title: 'Global Trade Policies',
          duration: '1 hour',
          room: 'A101'
        },
        {
          title: 'Economic Forecasting Techniques',
          duration: '45 minutes',
          room: 'A102'
        }
      ]
    }
  ],
  imageGallery: [
    {
      url: 'https://globalnews.example.com/images/economic-summit-2024-gallery-1.jpg',
      caption: 'Summit Venue',
      photographer: 'Anna Lee'
    },
    {
      url: 'https://globalnews.example.com/images/economic-summit-2024-gallery-2.jpg',
      caption: 'Keynote Speaker',
      photographer: 'Michael Brown'
    }
  ],
  feedback: {
    ratings: {
      overall: 4.5,
      categories: {
        organization: 4.8,
        content: 4.2,
        speakers: 4.7
      }
    },
    comments: [
      {
        user: 'john.doe@example.com',
        message: 'The summit was very insightful, but the scheduling could be improved.',
        date: '2024-07-05'
      },
      {
        user: 'jane.smith@example.com',
        message: 'Great presentations and networking opportunities.',
        date: '2024-07-06'
      }
    ]
  },
  additionalInfo: {
    mediaCoverage: [
      {
        outlet: 'Global News Network',
        articleLink: 'https://globalnewsnetwork.example.com/article-2024',
        coverageType: 'TV'
      },
      {
        outlet: 'Economist Daily',
        articleLink: 'https://economistdaily.example.com/summit-recap',
        coverageType: 'Online'
      }
    ],
    sponsors: [
      {
        name: 'Tech Innovations Inc.',
        logo: 'https://globalnews.example.com/logos/tech-innovations.png'
      },
      {
        name: 'Finance World',
        logo: 'https://globalnews.example.com/logos/finance-world.png'
      }
    ],
    futureEvents: [
      {
        name: 'International Trade Summit 2025',
        date: '2025-06-15',
        location: 'Berlin, Germany',
        earlyBirdRegistration: {
          startDate: '2024-10-01',
          endDate: '2025-01-15'
        }
      }
    ]
  },
  relatedArticles: [
    {
      title: 'Impact of Economic Policies on Global Markets',
      link: 'https://globalnews.example.com/impact-economic-policies'
    },
    {
      title: 'Future Trends in Global Trade',
      link: 'https://globalnews.example.com/future-trends-global-trade'
    }
  ],
  contacts: {
    generalInquiries: {
      email: 'info@example.com',
      phone: '+9876543210'
    },
    press: {
      email: 'press@example.com',
      phone: '+1928374650'
    }
  }
}


export const newValue = {
  title: 'Global Economic Summit 2024: Key Outcomes and Future Implications',
  description: 'The Global Economic Summit 2024 has concluded with several key decisions affecting the future of international trade and economics. Leaders from around the world have outlined their strategies and visions for the upcoming years.',
  sourceLink: 'https://globalnews.example.com/economic-summit-2024-outcomes',
  image: 'https://globalnews.example.com/images/economic-summit-2024.jpg',
  slug: 'global-economic-summit-2024-key-outcomes',
  categories: ['Economics', 'Global News', 'anis'], //change
  isPublished: true, // change
  author: {
    name: {
      first: 'Alexander',
      last: 'Hamilton',
      aliases: ['Alex', 'A.H.'],
      titles: ['Dr.', 'Professor'],
      contact: {
        email: 'alexander.hamilton@example.com',
        phone: '+1234567890'
      }
    },
    biography: {
      birthdate: '1975-06-15',
      birthplace: 'New York, USA',
      education: [
        {
          institution: 'Harvard University',
          degree: 'PhD Economics',
          year: 2000
        },
        {
          institution: 'University of Chicago',
          degree: 'Master of anis', // change
          year: 1998
        }
      ],
      details: [
        {
          id: 1,
          type: 'Category',
          attributes: {
            name: 'Science',
            description: 'Scientific articles and research',
            subcategories: [
              {
                id: 101,
                name: 'Physics',
                articles: [
                  {
                    articleId: 'a1',
                    title: 'Quantum Mechanics Basics',
                    authors: [
                      {
                        name: 'Dr. Alice Johnson',
                        affiliation: 'MIT'
                      },
                      {
                        name: 'Dr. Bob Smith',
                        affiliation: 'Harvard University'
                      }
                    ],
                    publicationDate: '2024-01-15'
                  },
                  {
                    articleId: 'a2',
                    title: 'Theory of Relativity anis',
                    authors: [
                      {
                        name: 'Dr. Carol Green',
                        affiliation: 'Stanford University anis'
                      },
                    ],
                    publicationDate: '2024-03-22'
                  }
                ]
              },
              {
                id: 102,
                name: 'Chemistry',
                articles: [
                  {
                    articleId: 'b1',
                    title: 'Organic Chemistry Overview',
                    authors: [
                      {
                        name: 'Dr. David Lee',
                        affiliation: 'Caltech'
                      }
                    ],
                    publicationDate: '2024-02-10'
                  }
                ]
              }
            ]
          }
        },
        {
          id: 2,
          type: 'Research Area',
          attributes: {
            name: 'Environmental Science',
            description: 'Research on environmental impact and conservation',
            subareas: [
              {
                id: 201,
                name: 'Climate Change',
                studies: [
                  {
                    studyId: 's1',
                    title: 'Impact of Global Warming',
                    researchers: [
                      {
                        name: 'Dr. Emily White',
                        institution: 'University of Oxford'
                      }
                    ],
                    date: '2024-04-05'
                  }
                ]
              }
            ]
          }
        }
      ],
      awards: [
        {
          name: 'Nobel Prize in Economics',
          year: 2015
        },
        {
          name: 'Economist of the Year',
          year: 2010
        }
      ]
    }
  },
  events: [
    {
      name: 'Opening Ceremony',
      date: '2024-07-01',
      time: '09:00 AM',
      location: 'Convention Center Hall A',
      speakers: [
        {
          name: 'Jane Doe',
          title: 'Minister of Finance',
          country: 'Canada'
        },
        {
          name: 'John Smith',
          title: 'CEO of Global Ventures',
          country: 'USA'
        }
      ],
      sessions: [
        {
          title: 'Global Trade Policies',
          duration: '1 hour',
          room: 'A101'
        },
        {
          title: 'Economic Forecasting Techniques',
          duration: '45 minutes',
          room: 'A102'
        }
      ]
    }
  ],
  imageGallery: [
    {
      url: 'https://globalnews.example.com/images/economic-summit-2024-gallery-1.jpg',
      caption: 'Summit Venue',
      photographer: 'Anna Lee'
    },
    {
      url: 'https://globalnews.example.com/images/economic-summit-2024-gallery-2.jpg',
      caption: 'Keynote Speaker',
      photographer: 'Michael Brown'
    }
  ],
  feedback: {
    ratings: {
      overall: 4.5,
      categories: {
        organization: 4.8,
        content: 4.2,
        speakers: 4.7
      }
    },
    comments: [
      {
        user: 'john.doe@example.com',
        message: 'The summit was very insightful, but the scheduling could be improved.',
        date: '2024-07-05'
      },
      {
        user: 'jane.smith@example.com',
        message: 'Great presentations and networking opportunities.',
        date: '2024-07-06'
      }
    ]
  },
  additionalInfo: {
    mediaCoverage: [
      {
        outlet: 'Global News Network',
        articleLink: 'https://globalnewsnetwork.example.com/article-2024',
        coverageType: 'TV'
      },
      {
        outlet: 'Economist Daily',
        articleLink: 'https://economistdaily.example.com/summit-recap',
        coverageType: 'Online'
      }
    ],
    sponsors: [
      {
        name: 'Tech Innovations Inc.',
        logo: 'https://globalnews.example.com/logos/tech-innovations.png'
      },
      {
        name: 'Finance World',
        logo: 'https://globalnews.example.com/logos/finance-world.png'
      }
    ],
    futureEvents: [
      {
        name: 'International Trade Summit 2025',
        date: '2025-06-15',
        location: 'Berlin, anis', // change
        earlyBirdRegistration: {
          startDate: '2024-10-01',
          endDate: '2025-01-15'
        }
      }
    ]
  },
  relatedArticles: [
    {
      title: 'Impact of Economic Policies on Global Markets',
      link: 'https://globalnews.example.com/impact-economic-policies'
    },
    {
      title: 'Future Trends in Global Trade',
      link: 'https://globalnews.example.com/future-trends-global-trade'
    }
  ],
  contacts: {
    generalInquiries: {
      email: 'info@ana.com',
      phone: '+9876543210'
    },
    na:'add new field', // new filed
    // press: {
    //   email: 'press@example.com',
    //   phone: '+1928374650'
    // }
  },
}

//  export const newValue = {
//     title: 'Global Economic Summit 2024: Key Outcomes and Future Implications',
//     description: 'The Global Economic Summit 2024 has concluded with several key decisions affecting the future of international trade and economics. Leaders from around the world have outlined their strategies and visions for the upcoming years.',
//     sourceLink: 'https://globalnews.example.com/economic-summit-2024-outcomes',
//     image: 'https://globalnews.example.com/images/economic-summit-2024.jpg',
//     slug: 'global-economic-summit-2024-key-outcomes',
//     categories: ['Economics', 'Global News', 'Summits'],
//     isPublished: true,
//     name: {
//       first: 'Alexander',
//       last: 'Hamilton',
//       childName: {
//         first_child: 'Eliza',
//         second_child: 'James',
//         third_child: {
//           name: 'Mary',
//           age: 5,
//           interests: {
//             activities: ['Drawing', 'Reading'],
//             favoriteBooks: [
//               {
//                 title: 'Alice in Wonderland',
//                 author: 'anis Carroll'
//               },
//               {
//                 title: 'Peter Pan',
//                 author: 'J.M. anis'
//               }
//             ]
//           },
//           education: {
//             preschool: {
//               name: 'Happy Kids Preschool',
//               address: {
//                 street: '456 Oak Avenue',
//                 city: 'Metropolis',
//                 postal_code: '54321',
//                 country: 'USA'
//               }
//             },
//             kindergarten: {
//               name: 'Bright Future Kindergarten',
//               address: {
//                 street: '789 Maple Street',
//                 city: 'Gotham',
//                 postal_code: '67890',
//                 country: 'USA'
//               }
//             }
//           }
//         },
//         mother: [
//           {
//             mother_name: 'anis',
//             mother_last: 'Johnson',
//             mother_father: {
//               father1: [
//                 {
//                   father_first: {
//                     first_name: 'Robert',
//                     first_name2: 'anis'
//                   },
//                   last_name: 'Johnson',
//                 },
//                 {
//                   father_first: {
//                     first_name: 'Thomas',
//                     first_name2: 'Henry'
//                   },
//                   last_name: 'Williams',
//                 }
//               ],
//               father2: [
//                 {
//                   father_first: {
//                     first_name: 'anis',
//                     first_name2: 'William'
//                   },
//                   last_name: 'Brown'
//                 }
//               ]
//             }
//           },
//           {
//             age: 47,
//             year: 2024,
//             hobbies: ['anis', 'Cooking', 'Gardening'],
//             address: {
//               street: '101 River Road',
//               city: 'Riverside',
//               postal_code: '11223',
//               country: 'anis'
//             },
//             work: {
//               current_job: {
//                 title: 'Senior Economist',
//                 company: 'Global Finance Corp',
//                 address: {
//                   street: '202 Financial Plaza',
//                   city: 'Downtown',
//                   postal_code: '33445',
//                   country: 'USA'
//                 },
//                 projects: [
//                   {
//                     project_name: 'Sustainable Development',
//                     budget: '1.2M USD',
//                     team_members: [
//                       'Alice Cooper',
//                       'Bob Dylan'
//                     ]
//                   },
//                   {
//                     project_name: 'Market Analysis 2024',
//                     budget: '800K USD',
//                     team_members: [
//                       'Charlie Brown',
//                       'David Smith'
//                     ]
//                   }
//                 ]
//               }
//             }
//           }
//         ]
//       }
//     }
//   }
  