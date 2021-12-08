(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5955],{8009:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return d}});var n=t(2122),r=t(9756),m=(t(5007),t(4983)),o=t(9536),p=["components"],i={},s={_frontmatter:i},l=o.Z;function d(e){var a=e.components,t=(0,r.Z)(e,p);return(0,m.mdx)(l,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"use-the-analytics-20-apis-with-java"},"Use the Analytics 2.0 APIs with Java"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Create the certificate and private key using openssl"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},"$ openssl req -nodes -text -x509 -newkey rsa:2048 -keyout secret.pem -out certificate.pem -days 356\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Upload the certificate.pem in Adobe IO Console > Your Integration > Public keys")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"convert private key to DER format"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},"$ openssl pkcs8 -topk8 -inform PEM -outform DER -in secret.pem  -nocrypt > secret.key\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Edit the config.properties in src/main/resources/ and add the values from your Adobe I/O Console integration.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Build"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},"$ mvn clean package\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},"$ java -jar target/IMS-Client-1.0-SNAPSHOT-jar-with-dependencies.jar\n")))),(0,m.mdx)("p",null,"See ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/analytics-apis/tree/main/src/resources/java/"},"Java client resources")," on GitHub for example code and additional resources."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-use-cases-java-md-50bdb6ba8b7fba844164.js.map