
(function(){

  /*
    User flows described in one decision tree
  */

  flow("React story book baseline", function(){
    step("Go to the react story page", goToReactStorybook);
    decision({
      "Test Accordian Components": function (){
        step("Expand Accordion Section", clickAccordionSection)
      },
      // "Test Alert Components": function (){
      //   step("Expand Alerts Sidebar Section", clickAlertSection)
      // }
      "Test Autocomplete Components": function (){
        step("Expand Autocomplete Sidebar Section", clickAutocompleteSection)
        decision({
          "Test Autocomplete Default": function (){
            step("No input comparison", autocompleteDefaultNoInput)
            // step("Dropdown menu comparison", autocompleteDefaultDropdownOpen)
          }
        })
      }
    })
  })

  // flow("Get a coffee", function(){
  //   step("Go to the kitchen", goToKitchen);
  //   step("Go to the coffee machine", goToMachine);
  //   decision({
  //     "Wants Latte": function(){
  //       chance({
  //         "There is no milk": function(){
  //           step("Request Latte", requestLatte_fail);
  //           decision({
  //             "Give up": function(){
  //               step("Walk away from the coffee machine", walkAway);
  //             },
  //             "Wants Espresso instead": wantsEspresso
  //           });
  //         },
  //         "There is milk": function(){
  //           step("Request Latte", requestLatte_success);
  //         }
  //       });
  //     },
  //     "Wants Cappuccino": function(){
  //       chance({
  //         "There is no milk": function(){
  //           step("Request Cappuccino", requestCappuccino_fail);
  //           decision({
  //             "Request Espresso instead": wantsEspresso
  //           });
  //         },
  //         "There is milk": function(){
  //           step("Request Cappuccino", requestCappuccino_success);
  //         }
  //       });
  //     },
  //     "Wants Espresso": wantsEspresso
  //   });
  // });

  // function wantsEspresso(){
  //   step("Request Espresso", requestEspresso);
  //   decision({
  //     "Wants single shot": function(){
  //       step("Request single shot", requestSingleShot);
  //     },
  //     "Wants double shot": function(){
  //       step("Request double shot", requestDoubleShot);
  //     }
  //   });
  // }


  /*
    Steps
  */

  function goToReactStorybook(){
    casper.thenOpen("google.com")
  }
  function clickAccordionSection(){
    casper.waitForSelector('a[title="Open Accordion"]',
      function success(){
        casper.wait(3000)
        casper.click('a[title="Open Accordion"]')
        casper.wait(3000)
      },
      function timeout(){
        this.test.fail('Should have seen the sidebar option "Accordion"')
      })
  }
  function clickAlertSection(){
    casper.waitForSelector('a[title="Open Alert"]',
      function success(){
        casper.wait(3000)
        casper.click('a[title="Open Alert"]')
        casper.wait(3000)
      },
      function timeout(){
        this.test.fail('Should have seen the sidebar option "Alert"')
      })
  }
  function clickAutocompleteSection(){
    casper.waitForSelector('a[title="Open Autocomplete"]',
      function success(){
        casper.wait(3000)
        casper.click('a[title="Open Autocomplete"]')
        casper.wait(3000)
      },
      function timeout(){
        this.test.fail('Should have seen the sidebar option "Autocomplete"')
      })
  }
  function autocompleteDefaultNoInput(){

  }
  function autocompleteDefaultInput(input){
    casper.withFrame(0, function() {
      casper.wait(3000)
      casper.waitForSelector('#root>div>div', 
        function success(){
          casper.wait(1000)
          phantomCss.screenshot('#root>div>div')
        },
        function timeout(){
          this.test.fail("Couldn't find the component selector")
        })
    })
  }
  function clickRightArrow(){
    casper.waitForSelector('.forward-nav-button',
      function success(){
        casper.wait(3000)
        casper.waitForSelector('.kc-item', 
          function success(){
            casper.wait(3000)
            casper.click('.forward-nav-button')
            casper.wait(3000)
          },
          function timeout(){
            this.test.fail('Should have seen the carousel items')
          })
        
      },
      function timeout(){
        this.test.fail( 'Should have seen the right nav button' );
      })
  }

  function clickShareButton(){
    casper.waitForSelector('.kc-item .hub-btn.hub-btn-link.hub-content-share',
      function success(){
        casper.wait(1000)
        casper.click('.kc-item.kc-front-item .hub-btn.hub-btn-link.hub-content-share')
        casper.wait(2000)
        phantomCSS.screenshot('.lf-menu')
      },
      function timeout(){
        this.test.fail('Should have seen the share button')
      })
  }

  function clickImageThumbnail(){
    casper.waitForSelector('.kc-front-item .content-attachment-frame',
      function success(){
        casper.wait(1000)
        casper.click('.kc-item.kc-front-item .content-attachment-frame')
        casper.wait(2000)
        phantomCSS.screenshot('.kc-front-item .content-attachment-actual-image')
      },
      function timeout(){
        this.test.fail('Should have seen the thumbnail image')
      })
  }
  // function goToKitchen(){

  //   // See gruntfile for example connect setup

  //   casper.thenOpen("http://localhost:9001/coffeemachine", function(){
  //     phantomCSS.turnOffAnimations();
  //   });
  // }

  // function goToMachine (){

  //   casper.click('#coffeemachinebutton');
  //   casper.waitForSelector(
  //     '#myModal:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should see coffee machine');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should see coffee machine');
  //     }
  //   );
  // }
  // function requestLatte_fail (){

  //   fakeNoMilk();

  //   casper.click('#latte-button');
  //   casper.waitForSelector(
  //     '.alert-danger:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should see no milk warning');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should see no milk warning');
  //     }
  //   );
  // }
  // function requestLatte_success (){

  //   fakePlentifulMilk();

  //   casper.click('#latte-button');
  //   casper.waitForSelector(
  //     '.alert-success:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should get latte');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should get latte');
  //     }
  //   );
  // }

  // function requestCappuccino_fail (){

  //   fakeNoMilk();

  //   casper.click('#cappuccino-button');
  //   casper.waitForSelector(
  //     '.alert-danger:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should see no milk warning');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should see no milk warning');
  //     }
  //   );
  // }
  // function requestCappuccino_success (){

  //   fakePlentifulMilk();

  //   casper.click('#cappuccino-button');
  //   casper.waitForSelector(
  //     '.alert-success:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should get cappuccino');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should get cappuccino');
  //     }
  //   );
  // }
  // function requestEspresso (){
  //   casper.click('#espresso-button');
  //   casper.waitForSelector(
  //     '.alert-danger[style*="display: none"]', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should see espresso choice');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should see espresso choice');
  //     }
  //   );
  // }
  // function requestSingleShot (){
  //   casper.click('#single-is-fine');
  //   casper.waitForSelector(
  //     '.alert-success:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should get single shot Espresso');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should get single shot Espresso');
  //     }
  //   );
  // }
  // function requestDoubleShot (){
  //   casper.click('#make-that-a-double');
  //   casper.waitForSelector(
  //     '.alert-success:not([style*="display: none"])', 
  //     function success(){
  //       phantomCSS.screenshot('#myModal .modal-content');
  //       casper.test.pass('Should get double shot Espresso');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should get double shot Espresso');
  //     }
  //   );
  // }
  // function walkAway (){
  //   casper.click('#close');

  //   casper.waitForSelector(
  //     '#myModal[style*="display: none"]',
  //     function success(){
  //       casper.test.pass('Should be able to walk away from the coffee machine');
  //     },
  //     function timeout(){
  //       casper.test.fail('Should be able to walk away from the coffee machine');
  //     }
  //   );
  // }

  // /*
  //   Test helpers
  // */

  // function fakeNoMilk(){
  //   casper.evaluate(function(){
  //     window.async_isThereMilk = function(callback){
  //       callback(false);
  //     };
  //   });
  // }

  // function fakePlentifulMilk(){
  //   casper.evaluate(function(){
  //     window.async_isThereMilk = function(callback){
  //       callback(true);
  //     };
  //   });
  // }

}());
