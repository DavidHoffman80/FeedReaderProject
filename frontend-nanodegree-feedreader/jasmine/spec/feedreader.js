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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         function urlTest(allFeedsItem) {
            it(`should have a url of: ${allFeedsItem.url}`, function() {
                expect(allFeedsItem.url).toBeDefined();
                expect(allFeedsItem.url.length).not.toBe(0);
            });
         }

         /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         function nameTest(allFeedsName) {
            it(`should have a name of: ${allFeedsName.name}`, function() {
                expect(allFeedsName.name).toBeDefined();
                expect(allFeedsName.name.length).not.toBe(0);
            })
         }
		
		for(var i = 0; i < allFeeds.length; i++) {
            urlTest(allFeeds[i]);
            nameTest(allFeeds[i]);
        };     
        
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('should be hidden by default', function() {
            expect($('body')[0].className).toEqual('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('should show when clicked and hide when re-clicked', function() {
              let $menuLink = $('.menu-icon-link');
              $menuLink.trigger('click');
              expect($('body')[0].className).toBe('');
              $menuLink.trigger('click');
              expect($('body')[0].className).toBe('menu-hidden');
          });

    });

        

         

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
             loadFeed(0, function() {
                done();
             });
         });

         it('have at least 1 entry', function(done) {
             expect($('.feed .entry').length).toBeGreaterThan(0);
             done();
         });
    });

        

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let feedOne;
        let feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                done();
            });
        });

        it('content should change', function(done) {
            expect(feedOne).not.toEqual(feedTwo);
            done();
        });

    });
        
}());
