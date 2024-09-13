let games = [
  { id: "1", title: "Zelda, Tears of the kingdom", platform: ["switch"] },
  { id: "2", title: "Zelda, Tears of the kingdom", platform: ["PS5", "xbox"] },
  { id: "3", title: "Zelda, Tears of the", platform: ["PS5", "xbox", "PC"] },
  { id: "4", title: "Zelda, Tears of the kingdom", platform: ["switch"] },
  { id: "5", title: "Pokemon", platform: ["PS5", "xbox", "PC"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem_ipsum", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "lorem_ipsum", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "lorem_ipsum", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "lorem_ipsum", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "lorem_ipsum", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "lorem_ipsum", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "lorem_ipsum", author_id: "3", game_id: "1" },
];

export default { authors, games, reviews };
