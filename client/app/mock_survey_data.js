var mockSurveyData = {
  id: 435,
  title: "Harry Potter Character Quiz",
  description: "Which Harry Potter character are you? Finally put this burning question to rest...",
  createdAt: new Date(),
  updatedAt: new Date(),
  items: [{
    "id": 35,
    "type": "basic",
    "label": "Favorite Spell",
    "placeholder": "type favorite spell",
    "value": ""
  }, {
    "id": 36,
    "type": "basic",
    "label": "Favorite Character",
    "placeholder": "type character name",
    "value": ""
  }]
};

module.exports = mockSurveyData;