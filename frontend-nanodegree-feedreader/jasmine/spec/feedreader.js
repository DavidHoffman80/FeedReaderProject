/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
        This test is used to make sure that the allFeeds.url
        exhists and is longer than 0.
        */
         function urlTest(allFeedsItem) {
            it(`should have a url of: ${allFeedsItem.url}`, function() {
                expect(allFeedsItem.url).toBeTruthy();
            });
         }

         /*
        This test is used to make sure that the allFeeds.name
        exhists and is longer than 0.
        */
         function nameTest(allFeedsName) {
            it(`should have a name of: ${allFeedsName.name}`, function() {
                expect(allFeedsName.name).toBeTruthy();
            })
         }
        
         /*
         this loops through the allFeeds array and calls the
         2 above functions.
         */
		for(var i = 0; i < allFeeds.length; i++) {
            urlTest(allFeeds[i]);
            nameTest(allFeeds[i]);
        };     
        
    });

    // The menu test suite
    describe('The menu', function() {

        /*
        This test makes sure that the menu is hidden by default.
        */
         it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /*
         This test makes sure that when the menu button is clicked
         the menu becomes visible and when it is clicked again the
         menu is hidden again.
         */
          it('should show when clicked and hide when re-clicked', function() {
              let $menuLink = $('.menu-icon-link');
              $menuLink.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(false);
              $menuLink.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    // Initial Entries test suite
    describe('Initial Entries', function() {

        /*
        Before the test, call the loadFeed function and pass in done().
        */
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         /*
         make sure that at least 1 entry is placed into the .feed container.
         */
         it('have at least 1 entry', function(done) {
             expect($('.feed .entry').length).toBeGreaterThan(0);
             done();
         });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', function() {

        // The 2 variables used in the async call
        let feedOne;
        let feedTwo;

        /*
        before the test call the loadFeed function, I set the feedOne variable to the html inside of the .feed container.
        Then I call loadFeed again(nested) and set the variable feedTwo to the html inside of the .feed container.
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                loadFeed(1, function() {
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });

        /*
        This test compares feedOne to feedTwo and makes sure that they are different from eachother.
        */
        it('content should change', function(done) {
            expect(feedOne).not.toEqual(feedTwo);
            done();
        });

    });
        
}());
