---
title: Usage API
description: View audit logs around how your organization uses Adobe Analytics.
---

# Usage API

The Usage API allows you to retrieve the usage and access log data provided within the Logs tool.

`GET https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage`

## Supported query string parameters

| Attribute | Type | Description | Possible Value|
| --- | --- | ---------- | ----- |
| `startDate` | `string` | Start date for the maximum of a 3 month period.| `YYYY-12-01T00:00:00-07` |
| `endDate` | `string` | End date for the maximum of a 3 month period. | `YYYY-12-15T14:32:33-07` |
| `login` | `string` | The login value of the user you want to filter logs by. Filtered as an exact match. | User defined |
| `ip` | `string` | The IP address you want to filter logs by. This filter supports a partial match.| `10.0` |
| `rsid` | `string` | The report suite ID you want to filter logs by. Filtered as an exact match. | User defined |
| `eventType` | `string` | The numeric id for the event type you want to filter logs by. Please reference the lookup table below. | `3` |
| `event` | `string` |  The event description you want to filter logs by. No wildcards are permitted, but this filter is case insensitive and supports partial matches.| User defined |
| `limit` | `integer` | Number of results per page, with a maximum value of 1000. | `10` |
| `page` | `integer` | Page number (base 0 - first page is "0")| `0` |

## `eventType` lookup

By default, all event types are included when you make a request to get usage logs. You can apply a filter for a specific event type using the `eventType` query string parameter. These event types are the same fields available in the [Usage and Access Log](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/logs.html) in the Analytics UI.

| ID | Event Type |
| --- | --- |
| `0` | No Category |
| `1` | Login failed |
| `2` | Login successful |
| `3` | Admin Action |
| `4` | Security setting change |
| `5` | Report viewed |
| `6` | Report downloaded |
| `7` | Alert sent |
| `8` | User Action |
| `9` | Tool viewed |
| `10` | Adobe Action |
| `11` | Password Recovery |
| `12` | BookMarks |
| `13` | Dashboards |
| `14` | Alerts |
| `15` | Calendar Events |
| `16` | Targets |
| `17` | Report Settings |
| `18` | Scheduled Reports |
| `19` | Exclude By IP |
| `20` | Name Pages |
| `21` | Classifications |
| `22` | Data Sources |
| `23` | Workspace Project |
| `24` | Segment |
| `25` | Calculated Metric |
| `26` | Date Range |
| `27` | Virtual Report Suite |
| `28` | Contribution Analysis |
| `30` | Excel Data Block Request |
| `31` | Excel Login Failure |
| `32` | Excel Login Success |
| `41` | Mobile Login Failure |
| `42` | Mobile Login Success |
| `61` | Api Method |

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage?startDate=YYYY-01-01T00%3A00%3A00-07&endDate=YYYY-01-15T14%3A32%3A33-07&limit=10" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESS_TOKEN}" \
    -H "Accept: application/json"
```

#### Response

```json
{
  "content": [
    {
      "eventType": null,
      "eventDescription": "Created Successfully",
      "ipAddress": "10.27.55.130",
      "login": "user@adobe.com",
      "rsid": null,
      "dateCreated": "YYYY-01-13T23:20:41.000+00:00"
    },
    {
      "eventType": "23",
      "eventDescription": "Project Viewed: Name=AS PROJ 09 03 Project Id=5fd02d65b00cb97e4762a20f",
      "ipAddress": "10.27.55.131",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T23:20:30.000+00:00"
    },
    {
      "eventType": "2",
      "eventDescription": "Successful Login - Experience Cloud",
      "ipAddress": "10.178.33.74",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T23:20:10.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:Index in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:45:42.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:38:33.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:09:16.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:09:10.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:GetReportSuiteLog in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:08:54.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:08:26.000+00:00"
    },
    {
      "eventType": "3",
      "eventDescription": "Viewed Logs:Index in the Administration Console.",
      "ipAddress": "10.179.134.242",
      "login": "user@adobe.com",
      "rsid": "N/A",
      "dateCreated": "YYYY-01-13T18:06:09.000+00:00"
    }
  ],
  "totalElements": 159,
  "lastPage": false,
  "numberOfElements": 10,
  "totalPages": 16,
  "firstPage": true,
  "sort": null,
  "size": 10,
  "number": 0
}
```

The following request contains query string parameters to filter the logs by eventType, IP and event.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage?startDate=YYYY-01-01T00%3A00%3A00-07&endDate=YYYY-01-15T14%3A32%3A33-07&ip=10&eventType=5&event=viewed&limit=10" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESS_TOKEN}" \
    -H "Accept: application/json"
```

#### Response

```json
{
  "content": [
    {
      "eventType": "5",
      "eventDescription": "Pages Report viewed",
      "ipAddress": "10.178.63.58",
      "login": "user@adobe.com",
      "rsid": "examplersid",
      "dateCreated": "YYYY-01-11T19:30:46.000+00:00"
    }
  ],
  "totalElements": 1,
  "lastPage": true,
  "numberOfElements": 1,
  "totalPages": 1,
  "firstPage": true,
  "sort": null,
  "size": 10,
  "number": 0
}
```
