import"./Base.b26d5ffd.js";import{A as p}from"./App.32c0128d.js";import"./vendor.a4ae880d.js";new p({target:document.getElementById("app")});let i=document.querySelector("main");i.innerHTML+=`
        <div class="post-content">
            <h3>UI Builder</h3>
<p>UI Builder \u662F\u5DE5\u5177\u5305UI Toolkit\u7684\u53EF\u89C6\u5316\u521B\u4F5C\u5DE5\u5177 \u652F\u6301\u7F16\u8F91\u5668ui\u548C\u8FD0\u884C\u65F6ui\u7684\u5236\u4F5C\uFF0C\u91C7\u7528\u63CF\u8FF0\u6587\u6863\uFF08.uxml\uFF09\u52A0\u6837\u5F0F\u6587\u6863\uFF08.uss\uFF09\u7684\u7C7Bweb\u9875\u9762\u7684\u8BBE\u8BA1\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u6784\u5EFA\u7B26\u5408\u9700\u6C42\u7684ui</p>
<h3>why</h3>
<p>unity\u5DF2\u7ECF\u6709\u4E00\u5957ugui\u7CFB\u7EDF\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u8FD9\u5957\u8BBE\u8BA1\uFF1F\u6E38\u620F\u5F00\u53D1\u672C\u8EAB\u7684ui\u9700\u6C42\u8F83\u9875\u9762\u5F00\u53D1\u5F31\uFF0C\u4E00\u65E6\u9047\u5230\u76F8\u5BF9\u590D\u6742\u7684ui\u9700\u6C42\uFF0Cugui\u548C\u73B0\u6709\u7684ui\u7EC4\u4EF6\u5C31\u663E\u5F97\u6349\u895F\u89C1\u8098\u4E86\uFF0C\u5B9E\u9645\u5F00\u53D1\u4F1A\u975E\u5E38\u7684\u75DB\u82E6\uFF0C\u6709\u65F6\u5019\u751A\u81F3\u600E\u4E48\u8C03\u6574\uFF0C\u4E5F\u8FBE\u4E0D\u5230ui\u7684\u8981\u6C42\u3002\u5411\u5148\u8FDB\u7684web\u524D\u7AEF\u5F00\u53D1\u6807\u51C6\u5B66\u4E60\uFF0C\u4F60\u7684\u9009\u62E9\u4F1A\u66F4\u591A\u3002</p>
<h3>UI Toolkit</h3>
<p>UI \u5DE5\u5177\u5305\u662F\u7528\u4E8E\u5F00\u53D1\u7528\u6237\u754C\u9762 (UI) \u7684\u7279\u6027\u3001\u529F\u80FD\u3001\u8D44\u6E90\u548C\u5DE5\u5177\u7684\u96C6\u5408\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528 UI \u5DE5\u5177\u5305\u4E3A Unity \u7F16\u8F91\u5668\u3001\u8FD0\u884C\u65F6\u8C03\u8BD5\u5DE5\u5177\u4EE5\u53CA\u6E38\u620F\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6 UI \u5F00\u53D1\u81EA\u5B9A\u4E49 UI \u548C\u6269\u5C55\u3002</p>
<p>UI \u5DE5\u5177\u5305\u7684\u8BBE\u8BA1\u7075\u611F\u6765\u81EA\u6807\u51C6 Web \u6280\u672F\u3002\u5982\u679C\u60A8\u6709\u5F00\u53D1\u7F51\u9875\u6216\u5E94\u7528\u7A0B\u5E8F\u7684\u7ECF\u9A8C\uFF0C\u60A8\u7684\u5927\u90E8\u5206\u77E5\u8BC6\u53EF\u80FD\u662F\u53EF\u4EE5\u79FB\u690D\u7684\uFF0C\u5E76\u4E14\u8BB8\u591A\u6838\u5FC3\u6982\u5FF5\u53EF\u80FD\u4F3C\u66FE\u76F8\u8BC6</p>
<h3>uxml\u6587\u6863</h3>
<p>\u6211\u4EEC\u901A\u8FC7\u5305\u7BA1\u7406\u5B89\u88C5uibuilder\uFF0C\u7136\u540E\u5728\u573A\u666F\u4E2D\u53F3\u952E\u521B\u5EFA\u4E00\u4E2AUIDocument</p>
<p><img src="Snipaste_2022-03-27_19-01-22.png" alt="img"></p>
<p>UIDocument\u4F9D\u8D56panel setting\u8D44\u4EA7\u548C\u4E00\u4E2AUXML \u6587\u6863\uFF0C\u6211\u4EEC\u521B\u5EFA\u5BF9\u5E94\u6587\u4EF6</p>
<p><img src="Snipaste_2022-03-27_19-03-31.png" alt="img"></p>
<p>\u53CC\u51FB\u521B\u5EFA\u7684uxml\u6587\u6863\uFF0C\u6253\u5F00\u7F16\u8F91\u9875\u9762</p>
<p>\u9009\u62E9\u89C6\u7A97\uFF0C\u8BBE\u7F6E\u753B\u5E03\u5C3A\u5BF8\u9009\u62E9\u753B\u5E03\u80CC\u666F</p>
<p><img src="Snipaste_2022-03-27_20-06-11.png" alt="img"></p>
<p>\u6211\u4EEC\u5411\u89C6\u7A97\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5E76\u7ED9\u4ED6\u4E00\u4E2A\u80CC\u666F\u8272\uFF0C\u5E76\u8BBE\u7F6Esize\u6491\u6EE1\u5168\u5C4F</p>
<p><img src="Snipaste_2022-03-27_20-15-36.png" alt="img"></p>
<p>\u4E3A\u521A\u624D\u7684\u5BB9\u5668\u6DFB\u52A0\u4E00\u4E2A\u6309\u94AE\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u9762\u677F\uFF0C\u81EA\u5DF1\u5C1D\u8BD5\u8BBE\u7F6E\u4ED6\u7684\u5404\u79CD\u5C5E\u6027\uFF0C\u975E\u5E38\u65B9\u4FBF\uFF0C\u8FD9\u6837\u6211\u4EEC\u5F97\u5230\u4E86\u4E00\u4E2A\u5305\u542B\u5F00\u59CB\u6309\u94AE\u7684ui\u9762\u677F\uFF0C\u6211\u4EEC\u70B9\u51FBplay\uFF0C\u67E5\u770B\u6548\u679C</p>
<p><img src="Snipaste_2022-03-27_20-42-50.png" alt="img">
<img src="Snipaste_2022-03-27_20-43-10.png" alt="img"></p>
<h3>style</h3>
<p>\u6211\u4EEC\u7ED9\u6211\u4EEC\u7684\u5F00\u59CB\u6309\u94AE\u6DFB\u52A0\u4E00\u4E2A\u751F\u6210\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u6837\u5F0F\u7684\u6309\u94AE\uFF0C\u7F16\u8F91\u9875\u9762\u5DE6\u4E0A\u89D2\u662F\u6211\u4EEC\u521A\u521B\u5EFA\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u5C55\u5F00\u540E\u5C06\u6211\u4EEC\u521A\u521B\u5EFA\u7684\u6837\u5F0F\u62D6\u62FD\u5230\u65B0\u6309\u94AE\u4E0A\uFF0C\u6211\u4EEC\u53D1\u73B0\u592E\u89C6\u88AB\u5E94\u7528\u5230\u8FD9\u4E2A\u6309\u94AE\u4E0A\u4E86\u3002\u7ED3\u6784\u548C\u6837\u5F0F\u5206\u79BB\uFF0C\u6211\u4EEC\u5C06\u6837\u5F0F\u7EF4\u62A4\u5728uss\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u6837\u4F7F\u5F97ui\u66F4\u52A0\u7075\u6D3B\uFF0C\u6BD4\u5982\u6211\u4EEC\u6709\u591A\u5957ui\u4E3B\u9898\uFF0C\u8FD9\u6837\u5207\u6362\u5B8C\u5168\u662F\u65E0\u7F1D\u7684\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u989D\u5916\u7EF4\u62A4\u9884\u5236\u4F53\u548C\u4EE3\u7801\u903B\u8F91\u4E86</p>
<p><img src="Snipaste_2022-03-27_20-49-10.png" alt="img">
<img src="Snipaste_2022-03-27_20-49-25.png" alt="img">
<img src="Snipaste_2022-03-27_20-49-32.png" alt="img"></p>
<h3>\u4EE3\u7801</h3>
<p>\u6700\u540E\u6211\u4EEC\u901A\u8FC7\u4EE3\u7801\u83B7\u53D6\u5B9E\u4F8B\u5BF9\u8C61</p>
<p><img src="Snipaste_2022-03-27_21-18-40.png" alt="img">
<img src="Snipaste_2022-03-27_21-22-32.png" alt="img"></p>
<h3>\u5176\u4ED6</h3>
<p>\u5F53\u7136\u8FD9\u8FD8\u53EA\u662Fui toolkit\u6574\u4E2A\u5DE5\u5177\u7684\u4E00\u5C0F\u90E8\u5206\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u5C06uxml\u76F8\u4E92\u5D4C\u5957\uFF0C\u590D\u7528\u548C\u62D3\u5C55\u5C06\u975E\u5E38\u9AD8\u6548\u3002\u5982\u679C\u4F60\u4E86\u89E3web\u6807\u51C6\uFF0C\u90A3\u5C31\u8BF7\u76F4\u63A5\u4F7F\u7528\u4ED6\u5427\uFF0C\u8FD9\u7EDD\u5BF9\u662F\u4E2A\u597D\u4E1C\u897F\uFF0C\u6CA1\u6709web\u7ECF\u9A8C\u4E5F\u6CA1\u5173\u7CFB\uFF0Cunity\u4E3A\u6211\u4EEC\u63D0\u4F9B\u7684\u53EF\u89C6\u5316\u5DE5\u5177\uFF0C\u8BA9\u6211\u4EEC\u51E0\u4E4E\u5F88\u5C0F\u7684\u5B66\u4E60\u6210\u672C\u5C31\u80FD\u5FEB\u901F\u4E0A\u624B</p>

        </div>`;
