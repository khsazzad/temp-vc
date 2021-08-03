const channel = [
  {
    name: "VALORANT_UNRATED",
    channel_id: "871971863457320994",
    option: {
      childCategory: "871971863457320992",
      childAutoDeleteIfEmpty: true,
      childMaxUsers: 5,
      childBitrate: 64000,
      childFormat: (member, count) => `UNRATED #${count}`
    }
  }
];

module.exports = channel;
