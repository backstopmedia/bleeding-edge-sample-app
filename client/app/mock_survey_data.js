var mockSurveyData = {
  id: 435,
  title: "Harry Potter Character Quiz",
  description: "Which Harry Potter character are you? Finally put this burning question to rest...",
  createdAt: new Date(),
  updatedAt: new Date(),
  items: [{
    "id": 35,
    "type": "boolean",
    "meta": {
      "label": "Do You Have a Favorite Spell?"
    }
  }, {
    "id": 36,
    "type": "boolean",
    "meta": {
      "label": "Do You Have a Favorite Character?"
    }
  }, {
    "id": 37,
    "type": "multiple_choice",
    "meta": {
      "label": "Favorite Magical Tool",
      "choices": [
        "Time Turner",
        "Pensive",
        "Port-key"
      ]
    }
  }]
};

module.exports = mockSurveyData;
