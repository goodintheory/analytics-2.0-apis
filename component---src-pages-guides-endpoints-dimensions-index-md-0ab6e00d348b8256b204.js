"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[1608],{21334:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return u}});var t,i=a(87462),r=a(63366),d=(a(15007),a(64983)),l=a(91515),m=["components"],p={},o=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:p},x=l.Z;function u(e){var n=e.components,a=(0,r.Z)(e,m);return(0,d.mdx)(x,(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"analytics-dimensions-api"},"Analytics Dimensions API"),(0,d.mdx)("p",null,"The Analytics 2.0 Dimensions API endpoints allow you to retrieve Dimensions programmatically through Adobe Developer. The endpoints use the same data and methods that are used when working with Dimensions in the UI. See ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/overview.html?lang=en"},"Dimensions")," in the Analytics Components guide for more information. "),(0,d.mdx)("p",null,"The endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to the Adobe Analytics Reporting API. For more information, refer to ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/"},"Getting started with the Analytics API"),"."),(0,d.mdx)("p",null,"This guide includes instructions for using the following endpoints:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"GET dimensions: Returns a list of dimensions for a given report suite ID"),(0,d.mdx)("li",{parentName:"ul"},"GET dimensions ID: Returns a dimension corresponding to a supplied ID for a given report suite")),(0,d.mdx)("h2",{id:"get-dimensions"},"GET dimensions"),(0,d.mdx)("p",null,"Use this endpoint to return a list of dimensions for a given report suite ID."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"GET"),"  ",(0,d.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{globalCompanyId}/dimensions?rsid={RSID}")),(0,d.mdx)("p",null,"You can find your global company ID by using the ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/discovery/"},"Discovery API"),"."),(0,d.mdx)("h3",{id:"request-parameters"},"Request parameters"),(0,d.mdx)("p",null,"The GET dimensions endpoint includes the following request query parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"report suite ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"locale")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified language")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"segmentable")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether to include only dimensions that are valid within a segment")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"reportable")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether to include only dimensions that are valid within the report")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"classifiable")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether to include only classifiable dimensions")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"expansion")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,d.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of additional metadata to items, including ",(0,d.mdx)("inlineCode",{parentName:"td"},"tags"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"allowedForReporting"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"categories"))))),(0,d.mdx)("h3",{id:"response-parameters"},"Response parameters"),(0,d.mdx)("p",null,"The GET dimensions endpoint includes the following response parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Dimension ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"title")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Dimension title")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Dimension name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"type")),(0,d.mdx)("td",{parentName:"tr",align:null},"array of enums"),(0,d.mdx)("td",{parentName:"tr",align:null},"Lists the data type of the dimension")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"category")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Product category")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"categories")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Product categories. An extra metadata item in response to the ",(0,d.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"support")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Support information")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"pathable")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether the report/dimension is pathing enabled")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"parent")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Parent dimension")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"extraTitleInfo")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Additional title info")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"segmentable")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is segmentable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"reportable")),(0,d.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is segmentable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"description")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contents of dimension description field in report")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"allowedForReporting")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is set to be allowed for reporting. An extra metadata item in response to the ",(0,d.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"noneSettings")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},'Whether "none" item report setting is set.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"tags")),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null},"An extra metadata item in response to the ",(0,d.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter. This can include the tag ID, tag name, tag description, and a list of components associated the tag.")))),(0,d.mdx)("h3",{id:"request-and-response-examples"},"Request and response examples"),(0,d.mdx)("p",null,"Click the ",(0,d.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,d.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request. "),(0,d.mdx)(o,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{globalCompanyId}/dimensions?rsid=examplersid&locale=en_US&segmentable=true&reportable=true&classifiable=true&expansion=categories" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}"\n')),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "variables/campaign",\n    "title": "Tracking Code",\n    "name": "Tracking Code",\n    "type": "string",\n    "category": "Traffic Sources",\n    "categories": [],\n    "support": [\n      "dataWarehouse",\n      "oberon"\n    ],\n    "pathable": false,\n    "segmentable": true,\n    "reportable": [\n      "oberon"\n    ],\n    "supportsDataGovernance": true,\n    "multiValued": false,\n    "standardComponent": true\n  },\n  {\n    "id": "variables/clickmaplink",\n    "title": "Activity Map Link",\n    "name": "Activity Map Link",\n    "type": "string",\n    "category": "ClickMap",\n    "categories": [\n      "Activity Map"\n    ],\n    "support": [\n      "oberon",\n      "dataWarehouse"\n    ],\n    "pathable": false,\n    "segmentable": true,\n    "reportable": [\n      "oberon"\n    ],\n    "supportsDataGovernance": true,\n    "dataGroup": "clickmap",\n    "multiValued": false\n  },\n]\n')),(0,d.mdx)("h4",{id:"request-example-details"},"Request example details"),(0,d.mdx)("p",null,"The above example requests the following details:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The GET dimensions list for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"examplersid")," report suite. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The language as US English with the query parameter ",(0,d.mdx)("inlineCode",{parentName:"p"},"locale")," as ",(0,d.mdx)("inlineCode",{parentName:"p"},"en_US"),". ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The values for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"segmentable"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportable"),", and ",(0,d.mdx)("inlineCode",{parentName:"p"},"classifiable")," parameters.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Information for ",(0,d.mdx)("inlineCode",{parentName:"p"},"expansion")," parameter ",(0,d.mdx)("inlineCode",{parentName:"p"},"categories"),". "))),(0,d.mdx)("h4",{id:"response-example-details"},"Response example details"),(0,d.mdx)("p",null,"The above JSON response example shows the following details:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Information for two ",(0,d.mdx)("inlineCode",{parentName:"p"},"classifiable")," dimensions in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"examplersid")," report suite, including ",(0,d.mdx)("inlineCode",{parentName:"p"},"campaign")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"clickmaplink"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"title")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"name")," values for each dimension.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Both dimensions have the same data ",(0,d.mdx)("inlineCode",{parentName:"p"},"type"),", set as ",(0,d.mdx)("inlineCode",{parentName:"p"},"string"),". ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The dimensions differ in ",(0,d.mdx)("inlineCode",{parentName:"p"},"category"),". The ",(0,d.mdx)("inlineCode",{parentName:"p"},"category")," for ",(0,d.mdx)("inlineCode",{parentName:"p"},"campaign")," is ",(0,d.mdx)("inlineCode",{parentName:"p"},"Traffic sources"),". The ",(0,d.mdx)("inlineCode",{parentName:"p"},"category")," for ",(0,d.mdx)("inlineCode",{parentName:"p"},"clickmaplink")," is ",(0,d.mdx)("inlineCode",{parentName:"p"},"ClickMap"),". ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Both dimensions are ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportable")," in ",(0,d.mdx)("inlineCode",{parentName:"p"},"oberon"),". Both are also ",(0,d.mdx)("inlineCode",{parentName:"p"},"segmentable"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The dimension ",(0,d.mdx)("inlineCode",{parentName:"p"},"campaign")," does not have any categories associated with it but the ",(0,d.mdx)("inlineCode",{parentName:"p"},"clickmaplink")," dimension is associated with ",(0,d.mdx)("inlineCode",{parentName:"p"},"Activity Map"),"."))),(0,d.mdx)("h2",{id:"get-dimensions-id"},"GET dimensions ID"),(0,d.mdx)("p",null,"Use this endpoint to retrieve information for a specified dimension in a report suite."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"GET"),"  ",(0,d.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/[globalCompanyId}/dimensions/{Dimension ID}?rsid={RSID number}")),(0,d.mdx)("h3",{id:"request-parameters-1"},"Request parameters"),(0,d.mdx)("p",null,"The GET dimensions ID endpoint includes the following request query parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Dimenstion ID (e.g.",(0,d.mdx)("inlineCode",{parentName:"td"},"evar1"),")")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Report suite ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"locale")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified language")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"expansion")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,d.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of additional metadata to items, including ",(0,d.mdx)("inlineCode",{parentName:"td"},"tags"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"allowedForReporting"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"categories"))))),(0,d.mdx)("h3",{id:"response-parameters-1"},"Response parameters"),(0,d.mdx)("p",null,"The GET dimensions ID endpoint includes the same response parameters as the GET dimensions response parameters, as described above."),(0,d.mdx)("h3",{id:"request-and-response-examples-1"},"Request and response examples"),(0,d.mdx)("p",null,"Click the ",(0,d.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request. Click the ",(0,d.mdx)("strong",{parentName:"p"},"Response tab")," to see a successful JSON response for the request. "),(0,d.mdx)(o,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-1"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{globalCompanyId}/dimensions/clickmaplink?rsid=examplersid&locale=en_US&expansion=allowedForReporting\n" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}"\n')),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "variables/clickmaplink",\n  "title": "Activity Map Link",\n  "name": "Activity Map Link",\n  "type": "string",\n  "category": "ClickMap",\n  "support": [\n    "oberon",\n    "dataWarehouse"\n  ],\n  "pathable": false,\n  "segmentable": true,\n  "reportable": [\n    "oberon"\n  ],\n  "supportsDataGovernance": true,\n  "dataGroup": "clickmap",\n  "allowedForReporting": true,\n  "multiValued": false\n}\n')),(0,d.mdx)("h4",{id:"request-example-details-1"},"Request example details"),(0,d.mdx)("p",null,"The above example requests the following details:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The GET dimensions ID for ",(0,d.mdx)("inlineCode",{parentName:"p"},"clickmaplink")," in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"examplersid")," report suite. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The language as US English with the query parameter ",(0,d.mdx)("inlineCode",{parentName:"p"},"locale")," as ",(0,d.mdx)("inlineCode",{parentName:"p"},"en_US"),". ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Information on whether the dimension is ",(0,d.mdx)("inlineCode",{parentName:"p"},"allowedForReporting"),"."))),(0,d.mdx)("h4",{id:"response-example-details-1"},"Response example details"),(0,d.mdx)("p",null,"The above JSON response example shows the following ",(0,d.mdx)("inlineCode",{parentName:"p"},"clickmaplink")," dimension details for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"examplersid")," report suite: "),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Standard response details for the dimension, including the information that it is reportable to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"oberon")," tool. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The dimension is ",(0,d.mdx)("inlineCode",{parentName:"p"},"allowedForReporting"),"."))),(0,d.mdx)("p",null,"For more information on the Dimensions API endpoints, see the ",(0,d.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/analytics-2.0-apis/#/"},"Adobe Analytics 2.0 API Reference"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-dimensions-index-md-0ab6e00d348b8256b204.js.map