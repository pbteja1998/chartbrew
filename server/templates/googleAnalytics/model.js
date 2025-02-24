const builder = require("./builder");
const googleConnector = require("../../modules/googleConnector");
const db = require("../../models/models");

const template = (configuration = {}, dashboardOrder = 0) => ({
  "Charts": [
    {
      "tid": 0,
      "name": "New users",
      "type": "line",
      "subType": "timeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpichart",
      "showGrowth": true,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:date": "date",
            "root[].ga:users": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:date",
          "xAxisOperation": null,
          "yAxis": "root[].ga:users",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#BCBD22",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "New users",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:users",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:date"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
          "Connection": null
        },
        {
          "fillColor": "rgba(139, 87, 42, 0.15)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:date": "date",
            "root[].ga:bounces": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:date",
          "xAxisOperation": null,
          "yAxis": "root[].ga:bounces",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#8C564B",
          "fill": true,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Bounces",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:bounces",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:date"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
          "Connection": null
        }
      ],
    },
    {
      "tid": 1,
      "name": "Referrers",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 1,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:fullReferrer": "string",
            "root[].ga:users": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:fullReferrer",
          "xAxisOperation": null,
          "yAxis": "root[].ga:users",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#D62728",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Referrer",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:users",
              "dimensions": "ga:fullReferrer",
              "startDate": "30daysAgo",
              "endDate": "yesterday"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:sourceMedium": "string",
            "root[].ga:users": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:source",
          "xAxisOperation": null,
          "yAxis": "root[].ga:source",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#8C564B",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Source",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:users",
              "dimensions": "ga:sourceMedium",
              "startDate": "30daysAgo",
              "endDate": "yesterday"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 2,
      "name": "Active users",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 2,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpichart",
      "showGrowth": true,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:date": "date",
            "root[].ga:30dayUsers": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:date",
          "xAxisOperation": null,
          "yAxis": "root[].ga:30dayUsers",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "30 days",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:30dayUsers",
              "dimensions": "ga:date",
              "startDate": "30daysAgo",
              "endDate": "yesterday"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:date": "date",
            "root[].ga:7dayUsers": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:date",
          "xAxisOperation": null,
          "yAxis": "root[].ga:7dayUsers",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#17BECF",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "7 days",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:7dayUsers",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:date"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:date": "date",
            "root[].ga:1dayUsers": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:date",
          "xAxisOperation": null,
          "yAxis": "root[].ga:1dayUsers",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#2CA02C",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "1 day",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:1dayUsers",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:date"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 3,
      "name": "Trafic channel",
      "type": "bar",
      "subType": "timeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 3,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": [
            "rgba(208, 2, 27, 0.35)",
            "rgba(126, 211, 33, 0.52)",
            "rgba(74, 144, 226, 0.37)"
          ],
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:channelGrouping": "string",
            "root[].ga:users": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:channelGrouping",
          "xAxisOperation": null,
          "yAxis": "root[].ga:users",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "rgba(0, 0, 0, 1)",
          "fill": false,
          "multiFill": true,
          "dateFormat": null,
          "legend": "Channel",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:users",
              "dimensions": "ga:channelGrouping",
              "startDate": "30daysAgo",
              "endDate": "yesterday"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 4,
      "name": "Sessions by device",
      "type": "doughnut",
      "subType": "timeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 4,
      "displayLegend": true,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": [
            "rgba(27, 127, 160, 0.6)",
            "rgba(80, 227, 194, 0.39)",
            "rgba(184, 233, 134, 0.54)"
          ],
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:deviceCategory": "string",
            "root[].ga:sessions": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:deviceCategory",
          "xAxisOperation": null,
          "yAxis": "root[].ga:sessions",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": true,
          "dateFormat": null,
          "legend": "Devices",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:sessions",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:deviceCategory"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 5,
      "name": "Page visits",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 5,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:pagePath": "string",
            "root[].ga:visitors": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:pagePath",
          "xAxisOperation": null,
          "yAxis": "root[].ga:pagePath",
          "yAxisOperation": "count",
          "dateField": null,
          "datasetColor": "#8C564B",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Pages",
          "pointRadius": null,
          "formula": null,
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:visitors",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": "ga:pagePath"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 6,
      "name": "Bounce rate",
      "type": "line",
      "subType": "timeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 6,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:bounceRate": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:bounceRate",
          "xAxisOperation": null,
          "yAxis": "root[].ga:bounceRate",
          "yAxisOperation": "none",
          "dateField": "root[].ga:date",
          "datasetColor": "#BCBD22",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Bounce rate",
          "pointRadius": null,
          "formula": "{val}%",
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:bounceRate",
              "startDate": "30daysAgo",
              "endDate": "yesterday",
              "dimensions": ""
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    },
    {
      "tid": 7,
      "name": "Avg Sessions Length",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 7,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root[].ga:avgSessionDuration": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root[].ga:avgSessionDuration",
          "xAxisOperation": null,
          "yAxis": "root[].ga:avgSessionDuration",
          "yAxisOperation": "none",
          "dateField": null,
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Session length",
          "pointRadius": null,
          "formula": "{val}s",
          "DataRequest": {
            "headers": null,
            "body": "null",
            "conditions": null,
            "configuration": {
              "accountId": configuration.accountId,
              "propertyId": configuration.propertyId,
              "viewId": configuration.viewId,
              "filters": [],
              "metrics": "ga:avgSessionDuration",
              "startDate": "30daysAgo",
              "endDate": "yesterday"
            },
            "method": null,
            "route": null,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": false,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": null,
            "template": null
          },
        },
      ],
    }
  ],
  "Connections": [{
    "host": null,
    "dbName": null,
    "port": null,
    "username": null,
    "password": null,
    "options": null,
    "connectionString": null,
    "authentication": null,
    "firebaseServiceAccount": null,
    "name": "Google Analytics",
    "type": "googleAnalytics",
    "active": true,
    "srv": false
  }],
});

module.exports.template = template;

module.exports.build = async (projectId, {
  configuration, charts, connection_id,
}, dashboardOrder) => {
  if (!configuration || !connection_id) return Promise.reject("Missing required parameters");

  let checkErrored = false;
  const connection = await db.Connection.findOne({
    where: { id: connection_id },
    include: [{ model: db.OAuth }]
  });

  const dataRequest = {
    configuration: {
      accountId: configuration.accountId,
      propertyId: configuration.propertyId,
      viewId: configuration.viewId,
      startDate: "30daysAgo",
      endDate: "yesterday",
      metrics: "ga:users",
    },
  };

  try {
    await googleConnector.getAnalytics(connection.OAuth.refreshToken, dataRequest);
  } catch (error) {
    checkErrored = true;
  }

  if (!connection_id && checkErrored) {
    return Promise.reject(new Error("Request cannot be authenticated"));
  }

  return builder(projectId, configuration, dashboardOrder, template, charts, connection_id)
    .catch((err) => {
      if (err && err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    });
};
