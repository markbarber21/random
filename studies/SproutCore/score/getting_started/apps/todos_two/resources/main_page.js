// ==========================================================================
// Project:   TodosTwo - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals TodosTwo */

// This page describes the main user interface for your application.
sc_require('views/welcome');
sc_require('views/rolling');

TodosTwo.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'welcomeView rollingView'.w(),

    welcomeView: TodosTwo.WelcomeView.design(),
    rollingView: TodosTwo.RollingView.design()
  })

});