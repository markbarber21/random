// ==========================================================================
// Project:   TodosOne - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals TodosOne */

// This page describes the main user interface for your application.
TodosTwo.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'labelView labelView2'.w(),

    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Welcome to SproutCore!"
    }),

    labelView2: SC.LabelView.design({
      layout: { centerX: 0, centerY: 15, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Now we're rolling!"
    })
  })

});
