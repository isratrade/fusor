module.exports = function(app) {
  var express = require('express');
  var foremanTasksRouter = express.Router();

  foremanTasksRouter.get('/', function(req, res) {
    res.send({
      "data": [{
        "id": "db25a76f-e344-48ba-ac77-f29303586dbe",
        "type": "foreman_tasks",
        "attributes": {
          type: "ForemanTasks::Task::DynflowTask",
          label: "Actions::Fusor::Deploy",
          started_at: "2015-04-07 18:16:55",
          ended_at: null,
          state: "running",
          result: "success",
          progress: 1,
          external_id: "4f7ca3e7-8828-46df-a6f1-e6b07964efb1",
          parent_task_id: null
        }
      }, {
        "id": "aaaaa76f-e344-48ba-ac77-f29303586dbe",
        "type": "foreman_tasks",
        "attributes": {
          type: "ForemanTasks::Task::DynflowTask",
          label: "Actions::Fusor::Deploy",
          started_at: "2015-04-14 12:31:46",
          ended_at: null,
          state: "paused",
          result: "error",
          external_id: "4f7ca3e7-8828-46df-a6f1-e6b07964efb1",
          parent_task_id: null
        }
      }, {
        "id": "55fe84db-4a95-462c-83dd-704a08d3d8fe",
        "type": "foreman_tasks",
        "attributes": {
          type: "ForemanTasks::Task::DynflowTask",
          label: "Actions::Candlepin::ListenOnCandlepinEvents",
          started_at: "2015-04-07 18:16:55",
          ended_at: null,
          state: "paused",
          result: "pending",
          external_id: "9ed42d73-8621-4ebd-acdc-af84a52cbd9f",
          parent_task_id: null
        }
      }
    ],
    "links": {}
    });
  });

  foremanTasksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  foremanTasksRouter.get('/:id', function(req, res) {
    res.send({
      "data": {
        "id": "db25a76f-e344-48ba-ac77-f29303586dbe",
        "type": "foreman_tasks",
        "attributes": {
          type: "ForemanTasks::Task::DynflowTask",
          label: "Actions::Fusor::Deploy",
          started_at: "2015-04-07 18:16:55",
          ended_at: null,
          state: "running",
          result: "success",
          progress: 1,
          external_id: "4f7ca3e7-8828-46df-a6f1-e6b07964efb1",
          parent_task_id: null,
          "input": {
              "content_view": {
                  "id": 2,
                  "name": "Fusor Puppet Content",
                  "label": "Fusor_Puppet_Content"
              },
              "organization": {
                  "id": 1,
                  "name": "Default Organization",
                  "label": "Default_Organization"
              },
              "services_checked": [
                  "candlepin",
                  "candlepin_auth",
                  "pulp",
                  "pulp_auth",
                  "elasticsearch"
              ],
              "history_id": 1,
              "content_view_id": 2,
              "environment_id": 1,
              "user_id": 3,
              "current_user_id": 3,
              "locale": "en"
          },
          "output": {},
          "cli_example": null,
          "external_id": "932417d4-08fe-4ed1-b708-e56417c1c6e0",
          "humanized": {
              "action": "Deploy",
              "input": [
                  [
                      "content_view",
                      {
                          "text": "content view 'Fusor Puppet Content'",
                          "link": "#/content_views/2/versions"
                      }
                  ],
                  [
                      "organization",
                      {
                          "text": "organization 'Default Organization'",
                          "link": "/organizations/1/edit"
                      }
                  ]
              ],
              "output": "",
              "errors": []
          },
          "humanized_name": "Deploy",
          "humanized_input": "content_view; {:text=>\"content view 'Fusor Puppet Content'\", :link=>\"#/content_views/2/versions\"}; organization; {:text=>\"organization 'Default Organization'\", :link=>\"/organizations/1/edit\"}",
          "humanized_output": "",
          "humanized_errors": "",
          "parent_task": null,
          "sub_tasks": [],
          "running_steps": [],
          "failed_steps": [],
          "locks": [
              {
                  "exclusive": false,
                  "id": 30,
                  "name": "task_owner",
                  "resource_id": 3,
                  "resource_type": "User",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 31,
                  "name": "read",
                  "resource_id": 2,
                  "resource_type": "Katello::ContentView",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 32,
                  "name": "write",
                  "resource_id": 2,
                  "resource_type": "Katello::ContentView",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": false,
                  "id": 33,
                  "name": "link_resource",
                  "resource_id": 1,
                  "resource_type": "Organization",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 34,
                  "name": "read",
                  "resource_id": 1,
                  "resource_type": "Katello::ContentViewPuppetEnvironment",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 35,
                  "name": "write",
                  "resource_id": 1,
                  "resource_type": "Katello::ContentViewPuppetEnvironment",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 36,
                  "name": "read",
                  "resource_id": 2,
                  "resource_type": "Katello::ContentViewPuppetEnvironment",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              },
              {
                  "exclusive": true,
                  "id": 37,
                  "name": "write",
                  "resource_id": 2,
                  "resource_type": "Katello::ContentViewPuppetEnvironment",
                  "task_id": "4881089a-d4de-4ef0-a57d-7f6f0f60f34a"
              }
          ],
          "repository": null        }
        }
    });
  });

  app.use('/fusor/api/v3/foreman_tasks', foremanTasksRouter);
};
