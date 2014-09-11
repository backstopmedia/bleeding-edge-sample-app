/** @jsx React.DOM */

var React = require("react");

var authors = [
  { name: "Bill", githubUsername: "billy" },
  { name: "Fred", githubUsername: "freddy" }
];

var HelloRandom = React.createClass({
  getRandomAuthor: function(){
    return authors[Math.floor(Math.random() * authors.length)];
  },
  render: function(){
    var randomAuthor = this.getRandomAuthor();

    return (
      <div>
        {randomAuthor.name} is an author and their github handle is {randomAuthor.githubUsername}.
      </div>
    );
  }
});

module.exports = HelloRandom;