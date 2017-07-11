
(function(){

  /*
    User flows described in one decision tree
  */

  flow("Carousel baseline", function(){
    step("Go to the carousel page", goToCarousel);
    step("Click the right button", clickRightArrow);
    step("Click the share button", clickShareButton);
    // step("Click the image thumbnail", clickImageThumbnail);
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

  function goToCarousel(){
    casper.thenOpen("http://lemonsarebetter.herokuapp.com/widget.php?network=build-validator-staging-s2.fyre.co&site=305506&articleId=screenshotDiff2&appType=carousel")
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
