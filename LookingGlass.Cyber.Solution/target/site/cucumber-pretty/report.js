$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Dresses.feature");
formatter.feature({
  "name": "Dresses",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage displayed and verify the Dresses menu option available",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses link is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_dresses_link_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user at the homepage and verify the Dresses menu option is click and navigate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dresses menu option clicked and navigated to dresses homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dresses_menu_option_clicked_and_navigate_to_dresses_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Homepage.feature");
formatter.feature({
  "name": "Homepage feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify user homepage Displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user at homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the title of the homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logo Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verifyLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the Text (ALREADY REGISTERED?) is present in the Login Area",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ALREADY REGISTERED present in the Login Area",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.already_REGISTERED_present_in_the_Login_Area()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003cTestCase\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.step({
  "name": "enter the username \u003cusername\u003e and password \u003cPassword\u003e and click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user successfully login and navigate to userhomepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "username",
        "Password"
      ]
    },
    {
      "cells": [
        "Login with valid username with valid password",
        "mailtohassan2@gmail.com",
        "hassan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid username with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username mailtohassan2@gmail.com and password hassan and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully login and navigate to userhomepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_successfully_login_and_navigate_to_userhomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003cTestCases\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.step({
  "name": "enter the username \u003cusername\u003e and password \u003cPassword\u003e and click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "unsuccessful Login \u003cErrorMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCases",
        "username",
        "Password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Login with no email with valid password",
        "",
        "hassan",
        "An email address required."
      ]
    },
    {
      "cells": [
        "Login with valid email and no password",
        "mailtohassan2@gmail.com",
        "",
        "Password is required."
      ]
    },
    {
      "cells": [
        "Login with no email no password",
        "",
        "",
        "An email address required."
      ]
    },
    {
      "cells": [
        "Login with invalid username and valid password",
        "xxxxxxxxxxxxxx",
        "hassan",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "Login with valid username and invalid password",
        "mailtohassan2@gmail.com",
        "xxxxxx",
        "Authentication failed."
      ]
    },
    {
      "cells": [
        "Login with invalid username and invalid password",
        "$$$$$$$$$@gmail.com",
        "xxxxxx",
        "Authentication failed."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with no email with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username  and password hassan and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login An email address required.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid email and no password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username mailtohassan2@gmail.com and password  and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login Password is required.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with no email no password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username  and password  and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login An email address required.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username xxxxxxxxxxxxxx and password hassan and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login Invalid email address.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username mailtohassan2@gmail.com and password xxxxxx and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login Authentication failed.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Additional"
    }
  ]
});
formatter.step({
  "name": "Open the browser and enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_the_browser_and_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signin option clicked and navigated to Login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.signin_option_clicked_and_navigated_to_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the username $$$$$$$$$@gmail.com and password xxxxxx and click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_username_and_password_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unsuccessful Login Authentication failed.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.unsuccessful_Login_An_email_address_required(String)"
});
formatter.result({
  "status": "passed"
});
});