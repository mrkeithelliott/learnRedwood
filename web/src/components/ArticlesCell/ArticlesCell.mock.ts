// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [{
    id: 1,
    title: "Mock Article 1",
    body: "Flannel wolf beard lo-fi la croix enamel pin food truck skateboard direct trade cred. " +
      "Th plaid kitsch, poutine YOLO iceland listicle shoreditch meditation venmo crucifix locavore. " +
      "Pitchfork palo santo knausgaard typewriter selvage vice lyft raclette bitters retro actually. " +
      "Shaman everyday carry plaid, raclette squid unicorn mustache. " +
      "Neutra coloring book trust fund forage biodiesel keffiyeh deep v iPhone. " +
      "Vaporware banh mi church-key, health goth stumptown beard roof party locavore thundercats pabst tumeric celiac.",
    createdAt: Date()
  }, {
    id: 2,
    title: "Mock Article 2",
    body: "Did you wonder where the articles were coming from in our test? " +
      "Was it the development database? Nope: that data came from a Mock. " +
      "That's the ArticlesCell.mock.js file that lives next to your component, test and stories files. " +
      "Mocks are used when you want to define the data that would normally be returned by GraphQL in your " +
      "Storybook stories or tests. In cells, a GraphQL call goes out " +
      "(the query defined by the variable QUERY at the top of the file) and returned to the Success component. " +
      "We don't want to have to run the api-side server and have real data in the database just for Storybook or " +
      "our tests, so Redwood intercepts those GraphQL calls and returns the data from the mock instead.",
    createdAt: Date()
  }
  ],
})
