/** @jsx React.DOM */

var React = require("react");

var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

// Handlers
var App = React.createFactory(require('./components/app'));
var NotFoundHandler = React.createFactory(require('./components/not_found'));

var ListSurveys = React.createFactory(require('./components/list_surveys'));
var AddSurvey = React.createFactory(require('./components/add_survey'));
var EditSurvey = React.createFactory(require('./components/edit_survey'));
var TakeSurveyCtrl = React.createFactory(require('./components/take_survey_ctrl'));

var appRouter = (
  <Routes location="history">
    <Route path="/" handler={App}>
      <Route name="list" path="/" handler={ListSurveys} />
      <Route name="add" path="/add_survey" handler={AddSurvey} />
      <Route name="take" path="/surveys/:surveyId" handler={TakeSurveyCtrl} />
      <Route name="edit" path="/surveys/:surveyId/edit" handler={EditSurvey} />
    </Route>
    <NotFoundRoute handler={NotFoundHandler}/>
  </Routes>
);

module.exports = appRouter;