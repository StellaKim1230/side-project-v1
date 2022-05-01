const books = [
  {
    title: "book1",
    author: "author1",
  },
];

const resolovers = {
  Query: {
    books: () => books,
  },
};

export default resolovers;
