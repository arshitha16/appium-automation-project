Feature: DAZN Fanzone on Android

    Scenario: Join an event with an active Fanzone
        Given user is on the Home tab
        When  joins the event from search
        Then user should be able to see the Fanzone

    Scenario: Send message functionality
        Given user is on the Fanzone
        And sees gamification popups if joining for the first time
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

    Scenario: Send reactions in the chat
        Given the smiling reaction is visible
        When the user drags the container, all 5 reactions are visible
        Then user should be able to send reactions in chat

