module.exports = function(app) {
  var express = require('express');
  var katelloOrganizationsRouter = express.Router();

  var katelloOrganizations = {
  "total": 1,
  "subtotal": 1,
  "page": 1,
  "per_page": 20,
  "search": null,
  "sort": {
    "by": null,
    "order": null
  },
  "results": [
    {
      "id": 1,
      "name": "Default Organization",
      "title": "Default Organization",
      "label": "Default_Organization",
      "created_at": "2015-11-05T08:40:31Z",
      "updated_at": "2015-11-05T08:45:36Z"
    }
  ]
};

  katelloOrganizationsRouter.get('/', function(req, res) {
    res.send(katelloOrganizations);
  });

  katelloOrganizationsRouter.get('/1', function(req, res) {
    res.send({
    "label": "Default_Organization",
    "owner_details": {
        "parentOwner": null,
        "id": "ff8080815414c963015414d4d9340001",
        "key": "Default_Organization",
        "displayName": "Default Organization",
        "contentPrefix": "/Default_Organization/$env",
        "defaultServiceLevel": null,
        "upstreamConsumer": null,
        "logLevel": null,
        "href": "/owners/Default_Organization",
        "created": "2016-04-14T12:52:54.196+0000",
        "updated": "2016-04-14T12:52:54.196+0000"
    },
    "redhat_repository_url": "https://cdn.redhat.com",
    "redhat_docker_registry_url": "https://registry.access.redhat.com",
    "service_levels": [],
    "service_level": null,
    "select_all_types": [],
    "description": null,
    "created_at": "2016-04-14T12:52:48Z",
    "updated_at": "2016-04-14T13:21:17Z",
    "id": 1,
    "name": "Default Organization",
    "title": "Default Organization",
    "users": [],
    "smart_proxies": [
        {
            "name": "sat61devg.example.com",
            "id": 1,
            "url": "https://sat61devg.example.com:9090"
        }
    ],
    "subnets": [
        {
            "id": 1,
            "name": "default",
            "network_address": "192.168.52.0/24"
        }
    ],
    "compute_resources": [],
    "media": [
        {
            "id": 1,
            "name": "CentOS mirror"
        }
    ],
    "config_templates": [
        {
            "id": 49,
            "name": "custom_deployment_repositories",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 43,
            "name": "Discovery Red Hat kexec",
            "template_kind_id": 9,
            "template_kind_name": "kexec"
        },
        {
            "id": 47,
            "name": "idm_register",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 18,
            "name": "Kickstart default",
            "template_kind_id": 4,
            "template_kind_name": "provision"
        },
        {
            "id": 22,
            "name": "Kickstart default iPXE",
            "template_kind_id": 3,
            "template_kind_name": "iPXE"
        },
        {
            "id": 21,
            "name": "Kickstart default PXELinux",
            "template_kind_id": 1,
            "template_kind_name": "PXELinux"
        },
        {
            "id": 39,
            "name": "kickstart_networking_setup",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 19,
            "name": "Kickstart RHEL default",
            "template_kind_id": 4,
            "template_kind_name": "provision"
        },
        {
            "id": 40,
            "name": "puppet.conf",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 2,
            "name": "PXELinux default local boot",
            "template_kind_id": 1,
            "template_kind_name": "PXELinux"
        },
        {
            "id": 1,
            "name": "PXELinux global default",
            "template_kind_id": 1,
            "template_kind_name": "PXELinux"
        },
        {
            "id": 41,
            "name": "redhat_register",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 44,
            "name": "Satellite Kickstart Default",
            "template_kind_id": 4,
            "template_kind_name": "provision"
        },
        {
            "id": 46,
            "name": "Satellite Kickstart Default Finish",
            "template_kind_id": 5,
            "template_kind_name": "finish"
        },
        {
            "id": 45,
            "name": "Satellite Kickstart Default User Data",
            "template_kind_id": 7,
            "template_kind_name": "user_data"
        },
        {
            "id": 50,
            "name": "ssh_public_key",
            "template_kind_id": null,
            "template_kind_name": null
        },
        {
            "id": 48,
            "name": "subscription_manager_registration",
            "template_kind_id": null,
            "template_kind_name": null
        }
    ],
    "domains": [
        {
            "id": 1,
            "name": "example.com"
        }
    ],
    "environments": [
        {
            "name": "KT_Default_Organization_Library_Fusor_Puppet_Content_2",
            "id": 3
        }
    ],
    "hostgroups": [
        {
            "id": 1,
            "name": "Fusor Base",
            "title": "Fusor Base"
        }
    ],
    "locations": [],
    "parameters": [],
    "default_content_view_id": 1,
    "library_id": 1
}

    );
  });

  app.use('/katello/api/v2/organizations', katelloOrganizationsRouter);
};
