const config = {};

// ML task categories
config.taskCategories = [
    {
        title: 'Marketing',
        imageUrl: '../../src/images/cortana-microsoft.svg',
        content: 'Artificial Intelligence and Machine learning to help you acquire customers'
    },
    {
        title: 'Events',
        imageUrl: '../../src/images/code.svg',
        content: 'Get more from your events, understand feedback and prospective'
    },
    {
        title: 'Infrastructure',
        imageUrl: '../../src/images/microsoft-azure.svg',
        content: 'Intelligent Infrastructure to manage your Cloud needs'
    },
    {
        title: 'Bots',
        imageUrl: '../../src/images/robot.svg',
        content: 'Intelligent servants to serve customers 24*7'
    },
    {
        title: 'Intelligent Insights',
        imageUrl: '../../src/images/cortana-microsoft.svg',
        content: 'Derive the insights even when the data is not numbers. Make machine think like human'
    }
];

// ML Algorithm options
config.Pages =  [
            {
                title: 'Overview',
                content: [`MAQ Software is a leading Analytics provider in addressing critical business
                           problems by applying cutting edge AI techniques, including machine learning, 
                           natural language processing, knowledge representation and reasoning.`
                        ],
                imageUrl : '../../src/images/overview.png',
                caseStudies: []
            },
            {
                title: 'Marketing',
                content: [`Get more from your events, understand feedback and prospective`],
                imageUrl : '../../src/images/risk_monitoring.png',
                caseStudies: [
                    {
                        title: 'Marketing',
                        imageUrl: '../../src/images/cortana-microsoft.svg',
                        content: 'Artificial Intelligence and Machine learning to help you acquire customers',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                        
                    },
                    {
                        title: 'Events',
                        imageUrl: '../../src/images/code.svg',
                        content: 'Get more from your events, understand feedback and prospective',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Infrastructure',
                        imageUrl: '../../src/images/microsoft-azure.svg',
                        content: 'Intelligent Infrastructure to manage your Cloud needs',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Bots',
                        imageUrl: '../../src/images/robot.svg',
                        content: 'Intelligent servants to serve customers 24*7',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Intelligent Insights',
                        imageUrl: '../../src/images/cortana-microsoft.svg',
                        content: 'Derive the insights even when the data is not numbers. Make machine think like human',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    }]
            },
            {
                title: 'Events',
                content: [`Get more from your events, understand feedback and prospective`],
                imageUrl : '../../src/images/content_synthesis.png',
                caseStudies: [{
                    title: 'Marketing',
                    imageUrl: '../../src/images/cortana-microsoft.svg',
                    content: 'Artificial Intelligence and Machine learning to help you acquire customers',
                    data: {
                        heading: 'Uncover the Reasons Behind Product Returns:',
                        desc: ['Identifying Themes in Customers’ Return Comments'],
                        summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                 ],
                        scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                 ],
                        challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                    `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                    ],
                        solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                   `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                   'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                  ],
                        benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                  `The Information helped the Product Owner to improve their products and reduce the returns.`
                                  ]
                    }
                },
                {
                    title: 'Events',
                    imageUrl: '../../src/images/code.svg',
                    content: 'Get more from your events, understand feedback and prospective',
                    data: {
                        heading: 'Uncover the Reasons Behind Product Returns:',
                        desc: ['Identifying Themes in Customers’ Return Comments'],
                        summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                 ],
                        scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                 ],
                        challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                    `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                    ],
                        solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                   `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                   'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                  ],
                        benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                  `The Information helped the Product Owner to improve their products and reduce the returns.`
                                  ]
                    }
                }]
            },
            {
                title: 'Infrastructure',
                content: [`Intelligent Infrastructure to manage your Cloud needs`],
                imageUrl : '../../src/images/content_synthesis.png',
                caseStudies: [    {
                    title: 'Marketing',
                    imageUrl: '../../src/images/cortana-microsoft.svg',
                    content: 'Artificial Intelligence and Machine learning to help you acquire customers',
                    data: {
                        heading: 'Uncover the Reasons Behind Product Returns:',
                        desc: ['Identifying Themes in Customers’ Return Comments'],
                        summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                 ],
                        scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                 ],
                        challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                    `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                    ],
                        solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                   `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                   'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                  ],
                        benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                  `The Information helped the Product Owner to improve their products and reduce the returns.`
                                  ]
                    }
                }]
            },
            {
                title: 'Bots',
                content: [`Intelligent servants to serve customers 24*7`],
                imageUrl : '../../src/images/virtual_agents.png',
                    caseStudies: [{
                        title: 'Marketing',
                        imageUrl: '../../src/images/cortana-microsoft.svg',
                        content: 'Artificial Intelligence and Machine learning to help you acquire customers',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Events',
                        imageUrl: '../../src/images/code.svg',
                        content: 'Get more from your events, understand feedback and prospective',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    }]
            },
            {
                title: 'Intelligent Insights',
                content: [`Derive the insights even when the data is not numbers. Make machine think like human`],
                imageUrl : '../../src/images/virtual_agents.png',
                caseStudies: [
                    {
                        title: 'Marketing',
                        imageUrl: '../../src/images/cortana-microsoft.svg',
                        content: 'Artificial Intelligence and Machine learning to help you acquire customers',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Events',
                        imageUrl: '../../src/images/code.svg',
                        content: 'Get more from your events, understand feedback and prospective',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    },
                    {
                        title: 'Infrastructure',
                        imageUrl: '../../src/images/microsoft-azure.svg',
                        content: 'Intelligent Infrastructure to manage your Cloud needs',
                        data: {
                            heading: 'Uncover the Reasons Behind Product Returns:',
                            desc: ['Identifying Themes in Customers’ Return Comments'],
                            summary: [`Why do customers return products? We set out to answer this question by analysing comments provided by customers during their product return processes. This helps Product Owners to focus on key issues with their Products.`
                                     ],
                            scenario:[`Our client, a Fortune 500 technology company uses omni-channel marketing to sell its product and services. One of the main challenges the Product Owners face is Product Returns. If they can pinpoint the most frequent reasons, Product Owners can focus on the reason and fix it.`
                                     ],
                            challenge: [`When a Customer returns a product, a retail store representative captures the feedback. This feedback is a free text captured during the interaction. Feedback is generally typed in and can have spell mistakes. Many a times the feedback can be of languages other than English. Complexity increase further considering the scale of the feedback across the world.`,
                                        `Product Owners have access to this data and needs to figure out the story told by the data. But the free text, Scale and Languages complicate in understanding the key issue.`
                                        ],
                            solution: [`MAQ implemented an intelligent text analytics solution to analyse the data and identify the themes in product returns. Solution uses AML, Python and R for analytics functionalities and Power BI to visualize the results.`,
                                       `Intelligent solution cleans the data and translates the non-English language data to English. The solution understands the intent of the customers and extracts the key phrases from each comment. It then categorizes the comments into product return themes. Information is visualized in a Power BI dashboard for consumption of Product Owners.`,
                                       'The dashboard uses Word Cloud to highlight major recurring themes. Product Owners can understand the biggest challenges faced by their products at a glance. It also provides other demographic factors such as Gender and Age to understand the patterns. Dashboard also provides an opportunity to dig in specific comments.'
                                      ],
                            benefits: [`Product Owners used to solution and identified the major defects plaguing their products. Insights were drawn how Gender and Age played the part in the returns of their products. `,
                                      `The Information helped the Product Owner to improve their products and reduce the returns.`
                                      ]
                        }
                    }]
            }
        ];

export default config;