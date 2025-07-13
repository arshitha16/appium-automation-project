Feature: DAZN Fanzone on Android

    Scenario: Login as a user on Android
        Given user is on the Dazn home page
        When user taps on the login button
        And user is redirected to the Dazn login screen
        When user enters valid credentials
        Then user should be logged in successfully

    Scenario: Join an event with an active Fanzone
        Given user is on the Home tab
        When  joins the event from search
        Then user should be able to see the Fanzone

    Scenario: Send message functionality
        Given user is on the Fanzone
        When user taps the chat field and types a message "Let’s go team!"
        Then the send button should be visible
        When user taps the send button
        Then user message "Let’s go team!" should be sent in the chat

    Scenario: Send GIF's and stickers in chat
        Given user is on the Fanzone
        When user taps the GIF button
        Then the GIF panel should open up
        When user taps on a GIF
        Then the GIF should be sent in the chat
