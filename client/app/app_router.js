/** @jsx React.DOM */

var React = require("react");

var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var NotFound = Router.NotFound;

// Handlers
var App = require('./components/app');
var NotFoundHandler = require('./components/not_found');

var ListSurveys = require('./components/list_surveys');
var AddSurvey = require('./components/add_survey');
var EditSurvey = require('./components/edit_survey');
var SurveySummary = require('./components/survey_summary');
var TakeSurvey = require('./components/take_survey');

var appRouter = (
  <Routes location="history">
    <Route title="SurveyBuilder" handler={App}>
      <Route name="list" path="/" handler={ListSurveys} />
      <Route title="Add Survey to SurveyBuilder" name="add" path="/add_survey" handler={AddSurvey} />
      <Route name="edit" path="/surveys/:survey_id/edit" handler={EditSurvey} />
      <Route name="take" path="/surveys/:survey_id" handler={TakeSurvey} />
      <Route name="summary" path="/surveys/:survey_id/summary" handler={SurveySummary} />
      <NotFound title="Page Not Found" handler={NotFoundHandler}/>
    </Route>
  </Routes>
);

module.exports = appRouter;
