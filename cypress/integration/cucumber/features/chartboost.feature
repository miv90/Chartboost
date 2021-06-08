Feature: Chartboost

    Background: Go to home page
        Given the user goes to the page "video-QA-test\\video-v3-default-not-muted.html"
 
    Scenario: Validate the skip button
        Given the user goes to the home page
        When the user clicks to the skip button
        Then the end card is displayed

    Scenario: Validate that the video is paused and resumed
        When the user pauses the video
        Then the user should see the pause button
        And the user waits for "3" seconds
        And the user makes a call to resume the video
        Then the video should be playing

    Scenario: Validate that when entering the page the video is played and at the end the end card is shown
        Then the video should be playing
        And the user waits for "30" seconds
        Then the end card is displayed
        And the close button must be visible
        And the user clicks to the close button