module.exports = function(app) {
  var express = require('express');
  var deploymentPlanRouter = express.Router();

  deploymentPlanRouter.get('/', function(req, res) {
    res.send({
      'deployment-plan': []
    });
  });

  deploymentPlanRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  deploymentPlanRouter.get('/:id/deployment_plans/overcloud', function(req, res) {
    res.send({
    "deployment_plan": {
        "created_at": "2015-10-21T13:52:42",
        "description": null,
        "name": "overcloud",
        "parameters": [
            {
                "constraints": [],
                "default": "",
                "description": "If set, the contents of an SSL certificate .key file for encrypting SSL endpoints.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::SSLKey",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": false,
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::RabbitClientUseSSL",
                "parameter_type": "string",
                "value": false
            },
            {
                "constraints": [],
                "default": "",
                "description": "Keystone certificate for verifying token validity.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeystoneSSLCertificate",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": 3,
                "description": "The number of neutron dhcp agents to schedule per network",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronDhcpAgentsPerNetwork",
                "parameter_type": "number",
                "value": 3
            },
            {
                "constraints": [],
                "default": {},
                "description": "Contains parameters to configure Cinder backends. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderBackendConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": 5000,
                "description": "The size of the loopback file used by the cinder LVM driver.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderLVMLoopDeviceSize",
                "parameter_type": "number",
                "value": 5000
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronTunnelIdRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the keystone admin account, used for monitoring, querying neutron etc.",
                "hidden": true,
                "label": null,
                "name": "Compute-1::AdminPassword",
                "parameter_type": "string",
                "value": "179e6e4d6167b380bd8ec5009f81b00132f91bbe"
            },
            {
                "constraints": [],
                "default": true,
                "description": "Whether to enable or not the Iscsi backend for Cinder",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::CinderEnableIscsiBackend",
                "parameter_type": "boolean",
                "value": true
            },
            {
                "constraints": [],
                "default": [],
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Controller-1::removal_policies",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the nova service and db account, used by nova-api.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::NovaPassword",
                "parameter_type": "string",
                "value": "206899979d82609ad134f36c21f62b3fd6f823b6"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Shared secret to prevent spoofing",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronMetadataProxySharedSecret",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "range",
                        "definition": {
                            "min": "0"
                        },
                        "description": null
                    }
                ],
                "default": null,
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Controller-1::count",
                "parameter_type": "number",
                "value": "1"
            },
            {
                "constraints": [],
                "default": "9292",
                "description": "Glance port.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::GlancePort",
                "parameter_type": "string",
                "value": "9292"
            },
            {
                "constraints": [],
                "default": "",
                "description": "VLAN tag for creating a public VLAN. The tag will be used to create an access port on the exterior bridge for each control plane node, and that port will be given the IP address returned by neutron from the public network. Set CONTROLEXTRA=overcloud-vlan-port.yaml when compiling overcloud.yaml to include the deployment of VLAN ports to the control plane.\n",
                "hidden": null,
                "label": null,
                "name": "NeutronPublicInterfaceTag",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "%stackname%-controller-%index%",
                "description": "Format for Controller node hostnames",
                "hidden": null,
                "label": null,
                "name": "ControllerHostnameFormat",
                "parameter_type": "string",
                "value": "%stackname%-controller-%index%"
            },
            {
                "constraints": [],
                "default": "ro_snmp_user",
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SnmpdReadonlyUserName",
                "parameter_type": "string",
                "value": "ro_snmp_user"
            },
            {
                "constraints": [],
                "default": "openvswitch",
                "description": "The mechanism drivers for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'openvswitch,l2_population'\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronMechanismDrivers",
                "parameter_type": "string",
                "value": "openvswitch"
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::NtpServer",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Set to true to enable package installation via Puppet",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::EnablePackageInstall",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "range",
                        "definition": {
                            "min": "0"
                        },
                        "description": null
                    }
                ],
                "default": null,
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::count",
                "parameter_type": "number",
                "value": "0"
            },
            {
                "constraints": [],
                "default": "default",
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::KeyName",
                "parameter_type": "string",
                "value": "default"
            },
            {
                "constraints": [],
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ImageUpdatePolicy",
                "parameter_type": "string",
                "value": "REBUILD_PRESERVE_EPHEMERAL"
            },
            {
                "constraints": [],
                "default": true,
                "description": "Whether to deploy a LoadBalancer on the Controller",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnableLoadBalancer",
                "parameter_type": "boolean",
                "value": true
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronTunnelIdRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::UpdateIdentifier",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NovaComputeLibvirtType",
                "parameter_type": "string",
                "value": "qemu"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the keystone admin account, used for monitoring, querying neutron etc.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::AdminPassword",
                "parameter_type": "string",
                "value": "179e6e4d6167b380bd8ec5009f81b00132f91bbe"
            },
            {
                "constraints": [],
                "default": 1,
                "description": "The minimum time (in hours) before a partition in a ring can be moved following a rebalance.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SwiftMinPartHours",
                "parameter_type": "number",
                "value": 1
            },
            {
                "constraints": [],
                "default": {},
                "description": "Controller specific hiera configuration data to inject into the cluster.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ControllerExtraConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": 5672,
                "description": "Set rabbit subscriber port, change this if using SSL",
                "hidden": null,
                "label": null,
                "name": "Controller-1::RabbitClientPort",
                "parameter_type": "number",
                "value": 5672
            },
            {
                "constraints": [],
                "default": "",
                "description": "The Ceph client key. Can be created with ceph-authtool --gen-print-key. Currently only used for external Ceph deployments to create the openstack user keyring.",
                "hidden": null,
                "label": null,
                "name": "CephClientKey",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::NtpServer",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "default",
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::KeyName",
                "parameter_type": "string",
                "value": "default"
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [],
                "default": "True",
                "description": "Allow automatic l3-agent failover",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronAllowL3AgentFailover",
                "parameter_type": "string",
                "value": "True"
            },
            {
                "constraints": [],
                "default": "libvirt.LibvirtDriver",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NovaComputeDriver",
                "parameter_type": "string",
                "value": "libvirt.LibvirtDriver"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.flavor",
                        "description": null
                    }
                ],
                "default": null,
                "description": "Flavor for block storage nodes to request when deploying.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::Flavor",
                "parameter_type": "string",
                "value": "baremetal"
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronVniRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Keystone key for signing tokens.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::KeystoneSigningKey",
                "parameter_type": "string",
                "value": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHkLoL76AZGS9d\nFKnXSKHiBuylH6+x6cBg5vW1LEMyGUE123hrw1VOR+Wkn7g9AgZFHi70rYZnYeyg\nBMGZOjDJrPAYwY0hzdjcTZPB6fysxob852a+Jb5T+4c/ZZKRuk9wAISNYe1Aoewi\nL93pugSm/WMipr9nG7i3+cMhIKVhugUv4dBeyRN/zkVpZ5Lerzy1ohtbHl9d/tZ2\n6Z443OtW3449sFCHorA9YdtIL2/V6VtQaih8obfAvuSVNpodXrmimridSeGLSXS3\nnALyRVXiZfLSSIjvDu7cwoFJziwhonfL2WJUzFwxR8CSs0n3R+pZoxmXUfQo/KPF\ny3/PwlppAgMBAAECggEAdd841FX7tPdYL11GF99RpoQ6gClgB/Ct7U5dcF4tbkjW\naG4yCUx9dVgn/n1MP9STSX3TdDeN/EAtmDJW+x8Qs/4ObkDcEExaO30iudVvpck4\n7+XpnIQEj+wv7TUcRjDKPLhBkpR1oshBBcxKAYQavVtKk6vzv33zM880/rsek8JV\npQnfdiVeWQpSdV0KOz32BEvW7HGt+IHQCtm2ohpw+/De7Micn6TlzFoa2wHM5CZT\n/4C00Ytqo2EElO/NGjtX1Ehb6Y4/qE00OCmttwixIfniq18Wx+UnsDzLUPLBBcLJ\nE0iG4iuUHc1HSa2sFvDhphd8fwSrR3Xe7ckLeLuuFQKBgQDp+pVi8ts0GH+5xnVg\nw+ia+EckBuQMtFwb96HIBUx9BbBnmg0D7PJhlwE+e1AJ3hwaGaAWDS/m5g2+kkXg\n6ZU1P7c9EC5ufmwWWsWTy348BIVphB/qwTfjMq2EvMElYt9B6Qdh0oLvzAWSiK50\n9egsVsGzrhCmlMZ+M4koZ0iVwwKBgQDaWP6Y2GrWTq42Wf8WiACahB3sK5WNfO/R\nXmS/XcwTuTwKm2nwJzUzmWi4HqTDnxFTdHz4ZYJ3oIClTQPZaosolLMp2WYe1mrH\n0XrOP4d40XT4j8kXm9Qm0Q1FhoXfxMnl1Gs6VsRrH4zWpjjhpW8bpQcyWXAcbv1y\ndHc6PNbQYwKBgFliDOd79xlzsnd5xSVuMdHhvuuYZk4kKHvWocsTmyC3p6gsRYSW\nZBG76hHAcdcTLpEZ8Pn7l60RfXar0l4VXZa1/H4rTFGRoiD4FDpdpp+u6nhgrQC1\nR3BXz8nBgdeSac94AgXwsWyB+C7+YAb2Wfd2PREzEdFRTHKxpVf1/NiZAoGAHpka\nFJE/Z4jfIP67oIyuiPi6uL3i11EKymxP8gFS9/CdWV8uGVllOzXkVuj0bfV8mBVa\n7fRLtDfpz0BbqbwkhCtScCrnBKtHi3jvnLeKZIP1wF9l7skHkej50yRm3lTVdj+u\nRx6hp+Fj+zCQCA8G4vjdaVDfRRzIp6Fqk96yu8ECgYEA3fOZeK8SAvTIQd5H2fJ+\nvgh9vhEnk8f8zMfjvaONkJcrhL/vb9TcIDCvkNH9bRJBelgjsK10ESN5iOXRS7BS\nNSwzwK3TaeED/xKID0bEV9SQBskKJCsFuUjaqa4cNGvjpYKW+mBYElEHyHl1/PJY\nDrpsKiHoBkR4CuCIHlm4/1Y=\n-----END PRIVATE KEY-----"
            },
            {
                "constraints": [],
                "default": "guest",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::RabbitUserName",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "range",
                        "definition": {
                            "min": "0"
                        },
                        "description": null
                    }
                ],
                "default": null,
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::count",
                "parameter_type": "number",
                "value": "1"
            },
            {
                "constraints": [],
                "default": "",
                "description": "If set, the contents of an SSL certificate authority file.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SSLCACertificate",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Set to true to enable package installation via Puppet",
                "hidden": null,
                "label": null,
                "name": "Compute-1::EnablePackageInstall",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Mount options for NFS mounts used by Cinder NFS backend. Effective when CinderEnableNfsBackend is true.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderNfsMountOptions",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the Heat service and db account, used by the Heat services.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::HeatPassword",
                "parameter_type": "string",
                "value": "816724863d42b9974185fae5a815f518fb96aa8c"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "range",
                        "definition": {
                            "min": "0"
                        },
                        "description": null
                    }
                ],
                "default": null,
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::count",
                "parameter_type": "number",
                "value": "0"
            },
            {
                "constraints": [],
                "default": true,
                "description": "Whether to enable Swift Storage on the Controller",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnableSwiftStorage",
                "parameter_type": "boolean",
                "value": true
            },
            {
                "constraints": [],
                "default": 3,
                "description": "How many replicas to use in the swift rings.",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::Replicas",
                "parameter_type": "number",
                "value": 3
            },
            {
                "constraints": [],
                "default": "vxlan",
                "description": "The tenant network type for Neutron, either gre or vxlan.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronNetworkType",
                "parameter_type": "string",
                "value": "gre"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the neutron service and db account, used by neutron agents.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::NeutronPassword",
                "parameter_type": "string",
                "value": "5bde587ef0f70045bb98fa74ad36baf16dd7edd1"
            },
            {
                "constraints": [],
                "default": [],
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::removal_policies",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": true,
                "label": null,
                "name": "Cinder-Storage-1::SnmpdReadonlyUserPassword",
                "parameter_type": "string",
                "value": "c19d9ac749bedab0134a638fe6fed8887b985d70"
            },
            {
                "constraints": [],
                "default": "vxlan,vlan,flat,gre",
                "description": "Comma-seperated list of network type driver entrypoints to be loaded.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronTypeDrivers",
                "parameter_type": "comma_delimited_list",
                "value": "vxlan,vlan,flat,gre"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the swift service account, used by the swift proxy services.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::SwiftPassword",
                "parameter_type": "string",
                "value": "e54db56e7b513186c269ef3b80cab6f720a40ec7"
            },
            {
                "constraints": [],
                "default": "ml2",
                "description": "The core plugin for Neutron. The value should be the entrypoint to be loaded\nfrom neutron.core_plugins namespace.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronCorePlugin",
                "parameter_type": "string",
                "value": "ml2"
            },
            {
                "constraints": [],
                "default": "",
                "description": "The filepath of the file to use for logging messages from Glance.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceLogFile",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronVniRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": "ro_snmp_user",
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": null,
                "label": null,
                "name": "Compute-1::SnmpdReadonlyUserName",
                "parameter_type": "string",
                "value": "ro_snmp_user"
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "NeutronTunnelIdRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": {},
                "description": "Additional configuration to inject into the cluster. The JSON should have\nthe following structure:\n  {\"FILEKEY\":\n    {\"config\":\n      [{\"section\": \"SECTIONNAME\",\n        \"values\":\n          [{\"option\": \"OPTIONNAME\",\n            \"value\": \"VALUENAME\"\n           }\n          ]\n       }\n      ]\n    }\n  }\nFor instance:\n  {\"nova\":\n    {\"config\":\n      [{\"section\": \"default\",\n        \"values\":\n          [{\"option\": \"force_config_drive\",\n            \"value\": \"always\"\n           }\n          ]\n       },\n       {\"section\": \"cells\",\n        \"values\":\n          [{\"option\": \"driver\",\n            \"value\": \"nova.cells.rpc_driver.CellsRPCDriver\"\n           }\n          ]\n       }\n      ]\n    }\n  }\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::ExtraConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to make Glance file backend a mount managed by Pacemaker. Effective when GlanceBackend is 'file'.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceFilePcmkManage",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "A random string to be used as a salt when hashing to determine mappings in the ring.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::SwiftHashSuffix",
                "parameter_type": "string",
                "value": "bfd720c1f5fbb4094ec04335bb42deb409da05b2"
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Controller-1::NtpServer",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": 1,
                "description": "The minimum time (in hours) before a partition in a ring can be moved following a rebalance.",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::MinPartHours",
                "parameter_type": "number",
                "value": 1
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the ceilometer service  and db account.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::CeilometerPassword",
                "parameter_type": "string",
                "value": "4acad9f359b5b1619edf1492e3caeb85c10fe53f"
            },
            {
                "constraints": [],
                "default": "",
                "description": "The Ceph admin client key. Can be created with ceph-authtool --gen-print-key.",
                "hidden": null,
                "label": null,
                "name": "CephAdminKey",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": 5000,
                "description": "The size of the loopback file used by the cinder LVM driver.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::CinderLVMLoopDeviceSize",
                "parameter_type": "number",
                "value": 5000
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Set to true to enable package installation via Puppet",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnablePackageInstall",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "range",
                        "definition": {
                            "min": "0"
                        },
                        "description": null
                    }
                ],
                "default": null,
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::count",
                "parameter_type": "number",
                "value": "0"
            },
            {
                "constraints": [],
                "default": "datacentre:br-ex",
                "description": "The OVS logical->physical bridge mappings to use. See the Neutron documentation for details. Defaults to mapping br-ex - the external bridge on hosts - to a physical name 'datacentre' which can be used to create provider networks (and we use this for the default floating network) - if changing this either use different post-install network scripts or be sure to keep 'datacentre' as a mapping network name.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronBridgeMappings",
                "parameter_type": "string",
                "value": "datacentre:br-ex"
            },
            {
                "constraints": [],
                "default": "br-ex",
                "description": "Specifies the interface where the public-facing virtual ip will be assigned. This should be int_public when a VLAN is being used.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::PublicVirtualInterface",
                "parameter_type": "string",
                "value": "br-ex"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.flavor",
                        "description": null
                    }
                ],
                "default": null,
                "description": "Flavor for the nova compute node",
                "hidden": null,
                "label": null,
                "name": "Compute-1::Flavor",
                "parameter_type": "string",
                "value": "baremetal"
            },
            {
                "constraints": [],
                "default": false,
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::RabbitClientUseSSL",
                "parameter_type": "string",
                "value": false
            },
            {
                "constraints": [],
                "default": 3,
                "description": "How many replicas to use in the swift rings.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SwiftReplicas",
                "parameter_type": "number",
                "value": 3
            },
            {
                "constraints": [],
                "default": "%stackname%-compute-%index%",
                "description": "Format for Compute node hostnames",
                "hidden": null,
                "label": null,
                "name": "ComputeHostnameFormat",
                "parameter_type": "string",
                "value": "%stackname%-compute-%index%"
            },
            {
                "constraints": [],
                "default": "http",
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::GlanceProtocol",
                "parameter_type": "string",
                "value": "http"
            },
            {
                "constraints": [],
                "default": "nic1",
                "description": "A port to add to the NeutronPhysicalBridge.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronPublicInterface",
                "parameter_type": "string",
                "value": "nic1"
            },
            {
                "constraints": [],
                "default": "vxlan",
                "description": "The tunnel types for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'gre,vxlan'\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronTunnelTypes",
                "parameter_type": "string",
                "value": "gre"
            },
            {
                "constraints": [],
                "default": "vxlan",
                "description": "The tunnel types for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'gre,vxlan'\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronTunnelTypes",
                "parameter_type": "string",
                "value": "gre"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": true,
                "label": null,
                "name": "Controller-1::SnmpdReadonlyUserPassword",
                "parameter_type": "string",
                "value": "c19d9ac749bedab0134a638fe6fed8887b985d70"
            },
            {
                "constraints": [],
                "default": "noop",
                "description": "Strategy to use for Glance notification queue",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceNotifierStrategy",
                "parameter_type": "string",
                "value": "noop"
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronPublicInterfaceRawDevice",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": "Set to True to enable debugging on all services.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::Debug",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the cinder service and db account, used by cinder-api.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::CinderPassword",
                "parameter_type": "string",
                "value": "64eeb57f624ba8367778fbd846b6242c320e9af5"
            },
            {
                "constraints": [],
                "default": "guest",
                "description": "The username for RabbitMQ",
                "hidden": null,
                "label": null,
                "name": "Controller-1::RabbitUserName",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to enable or not the NFS backend for Cinder",
                "hidden": null,
                "label": null,
                "name": "Compute-1::CinderEnableNfsBackend",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "ro_snmp_user",
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::SnmpdReadonlyUserName",
                "parameter_type": "string",
                "value": "ro_snmp_user"
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [],
                "default": "%stackname%-blockstorage-%index%",
                "description": "Format for BlockStorage node hostnames",
                "hidden": null,
                "label": null,
                "name": "BlockStorageHostnameFormat",
                "parameter_type": "string",
                "value": "%stackname%-blockstorage-%index%"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Salt for the rabbit cookie, change this to force the randomly generated rabbit cookie to change.",
                "hidden": null,
                "label": null,
                "name": "RabbitCookieSalt",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [],
                "default": "guest",
                "description": "The username for RabbitMQ",
                "hidden": null,
                "label": null,
                "name": "Compute-1::RabbitUserName",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "glance.image",
                        "description": null
                    }
                ],
                "default": "overcloud-ceph-storage",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::Image",
                "parameter_type": "string",
                "value": "overcloud-full"
            },
            {
                "constraints": [],
                "default": "",
                "description": "The Ceph cluster FSID. Must be a UUID.",
                "hidden": null,
                "label": null,
                "name": "CephClusterFSID",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": "Keystone certificate for verifying token validity.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeystoneSigningCertificate",
                "parameter_type": "string",
                "value": "-----BEGIN CERTIFICATE-----\nMIIDJDCCAgygAwIBAgIBAjANBgkqhkiG9w0BAQUFADBTMQswCQYDVQQGEwJYWDEO\nMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVuc2V0MQ4wDAYDVQQKEwVVbnNldDEU\nMBIGA1UEAxMLS2V5c3RvbmUgQ0EwHhcNMTUxMDIxMTM1MzQzWhcNMjUxMDE4MTM1\nMzQzWjBYMQswCQYDVQQGEwJYWDEOMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVu\nc2V0MQ4wDAYDVQQKEwVVbnNldDEZMBcGA1UEAxMQS2V5c3RvbmUgU2lnbmluZzCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMeQugvvoBkZL10UqddIoeIG\n7KUfr7HpwGDm9bUsQzIZQTXbeGvDVU5H5aSfuD0CBkUeLvSthmdh7KAEwZk6MMms\n8BjBjSHN2NxNk8Hp/KzGhvznZr4lvlP7hz9lkpG6T3AAhI1h7UCh7CIv3em6BKb9\nYyKmv2cbuLf5wyEgpWG6BS/h0F7JE3/ORWlnkt6vPLWiG1seX13+1nbpnjjc61bf\njj2wUIeisD1h20gvb9XpW1BqKHyht8C+5JU2mh1euaKauJ1J4YtJdLecAvJFVeJl\n8tJIiO8O7tzCgUnOLCGid8vZYlTMXDFHwJKzSfdH6lmjGZdR9Cj8o8XLf8/CWmkC\nAwEAATANBgkqhkiG9w0BAQUFAAOCAQEA1vX4j6PfQf5uwoqc4PNZBeb2izqtuK/J\nOqxvzr6fv3cS6TyWGsxC7o1W4UCRCZd/edfU/BpePkTOSHiteDbHTP9NJcCAzRgP\nGvdptsAQFkddVoUl4bCsabHuHybJ9G+gFYnMkYHxhO+7bsIv1teXfrIGXd+s1g8T\nX6SoG1xRp29NB0hQJKdLGg+DbwgQ93FpUrIIax3FEEw/t8Z2UzUkJpQGBBZubzu5\nurgv2ts1sLDsszIfknYqg9YB2we1uY2gYiObuA6KpYuD46csgxdxNL0Xb5vbUS65\niSGnCUD6p23UnHkZk2X5cVC42w6dy77ym3xmvA6MvPTSoQ4HWw0dhw==\n-----END CERTIFICATE-----"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.keypair",
                        "description": null
                    }
                ],
                "default": "default",
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "hidden": null,
                "label": null,
                "name": "Compute-1::KeyName",
                "parameter_type": "string",
                "value": "default"
            },
            {
                "constraints": [],
                "default": 5672,
                "description": "Set rabbit subscriber port, change this if using SSL",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::RabbitClientPort",
                "parameter_type": "number",
                "value": 5672
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": true,
                "label": null,
                "name": "Compute-1::SnmpdReadonlyUserPassword",
                "parameter_type": "string",
                "value": "c19d9ac749bedab0134a638fe6fed8887b985d70"
            },
            {
                "constraints": [],
                "default": "http",
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceProtocol",
                "parameter_type": "string",
                "value": "http"
            },
            {
                "constraints": [],
                "default": "datacentre",
                "description": "The Neutron ML2 and OpenVSwitch vlan mapping range to support. See the Neutron documentation for permitted values. Defaults to permitting any VLAN on the 'datacentre' physical network (See NeutronBridgeMappings).\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronNetworkVLANRanges",
                "parameter_type": "comma_delimited_list",
                "value": "datacentre"
            },
            {
                "constraints": [],
                "default": "dvr_snat",
                "description": "Agent mode for the neutron-l3-agent on the controller hosts",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronAgentMode",
                "parameter_type": "string",
                "value": "dvr_snat"
            },
            {
                "constraints": [],
                "default": "datacentre",
                "description": "If set, flat networks to configure in neutron plugins.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronFlatNetworks",
                "parameter_type": "string",
                "value": "datacentre"
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Set to true to enable package installation via Puppet",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::EnablePackageInstall",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [],
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::ImageUpdatePolicy",
                "parameter_type": "string",
                "value": "REBUILD_PRESERVE_EPHEMERAL"
            },
            {
                "constraints": [],
                "default": "images",
                "description": "The name of the Ceph RBD pool to use/create for Glance images",
                "hidden": null,
                "label": null,
                "name": "GlanceRbdPoolName",
                "parameter_type": "string",
                "value": "images"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Shared secret to prevent spoofing",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronMetadataProxySharedSecret",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [],
                "default": {},
                "description": "A network mapped list of IPs to assign to Controllers in the following form: {\n  \"internal_api\": [\"a.b.c.d\", \"e.f.g.h\"],\n  ...\n}\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ControllerIPs",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.flavor",
                        "description": null
                    }
                ],
                "default": null,
                "description": "Flavor for the Ceph Storage node.",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::Flavor",
                "parameter_type": "string",
                "value": "baremetal"
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [
                    {
                        "constraint_type": "allowed_values",
                        "definition": [
                            "basic",
                            "cadf"
                        ],
                        "description": null
                    }
                ],
                "default": "basic",
                "description": "The Keystone notification format",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeystoneNotificationFormat",
                "parameter_type": "string",
                "value": "basic"
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::NtpServer",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": [],
                "description": "Control the IP allocation for the PublicVirtualInterface port. E.g. [{'ip_address':'1.2.3.4'}]\n",
                "hidden": null,
                "label": null,
                "name": "PublicVirtualFixedIPs",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [],
                "default": "True",
                "description": "Allow automatic l3-agent failover",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronAllowL3AgentFailover",
                "parameter_type": "string",
                "value": "True"
            },
            {
                "constraints": [],
                "default": "1:1000",
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "hidden": null,
                "label": null,
                "name": "NeutronVniRanges",
                "parameter_type": "comma_delimited_list",
                "value": "1:1000"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Set to True to enable debugging on all services.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::Debug",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "openstack",
                "description": "The Ceph user to use with OpenStack clients.",
                "hidden": null,
                "label": null,
                "name": "CephClientUserName",
                "parameter_type": "string",
                "value": "openstack"
            },
            {
                "constraints": [],
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::ImageUpdatePolicy",
                "parameter_type": "string",
                "value": "REBUILD_PRESERVE_EPHEMERAL"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::UpdateIdentifier",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "True",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronEnableTunnelling",
                "parameter_type": "string",
                "value": "True"
            },
            {
                "constraints": [],
                "default": "volumes",
                "description": "The name of the Ceph RBD pool to use/create for Cinder volumes",
                "hidden": null,
                "label": null,
                "name": "CinderRbdPoolName",
                "parameter_type": "string",
                "value": "volumes"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::UpdateIdentifier",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "nfs",
                "description": "Filesystem type for Pacemaker mount used as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceFilePcmkFstype",
                "parameter_type": "string",
                "value": "nfs"
            },
            {
                "constraints": [],
                "default": [
                    "messaging"
                ],
                "description": "Comma-separated list of Oslo notification drivers used by Keystone",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeystoneNotificationDriver",
                "parameter_type": "comma_delimited_list",
                "value": [
                    "messaging"
                ]
            },
            {
                "constraints": [],
                "default": "mongodb",
                "description": "The ceilometer backend type.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CeilometerBackend",
                "parameter_type": "string",
                "value": "mongodb"
            },
            {
                "constraints": [],
                "default": "",
                "description": "List of externally managed Ceph Mon Host IPs. Only used for external Ceph deployments.",
                "hidden": null,
                "label": null,
                "name": "CephExternalMonHost",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": {},
                "description": "Additional configuration to inject into the cluster. The JSON should have\nthe following structure:\n  {\"FILEKEY\":\n    {\"config\":\n      [{\"section\": \"SECTIONNAME\",\n        \"values\":\n          [{\"option\": \"OPTIONNAME\",\n            \"value\": \"VALUENAME\"\n           }\n          ]\n       }\n      ]\n    }\n  }\nFor instance:\n  {\"nova\":\n    {\"config\":\n      [{\"section\": \"default\",\n        \"values\":\n          [{\"option\": \"force_config_drive\",\n            \"value\": \"always\"\n           }\n          ]\n       },\n       {\"section\": \"cells\",\n        \"values\":\n          [{\"option\": \"driver\",\n            \"value\": \"nova.cells.rpc_driver.CellsRPCDriver\"\n           }\n          ]\n       }\n      ]\n    }\n  }\n",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::ExtraConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": "",
                "description": "Keystone key for signing tokens.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::KeystoneSSLCertificateKey",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.keypair",
                        "description": null
                    }
                ],
                "default": "default",
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::KeyName",
                "parameter_type": "string",
                "value": "default"
            },
            {
                "constraints": [],
                "default": "dvr_snat",
                "description": "Agent mode for the neutron-l3-agent on the controller hosts",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronAgentMode",
                "parameter_type": "string",
                "value": "dvr_snat"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the ceilometer service account.",
                "hidden": true,
                "label": null,
                "name": "Compute-1::CeilometerPassword",
                "parameter_type": "string",
                "value": "4acad9f359b5b1619edf1492e3caeb85c10fe53f"
            },
            {
                "constraints": [],
                "default": "ml2",
                "description": "The core plugin for Neutron. The value should be the entrypoint to be loaded\nfrom neutron.core_plugins namespace.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronCorePlugin",
                "parameter_type": "string",
                "value": "ml2"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Mount options for Pacemaker mount used as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceFilePcmkOptions",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": 10,
                "description": "Partition Power to use when building Swift rings",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::PartPower",
                "parameter_type": "number",
                "value": 10
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [],
                "default": "datacentre",
                "description": "If set, flat networks to configure in neutron plugins.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronFlatNetworks",
                "parameter_type": "string",
                "value": "datacentre"
            },
            {
                "constraints": [],
                "default": true,
                "description": "Whether to enable or not the Iscsi backend for Cinder",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderEnableIscsiBackend",
                "parameter_type": "boolean",
                "value": true
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Secret shared by the ceilometer services.",
                "hidden": true,
                "label": null,
                "name": "Compute-1::CeilometerMeteringSecret",
                "parameter_type": "string",
                "value": "31ca44623afc116aebc523dbbf0a8f0e70899e4c"
            },
            {
                "constraints": [],
                "default": [],
                "description": "Should be used for arbitrary ips.",
                "hidden": null,
                "label": null,
                "name": "ControlFixedIPs",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": "",
                "description": "A custom IP address to put onto the NeutronPublicInterface.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronPublicInterfaceIP",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The keystone auth secret and db password.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::AdminToken",
                "parameter_type": "string",
                "value": "45176d29df6e7af1243b7456d770d4cd380e43ea"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.keypair",
                        "description": null
                    }
                ],
                "default": "default",
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeyName",
                "parameter_type": "string",
                "value": "default"
            },
            {
                "constraints": [],
                "default": "guest",
                "description": "The password for RabbitMQ",
                "hidden": true,
                "label": null,
                "name": "Controller-1::RabbitPassword",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [],
                "default": "",
                "description": "A custom default route for the NeutronPublicInterface.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronPublicInterfaceDefaultRoute",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Value of mount_check in Swift account/container/object -server.conf",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::MountCheck",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [],
                "default": "router",
                "description": "Comma-seperated list of service plugin entrypoints to be loaded from the\nneutron.service_plugins namespace.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronServicePlugins",
                "parameter_type": "comma_delimited_list",
                "value": "router"
            },
            {
                "constraints": [],
                "default": "",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NtpServer",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": "If set, the contents of an SSL certificate .crt file for encrypting SSL endpoints.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::SSLCertificate",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": [],
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::removal_policies",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [
                    {
                        "constraint_type": "allowed_values",
                        "definition": [
                            "swift",
                            "file",
                            "rbd"
                        ],
                        "description": null
                    }
                ],
                "default": "swift",
                "description": "The short name of the Glance backend to use. Should be one of swift, rbd, or file",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceBackend",
                "parameter_type": "string",
                "value": "swift"
            },
            {
                "constraints": [],
                "default": "vxlan",
                "description": "The tenant network type for Neutron, either gre or vxlan.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronNetworkType",
                "parameter_type": "string",
                "value": "gre"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "glance.image",
                        "description": null
                    }
                ],
                "default": "overcloud-compute",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::Image",
                "parameter_type": "string",
                "value": "overcloud-full"
            },
            {
                "constraints": [],
                "default": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                },
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::ServiceNetMap",
                "parameter_type": "json",
                "value": {
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "CephPublicNetwork": "storage",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "CinderApiNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "GlanceApiNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MemcachedNetwork": "internal_api",
                    "MongoDbNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "NeutronApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "SwiftProxyNetwork": "storage"
                }
            },
            {
                "constraints": [],
                "default": "",
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::UpdateIdentifier",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "False",
                "description": "Whether to configure Neutron Distributed Virtual Routers",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronDVR",
                "parameter_type": "string",
                "value": "False"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": true,
                "label": null,
                "name": "Swift-Storage-1::SnmpdReadonlyUserPassword",
                "parameter_type": "string",
                "value": "c19d9ac749bedab0134a638fe6fed8887b985d70"
            },
            {
                "constraints": [],
                "default": "9292",
                "description": "Glance port.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlancePort",
                "parameter_type": "string",
                "value": "9292"
            },
            {
                "constraints": [],
                "default": "router",
                "description": "Comma-seperated list of service plugin entrypoints to be loaded from the\nneutron.service_plugins namespace.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronServicePlugins",
                "parameter_type": "comma_delimited_list",
                "value": "router"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.flavor",
                        "description": null
                    }
                ],
                "default": null,
                "description": "Flavor for control nodes to request when deploying.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::Flavor",
                "parameter_type": "string",
                "value": "baremetal"
            },
            {
                "constraints": [],
                "default": "openvswitch",
                "description": "The mechanism drivers for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'openvswitch,l2_population'\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronMechanismDrivers",
                "parameter_type": "string",
                "value": "openvswitch"
            },
            {
                "constraints": [],
                "default": "",
                "description": "The DNS name of this cloud. E.g. ci-overcloud.tripleo.org",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CloudName",
                "parameter_type": "string",
                "value": "overcloud"
            },
            {
                "constraints": [],
                "default": "%stackname%-cephstorage-%index%",
                "description": "Format for CephStorage node hostnames",
                "hidden": null,
                "label": null,
                "name": "CephStorageHostnameFormat",
                "parameter_type": "string",
                "value": "%stackname%-cephstorage-%index%"
            },
            {
                "constraints": [],
                "default": false,
                "description": "If enabled services will be monitored by Pacemaker; it will manage VIPs as well, in place of Keepalived.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnablePacemaker",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Password for heat_stack_domain_admin user.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::HeatStackDomainAdminPassword",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [],
                "default": "br-ex",
                "description": "Name of bridge used for external network traffic.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronExternalNetworkBridge",
                "parameter_type": "string",
                "value": "br-ex"
            },
            {
                "constraints": [],
                "default": 0,
                "description": "Specifies the size of the buffer pool in megabytes. Setting to zero should be interpreted as \"no value\" and will defer to the lower level default.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::MysqlInnodbBufferPoolSize",
                "parameter_type": "number",
                "value": 0
            },
            {
                "constraints": [],
                "default": "tgtadm",
                "description": "The iSCSI helper to use with cinder.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderISCSIHelper",
                "parameter_type": "string",
                "value": "lioadm"
            },
            {
                "constraints": [],
                "default": "overcloud-swift-storage",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::Image",
                "parameter_type": "string",
                "value": "overcloud-full"
            },
            {
                "constraints": [],
                "default": 5672,
                "description": "Set rabbit subscriber port, change this if using SSL",
                "hidden": null,
                "label": null,
                "name": "Compute-1::RabbitClientPort",
                "parameter_type": "number",
                "value": 5672
            },
            {
                "constraints": [],
                "default": "tgtadm",
                "description": "The iSCSI helper to use with cinder.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::CinderISCSIHelper",
                "parameter_type": "string",
                "value": "lioadm"
            },
            {
                "constraints": [],
                "default": "True",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronEnableTunnelling",
                "parameter_type": "string",
                "value": "True"
            },
            {
                "constraints": [],
                "default": "br-ex",
                "description": "Interface where virtual ip will be assigned.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ControlVirtualInterface",
                "parameter_type": "string",
                "value": "br-ex"
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Set to true to enable package installation via Puppet",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::EnablePackageInstall",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to enable or not the Rbd backend for Nova",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NovaEnableRbdBackend",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "False",
                "description": "Whether to enable l3-agent HA",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronL3HA",
                "parameter_type": "string",
                "value": "False"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "glance.image",
                        "description": null
                    }
                ],
                "default": "overcloud-control",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Controller-1::Image",
                "parameter_type": "string",
                "value": "overcloud-full"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "A random string to be used as a salt when hashing to determine mappings in the ring.",
                "hidden": true,
                "label": null,
                "name": "Swift-Storage-1::HashSuffix",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [],
                "default": "",
                "description": "The Ceph monitors key. Can be created with ceph-authtool --gen-print-key.",
                "hidden": null,
                "label": null,
                "name": "CephMonKey",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "False",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronDVR",
                "parameter_type": "string",
                "value": "False"
            },
            {
                "constraints": [],
                "default": "False",
                "description": "Whether to enable l3-agent HA",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronL3HA",
                "parameter_type": "string",
                "value": "False"
            },
            {
                "constraints": [],
                "default": "overcloud-cinder-volume",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::Image",
                "parameter_type": "string",
                "value": "overcloud-full"
            },
            {
                "constraints": [],
                "default": "datacentre",
                "description": "The Neutron ML2 and OpenVSwitch vlan mapping range to support. See the Neutron documentation for permitted values. Defaults to permitting any VLAN on the 'datacentre' physical network (See NeutronBridgeMappings).\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronNetworkVLANRanges",
                "parameter_type": "comma_delimited_list",
                "value": "datacentre"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Keystone self-signed certificate authority certificate.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::KeystoneCACertificate",
                "parameter_type": "string",
                "value": "-----BEGIN CERTIFICATE-----\nMIIDNzCCAh+gAwIBAgIBATANBgkqhkiG9w0BAQUFADBTMQswCQYDVQQGEwJYWDEO\nMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVuc2V0MQ4wDAYDVQQKEwVVbnNldDEU\nMBIGA1UEAxMLS2V5c3RvbmUgQ0EwHhcNMTUxMDIxMTM1MzQzWhcNMjUxMDE4MTM1\nMzQzWjBTMQswCQYDVQQGEwJYWDEOMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVu\nc2V0MQ4wDAYDVQQKEwVVbnNldDEUMBIGA1UEAxMLS2V5c3RvbmUgQ0EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDc3mKGOonnH0aMXMj2mYg1wMbOenL2\nQ6+1WDbwDpdLHcu27fw9JgkMzswU4EWKLwLj/QrD/c1IfyxeoPmDeRZSLiJBmZVN\noDSfQdlep8rw3kgTatJ2+a5HXL6xhzjx1GKGcAd0zMSBlzrK4JDwdjIxxc8FRpHd\nJq5uZpMalL743UJ94X2jyVBpx8mriKnt+icAvdYBQqzXB/NeTh6w3gW6RtZVTXfO\nnq4bHBKiBGC9KzGmCICFUTDKNJPx7c14YOI1zTeA0m6D2oVqunf7ine3cD22oV+c\nOvz+K42ztcPxp1twQjB8vpxwwUDxKPQLGLh+a3D6e1HVASAnjJS2G8h/AgMBAAGj\nFjAUMBIGA1UdEwEB/wQIMAYBAf8CAQAwDQYJKoZIhvcNAQEFBQADggEBAK5WA3KR\nfTbUlzVQT65D59ZjAEUAhmFDnYoOHFBM7n1wfT8CgtthqGv4c6fC3joLCP0AyS+V\npsMvIp0Oha9TYzcg0md6SPYpI6QdQvWPjuSQF1v+Gvxv8jcJ/86snCxxq5zhtzqc\nSWUbSX7IOQ8QcvYZAvjPvnoHC8usQR8US2pgJddyx54K/WQsLX6y68BZeYaZYL7M\nB+G+eQltyYfIyGTps/smFWAm1B0EUYtDdi0Pvs74sSQICoLo2bYkgsZXM4pmoGEd\nCzv2TbYe1iLhYRSWufyj3ytCFOzsmnY4iyx+pgYK23iMIdw2dUtl5vxcbgOYYXGD\nnPycT1PzrxX56B0=\n-----END CERTIFICATE-----"
            },
            {
                "constraints": [],
                "default": [],
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Ceph-Storage-1::removal_policies",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": "",
                "description": "Neutron ID for ctlplane network.",
                "hidden": null,
                "label": null,
                "name": "NeutronControlPlaneID",
                "parameter_type": "string",
                "value": "7f079594-6944-48f0-be3c-ee7fa6592f7a"
            },
            {
                "constraints": [],
                "default": "",
                "description": "If set, the public interface is a vlan with this device as the raw device.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronPublicInterfaceRawDevice",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "",
                "description": "An exported storage device that should be mounted by Pacemaker as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::GlanceFilePcmkDevice",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "Secret shared by the ceilometer services.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::CeilometerMeteringSecret",
                "parameter_type": "string",
                "value": "31ca44623afc116aebc523dbbf0a8f0e70899e4c"
            },
            {
                "constraints": [],
                "default": "guest",
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::RabbitPassword",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [],
                "default": false,
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::RabbitClientUseSSL",
                "parameter_type": "string",
                "value": false
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the cinder service and db account, used by cinder-api.",
                "hidden": true,
                "label": null,
                "name": "Cinder-Storage-1::CinderPassword",
                "parameter_type": "string",
                "value": "unset"
            },
            {
                "constraints": [],
                "default": "",
                "description": "VLAN tag for creating a public VLAN. The tag will be used to create an access port on the exterior bridge for each control plane node, and that port will be given the IP address returned by neutron from the public network. Set CONTROLEXTRA=overcloud-vlan-port.yaml when compiling overcloud.yaml to include the deployment of VLAN ports to the control plane.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronPublicInterfaceTag",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "ro_snmp_user",
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::SnmpdReadonlyUserName",
                "parameter_type": "string",
                "value": "ro_snmp_user"
            },
            {
                "constraints": [],
                "default": "nic1",
                "description": "What interface to bridge onto br-ex for network nodes.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronPublicInterface",
                "parameter_type": "string",
                "value": "nic1"
            },
            {
                "constraints": [],
                "default": "",
                "description": "NFS servers used by Cinder NFS backend. Effective when CinderEnableNfsBackend is true.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderNfsServers",
                "parameter_type": "comma_delimited_list",
                "value": ""
            },
            {
                "constraints": [],
                "default": "9292",
                "description": "Glance port.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::GlancePort",
                "parameter_type": "string",
                "value": "9292"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the glance service and db account, used by the glance services.",
                "hidden": true,
                "label": null,
                "name": "Controller-1::GlancePassword",
                "parameter_type": "string",
                "value": "6b641065f1a8c98ca28b52d01527001a77cc5e6f"
            },
            {
                "constraints": [],
                "default": "",
                "description": "Set to True to enable debugging on all services.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::Debug",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "dhcp-option-force=26,1400",
                "description": "Dnsmasq options for neutron-dhcp-agent. The default value here forces MTU to be set to 1400 to account for the gre tunnel overhead.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronDnsmasqOptions",
                "parameter_type": "string",
                "value": "dhcp-option-force=26,1400"
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to enable or not the NFS backend for Cinder",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderEnableNfsBackend",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "vxlan,vlan,flat,gre",
                "description": "Comma-seperated list of network type driver entrypoints to be loaded.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::NeutronTypeDrivers",
                "parameter_type": "comma_delimited_list",
                "value": "vxlan,vlan,flat,gre"
            },
            {
                "constraints": [
                    {
                        "constraint_type": "allowed_values",
                        "definition": [
                            "",
                            "Present"
                        ],
                        "description": null
                    }
                ],
                "default": "",
                "description": "Indicates whether the Compute agent is present and expects nova-compute to be configured accordingly",
                "hidden": null,
                "label": null,
                "name": "Compute-1::CeilometerComputeAgent",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": "datacentre:br-ex",
                "description": "The OVS logical->physical bridge mappings to use. See the Neutron documentation for details. Defaults to mapping br-ex - the external bridge on hosts - to a physical name 'datacentre' which can be used to create provider networks (and we use this for the default floating network) - if changing this either use different post-install network scripts or be sure to keep 'datacentre' as a mapping network name.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronBridgeMappings",
                "parameter_type": "string",
                "value": "datacentre:br-ex"
            },
            {
                "constraints": [],
                "default": "http",
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::GlanceProtocol",
                "parameter_type": "string",
                "value": "http"
            },
            {
                "constraints": [],
                "default": {},
                "description": "NovaCompute specific configuration to inject into the cluster. Same\nstructure as ExtraConfig.\n",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NovaComputeExtraConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": "%stackname%-objectstorage-%index%",
                "description": "Format for SwiftStorage node hostnames",
                "hidden": null,
                "label": null,
                "name": "ObjectStorageHostnameFormat",
                "parameter_type": "string",
                "value": "%stackname%-objectstorage-%index%"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the neutron service account, used by neutron agents.",
                "hidden": true,
                "label": null,
                "name": "Compute-1::NeutronPassword",
                "parameter_type": "string",
                "value": "5bde587ef0f70045bb98fa74ad36baf16dd7edd1"
            },
            {
                "constraints": [],
                "default": "false",
                "description": "Value of mount_check in Swift account/container/object -server.conf",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SwiftMountCheck",
                "parameter_type": "boolean",
                "value": "false"
            },
            {
                "constraints": [],
                "default": 4096,
                "description": "Configures MySQL max_connections config setting",
                "hidden": null,
                "label": null,
                "name": "Controller-1::MysqlMaxConnections",
                "parameter_type": "number",
                "value": 4096
            },
            {
                "constraints": [],
                "default": "",
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::UpdateIdentifier",
                "parameter_type": "string",
                "value": ""
            },
            {
                "constraints": [],
                "default": 4096,
                "description": "Configures RabbitMQ FD limit",
                "hidden": null,
                "label": null,
                "name": "Controller-1::RabbitFDLimit",
                "parameter_type": "string",
                "value": 4096
            },
            {
                "constraints": [
                    {
                        "constraint_type": "custom_constraint",
                        "definition": "nova.flavor",
                        "description": null
                    }
                ],
                "default": null,
                "description": "Flavor for Swift storage nodes to request when deploying.",
                "hidden": null,
                "label": null,
                "name": "Swift-Storage-1::Flavor",
                "parameter_type": "string",
                "value": "baremetal"
            },
            {
                "constraints": [],
                "default": [],
                "description": null,
                "hidden": null,
                "label": null,
                "name": "Cinder-Storage-1::removal_policies",
                "parameter_type": "json",
                "value": []
            },
            {
                "constraints": [],
                "default": 10,
                "description": "Partition Power to use when building Swift rings",
                "hidden": null,
                "label": null,
                "name": "Controller-1::SwiftPartPower",
                "parameter_type": "number",
                "value": 10
            },
            {
                "constraints": [],
                "default": {},
                "description": "Additional hieradata to inject into the cluster, note that\nControllerExtraConfig takes precedence over ExtraConfig.\n",
                "hidden": null,
                "label": null,
                "name": "Controller-1::ExtraConfig",
                "parameter_type": "json",
                "value": {}
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to enable or not the Rbd backend for Cinder",
                "hidden": null,
                "label": null,
                "name": "Controller-1::CinderEnableRbdBackend",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": false,
                "description": "Whether to deploy Ceph Storage (OSD) on the Controller",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnableCephStorage",
                "parameter_type": "boolean",
                "value": false
            },
            {
                "constraints": [],
                "default": "br-ex",
                "description": "An OVS bridge to create for accessing external networks.",
                "hidden": null,
                "label": null,
                "name": "Compute-1::NeutronPhysicalBridge",
                "parameter_type": "string",
                "value": "br-ex"
            },
            {
                "constraints": [],
                "default": "unset",
                "description": "The password for the nova service account, used by nova-api.",
                "hidden": true,
                "label": null,
                "name": "Compute-1::NovaPassword",
                "parameter_type": "string",
                "value": "206899979d82609ad134f36c21f62b3fd6f823b6"
            },
            {
                "constraints": [],
                "default": true,
                "description": "Whether to use Galera instead of regular MariaDB.",
                "hidden": null,
                "label": null,
                "name": "Controller-1::EnableGalera",
                "parameter_type": "boolean",
                "value": true
            },
            {
                "constraints": [],
                "default": "guest",
                "description": "The password for RabbitMQ",
                "hidden": true,
                "label": null,
                "name": "Compute-1::RabbitPassword",
                "parameter_type": "string",
                "value": "guest"
            },
            {
                "constraints": [],
                "default": "vms",
                "description": "The name of the Ceph RBD pool to use/create for Nova ephemeral disks",
                "hidden": null,
                "label": null,
                "name": "NovaRbdPoolName",
                "parameter_type": "string",
                "value": "vms"
            }
        ],
        "roles": [
            {
                "description": "OpenStack ceph storage node configured by Puppet",
                "name": "Ceph-Storage",
                "uuid": "9dac69ed-c1ae-4efe-8fde-211280fa2ee3",
                "version": 1
            },
            {
                "description": "OpenStack cinder storage configured by Puppet",
                "name": "Cinder-Storage",
                "uuid": "cd6c6bd8-627b-4b37-acb7-4c2ef2e8dcfc",
                "version": 1
            },
            {
                "description": "OpenStack controller node configured by Puppet.\n",
                "name": "Controller",
                "uuid": "bcc00921-af5a-42cb-bbc4-167fa3803cc0",
                "version": 1
            },
            {
                "description": "OpenStack hypervisor node configured via Puppet.\n",
                "name": "Compute",
                "uuid": "82cc2955-e734-4757-9c6a-6e6a97b9d827",
                "version": 1
            },
            {
                "description": "OpenStack swift storage node configured by Puppet",
                "name": "Swift-Storage",
                "uuid": "96dd273c-f968-49ed-8ae7-9349fdf45195",
                "version": 1
            }
        ],
        "updated_at": null,
        "uuid": "a1bd94d6-c8b3-4eee-8d45-25b2cf3665d1"
    }

    });
  });

  deploymentPlanRouter.put('/:id/deployment_plans/overcloud/:update_action', function(req, res) {
    res.send(
{
    "deployment_plan": {
        "description": null,
        "roles": [
            {
                "description": "OpenStack ceph storage node configured by Puppet",
                "version": 1,
                "uuid": "ab7c02d8-bd5d-4ce3-9bf8-39d729cb55c1",
                "name": "Ceph-Storage"
            },
            {
                "description": "OpenStack cinder storage configured by Puppet",
                "version": 1,
                "uuid": "f1b1885e-cd78-4e29-9db9-92fe71206976",
                "name": "Cinder-Storage"
            },
            {
                "description": "OpenStack controller node configured by Puppet.\n",
                "version": 1,
                "uuid": "e148432f-ff6b-401e-a3e4-10f265177146",
                "name": "Controller"
            },
            {
                "description": "OpenStack hypervisor node configured via Puppet.\n",
                "version": 1,
                "uuid": "a94c2108-d87d-4145-9358-008ed5a78225",
                "name": "Compute"
            },
            {
                "description": "OpenStack swift storage node configured by Puppet",
                "version": 1,
                "uuid": "8f4f0cc5-94bd-44d1-aecf-138852eb20fc",
                "name": "Swift-Storage"
            }
        ],
        "created_at": "2015-11-25T13:23:29",
        "updated_at": null,
        "name": "overcloud",
        "parameters": [
            {
                "description": "If set, the contents of an SSL certificate .key file for encrypting SSL endpoints.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::SSLKey"
            },
            {
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::RabbitClientUseSSL"
            },
            {
                "description": "Keystone certificate for verifying token validity.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::KeystoneSSLCertificate"
            },
            {
                "description": "The number of neutron dhcp agents to schedule per network",
                "default": 3,
                "value": 3,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronDhcpAgentsPerNetwork"
            },
            {
                "description": "Contains parameters to configure Cinder backends. Typically set via parameter_defaults in the resource registry.",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderBackendConfig"
            },
            {
                "description": "The size of the loopback file used by the cinder LVM driver.",
                "default": 5000,
                "value": 5000,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderLVMLoopDeviceSize"
            },
            {
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronTunnelIdRanges"
            },
            {
                "description": "The password for the keystone admin account, used for monitoring, querying neutron etc.",
                "default": "unset",
                "value": "f2656cd234438ccf1acff6f4ceb614898f74ada7",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::AdminPassword"
            },
            {
                "description": "Whether to enable or not the Iscsi backend for Cinder",
                "default": true,
                "value": true,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::CinderEnableIscsiBackend"
            },
            {
                "description": null,
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::removal_policies"
            },
            {
                "description": "The password for the nova service and db account, used by nova-api.",
                "default": "unset",
                "value": "652e5ea19e6dc51b80e3059da246588584da6888",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::NovaPassword"
            },
            {
                "description": "Shared secret to prevent spoofing",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronMetadataProxySharedSecret"
            },
            {
                "description": null,
                "default": null,
                "value": "1",
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [
                    {
                        "definition": {
                            "min": "0"
                        },
                        "description": null,
                        "constraint_type": "range"
                    }
                ],
                "name": "Controller-1::count"
            },
            {
                "description": "Glance port.",
                "default": "9292",
                "value": "9292",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::GlancePort"
            },
            {
                "description": "VLAN tag for creating a public VLAN. The tag will be used to create an access port on the exterior bridge for each control plane node, and that port will be given the IP address returned by neutron from the public network. Set CONTROLEXTRA=overcloud-vlan-port.yaml when compiling overcloud.yaml to include the deployment of VLAN ports to the control plane.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "NeutronPublicInterfaceTag"
            },
            {
                "description": "Format for Controller node hostnames",
                "default": "%stackname%-controller-%index%",
                "value": "%stackname%-controller-%index%",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "ControllerHostnameFormat"
            },
            {
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "ro_snmp_user",
                "value": "ro_snmp_user",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SnmpdReadonlyUserName"
            },
            {
                "description": "The mechanism drivers for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'openvswitch,l2_population'\n",
                "default": "openvswitch",
                "value": "openvswitch",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronMechanismDrivers"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::NtpServer"
            },
            {
                "description": "Set to true to enable package installation via Puppet",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::EnablePackageInstall"
            },
            {
                "description": null,
                "default": null,
                "value": "0",
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [
                    {
                        "definition": {
                            "min": "0"
                        },
                        "description": null,
                        "constraint_type": "range"
                    }
                ],
                "name": "Ceph-Storage-1::count"
            },
            {
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "default": "default",
                "value": "default",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::KeyName"
            },
            {
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "value": "REBUILD_PRESERVE_EPHEMERAL",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ImageUpdatePolicy"
            },
            {
                "description": "Whether to deploy a LoadBalancer on the Controller",
                "default": true,
                "value": true,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnableLoadBalancer"
            },
            {
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronTunnelIdRanges"
            },
            {
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::UpdateIdentifier"
            },
            {
                "description": null,
                "default": "",
                "value": "kvm",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NovaComputeLibvirtType"
            },
            {
                "description": "The password for the keystone admin account, used for monitoring, querying neutron etc.",
                "default": "unset",
                "value": "f2656cd234438ccf1acff6f4ceb614898f74ada7",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::AdminPassword"
            },
            {
                "description": "The minimum time (in hours) before a partition in a ring can be moved following a rebalance.",
                "default": 1,
                "value": 1,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SwiftMinPartHours"
            },
            {
                "description": "Controller specific hiera configuration data to inject into the cluster.\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ControllerExtraConfig"
            },
            {
                "description": "Set rabbit subscriber port, change this if using SSL",
                "default": 5672,
                "value": 5672,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::RabbitClientPort"
            },
            {
                "description": "The Ceph client key. Can be created with ceph-authtool --gen-print-key. Currently only used for external Ceph deployments to create the openstack user keyring.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephClientKey"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::NtpServer"
            },
            {
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "default": "default",
                "value": "default",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::KeyName"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::ServiceNetMap"
            },
            {
                "description": "Allow automatic l3-agent failover",
                "default": "True",
                "value": "True",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronAllowL3AgentFailover"
            },
            {
                "description": null,
                "default": "libvirt.LibvirtDriver",
                "value": "libvirt.LibvirtDriver",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NovaComputeDriver"
            },
            {
                "description": "Flavor for block storage nodes to request when deploying.",
                "default": null,
                "value": "Flavor-1-x86_64-6144-40",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.flavor",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Cinder-Storage-1::Flavor"
            },
            {
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronVniRanges"
            },
            {
                "description": "Keystone key for signing tokens.",
                "default": "",
                "value": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDeiXTZ74B5JTxQ\n1NnIsmAjnW4fp6G7GGWywkV5KTCSQMaw3/V5GmnCaC4cHSLPbu5FhXIQ0N1wYqIF\nJ0ELWNQOjcHR9OoiJ8FNa6FDMWBvn5M6V1C70nn26pIkc4CG87ViXMcXs+TVq7TX\nLEZVID2ktkvWYtOBVOUG7JqNccG3HXhU42a+6B+quXFMsu3u2Vyi+JBsPp6M9HQx\nNB7/ZHyvOQEgiQZZKW8ssne8SKxfeae3FEaTmDshbFbtQysCHTEPmFvwcmHgwhxz\nP8VTAD9pfzASCrFP+wQ68HCSZK/4lzwroJyu0dnO+65O72FKbGZVpXrfW9LUKiTD\n0kqzO7RZAgMBAAECggEAeaaGvERS5ObYDA/vZeks6Qs8kg1fOhniLlBJDizYIntK\nopIrbKJlwiKVYkUDLIYlttd2PX8QLkmc7FhDFGLguXwAwjeybi1xXFND+qlZYGvJ\nXhExTxuGFNayQT7qudssArNZGrn6lFujJiVL5WkUiaAl4PJxULgJ4zkgW8Yd8W0j\nY+uK8IKMHVzIYsb3YrJXVlXR6ac9aCPglhrxuGVxpsb56fDJ1UOpcvwhZLu1aQl9\njHq77q9zo3NjG0WbRds+AnWf8cvRyaw/Ok8q4vAfqDNbxeo9CaTtYLfdY3XLCVSl\nXmOyRmQJwSh9YcfresXCoDQZQbEK4/EEj1TRwXYviQKBgQD8oJ6oOROXK9uhlmLH\n4U8Ak0J5ptYiaKdFNAXKuCftaRIliGofpibU6beDFhJ/I5IBLT3qNSKpI1ltvR/5\nzKL4sCf5fjVp2ch/3IvBbSuFzMVUhYtVFUG9mIMu5PCRguRNgM/BFtYAXYcPcD0R\nSFXa/4ttnOH8nDRc4N7/Ab99QwKBgQDhgf/W+Yzt6EIjWRTPXUJ! fxbPi5cFi L c9x\niy7CWsOypLZ6+n8543YV4HHe70LH1Pj3p/J0XkN6GvMCPGiZ5X/ousNUDx2LlqjU\nsT1CosTbgkP7sfR001c69gWhLUQ5rTkQvp2wsMqOwzqFyWhRRm854E7GuCX4p1GK\nqP1DY1dAMwKBgQDpEodOTNp2LlCD1GtuXcC1lydNdU86j7NDdauiTCUKNFY5qpG+\ngVxyMu7MUiDei8K4szTcUAmaYrKvPD20CciSCHPZC0fcUMFate96lW4CE9o7ELpr\n1SDB+2OMcExC87AOkTkbvCXUUHW7GKI+v632Tq4kgwk8NiFZT15thv9UYQKBgQCc\nDYImGftUh219WJ/1/+t2qzGYyrXQYzMyt8Zb6MOUVDeTUtXIEYgeC3vBcoEcGF1R\nxH8b2D+JuCyCV5trJE4nl1akTPF9L30V8rEZ89mWrcat3q/0SGwM+UNcDh8wapca\n503of+8sbB2Lh50Q4VUHEBpzmets7xyWf+sDPzOZ0QKBgA9qdIZ1Df2EDpVJYSti\nv0FVbaSsBjBVZIqII9gaMZjT3M001dTGT8By286gay336ckwxa6+PWjy466gBkL8\nhOMuggHSG6Ueo74SubNVlQdlfpOmPXmv5hYQ/b3eblkou0yK5JneXoiEetI4lrAF\naTcpOY+XBfRrGGvlm9EoDdta\n-----END PRIVATE KEY-----",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::KeystoneSigningKey"
            },
            {
                "description": null,
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::RabbitUserName"
            },
            {
                "description": null,
                "default": null,
                "value": "1",
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [
                    {
                        "definition": {
                            "min": "0"
                        },
                        "description": null,
                        "constraint_type": "range"
                    }
                ],
                "name": "Compute-1::count"
            },
            {
                "description": "If set, the contents of an SSL certificate authority file.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SSLCACertificate"
            },
            {
                "description": "Set to true to enable package installation via Puppet",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::EnablePackageInstall"
            },
            {
                "description": "Mount options for NFS mounts used by Cinder NFS backend. Effective when CinderEnableNfsBackend is true.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderNfsMountOptions"
            },
            {
                "description": "The password for the Heat service and db account, used by the Heat services.",
                "default": "unset",
                "value": "687ffb4e5f6144f149503f86a7e965a9a8ae793d",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::HeatPassword"
            },
            {
                "description": null,
                "default": null,
                "value": "0",
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [
                    {
                        "definition": {
                            "min": "0"
                        },
                        "description": null,
                        "constraint_type": "range"
                    }
                ],
                "name": "Swift-Storage-1::count"
            },
            {
                "description": "Whether to enable Swift Storage on the Controller",
                "default": true,
                "value": true,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnableSwiftStorage"
            },
            {
                "description": "How many replicas to use in the swift rings.",
                "default": 3,
                "value": 3,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::Replicas"
            },
            {
                "description": "The tenant network type for Neutron, either gre or vxlan.",
                "default": "vxlan",
                "value": "gre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronNetworkType"
            },
            {
                "description": "The password for the neutron service and db account, used by neutron agents.",
                "default": "unset",
                "value": "d04c1925d87b3955940759b8003a75613b0f40ec",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::NeutronPassword"
            },
            {
                "description": null,
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::removal_policies"
            },
            {
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "unset",
                "value": "add36584cd0a3d2e26a8227520d9aeb65bc60f4c",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Cinder-Storage-1::SnmpdReadonlyUserPassword"
            },
            {
                "description": "Comma-seperated list of network type driver entrypoints to be loaded.\n",
                "default": "vxlan,vlan,flat,gre",
                "value": "vxlan,vlan,flat,gre",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronTypeDrivers"
            },
            {
                "description": "The password for the swift service account, used by the swift proxy services.",
                "default": "unset",
                "value": "3b2bb5ba09e221c766b54991c0d8629b895b59dd",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::SwiftPassword"
            },
            {
                "description": "The core plugin for Neutron. The value should be the entrypoint to be loaded\nfrom neutron.core_plugins namespace.\n",
                "default": "ml2",
                "value": "ml2",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronCorePlugin"
            },
            {
                "description": "The filepath of the file to use for logging messages from Glance.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceLogFile"
            },
            {
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronVniRanges"
            },
            {
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "ro_snmp_user",
                "value": "ro_snmp_user",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::SnmpdReadonlyUserName"
            },
            {
                "description": "Comma-separated list of <tun_min>:<tun_max> tuples enumerating ranges\nof GRE tunnel IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "NeutronTunnelIdRanges"
            },
            {
                "description": "Additional configuration to inject into the cluster. The JSON should have\nthe following structure:\n  {\"FILEKEY\":\n    {\"config\":\n      [{\"section\": \"SECTIONNAME\",\n        \"values\":\n          [{\"option\": \"OPTIONNAME\",\n            \"value\": \"VALUENAME\"\n           }\n          ]\n       }\n      ]\n    }\n  }\nFor instance:\n  {\"nova\":\n    {\"config\":\n      [{\"section\": \"default\",\n        \"values\":\n          [{\"option\": \"force_config_drive\",\n            \"value\": \"always\"\n           }\n          ]\n       },\n       {\"section\": \"cells\",\n        \"values\":\n          [{\"option\": \"driver\",\n            \"value\": \"nova.cells.rpc_driver.CellsRPCDriver\"\n           }\n          ]\n       }\n      ]\n    }\n  }\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::ExtraConfig"
            },
            {
                "description": "Whether to make Glance file backend a mount managed by Pacemaker. Effective when GlanceBackend is 'file'.\n",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceFilePcmkManage"
            },
            {
                "description": "A random string to be used as a salt when hashing to determine mappings in the ring.",
                "default": "unset",
                "value": "4ff509250cf4c7ebb0275f250191bca631132fd2",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::SwiftHashSuffix"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NtpServer"
            },
            {
                "description": "The minimum time (in hours) before a partition in a ring can be moved following a rebalance.",
                "default": 1,
                "value": 1,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::MinPartHours"
            },
            {
                "description": "The password for the ceilometer service  and db account.",
                "default": "unset",
                "value": "570ffde56025e3a855e7868e7b93c5d3b13fc898",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::CeilometerPassword"
            },
            {
                "description": "The Ceph admin client key. Can be created with ceph-authtool --gen-print-key.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephAdminKey"
            },
            {
                "description": "The size of the loopback file used by the cinder LVM driver.",
                "default": 5000,
                "value": 5000,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::CinderLVMLoopDeviceSize"
            },
            {
                "description": "Set to true to enable package installation via Puppet",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnablePackageInstall"
            },
            {
                "description": null,
                "default": null,
                "value": "0",
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [
                    {
                        "definition": {
                            "min": "0"
                        },
                        "description": null,
                        "constraint_type": "range"
                    }
                ],
                "name": "Cinder-Storage-1::count"
            },
            {
                "description": "The OVS logical->physical bridge mappings to use. See the Neutron documentation for details. Defaults to mapping br-ex - the external bridge on hosts - to a physical name 'datacentre' which can be used to create provider networks (and we use this for the default floating network) - if changing this either use different post-install network scripts or be sure to keep 'datacentre' as a mapping network name.\n",
                "default": "datacentre:br-ex",
                "value": "datacentre:br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronBridgeMappings"
            },
            {
                "description": "Specifies the interface where the public-facing virtual ip will be assigned. This should be int_public when a VLAN is being used.\n",
                "default": "br-ex",
                "value": "br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::PublicVirtualInterface"
            },
            {
                "description": "Flavor for the nova compute node",
                "default": null,
                "value": "Flavor-1-x86_64-6144-40",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.flavor",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Compute-1::Flavor"
            },
            {
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::RabbitClientUseSSL"
            },
            {
                "description": "How many replicas to use in the swift rings.",
                "default": 3,
                "value": 3,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SwiftReplicas"
            },
            {
                "description": "Format for Compute node hostnames",
                "default": "%stackname%-compute-%index%",
                "value": "%stackname%-compute-%index%",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "ComputeHostnameFormat"
            },
            {
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "default": "http",
                "value": "http",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::GlanceProtocol"
            },
            {
                "description": "A port to add to the NeutronPhysicalBridge.",
                "default": "nic1",
                "value": "nic1",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronPublicInterface"
            },
            {
                "description": "The tunnel types for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'gre,vxlan'\n",
                "default": "vxlan",
                "value": "gre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronTunnelTypes"
            },
            {
                "description": "The tunnel types for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'gre,vxlan'\n",
                "default": "vxlan",
                "value": "gre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronTunnelTypes"
            },
            {
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "unset",
                "value": "add36584cd0a3d2e26a8227520d9aeb65bc60f4c",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::SnmpdReadonlyUserPassword"
            },
            {
                "description": "Strategy to use for Glance notification queue",
                "default": "noop",
                "value": "noop",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceNotifierStrategy"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronPublicInterfaceRawDevice"
            },
            {
                "description": "Set to True to enable debugging on all services.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::Debug"
            },
            {
                "description": "The password for the cinder service and db account, used by cinder-api.",
                "default": "unset",
                "value": "7fe089bf0688137071e98b1570921a1c2a1e5276",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::CinderPassword"
            },
            {
                "description": "The username for RabbitMQ",
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::RabbitUserName"
            },
            {
                "description": "Whether to enable or not the NFS backend for Cinder",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::CinderEnableNfsBackend"
            },
            {
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "ro_snmp_user",
                "value": "ro_snmp_user",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::SnmpdReadonlyUserName"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::ServiceNetMap"
            },
            {
                "description": "Format for BlockStorage node hostnames",
                "default": "%stackname%-blockstorage-%index%",
                "value": "%stackname%-blockstorage-%index%",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "BlockStorageHostnameFormat"
            },
            {
                "description": "Salt for the rabbit cookie, change this to force the randomly generated rabbit cookie to change.",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "RabbitCookieSalt"
            },
            {
                "description": "The username for RabbitMQ",
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::RabbitUserName"
            },
            {
                "description": null,
                "default": "overcloud-ceph-storage",
                "value": "overcloud-full",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "glance.image",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Ceph-Storage-1::Image"
            },
            {
                "description": "The Ceph cluster FSID. Must be a UUID.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephClusterFSID"
            },
            {
                "description": "Keystone certificate for verifying token validity.",
                "default": "",
                "value": "-----BEGIN CERTIFICATE-----\nMIIDJDCCAgygAwIBAgIBAjANBgkqhkiG9w0BAQUFADBTMQswCQYDVQQGEwJYWDEO\nMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVuc2V0MQ4wDAYDVQQKEwVVbnNldDEU\nMBIGA1UEAxMLS2V5c3RvbmUgQ0EwHhcNMTUxMTI1MTMyMzUxWhcNMjUxMTIyMTMy\nMzUxWjBYMQswCQYDVQQGEwJYWDEOMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVu\nc2V0MQ4wDAYDVQQKEwVVbnNldDEZMBcGA1UEAxMQS2V5c3RvbmUgU2lnbmluZzCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAN6JdNnvgHklPFDU2ciyYCOd\nbh+nobsYZbLCRXkpMJJAxrDf9XkaacJoLhwdIs9u7kWFchDQ3XBiogUnQQtY1A6N\nwdH06iInwU1roUMxYG+fkzpXULvSefbqkiRzgIbztWJcxxez5NWrtNcsRlUgPaS2\nS9Zi04FU5Qbsmo1xwbcdeFTjZr7oH6q5cUyy7e7ZXKL4kGw+noz0dDE0Hv9kfK85\nASCJBlkpbyyyd7xIrF95p7cURpOYOyFsVu1DKwIdMQ+YW/ByYeDCHHM/xVMAP2l/\nMBIKsU/7BDrwcJJkr/iXPCugnK7R2c77rk7vYUpsZlWlet9b0tQqJMPSSrM7tFkC\nAwEAATANBgkqhkiG9w0BAQUFAAOCAQEAhdGbG79SEC5unbCb6HdfzP0XRyXJKpR/\n4ziRMSewm0IoF8jPboOJDZpzhVF15HwGUS9BdP59ZKD6rmgZ4Krr4Rjd+jqjZ38A\nx6Ekb9smtVP8Ke/UNoGc2205vLmkTuj56nmhZSwbHZBSKBc3J0DgBKlSjX7GRQZj\nuEGYuPRbN0ITVNQK74OvUgVk+MY5LODTjWsOiaaX+8z! bHxyRFphd r iKp/5u5T/A/\n5cHzZdkrnW8aoHMNpln1tezPKf5n6+TZmgErUQARyc3zGIf/ccE+JSWJRmOr/JgO\nmINIEZ/BLqs07R18aBtAkzAFKXq4blq8/E9YAlBUEKIATQBCNvi0uA==\n-----END CERTIFICATE-----",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::KeystoneSigningCertificate"
            },
            {
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "default": "default",
                "value": "default",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.keypair",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Compute-1::KeyName"
            },
            {
                "description": "Set rabbit subscriber port, change this if using SSL",
                "default": 5672,
                "value": 5672,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::RabbitClientPort"
            },
            {
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "unset",
                "value": "add36584cd0a3d2e26a8227520d9aeb65bc60f4c",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::SnmpdReadonlyUserPassword"
            },
            {
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "default": "http",
                "value": "http",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceProtocol"
            },
            {
                "description": "The Neutron ML2 and OpenVSwitch vlan mapping range to support. See the Neutron documentation for permitted values. Defaults to permitting any VLAN on the 'datacentre' physical network (See NeutronBridgeMappings).\n",
                "default": "datacentre",
                "value": "datacentre",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronNetworkVLANRanges"
            },
            {
                "description": "Agent mode for the neutron-l3-agent on the controller hosts",
                "default": "dvr_snat",
                "value": "dvr_snat",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronAgentMode"
            },
            {
                "description": "If set, flat networks to configure in neutron plugins.\n",
                "default": "datacentre",
                "value": "datacentre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronFlatNetworks"
            },
            {
                "description": "Set to true to enable package installation via Puppet",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::EnablePackageInstall"
            },
            {
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "value": "REBUILD_PRESERVE_EPHEMERAL",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::ImageUpdatePolicy"
            },
            {
                "description": "The name of the Ceph RBD pool to use/create for Glance images",
                "default": "images",
                "value": "images",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "GlanceRbdPoolName"
            },
            {
                "description": "Shared secret to prevent spoofing",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronMetadataProxySharedSecret"
            },
            {
                "description": "A network mapped list of IPs to assign to Controllers in the following form: {\n  \"internal_api\": [\"a.b.c.d\", \"e.f.g.h\"],\n  ...\n}\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ControllerIPs"
            },
            {
                "description": "Flavor for the Ceph Storage node.",
                "default": null,
                "value": "Flavor-1-x86_64-6144-40",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.flavor",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Ceph-Storage-1::Flavor"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::ServiceNetMap"
            },
            {
                "description": "The Keystone notification format",
                "default": "basic",
                "value": "basic",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": [
                            "basic",
                            "cadf"
                        ],
                        "description": null,
                        "constraint_type": "allowed_values"
                    }
                ],
                "name": "Controller-1::KeystoneNotificationFormat"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::NtpServer"
            },
            {
                "description": "Control the IP allocation for the PublicVirtualInterface port. E.g. [{'ip_address':'1.2.3.4'}]\n",
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "PublicVirtualFixedIPs"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "ServiceNetMap"
            },
            {
                "description": "Allow automatic l3-agent failover",
                "default": "True",
                "value": "True",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronAllowL3AgentFailover"
            },
            {
                "description": "Comma-separated list of <vni_min>:<vni_max> tuples enumerating ranges\nof VXLAN VNI IDs that are available for tenant network allocation\n",
                "default": "1:1000",
                "value": "1:1000",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "NeutronVniRanges"
            },
            {
                "description": "Set to True to enable debugging on all services.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::Debug"
            },
            {
                "description": "The Ceph user to use with OpenStack clients.",
                "default": "openstack",
                "value": "openstack",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephClientUserName"
            },
            {
                "description": "What policy to use when reconstructing instances. REBUILD for rebuilds, REBUILD_PRESERVE_EPHEMERAL to preserve /mnt.",
                "default": "REBUILD_PRESERVE_EPHEMERAL",
                "value": "REBUILD_PRESERVE_EPHEMERAL",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::ImageUpdatePolicy"
            },
            {
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::UpdateIdentifier"
            },
            {
                "description": null,
                "default": "True",
                "value": "True",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronEnableTunnelling"
            },
            {
                "description": "The name of the Ceph RBD pool to use/create for Cinder volumes",
                "default": "volumes",
                "value": "volumes",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CinderRbdPoolName"
            },
            {
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::UpdateIdentifier"
            },
            {
                "description": "Filesystem type for Pacemaker mount used as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "default": "nfs",
                "value": "nfs",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceFilePcmkFstype"
            },
            {
                "description": "Comma-separated list of Oslo notification drivers used by Keystone",
                "default": [
                    "messaging"
                ],
                "value": [
                    "messaging"
                ],
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::KeystoneNotificationDriver"
            },
            {
                "description": "The ceilometer backend type.",
                "default": "mongodb",
                "value": "mongodb",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CeilometerBackend"
            },
            {
                "description": "List of externally managed Ceph Mon Host IPs. Only used for external Ceph deployments.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephExternalMonHost"
            },
            {
                "description": "Additional configuration to inject into the cluster. The JSON should have\nthe following structure:\n  {\"FILEKEY\":\n    {\"config\":\n      [{\"section\": \"SECTIONNAME\",\n        \"values\":\n          [{\"option\": \"OPTIONNAME\",\n            \"value\": \"VALUENAME\"\n           }\n          ]\n       }\n      ]\n    }\n  }\nFor instance:\n  {\"nova\":\n    {\"config\":\n      [{\"section\": \"default\",\n        \"values\":\n          [{\"option\": \"force_config_drive\",\n            \"value\": \"always\"\n           }\n          ]\n       },\n       {\"section\": \"cells\",\n        \"values\":\n          [{\"option\": \"driver\",\n            \"value\": \"nova.cells.rpc_driver.CellsRPCDriver\"\n           }\n          ]\n       }\n      ]\n    }\n  }\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::ExtraConfig"
            },
            {
                "description": "Keystone key for signing tokens.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::KeystoneSSLCertificateKey"
            },
            {
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "default": "default",
                "value": "default",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.keypair",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Ceph-Storage-1::KeyName"
            },
            {
                "description": "Agent mode for the neutron-l3-agent on the controller hosts",
                "default": "dvr_snat",
                "value": "dvr_snat",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronAgentMode"
            },
            {
                "description": "The password for the ceilometer service account.",
                "default": "unset",
                "value": "570ffde56025e3a855e7868e7b93c5d3b13fc898",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::CeilometerPassword"
            },
            {
                "description": "The core plugin for Neutron. The value should be the entrypoint to be loaded\nfrom neutron.core_plugins namespace.\n",
                "default": "ml2",
                "value": "ml2",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronCorePlugin"
            },
            {
                "description": "Mount options for Pacemaker mount used as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceFilePcmkOptions"
            },
            {
                "description": "Partition Power to use when building Swift rings",
                "default": 10,
                "value": 10,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::PartPower"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ServiceNetMap"
            },
            {
                "description": "If set, flat networks to configure in neutron plugins.",
                "default": "datacentre",
                "value": "datacentre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronFlatNetworks"
            },
            {
                "description": "Whether to enable or not the Iscsi backend for Cinder",
                "default": true,
                "value": true,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderEnableIscsiBackend"
            },
            {
                "description": "Secret shared by the ceilometer services.",
                "default": "unset",
                "value": "b052b28e738880b9cd5058672dd85735da3444e8",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::CeilometerMeteringSecret"
            },
            {
                "description": "Should be used for arbitrary ips.",
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "ControlFixedIPs"
            },
            {
                "description": "A custom IP address to put onto the NeutronPublicInterface.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronPublicInterfaceIP"
            },
            {
                "description": "The keystone auth secret and db password.",
                "default": "unset",
                "value": "0f72bb4817e31edd2d08edeb59254378f66d79aa",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::AdminToken"
            },
            {
                "description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
                "default": "default",
                "value": "default",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.keypair",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Controller-1::KeyName"
            },
            {
                "description": "The password for RabbitMQ",
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::RabbitPassword"
            },
            {
                "description": "A custom default route for the NeutronPublicInterface.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronPublicInterfaceDefaultRoute"
            },
            {
                "description": "Value of mount_check in Swift account/container/object -server.conf",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::MountCheck"
            },
            {
                "description": "Comma-seperated list of service plugin entrypoints to be loaded from the\nneutron.service_plugins namespace.\n",
                "default": "router",
                "value": "router",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronServicePlugins"
            },
            {
                "description": null,
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NtpServer"
            },
            {
                "description": "If set, the contents of an SSL certificate .crt file for encrypting SSL endpoints.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::SSLCertificate"
            },
            {
                "description": null,
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::removal_policies"
            },
            {
                "description": "The short name of the Glance backend to use. Should be one of swift, rbd, or file",
                "default": "swift",
                "value": "swift",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": [
                            "swift",
                            "file",
                            "rbd"
                        ],
                        "description": null,
                        "constraint_type": "allowed_values"
                    }
                ],
                "name": "Controller-1::GlanceBackend"
            },
            {
                "description": "The tenant network type for Neutron, either gre or vxlan.",
                "default": "vxlan",
                "value": "gre",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronNetworkType"
            },
            {
                "description": null,
                "default": "overcloud-compute",
                "value": "overcloud-full",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "glance.image",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Compute-1::Image"
            },
            {
                "description": "Mapping of service_name -> network name. Typically set via parameter_defaults in the resource registry.",
                "default": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "value": {
                    "NeutronApiNetwork": "internal_api",
                    "SwiftProxyNetwork": "storage",
                    "GlanceRegistryNetwork": "internal_api",
                    "HeatApiNetwork": "internal_api",
                    "NeutronTenantNetwork": "tenant",
                    "NovaApiNetwork": "internal_api",
                    "CeilometerApiNetwork": "internal_api",
                    "CephStorageHostnameResolveNetwork": "storage",
                    "SwiftMgmtNetwork": "storage_mgmt",
                    "MemcachedNetwork": "internal_api",
                    "RabbitMqNetwork": "internal_api",
                    "ObjectStorageHostnameResolveNetwork": "internal_api",
                    "KeystoneAdminApiNetwork": "ctlplane",
                    "GlanceApiNetwork": "storage",
                    "BlockStorageHostnameResolveNetwork": "internal_api",
                    "NovaVncProxyNetwork": "internal_api",
                    "CinderApiNetwork": "internal_api",
                    "CephClusterNetwork": "storage_mgmt",
                    "KeystonePublicApiNetwork": "internal_api",
                    "MysqlNetwork": "internal_api",
                    "RedisNetwork": "internal_api",
                    "NovaMetadataNetwork": "internal_api",
                    "ComputeHostnameResolveNetwork": "internal_api",
                    "CinderIscsiNetwork": "storage",
                    "MongoDbNetwork": "internal_api",
                    "HorizonNetwork": "internal_api",
                    "ControllerHostnameResolveNetwork": "internal_api",
                    "CephPublicNetwork": "storage"
                },
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::ServiceNetMap"
            },
            {
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::UpdateIdentifier"
            },
            {
                "description": "Whether to configure Neutron Distributed Virtual Routers",
                "default": "False",
                "value": "False",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronDVR"
            },
            {
                "description": "The user password for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "unset",
                "value": "add36584cd0a3d2e26a8227520d9aeb65bc60f4c",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Swift-Storage-1::SnmpdReadonlyUserPassword"
            },
            {
                "description": "Glance port.",
                "default": "9292",
                "value": "9292",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlancePort"
            },
            {
                "description": "Comma-seperated list of service plugin entrypoints to be loaded from the\nneutron.service_plugins namespace.\n",
                "default": "router",
                "value": "router",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronServicePlugins"
            },
            {
                "description": "Flavor for control nodes to request when deploying.",
                "default": null,
                "value": "Flavor-1-x86_64-6144-40",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.flavor",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Controller-1::Flavor"
            },
            {
                "description": "The mechanism drivers for the Neutron tenant network. To specify multiple\nvalues, use a comma separated string, like so: 'openvswitch,l2_population'\n",
                "default": "openvswitch",
                "value": "openvswitch",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronMechanismDrivers"
            },
            {
                "description": "The DNS name of this cloud. E.g. ci-overcloud.tripleo.org",
                "default": "",
                "value": "overcloud",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CloudName"
            },
            {
                "description": "Format for CephStorage node hostnames",
                "default": "%stackname%-cephstorage-%index%",
                "value": "%stackname%-cephstorage-%index%",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephStorageHostnameFormat"
            },
            {
                "description": "If enabled services will be monitored by Pacemaker; it will manage VIPs as well, in place of Keepalived.",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnablePacemaker"
            },
            {
                "description": "Password for heat_stack_domain_admin user.",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::HeatStackDomainAdminPassword"
            },
            {
                "description": "Name of bridge used for external network traffic.",
                "default": "br-ex",
                "value": "br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronExternalNetworkBridge"
            },
            {
                "description": "Specifies the size of the buffer pool in megabytes. Setting to zero should be interpreted as \"no value\" and will defer to the lower level default.\n",
                "default": 0,
                "value": 0,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::MysqlInnodbBufferPoolSize"
            },
            {
                "description": "The iSCSI helper to use with cinder.",
                "default": "tgtadm",
                "value": "lioadm",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderISCSIHelper"
            },
            {
                "description": null,
                "default": "overcloud-swift-storage",
                "value": "overcloud-full",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::Image"
            },
            {
                "description": "Set rabbit subscriber port, change this if using SSL",
                "default": 5672,
                "value": 5672,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::RabbitClientPort"
            },
            {
                "description": "The iSCSI helper to use with cinder.",
                "default": "tgtadm",
                "value": "lioadm",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::CinderISCSIHelper"
            },
            {
                "description": null,
                "default": "True",
                "value": "True",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronEnableTunnelling"
            },
            {
                "description": "Interface where virtual ip will be assigned.",
                "default": "br-ex",
                "value": "br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ControlVirtualInterface"
            },
            {
                "description": "Set to true to enable package installation via Puppet",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::EnablePackageInstall"
            },
            {
                "description": "Whether to enable or not the Rbd backend for Nova",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NovaEnableRbdBackend"
            },
            {
                "description": "Whether to enable l3-agent HA",
                "default": "False",
                "value": "False",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronL3HA"
            },
            {
                "description": null,
                "default": "overcloud-control",
                "value": "overcloud-full",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "glance.image",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Controller-1::Image"
            },
            {
                "description": "A random string to be used as a salt when hashing to determine mappings in the ring.",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Swift-Storage-1::HashSuffix"
            },
            {
                "description": "The Ceph monitors key. Can be created with ceph-authtool --gen-print-key.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "CephMonKey"
            },
            {
                "description": null,
                "default": "False",
                "value": "False",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronDVR"
            },
            {
                "description": "Whether to enable l3-agent HA",
                "default": "False",
                "value": "False",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronL3HA"
            },
            {
                "description": null,
                "default": "overcloud-cinder-volume",
                "value": "overcloud-full",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::Image"
            },
            {
                "description": "The Neutron ML2 and OpenVSwitch vlan mapping range to support. See the Neutron documentation for permitted values. Defaults to permitting any VLAN on the 'datacentre' physical network (See NeutronBridgeMappings).\n",
                "default": "datacentre",
                "value": "datacentre",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronNetworkVLANRanges"
            },
            {
                "description": "Keystone self-signed certificate authority certificate.",
                "default": "",
                "value": "-----BEGIN CERTIFICATE-----\nMIIDNzCCAh+gAwIBAgIBATANBgkqhkiG9w0BAQUFADBTMQswCQYDVQQGEwJYWDEO\nMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVuc2V0MQ4wDAYDVQQKEwVVbnNldDEU\nMBIGA1UEAxMLS2V5c3RvbmUgQ0EwHhcNMTUxMTI1MTMyMzUxWhcNMjUxMTIyMTMy\nMzUxWjBTMQswCQYDVQQGEwJYWDEOMAwGA1UECBMFVW5zZXQxDjAMBgNVBAcTBVVu\nc2V0MQ4wDAYDVQQKEwVVbnNldDEUMBIGA1UEAxMLS2V5c3RvbmUgQ0EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDOd8+yMAc5EigHq6QSNgMrDGe4fD7V\nPO0KgntL3V6D0/+GQD1lj2R7b7HCBE98pmdptI3jOrbkFrAE3JO8DY6oM59cPl5n\nuW+Y5hdEKOI/H47HGyWbGW6QgousfZ/afx4/pueSHdmQqLx5QZZXi3h3lK6Esce9\nV79UHAHcfpsijKOMAuLvuawdW3kO71ZB4Y22BoVcKPm05PUEKRk4aVwuLIIBPQeU\nSV7RvtQDfSZIxamK65nNokterDIj8M9ROdNOSuLrQ7mY2/2iLj3YPLf4kdJXayNt\n0A9E4Q+QWCNVc5z5VGRVW0LYQFCzA6JbHppsiUDyFM54JHpE+zMkqostAgMBAAGj\nFjAUMBIGA1UdEwEB/wQIMAYBAf8CAQAwDQYJKoZIhvcNAQEFBQADggEBAAZ4oCRO\nK57A+4sHSmqIKpBQh+jFrUexkAGIzDrrpkFjOZ6VR9jQzFkxtua9zeXXmPG6KTYW\n/U5fZ5jusEezAGgzVTaffB2mbk33uCe+BTTaQZsaASv9e7xP3gSOs0zgu/BGikXp\nPYNsL5G8pLf8gPzqM76hPTRXkpPo3+mA8g4TY5hlEw5! p1wJW+IsC U E+2e8zqO6xf\nUuyKrj0Yeye7Uz5Kre2RJvRYx2vHr7vwDPnOrhUQkMLVUDKsBsA9OI8aH5Y4xYoG\n6XJZtAESJSfo5vjYqlQO/G8o5/w4z51DUOGy7/PmFRet6G2MsPo8HjyUF0y0XiZD\n5/5m6bLt9LtN2Cs=\n-----END CERTIFICATE-----",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::KeystoneCACertificate"
            },
            {
                "description": null,
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Ceph-Storage-1::removal_policies"
            },
            {
                "description": "Neutron ID for ctlplane network.",
                "default": "",
                "value": "657efb26-34c6-4820-a49a-98621374aa7a",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "NeutronControlPlaneID"
            },
            {
                "description": "If set, the public interface is a vlan with this device as the raw device.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronPublicInterfaceRawDevice"
            },
            {
                "description": "An exported storage device that should be mounted by Pacemaker as Glance storage. Effective when GlanceFilePcmkManage is true.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::GlanceFilePcmkDevice"
            },
            {
                "description": "Secret shared by the ceilometer services.",
                "default": "unset",
                "value": "b052b28e738880b9cd5058672dd85735da3444e8",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::CeilometerMeteringSecret"
            },
            {
                "description": null,
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::RabbitPassword"
            },
            {
                "description": "Rabbit client subscriber parameter to specify an SSL connection to the RabbitMQ host.\n",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::RabbitClientUseSSL"
            },
            {
                "description": "The password for the cinder service and db account, used by cinder-api.",
                "default": "unset",
                "value": "unset",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Cinder-Storage-1::CinderPassword"
            },
            {
                "description": "VLAN tag for creating a public VLAN. The tag will be used to create an access port on the exterior bridge for each control plane node, and that port will be given the IP address returned by neutron from the public network. Set CONTROLEXTRA=overcloud-vlan-port.yaml when compiling overcloud.yaml to include the deployment of VLAN ports to the control plane.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronPublicInterfaceTag"
            },
            {
                "description": "The user name for SNMPd with readonly rights running on all Overcloud nodes",
                "default": "ro_snmp_user",
                "value": "ro_snmp_user",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Swift-Storage-1::SnmpdReadonlyUserName"
            },
            {
                "description": "What interface to bridge onto br-ex for network nodes.",
                "default": "nic1",
                "value": "eth1",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronPublicInterface"
            },
            {
                "description": "NFS servers used by Cinder NFS backend. Effective when CinderEnableNfsBackend is true.\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderNfsServers"
            },
            {
                "description": "Glance port.",
                "default": "9292",
                "value": "9292",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::GlancePort"
            },
            {
                "description": "The password for the glance service and db account, used by the glance services.",
                "default": "unset",
                "value": "a7733712a9c7d6ea5fce8dda3534b977c871e71d",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Controller-1::GlancePassword"
            },
            {
                "description": "Set to True to enable debugging on all services.",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::Debug"
            },
            {
                "description": "Dnsmasq options for neutron-dhcp-agent. The default value here forces MTU to be set to 1400 to account for the gre tunnel overhead.",
                "default": "dhcp-option-force=26,1400",
                "value": "dhcp-option-force=26,1400",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronDnsmasqOptions"
            },
            {
                "description": "Whether to enable or not the NFS backend for Cinder",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderEnableNfsBackend"
            },
            {
                "description": "Comma-seperated list of network type driver entrypoints to be loaded.\n",
                "default": "vxlan,vlan,flat,gre",
                "value": "vxlan,vlan,flat,gre",
                "label": null,
                "parameter_type": "comma_delimited_list",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::NeutronTypeDrivers"
            },
            {
                "description": "Indicates whether the Compute agent is present and expects nova-compute to be configured accordingly",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": [
                            "",
                            "Present"
                        ],
                        "description": null,
                        "constraint_type": "allowed_values"
                    }
                ],
                "name": "Compute-1::CeilometerComputeAgent"
            },
            {
                "description": "The OVS logical->physical bridge mappings to use. See the Neutron documentation for details. Defaults to mapping br-ex - the external bridge on hosts - to a physical name 'datacentre' which can be used to create provider networks (and we use this for the default floating network) - if changing this either use different post-install network scripts or be sure to keep 'datacentre' as a mapping network name.\n",
                "default": "datacentre:br-ex",
                "value": "datacentre:br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronBridgeMappings"
            },
            {
                "description": "Protocol to use when connecting to glance, set to https for SSL.",
                "default": "http",
                "value": "http",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::GlanceProtocol"
            },
            {
                "description": "NovaCompute specific configuration to inject into the cluster. Same\nstructure as ExtraConfig.\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NovaComputeExtraConfig"
            },
            {
                "description": "Format for SwiftStorage node hostnames",
                "default": "%stackname%-objectstorage-%index%",
                "value": "%stackname%-objectstorage-%index%",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "ObjectStorageHostnameFormat"
            },
            {
                "description": "The password for the neutron service account, used by neutron agents.",
                "default": "unset",
                "value": "d04c1925d87b3955940759b8003a75613b0f40ec",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::NeutronPassword"
            },
            {
                "description": "Value of mount_check in Swift account/container/object -server.conf",
                "default": "false",
                "value": "false",
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SwiftMountCheck"
            },
            {
                "description": "Configures MySQL max_connections config setting",
                "default": 4096,
                "value": 4096,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::MysqlMaxConnections"
            },
            {
                "description": "Setting to a previously unused value during stack-update will trigger package update on all nodes\n",
                "default": "",
                "value": "",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::UpdateIdentifier"
            },
            {
                "description": "Configures RabbitMQ FD limit",
                "default": 4096,
                "value": 4096,
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::RabbitFDLimit"
            },
            {
                "description": "Flavor for Swift storage nodes to request when deploying.",
                "default": null,
                "value": "Flavor-1-x86_64-6144-40",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [
                    {
                        "definition": "nova.flavor",
                        "description": null,
                        "constraint_type": "custom_constraint"
                    }
                ],
                "name": "Swift-Storage-1::Flavor"
            },
            {
                "description": null,
                "default": [],
                "value": [],
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Cinder-Storage-1::removal_policies"
            },
            {
                "description": "Partition Power to use when building Swift rings",
                "default": 10,
                "value": 10,
                "label": null,
                "parameter_type": "number",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::SwiftPartPower"
            },
            {
                "description": "Additional hieradata to inject into the cluster, note that\nControllerExtraConfig takes precedence over ExtraConfig.\n",
                "default": {},
                "value": {},
                "label": null,
                "parameter_type": "json",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::ExtraConfig"
            },
            {
                "description": "Whether to enable or not the Rbd backend for Cinder",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::CinderEnableRbdBackend"
            },
            {
                "description": "Whether to deploy Ceph Storage (OSD) on the Controller",
                "default": false,
                "value": false,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnableCephStorage"
            },
            {
                "description": "An OVS bridge to create for accessing external networks.",
                "default": "br-ex",
                "value": "br-ex",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "Compute-1::NeutronPhysicalBridge"
            },
            {
                "description": "The password for the nova service account, used by nova-api.",
                "default": "unset",
                "value": "652e5ea19e6dc51b80e3059da246588584da6888",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::NovaPassword"
            },
            {
                "description": "Whether to use Galera instead of regular MariaDB.",
                "default": true,
                "value": true,
                "label": null,
                "parameter_type": "boolean",
                "hidden": null,
                "constraints": [],
                "name": "Controller-1::EnableGalera"
            },
            {
                "description": "The password for RabbitMQ",
                "default": "guest",
                "value": "guest",
                "label": null,
                "parameter_type": "string",
                "hidden": true,
                "constraints": [],
                "name": "Compute-1::RabbitPassword"
            },
            {
                "description": "The name of the Ceph RBD pool to use/create for Nova ephemeral disks",
                "default": "vms",
                "value": "vms",
                "label": null,
                "parameter_type": "string",
                "hidden": null,
                "constraints": [],
                "name": "NovaRbdPoolName"
            }
        ],
        "uuid": "88f0dc4a-1348-49c8-a62c-42ce79a8305b"
    }
}
        );
  });

  app.use('/fusor/api/openstack/deployments', deploymentPlanRouter);

};
