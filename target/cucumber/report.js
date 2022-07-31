$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaunchUrl.feature");
formatter.feature({
  "line": 1,
  "name": "ToDoMVC Url Launch",
  "description": "",
  "id": "todomvc-url-launch",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "launch url for ToDoMVC",
  "description": "",
  "id": "todomvc-url-launch;launch-url-for-todomvc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigates to url provided",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user handles advanced button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is displayed Home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchUrlSD.user_is_on_chome_browser()"
});
formatter.result({
  "duration": 7531414455,
  "status": "passed"
});
formatter.match({
  "location": "LaunchUrlSD.user_navigates_to_url()"
});
formatter.result({
  "duration": 2176776467,
  "status": "passed"
});
formatter.match({
  "location": "LaunchUrlSD.user_is_displayed_home_screen()"
});
formatter.result({
  "duration": 89519481,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "todomvc-url-launch;user-creates-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter new ToDo item As \"\u003cToDoItemlist\u003e\" in Textbox and submit it",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System Validate with Message As \"\u003cValidation\u003e\" list\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "todomvc-url-launch;user-creates-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItemlist",
        "Validation"
      ],
      "line": 15,
      "id": "todomvc-url-launch;user-creates-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is added to the List"
      ],
      "line": 16,
      "id": "todomvc-url-launch;user-creates-todo-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "todomvc-url-launch;user-creates-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter new ToDo item As \"Create a framework\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System Validate with Message As \"ToDo Item is added to the List\" list\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchUrlSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 76781651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 29
    }
  ],
  "location": "LaunchUrlSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 575504378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List\" list",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 91771198,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User completes 1st ToDo Item from list",
  "description": "",
  "id": "todomvc-url-launch;user-completes-1st-todo-item-from-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User choose \"\u003cToDoItems\u003e\" from list to mark it completed",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Selected Item is marked as completed with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "todomvc-url-launch;user-completes-1st-todo-item-from-list;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 25,
      "id": "todomvc-url-launch;user-completes-1st-todo-item-from-list;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is marked completed successful"
      ],
      "line": 26,
      "id": "todomvc-url-launch;user-completes-1st-todo-item-from-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "User completes 1st ToDo Item from list",
  "description": "",
  "id": "todomvc-url-launch;user-completes-1st-todo-item-from-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User choose \"Create a framework\" from list to mark it completed",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Selected Item is marked as completed with Message As \"ToDo Item is marked completed successful\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchUrlSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 54785964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 13
    }
  ],
  "location": "LaunchUrlSD.user_select_from_list_to_mark_it_completed(String)"
});
formatter.result({
  "duration": 371566670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is marked completed successful",
      "offset": 54
    }
  ],
  "location": "LaunchUrlSD.selected_Item_is_marked_completed_with_Message_As(String)"
});
formatter.result({
  "duration": 87508488,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "User wants to clear completed ToDo Item from list",
  "description": "",
  "id": "todomvc-url-launch;user-wants-to-clear-completed-todo-item-from-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User click on clear complete button for \"\u003cToDoItems\u003e\" from list",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Completed Item is deleted with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "todomvc-url-launch;user-wants-to-clear-completed-todo-item-from-list;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 35,
      "id": "todomvc-url-launch;user-wants-to-clear-completed-todo-item-from-list;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is marked completed successful"
      ],
      "line": 36,
      "id": "todomvc-url-launch;user-wants-to-clear-completed-todo-item-from-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "User wants to clear completed ToDo Item from list",
  "description": "",
  "id": "todomvc-url-launch;user-wants-to-clear-completed-todo-item-from-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User is on ToDoMVC application Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User click on clear complete button for \"Create a framework\" from list",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Completed Item is deleted with Message As \"ToDo Item is marked completed successful\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchUrlSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 63643470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 41
    }
  ],
  "location": "LaunchUrlSD.user_click_on_clear_complete_from_list(String)"
});
formatter.result({
  "duration": 320833490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is marked completed successful",
      "offset": 43
    }
  ],
  "location": "LaunchUrlSD.completed_item_is_deleted_with_Message_As(String)"
});
formatter.result({
  "duration": 773087285,
  "status": "passed"
});
formatter.uri("ToDoMVC_Manage.feature");
formatter.feature({
  "line": 1,
  "name": "Manage my todo list",
  "description": "",
  "id": "manage-my-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to URL Domain",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Advanced button",
  "keyword": "And "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_Open_Browser()"
});
formatter.result({
  "duration": 3258857635,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.navigate_to_URL_Domain()"
});
formatter.result({
  "duration": 1821735562,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_Advanced_button()"
});
formatter.result({
  "duration": 1185214118,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Enter ToDo item As \"\u003cToDoItems\u003e\" in Textbox and submit it",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System Validate with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 14,
      "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is added to the List"
      ],
      "line": 15,
      "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;2"
    },
    {
      "cells": [
        "List Down All the test cases from user Story",
        "ToDo Item is added to the List"
      ],
      "line": 16,
      "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;3"
    },
    {
      "cells": [
        "Create feature file for all TCs",
        "ToDo Item is added to the List"
      ],
      "line": 17,
      "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;4"
    },
    {
      "cells": [
        "Implement feature file with selenium script",
        "ToDo Item is added to the List"
      ],
      "line": 18,
      "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Enter ToDo item As \"Create a framework\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System Validate with Message As \"ToDo Item is added to the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 82052424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 25
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 453856739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 82911125,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Enter ToDo item As \"List Down All the test cases from user Story\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System Validate with Message As \"ToDo Item is added to the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 47693081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List Down All the test cases from user Story",
      "offset": 25
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 523205722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 66081505,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Enter ToDo item As \"Create feature file for all TCs\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System Validate with Message As \"ToDo Item is added to the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 76729811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create feature file for all TCs",
      "offset": 25
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 488106756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 88713647,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User creates todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-creates-todo-list-on-todomvc;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Enter ToDo item As \"Implement feature file with selenium script\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System Validate with Message As \"ToDo Item is added to the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 67360574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Implement feature file with selenium script",
      "offset": 25
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 498611347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 67960587,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "User completes 1st ToDo Item from list",
  "description": "",
  "id": "manage-my-todo-list;user-completes-1st-todo-item-from-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User select \"\u003cToDoItems\u003e\" from list to mark it completed",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Selected Item is marked completed with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-completes-1st-todo-item-from-list;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 27,
      "id": "manage-my-todo-list;user-completes-1st-todo-item-from-list;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is marked completed successful"
      ],
      "line": 28,
      "id": "manage-my-todo-list;user-completes-1st-todo-item-from-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "User completes 1st ToDo Item from list",
  "description": "",
  "id": "manage-my-todo-list;user-completes-1st-todo-item-from-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User select \"Create a framework\" from list to mark it completed",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Selected Item is marked completed with Message As \"ToDo Item is marked completed successful\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 46782026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 13
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_select_from_list_to_mark_it_completed(String)"
});
formatter.result({
  "duration": 364353682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is marked completed successful",
      "offset": 51
    }
  ],
  "location": "ManageToDoMVCItemsSD.selected_Item_is_marked_completed_with_Message_As(String)"
});
formatter.result({
  "duration": 88178306,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "User added 1 new item to todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-added-1-new-item-to-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User Enter ToDo item As \"\u003cToDoItems\u003e\" in Textbox and submit it",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "System Validate with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-added-1-new-item-to-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 37,
      "id": "manage-my-todo-list;user-added-1-new-item-to-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Executes all the TCs developed",
        "ToDo Item is added to the List"
      ],
      "line": 38,
      "id": "manage-my-todo-list;user-added-1-new-item-to-todo-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "User added 1 new item to todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-added-1-new-item-to-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User Enter ToDo item As \"Executes all the TCs developed\" in Textbox and submit it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "System Validate with Message As \"ToDo Item is added to the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 57312281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executes all the TCs developed",
      "offset": 25
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_Enter_ToDo_item_As_in_Textbox(String)"
});
formatter.result({
  "duration": 499353536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is added to the List",
      "offset": 33
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_with_Message_As(String)"
});
formatter.result({
  "duration": 83901738,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "User wants to check completed todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-completed-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User Click on Completed filter",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "System Validate Completed \"\u003cToDoItems\u003e\" with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-completed-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 47,
      "id": "manage-my-todo-list;user-wants-to-check-completed-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is there in completed List"
      ],
      "line": 48,
      "id": "manage-my-todo-list;user-wants-to-check-completed-todo-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "User wants to check completed todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-completed-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User Click on Completed filter",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "System Validate Completed \"Create a framework\" with Message As \"ToDo Item is there in completed List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 58819242,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_completed_filter()"
});
formatter.result({
  "duration": 356222453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 27
    },
    {
      "val": "ToDo Item is there in completed List",
      "offset": 64
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_validate_completed_with_Message_As(String,String)"
});
formatter.result({
  "duration": 32723551,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "User wants to check Active todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User Click on Active filter",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System Validate Active \"\u003cToDoItems\u003e\" with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 57,
      "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "List Down All the test cases from user Story",
        "ToDo Active Item is present in the List"
      ],
      "line": 58,
      "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;2"
    },
    {
      "cells": [
        "Create feature file for all TCs",
        "ToDo Active Item is present in the List"
      ],
      "line": 59,
      "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;3"
    },
    {
      "cells": [
        "Implement feature file with selenium script",
        "ToDo Active Item is present in the List"
      ],
      "line": 60,
      "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;4"
    },
    {
      "cells": [
        "Executes all the TCs developed",
        "ToDo Active Item is present in the List"
      ],
      "line": 61,
      "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "User wants to check Active todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User Click on Active filter",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System Validate Active \"List Down All the test cases from user Story\" with Message As \"ToDo Active Item is present in the List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 47350729,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_active_filter()"
});
formatter.result({
  "duration": 338341654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List Down All the test cases from user Story",
      "offset": 24
    },
    {
      "val": "ToDo Active Item is present in the List",
      "offset": 87
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_Active_with_Message_As(String,String)"
});
formatter.result({
  "duration": 85561141,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "User wants to check Active todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User Click on Active filter",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System Validate Active \"Create feature file for all TCs\" with Message As \"ToDo Active Item is present in the List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 45571221,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_active_filter()"
});
formatter.result({
  "duration": 323322851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create feature file for all TCs",
      "offset": 24
    },
    {
      "val": "ToDo Active Item is present in the List",
      "offset": 74
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_Active_with_Message_As(String,String)"
});
formatter.result({
  "duration": 105903584,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "User wants to check Active todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User Click on Active filter",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System Validate Active \"Implement feature file with selenium script\" with Message As \"ToDo Active Item is present in the List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 50111611,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_active_filter()"
});
formatter.result({
  "duration": 270159848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Implement feature file with selenium script",
      "offset": 24
    },
    {
      "val": "ToDo Active Item is present in the List",
      "offset": 86
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_Active_with_Message_As(String,String)"
});
formatter.result({
  "duration": 108787650,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "User wants to check Active todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-active-todo-list-on-todomvc;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User Click on Active filter",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "System Validate Active \"Executes all the TCs developed\" with Message As \"ToDo Active Item is present in the List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 50251733,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_active_filter()"
});
formatter.result({
  "duration": 269638878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executes all the TCs developed",
      "offset": 24
    },
    {
      "val": "ToDo Active Item is present in the List",
      "offset": 73
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_Validate_Active_with_Message_As(String,String)"
});
formatter.result({
  "duration": 138745701,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "User wants to check All todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-all-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User Click on All filter",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "System Validate All filter for \"\u003cToDoItems\u003e\" with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-all-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 70,
      "id": "manage-my-todo-list;user-wants-to-check-all-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is there in All List"
      ],
      "line": 71,
      "id": "manage-my-todo-list;user-wants-to-check-all-todo-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "User wants to check All todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-check-all-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User Click on All filter",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "System Validate All filter for \"Create a framework\" with Message As \"ToDo Item is there in All List\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 67245602,
  "status": "passed"
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_click_on_all_filter()"
});
formatter.result({
  "duration": 347600025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 32
    },
    {
      "val": "ToDo Item is there in All List",
      "offset": 69
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_validate_all_filter(String,String)"
});
formatter.result({
  "duration": 111110199,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "User wants to delete completed items from todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-delete-completed-items-from-todo-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User select completed \"\u003cToDoItems\u003e\" from list to delete it",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Selected Item is deleted with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-delete-completed-items-from-todo-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ToDoItems",
        "Validation"
      ],
      "line": 80,
      "id": "manage-my-todo-list;user-wants-to-delete-completed-items-from-todo-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Create a framework",
        "ToDo Item is deleted from the List"
      ],
      "line": 81,
      "id": "manage-my-todo-list;user-wants-to-delete-completed-items-from-todo-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 81,
  "name": "User wants to delete completed items from todo list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-delete-completed-items-from-todo-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User select completed \"Create a framework\" from list to delete it",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Selected Item is deleted with Message As \"ToDo Item is deleted from the List\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 63838512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create a framework",
      "offset": 23
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_select_completed_from_list_to_delete_it(String)"
});
formatter.result({
  "duration": 439130499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is deleted from the List",
      "offset": 42
    }
  ],
  "location": "ManageToDoMVCItemsSD.selected_Item_is_deleted_with_Message_As(String)"
});
formatter.result({
  "duration": 36832794,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "User wants to edit particular todo item from list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-edit-particular-todo-item-from-list-on-todomvc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on \"\u003cExistingToDoItems\u003e\" to edit it with \"\u003cNewToDoItems\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "System Validate after editing ToDO Item with Message As \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-edit-particular-todo-item-from-list-on-todomvc;",
  "rows": [
    {
      "cells": [
        "ExistingToDoItems",
        "NewToDoItems",
        "Validation"
      ],
      "line": 91,
      "id": "manage-my-todo-list;user-wants-to-edit-particular-todo-item-from-list-on-todomvc;;1"
    },
    {
      "cells": [
        "Executes all the TCs developed",
        "in Cucumber",
        "ToDo Item is edited successfully"
      ],
      "line": 92,
      "id": "manage-my-todo-list;user-wants-to-edit-particular-todo-item-from-list-on-todomvc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 92,
  "name": "User wants to edit particular todo item from list on ToDoMVC",
  "description": "",
  "id": "manage-my-todo-list;user-wants-to-edit-particular-todo-item-from-list-on-todomvc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "User is on ToDoMVC Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on \"Executes all the TCs developed\" to edit it with \"in Cucumber\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "System Validate after editing ToDO Item with Message As \"ToDo Item is edited successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageToDoMVCItemsSD.user_is_on_ToDoMVC_Home_Page()"
});
formatter.result({
  "duration": 54348144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executes all the TCs developed",
      "offset": 15
    },
    {
      "val": "in Cucumber",
      "offset": 64
    }
  ],
  "location": "ManageToDoMVCItemsSD.user_click_on_Item_to_edit_with_newItem(String,String)"
});
formatter.result({
  "duration": 679789621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToDo Item is edited successfully",
      "offset": 57
    }
  ],
  "location": "ManageToDoMVCItemsSD.system_validate_with_Message_As(String)"
});
formatter.result({
  "duration": 730403723,
  "status": "passed"
});
});