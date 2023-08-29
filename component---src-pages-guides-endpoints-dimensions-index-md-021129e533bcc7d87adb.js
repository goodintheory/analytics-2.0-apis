"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[1608],{21334:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t,i=a(87462),l=a(63366),r=(a(15007),a(64983)),d=a(91515),m=["components"],o={},p=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:o},x=d.Z;function u(e){var n=e.components,a=(0,l.Z)(e,m);return(0,r.mdx)(x,(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"analytics-dimensions-api"},"Analytics Dimensions API"),(0,r.mdx)("p",null,"The Analytics 2.0 Dimensions API endpoints allow you to retrieve Dimensions programmatically through Adobe Developer. The endpoints use the same data and methods that are used when working with Dimensions in the UI. See ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/overview.html?lang=en"},"Dimensions")," in the Analytics Components guide for more information."),(0,r.mdx)("p",null,"The endpoints described in this guide are routed through analytics.adobe.io. To use them, you will need to first create a client with access to the Adobe Analytics Reporting API. For more information, refer to ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/"},"Getting started with the Analytics API"),"."),(0,r.mdx)("p",null,"This guide includes instructions for using the following endpoints:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"GET multiple dimensions: Returns a list of dimensions for a given report suite ID"),(0,r.mdx)("li",{parentName:"ul"},"GET a single dimensions: Returns a dimension corresponding to a supplied ID for a given report suite")),(0,r.mdx)("h2",{id:"get-multiple-dimensions"},"GET multiple dimensions"),(0,r.mdx)("p",null,"Use this endpoint to return a list of dimensions for a given report suite ID."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"GET"),"  ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/dimensions?rsid={RSID}")),(0,r.mdx)("p",null,"You can find your global company ID by using the ",(0,r.mdx)("a",{parentName:"p",href:"../discovery.md"},"Discovery API"),"."),(0,r.mdx)("h3",{id:"request-and-response-examples"},"Request and response examples"),(0,r.mdx)("p",null,"Click the ",(0,r.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,r.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"request"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/dimensions?rsid=examplersid&locale=en_US&segmentable=true&reportable=true&classifiable=true&expansion=categories" \\\n    -H "x-api-key: {CLIENT_ID}" \\\n    -H "Authorization: Bearer {ACCESS_TOKEN}"\n')),(0,r.mdx)("h3",{id:"response"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "variables/campaign",\n    "title": "Tracking Code",\n    "name": "Tracking Code",\n    "type": "string",\n    "category": "Traffic Sources",\n    "categories": [],\n    "support": [\n      "dataWarehouse",\n      "oberon"\n    ],\n    "pathable": false,\n    "segmentable": true,\n    "reportable": [\n      "oberon"\n    ],\n    "supportsDataGovernance": true,\n    "multiValued": false,\n    "standardComponent": true\n  },\n  {\n    "id": "variables/clickmaplink",\n    "title": "Activity Map Link",\n    "name": "Activity Map Link",\n    "type": "string",\n    "category": "ClickMap",\n    "categories": [\n      "Activity Map"\n    ],\n    "support": [\n      "oberon",\n      "dataWarehouse"\n    ],\n    "pathable": false,\n    "segmentable": true,\n    "reportable": [\n      "oberon"\n    ],\n    "supportsDataGovernance": true,\n    "dataGroup": "clickmap",\n    "multiValued": false\n  },\n]\n')),(0,r.mdx)("h3",{id:"request-example-details"},"Request example details"),(0,r.mdx)("p",null,"The above example requests the following details:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The GET dimensions list for the ",(0,r.mdx)("inlineCode",{parentName:"li"},"examplersid")," report suite."),(0,r.mdx)("li",{parentName:"ul"},"Specifies the response language in ",(0,r.mdx)("inlineCode",{parentName:"li"},"locale")," as US English with the value ",(0,r.mdx)("inlineCode",{parentName:"li"},"en_US"),"."),(0,r.mdx)("li",{parentName:"ul"},"The values for the ",(0,r.mdx)("inlineCode",{parentName:"li"},"segmentable"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"reportable"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"classifiable")," parameters."),(0,r.mdx)("li",{parentName:"ul"},"Information for ",(0,r.mdx)("inlineCode",{parentName:"li"},"expansion")," parameter ",(0,r.mdx)("inlineCode",{parentName:"li"},"categories"),".")),(0,r.mdx)("h4",{id:"request-parameters"},"Request parameters"),(0,r.mdx)("p",null,"The GET dimensions endpoint includes the following request query parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,r.mdx)("td",{parentName:"tr",align:null},"required"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"report suite ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"locale")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified language")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"segmentable")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether to include only dimensions that are valid within a segment")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"reportable")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether to include only dimensions that are valid within the report")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"classifiable")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether to include only classifiable dimensions")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,r.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of additional metadata to items, including ",(0,r.mdx)("inlineCode",{parentName:"td"},"tags"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"allowedForReporting"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"categories"))))),(0,r.mdx)("h4",{id:"response-example-details"},"Response example details"),(0,r.mdx)("p",null,"The above JSON response example shows the following details:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Information for two ",(0,r.mdx)("inlineCode",{parentName:"li"},"classifiable")," dimensions in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"examplersid")," report suite, including ",(0,r.mdx)("inlineCode",{parentName:"li"},"campaign")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickmaplink"),"."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"title")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"name")," values for each dimension."),(0,r.mdx)("li",{parentName:"ul"},"Both dimensions have the same data ",(0,r.mdx)("inlineCode",{parentName:"li"},"type"),", set as ",(0,r.mdx)("inlineCode",{parentName:"li"},"string"),"."),(0,r.mdx)("li",{parentName:"ul"},"The dimensions differ in ",(0,r.mdx)("inlineCode",{parentName:"li"},"category"),". The ",(0,r.mdx)("inlineCode",{parentName:"li"},"category")," for ",(0,r.mdx)("inlineCode",{parentName:"li"},"campaign")," is ",(0,r.mdx)("inlineCode",{parentName:"li"},"Traffic sources"),". The ",(0,r.mdx)("inlineCode",{parentName:"li"},"category")," for ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickmaplink")," is ",(0,r.mdx)("inlineCode",{parentName:"li"},"ClickMap"),"."),(0,r.mdx)("li",{parentName:"ul"},"Both dimensions are ",(0,r.mdx)("inlineCode",{parentName:"li"},"reportable")," in ",(0,r.mdx)("inlineCode",{parentName:"li"},"oberon"),". Both are also ",(0,r.mdx)("inlineCode",{parentName:"li"},"segmentable"),"."),(0,r.mdx)("li",{parentName:"ul"},"The dimension ",(0,r.mdx)("inlineCode",{parentName:"li"},"campaign")," does not have any categories associated with it, but the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickmaplink")," dimension is associated with ",(0,r.mdx)("inlineCode",{parentName:"li"},"Activity Map"),".")),(0,r.mdx)("h4",{id:"response-parameters"},"Response parameters"),(0,r.mdx)("p",null,"The GET dimensions endpoint includes the following response parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"title")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension title")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension name")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of enums"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lists the data type of the dimension")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"category")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Product category")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"categories")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Product categories. An extra metadata item in response to the ",(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"support")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Support information")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pathable")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the report/dimension is pathing enabled")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"parent")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Parent dimension")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"extraTitleInfo")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Additional title info")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"segmentable")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is segmentable")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"reportable")),(0,r.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is segmentable")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"description")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contents of dimension description field in report")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"allowedForReporting")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is set to be allowed for reporting. An extra metadata item in response to the ",(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"noneSettings")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'Whether "none" item report setting is set.')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tags")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"An extra metadata item in response to the ",(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")," request parameter. This can include the tag ID, tag name, tag description, and a list of components associated the tag.")))),(0,r.mdx)("h2",{id:"get-a-single-dimension"},"GET a single dimension"),(0,r.mdx)("p",null,"Use this endpoint to retrieve information for a specified dimension in a report suite."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"GET"),"  ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/dimensions/{DIMENSION_ID}?rsid={RSID}")),(0,r.mdx)("h3",{id:"request-and-response-examples-1"},"Request and response examples"),(0,r.mdx)("p",null,"Click the ",(0,r.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request. Click the ",(0,r.mdx)("strong",{parentName:"p"},"Response tab")," to see a successful JSON response for the request."),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request-1"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/dimensions/clickmaplink?rsid=examplersid&locale=en_US&expansion=allowedForReporting\n" \\\n    -H "x-api-key: {CLIENT_ID}" \\\n    -H "Authorization: Bearer {ACCESS_TOKEN}"\n')),(0,r.mdx)("h4",{id:"response-1"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "variables/clickmaplink",\n  "title": "Activity Map Link",\n  "name": "Activity Map Link",\n  "type": "string",\n  "category": "ClickMap",\n  "support": [\n    "oberon",\n    "dataWarehouse"\n  ],\n  "pathable": false,\n  "segmentable": true,\n  "reportable": [\n    "oberon"\n  ],\n  "supportsDataGovernance": true,\n  "dataGroup": "clickmap",\n  "allowedForReporting": true,\n  "multiValued": false\n}\n')),(0,r.mdx)("h3",{id:"request-example-details-1"},"Request example details"),(0,r.mdx)("p",null,"The above example requests the following details:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The dimensions information with the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickmaplink")," ID in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"examplersid")," report suite."),(0,r.mdx)("li",{parentName:"ul"},"Specifies the response language in ",(0,r.mdx)("inlineCode",{parentName:"li"},"locale")," as US English with the value ",(0,r.mdx)("inlineCode",{parentName:"li"},"en_US"),"."),(0,r.mdx)("li",{parentName:"ul"},"Information on whether the dimension is ",(0,r.mdx)("inlineCode",{parentName:"li"},"allowedForReporting"),".")),(0,r.mdx)("h4",{id:"request-parameters-1"},"Request parameters"),(0,r.mdx)("p",null,"The GET dimensions ID endpoint includes the following request query parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},"required"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimenstion ID (e.g.",(0,r.mdx)("inlineCode",{parentName:"td"},"evar1"),")")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,r.mdx)("td",{parentName:"tr",align:null},"required"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Report suite ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"locale")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified language")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"array (string)"),(0,r.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of additional metadata to items, including ",(0,r.mdx)("inlineCode",{parentName:"td"},"tags"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"allowedForReporting"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"categories"))))),(0,r.mdx)("h3",{id:"response-example-details-1"},"Response example details"),(0,r.mdx)("p",null,"The above JSON response example shows the following ",(0,r.mdx)("inlineCode",{parentName:"p"},"clickmaplink")," dimension details for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"examplersid")," report suite:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Standard response details for the dimension, including the information that it is reportable to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"oberon")," tool."),(0,r.mdx)("li",{parentName:"ul"},"The dimension is allowed for reporting as indicated by ",(0,r.mdx)("inlineCode",{parentName:"li"},"allowedForReporting: true"),".")),(0,r.mdx)("h4",{id:"response-parameters-1"},"Response parameters"),(0,r.mdx)("p",null,"The GET dimensions ID endpoint includes the same response parameters as the GET dimensions response parameters, as described above."),(0,r.mdx)("p",null,"For more information on the Dimensions API endpoints, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/analytics-2.0-apis/#/"},"Adobe Analytics 2.0 API Reference"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-dimensions-index-md-021129e533bcc7d87adb.js.map