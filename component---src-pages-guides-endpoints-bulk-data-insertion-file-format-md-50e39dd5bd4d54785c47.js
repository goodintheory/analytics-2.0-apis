"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[9181],{42451:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return s}});var n=t(87462),d=t(63366),m=(t(15007),t(64983)),i=t(91515),r=["components"],l={},o={_frontmatter:l},p=i.Z;function s(e){var a=e.components,t=(0,d.Z)(e,r);return(0,m.mdx)(p,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"bdia-file-format"},"BDIA file format"),(0,m.mdx)("p",null,"The Bulk Data Insertion API ingests data into Adobe Analytics using batch files. These files are in a specific CSV format where each row of the file contains details of a server call. Each row, or server call, must specify an identifier for a visitor as well as a timestamp for when the interaction occurred. The server calls must be ordered chronologically by their timestamps, from earliest to latest, in the batch files. Each batch file must also be compressed."),(0,m.mdx)("h2",{id:"batch-file-requirements"},"Batch file requirements"),(0,m.mdx)("p",null,"Batch files must conform to all of the following requirements:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"The file format is in CSV, conforming to the ",(0,m.mdx)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4180"},"RFC-4180 standard")," with one exception; empty lines are ignored."),(0,m.mdx)("li",{parentName:"ul"},"Every file consists of a header row (the first row in the file) and subsequent data rows."),(0,m.mdx)("li",{parentName:"ul"},"Header columns and fields are delimited by commas. If you have commas in values, surround the value in double quotes (",(0,m.mdx)("inlineCode",{parentName:"li"},'"'),"). If you also have double quotes in values, use double quotes inside the value. For example, ",(0,m.mdx)("inlineCode",{parentName:"li"},'field1,"Value with ""quotes"", and a comma.",field3')," - The value that appears in reporting would be ",(0,m.mdx)("inlineCode",{parentName:"li"},'Value with "quotes", and a comma.')),(0,m.mdx)("li",{parentName:"ul"},"Every row must have the same number of columns as the header row. If you want to omit a column from a row, leave the field empty or pass an empty string. For example, ",(0,m.mdx)("inlineCode",{parentName:"li"},"field1,,field3")," or ",(0,m.mdx)("inlineCode",{parentName:"li"},'field1,"",field3'),"."),(0,m.mdx)("li",{parentName:"ul"},"Trailing commas for header rows or data rows are not permitted."),(0,m.mdx)("li",{parentName:"ul"},"All rows in a batch file for any given visitor must be sorted in chronological order by ",(0,m.mdx)("inlineCode",{parentName:"li"},"timestamp")," from earliest to latest. Following this rule is crucial for attribution and analyzing visitor behavior. Adobe does not guarantee the integrity of data processed by this API if this rule is not strictly observed."),(0,m.mdx)("li",{parentName:"ul"},"All batch files must be compressed using gzip compression."),(0,m.mdx)("li",{parentName:"ul"},"Compressed file sizes are limited to 100 MB. Uncompressed file sizes are limited to 1 GB.")),(0,m.mdx)("p",null,"Batch files are flexible in the following ways:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"There are no restrictions on file names. When you submit a file to this API, Adobe returns a ",(0,m.mdx)("inlineCode",{parentName:"li"},"file_id")," that you can use to track the file. The name of the file is recorded under ",(0,m.mdx)("inlineCode",{parentName:"li"},"upload_name")," in the response object as well."),(0,m.mdx)("li",{parentName:"ul"},"Adobe supports both ",(0,m.mdx)("inlineCode",{parentName:"li"},"CRLF")," and ",(0,m.mdx)("inlineCode",{parentName:"li"},"LF")," line breaks to separate rows. A line break at the end of a data file is optional."),(0,m.mdx)("li",{parentName:"ul"},"Column header names are not case sensitive (with one exception for customerIDType, see ",(0,m.mdx)("a",{parentName:"li",href:"mcseed.md"},"Use customer ID to identify visitors"),"."),(0,m.mdx)("li",{parentName:"ul"},"Columns can appear in any order."),(0,m.mdx)("li",{parentName:"ul"},"Key/value pairs in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"QueryString")," field are also valid in any order.")),(0,m.mdx)("h2",{id:"required-columns"},"Required columns"),(0,m.mdx)("p",null,"Every row must contain the following five data points. If a row misses any one of these requirements, that row is skipped."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"At least one of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"visitorID")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"marketingCloudVisitorID")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"IPAddress")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," with ",(0,m.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].isMCSeed")," set to ",(0,m.mdx)("inlineCode",{parentName:"li"},"1"),". See ",(0,m.mdx)("a",{parentName:"li",href:"mcseed.md"},"Use customer ID to identify visitors"),"."))),(0,m.mdx)("li",{parentName:"ul"},"At least one of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"pageURL")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"pageName")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"linkType")," with ",(0,m.mdx)("inlineCode",{parentName:"li"},"linkName")," or ",(0,m.mdx)("inlineCode",{parentName:"li"},"linkURL")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"queryString")," that includes ",(0,m.mdx)("inlineCode",{parentName:"li"},"pageURL"),", ",(0,m.mdx)("inlineCode",{parentName:"li"},"pageName"),", or ",(0,m.mdx)("inlineCode",{parentName:"li"},"linkType")," as query string parameters with values"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"reportSuiteID")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"timestamp")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"userAgent"))),(0,m.mdx)("p",null,"Adobe only uses one visitor ID for a given row. If more than one visitor ID column contains data, Adobe uses the following priority to identify that visitor:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," with ",(0,m.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].isMCSeed")," set to ",(0,m.mdx)("inlineCode",{parentName:"li"},"1")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"visitorID")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"marketingCloudVisitorID")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"IPAddress"))),(0,m.mdx)("h2",{id:"query-string-or-column-based-row"},"Query string or column-based row"),(0,m.mdx)("p",null,"Adobe offers two ways to populate rows with data."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Use column headers"),": Use a separate column for each variable."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Use the ",(0,m.mdx)("inlineCode",{parentName:"strong"},"queryString")," column"),": Include most data in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"queryString")," column. This method is particularly helpful for implementations that use data generated by AppMeasurement libraries. You can include the image request's entire query string in this column with minimal adjustments. Other columns, such as ",(0,m.mdx)("inlineCode",{parentName:"li"},"timestamp")," and ",(0,m.mdx)("inlineCode",{parentName:"li"},"reportSuiteID"),", are not included in ",(0,m.mdx)("inlineCode",{parentName:"li"},"queryString")," and are still required as separate columns.")),(0,m.mdx)("p",null,"You can combine both of these methods in any amount to fill out rows with data. If a variable is present as both a query string and its column header, the column header value takes priority. For example, if the ",(0,m.mdx)("inlineCode",{parentName:"p"},"pageName")," column is ",(0,m.mdx)("inlineCode",{parentName:"p"},'"Column header example"')," and the ",(0,m.mdx)("inlineCode",{parentName:"p"},"queryString")," column contains ",(0,m.mdx)("inlineCode",{parentName:"p"},'"pageName=Query string example"'),", the value that Adobe uses is ",(0,m.mdx)("inlineCode",{parentName:"p"},'"Column header example"'),"."),(0,m.mdx)("h2",{id:"csv-and-query-string-column-reference"},"CSV and query string column reference"),(0,m.mdx)("p",null,"Adobe supports the following columns in batch files."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Column header name"),(0,m.mdx)("th",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"th"},"queryString")," equivalent"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"aamlh")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"aamlh")),(0,m.mdx)("td",{parentName:"tr",align:null},"Integer that represents the Adobe Audience Manager location hint. Valid values include:",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"3")),": Hong Kong/Singapore (",(0,m.mdx)("inlineCode",{parentName:"td"},"apse.demdex.net"),")",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"6")),": Amsterdam/London (",(0,m.mdx)("inlineCode",{parentName:"td"},"irl1.demdex.net"),")",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"7")),": US Central/East (",(0,m.mdx)("inlineCode",{parentName:"td"},"use.demdex.net"),")",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"8")),": Australia (",(0,m.mdx)("inlineCode",{parentName:"td"},"apse2.demdex.net"),")",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"9")),": US West (",(0,m.mdx)("inlineCode",{parentName:"td"},"usw2.demdex.net"),")",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"11")),": Tokyo (",(0,m.mdx)("inlineCode",{parentName:"td"},"tyo3.demdex.net"),")")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"browserHeight")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"bh")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-height.html"},"Browser height")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"browserWidth")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"bw")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-width.html"},"Browser width")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"campaign")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v0")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html"},"Tracking code")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"channel")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ch")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html"},"Site section")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"colorDepth")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/color-depth.html"},"Color depth")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"connectionType")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ct")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/connection-type.html"},"Connection type")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"contextData.key")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c.[key]")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"contextData"))," implementation variables.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cookiesEnabled")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"k")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/cookie-support.html"},"Cookie support")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"currencyCode")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/currencycode.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"currencyCode"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"customerID.")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"[customerIDType].")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"id")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cid.[customerIDType].id")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"id")," used in the Experience Cloud Identity Service ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/setcustomerids.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"setCustomerIDs"))," method.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"customerID.")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"[customerIDType].")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"authState")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cid.[customerIDType].as")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"authState")," used in the Experience Cloud Identity Service ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"setCustomerIDs"))," method. String values are not case sensitive. Supported values are:",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"0")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"UNKNOWN")," or an empty string: Not logged in",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"1")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"AUTHENTICATED"),": Logged in",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"2")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"LOGGED_OUT"),": Logged out")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"customerID.")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"[customerIDType].")," ",(0,m.mdx)("br",null)," ",(0,m.mdx)("inlineCode",{parentName:"td"},"isMCSeed")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cid.[customerIDType].ismcseed")),(0,m.mdx)("td",{parentName:"tr",align:null},"An integer boolean that lets you use ",(0,m.mdx)("inlineCode",{parentName:"td"},"customerID.[customerIDType].id")," as the hit's identifier. Use ",(0,m.mdx)("inlineCode",{parentName:"td"},"1")," for true and ",(0,m.mdx)("inlineCode",{parentName:"td"},"0")," for false. See ",(0,m.mdx)("a",{parentName:"td",href:"mcseed.md"},"Use customer ID to identify visitors"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"eVar1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"eVar250")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"v250")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html"},"eVar")," dimensions.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"events")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"events")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/events/events-overview.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"events"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hier1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"hier5")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"h5")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html"},"Hierarchy variables"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.architecture")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.architecture")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": The underlying architecture for the device")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.bitness")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.bitness")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),': "bitness" of the user-agent\'s CPU architecture — typically 64 or 32')),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.brands")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.brands")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": List of browser brands and their significant version. JSON object format: ",'[{"brand":"Chromium","version":"104"}, {"brand":"Google Chrome","version":"104"}]')),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.mobile")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.mobile")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": Boolean indicating if the browser is on a mobile device")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.model")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.model")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": The device model")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.platform")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.platform")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": The platform for the device, usually the operating system (OS)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.platformversion")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.platformversion")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": The version for the platform or OS")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"hints.wow64")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h.wow64")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/useragentclienthints.html"},"Client Hints"),": Boolean indicating if a 32-bit user-agent application is running on a 64-bit Windows machine")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ipaddress")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"The visitor's IP address.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"javaEnabled")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/java-enabled.html"},"Java enabled")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"language")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/language.html"},"Language")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"linkName")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pev2")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/download-link.html"},"Download link"),", ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/exit-link.html"},"Exit link"),", or ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/custom-link.html"},"Custom link")," dimension, depending on the value in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"linkType")," column. If this column contains a value, ",(0,m.mdx)("inlineCode",{parentName:"td"},"pageName")," is ignored.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"linkType")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"The type of link. Defaults to ",(0,m.mdx)("inlineCode",{parentName:"td"},"o")," if this field is empty and ",(0,m.mdx)("inlineCode",{parentName:"td"},"linkName")," contains a value. Valid values include:",(0,m.mdx)("br",null)," ",(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"d")),": Download link",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"e")),": Exit link",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"o")),": Custom link")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"linkURL")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pev1")),(0,m.mdx)("td",{parentName:"tr",align:null},"The link URL.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"list1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"list3")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"l1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"l3")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html"},"List variables"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorID")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"mid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique identifier used with the ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/home.html"},"Adobe Experience Cloud Identity Servce"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageName")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageName")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html"},"Page")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageType")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageType")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/pagetype.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"pageType"))," implementation variable. Set to the string value ",(0,m.mdx)("inlineCode",{parentName:"td"},'"errorPage"')," on any error pages, such as a 404 or 503 error.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageURL")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"g")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html"},"Page URL")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"products")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"products")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"products"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"prop1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"prop75")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"c75")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html"},"Prop")," dimensions.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"purchaseID")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"purchaseID")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/purchaseid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"purchaseID"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"queryString")),(0,m.mdx)("td",{parentName:"tr",align:null},"This column provides information for this field."),(0,m.mdx)("td",{parentName:"tr",align:null},"Key/value pairs that provide an alternative to using header columns. This column must be fully URL encoded, including any multi-byte characters. Adobe encodes the query string in UTF-8 by default.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"referrer")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"r")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/referrer.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"referrer"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"reportSuiteID")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specifies the report suite(s) where you want to submit data. Separate multiple report suite IDs with a comma.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"resolution")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"s")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/monitor-resolution.html"},"Monitor resolution")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"server")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"server")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/server.html"},"Server")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"timestamp")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ts")),(0,m.mdx)("td",{parentName:"tr",align:null},"The date and time that the data was collected. ",(0,m.mdx)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix Time")," and ",(0,m.mdx)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," are supported. Milliseconds are not allowed.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"tnta")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"tnta")),(0,m.mdx)("td",{parentName:"tr",align:null},"Target data payload. Used with ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html"},"Analytics for Target")," integrations.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"trackingServer")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/trackingserver.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"trackingServer"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"transactionID")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xact")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"transactionID"))," variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"userAgent")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A (Only available with column header)"),(0,m.mdx)("td",{parentName:"tr",align:null},"The device's user agent string.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"visitorID")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"vid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"visitorID"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"zip")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"zip")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension.")))),(0,m.mdx)("p",null,"The above table are the only column headers that Adobe supports. If you upload a file with a column header that is not included in the above table, that column is ignored."),(0,m.mdx)("h2",{id:"batch-file-examples"},"Batch file examples"),(0,m.mdx)("p",null,"The following text blocks are examples of what a CSV file looks like with a small number of rows and columns. Both examples contain a header row with two rows of data."),(0,m.mdx)("h3",{id:"batch-file-using-the-querystring-column"},"Batch file using the ",(0,m.mdx)("inlineCode",{parentName:"h3"},"querystring")," column"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-text"},'timestamp,visitorid,reportsuiteid,querystring,useragent\n1492191617,44444445,examplersid,pageName=PIGINI&v2=Var21&v3=Var31&c1=val11\n&c2=val21&c3=val31&bh=1000&bw=999&c=1024&j=3.41&k=1&p=1&s=1111&v=1&channel=TestChannel\n&pev1=https%3A%2F%2Fwww.adobe.com%2Fwho%3Fq%3Dwhoisit&state=UT&zip=84005&cc=USD\n&events=prodView%2Cevent2,"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) \nAppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36"\n1492191627,44444445,examplersid,pageName=PIGINI&v2=Var22&v3=Var32&c1=val12\n&c2=val22&c3=val32&bh=1000&bw=999&c=1024&j=3.41&k=1&p=1&s=1111&v=1&channel=TestChannel\n&pev1=https%3A%2F%2Fwww.adobe.com%2Fwho%3Fq%3Dwhoisit&state=UT&zip=84005&cc=USD\n&events=prodView%2Cevent2,"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) \nAppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36"\n\n')),(0,m.mdx)("h3",{id:"batch-file-using-column-headers"},"Batch file using column headers"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-text"},'pageName,timestamp,reportSuiteID,visitorID,userAgent,campaign,contextData.color,contextData.frame,pageURL,prop1,channel\n中文网站,1495483797,examplersid,238915514,"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1 ""Special\n Build""",Summer,Red,Titanium,http://example.com/path?param=val&param2=val2,p2,Mobile\n中文网站,1495483797,examplersid,142805255,"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1 ""Special\n Build""",Summer,Gray,Carbon,http://example.com/path?param=val&param2=val2,p2,Mobile\n')),(0,m.mdx)("p",null,"Once you have a correctly formatted file, you can start sending calls to the available ",(0,m.mdx)("a",{parentName:"p",href:"endpoints.md"},"Endpoints"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-file-format-md-50e39dd5bd4d54785c47.js.map