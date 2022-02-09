import"./Base.18644cc2.js";import{A as e}from"./App.6224392a.js";import"./vendor.5fd7cc74.js";new e({target:document.getElementById("app")});let p=document.querySelector("main");p.innerHTML+=`
        <div class="post-content">
            <h2>\u7F16\u8F91\u5668\u548C\u5DE5\u4F5C\u6D41</h2>
<h3>\u5728\u573A\u666F\u4E2D\u7F16\u8F91\u9884\u5236\u4F53</h3>
<p>\u4E09\u79CD\u663E\u793A\u6A21\u5F0F\uFF0C\u5E2E\u52A9\u7F16\u8F91</p>
<p><img src="Snipaste_2020-07-25_14-36-44.png" alt="img"></p>
<h3>\u5305\u7BA1\u7406UI\u66F4\u65B0\uFF0C</h3>
<p><img src="Snipaste_2020-07-25_16-40-03.png" alt="img"></p>
<p>\u5F00\u542F\u9884\u89C8\u5305\u9700\u8981\u4ECEproject\u4E2D\u8BBE\u7F6E</p>
<p><img src="Snipaste_2020-07-25_16-37-34.png" alt="img"></p>
<h3>\u79FB\u9664\u4E86\u5BF9Chromium Editor Framework\u7684\u652F\u6301</h3>
<p>\u5305\u4F53\u5C0F\u4E86</p>
<h3>\u8F74\u8F6C\u6362\u70D8\u57F9</h3>
<p>fbx\u5BFC\u5165\u8D44\u4EA7\u53EF\u80FD\u5B58\u5728\u8F74\u65B9\u5411\u9519\u8BEF\u7684\u95EE\u9898</p>
<p><img src="Snipaste_2020-07-25_17-58-34.png" alt="img"></p>
<h3>\u8D44\u4EA7\u5BFC\u5165\u7BA1\u7EBFv2</h3>
<p>\u5355\u72EC\u7684\u5C5E\u6027\u7A97\u53E3,\u5355\u72EC\u7684\u7EC4\u4EF6\u7A97\u53E3</p>
<p><img src="Snipaste_2020-07-25_17-56-50.png" alt="img"></p>
<h3>\u540E\u53F0\u4EFB\u52A1\u7A97\u53E3</h3>
<p>\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5F15\u5165UnityEditor\uFF0C\u901A\u8FC7Process\u6765\u6267\u884C\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\uFF0C\u5E76\u901A\u77E5\u7ED9\u4EFB\u52A1\u7A97\u53E3\u663E\u793A</p>
<pre><code class="language-csharp">using UnityEditor;
public IEnumerator Run_OneTask()
    {
        // Create a new progress indicator
        int progressId = Progress.Start(&quot;Running one task&quot;, &quot;description&quot;);

        // Report the progress status at anytime
        for (int frame = 0; frame &lt;= 1000; ++frame)
        {
            Progress.Report(progressId, frame / 1000.0f);

            // Do something else
            yield return null;
        }

        // The task is finished. Remove the associated progress indicator.
        Progress.Remove(progressId);
    }
</code></pre>
<p><img src="Snipaste_2020-07-25_18-21-53.png" alt="img"></p>
<h3>Unity Accelerator</h3>
<p>\u5C40\u57DF\u7F51\u4EE3\u7406\u548C\u7F13\u5B58\u670D\u52A1</p>
<h3>Addressables \u6539\u8FDB</h3>
<h3>\u5176\u4ED6</h3>
<p>\u526A\u5207\uFF0C\u7C98\u8D34</p>
<p><img src="Snipaste_2020-07-25_20-29-10.png" alt="img"></p>
<h2>\u7A0B\u5E8F\u5DE5\u5177</h2>
<h3>Profiler \u5DE5\u5177\u6539\u8FDB</h3>
<h3>Profiler \u72EC\u7ACB\u7A0B\u5E8F</h3>
<h3>Visual Studio \u96C6\u6210</h3>
<h3>New C# debugging workflow</h3>
<h3>\u652F\u6301\u6CDB\u578B\u7C7B\u578B\u57DF</h3>
<p>\u7B80\u5316\u4E86\u5BF9\u6CDB\u578B\u7C7B\u578B\u7684\u652F\u6301\uFF0C\u65E7\u7248\u672C\u4E2D\u9700\u8981\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2A\u7EE7\u627F\u81EA\u6CDB\u578B\u7684\u7C7B\u578B\uFF0C\u4F7F\u7528\u8BE5\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027\uFF0C\u65B0\u7248\u672C\u4E2D\u5219\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5F15\u7528\u6CDB\u578B\u7C7B\u578B\uFF0C\u8BA9\u5C5E\u6027\u9762\u677F\u6B63\u786E\u663E\u793A\u6211\u4EEC\u6307\u5B9A\u7684\u6837\u5F0F</p>
<pre><code class="language-csharp">namespace OldVersion
{
   public class SerializeFieldTest : MonoBehaviour
   {
       public GenericClassOfString stringClassField;
   }
   public class GenericClass&lt;T&gt; 
   {
       public T test;
   }
   [Serializable]
   public class GenericClassOfString : GenericClass&lt;string&gt; { }

}
</code></pre>
<pre><code class="language-csharp">namespace NewVersion
{
  public class SerializeFieldTest1 : MonoBehaviour
  {
      public GenericClass&lt;string&gt; stringClassField;
  }
  [Serializable]
  public class GenericClass&lt;T&gt;
  {
      public T test;
  }
}
</code></pre>
<h3>Burst Compiler 1.3</h3>
<h3>Profile Analyzer</h3>
<h2>\u7F8E\u672F\u5DE5\u5177</h2>
<h3>Burst\u7F16\u8BD1\u63D0\u53472D\u52A8\u753B\u6027\u80FD</h3>
<h3>2D Sprite Shape</h3>
<p>2D Sprite Shape\u662F2D\u56FE\u5F62\u53D8\u5F62\u5DE5\u5177\uFF0C\u9002\u5408\u5236\u4F5C\u4E0D\u89C4\u5219\u7684\u865A\u5E7B\u8D34\u56FE\u8BBE\u8BA1\uFF0C\u8FEA\u4F11\u81EA\u52A8\u8C03\u6574\uFF0C\u6750\u8D28\u81EA\u52A8\u4FEE\u6B63\u7B49\u65B9\u4FBF\u573A\u666F\u8BBE\u8BA1\u76842D\u56FE\u7247\u529F\u80FD</p>
<p>1.\u89D2\u6837\u5F0F\uFF0C\u4E0D\u5FC5\u5355\u72EC\u8BBE\u7F6E\u89D2\u7CBE\u7075</p>
<p>2.\u7F51\u683C\u70D8\u57F9</p>
<h3>2D\u6A21\u677F\u9879\u76EE\u66F4\u65B0</h3>
<h3>2D\u7269\u7406\u66F4\u65B0</h3>
<h3>Cinemachine\u6539\u8FDB</h3>
<h3>\u52A8\u753B\u66F4\u65B0</h3>
<p>Animation Rigging \u662F\u4E00\u5957\u7528\u6765\u5236\u4F5C3D\u9AA8\u9ABC\u5173\u8282\u884C\u4E3A\u7684\u7684\u5957\u4EF6\uFF0C\u8BBE\u7F6E\u5F88\u591A\u4E0D\u540C\u7684\u7EA6\u675F\u5668\uFF0C\u8BA9\u8FD0\u52A8\u770B\u8D77\u6765\u66F4\u81EA\u7136\uFF0C\u53EF\u4EE5\u5927\u91CF\u51CF\u5C11\u52A8\u753B\u6587\u4EF6\u7684\u6D6A\u8D39</p>
<p>Kinematica\u662F\u4E00\u5957\u6B21\u4E16\u4EE3\u7684\u89D2\u8272\u52A8\u753B\u7CFB\u7EDF</p>
<h2>\u56FE\u5F62</h2>
<h3>\u76F8\u673A\u6808</h3>
<p><a href="https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.2/manual/camera-stacking.html">learn more</a></p>
<h3>\u706F\u5149\u66F4\u65B0</h3>
<p>\u706F\u5149\u8BBE\u7F6E\u73B0\u5728\u662F\u4E00\u4E2A\u8D44\u4EA7\u6587\u4EF6\u4E86\uFF0C\u4E0D\u518D\u662F\u573A\u666F\u6587\u4EF6\u7684\u4E00\u90E8\u5206</p>
<h3>Overlap-free packing</h3>
<p>\u81EA\u52A8\u6253\u5305\u8FB9\u8DDD\uFF0C\u907F\u514D\u5149\u7167\u8D34\u56FE\u7684\u91CD\u53E0</p>
<p><img src="Snipaste_2020-07-26_18-46-11.png" alt="img"></p>
<h3>CPU\u548CGPU\u5149\u7167\u8D34\u56FE\u6539\u8FDB</h3>
<h3>\u5149\u7167\u8D34\u56FE\u6539\u8FDB</h3>
<p>\u51CF\u5C11\u4E86\u70D8\u57F9\u65F6\u95F4</p>
<h3>Lightmapped cookie support</h3>
<h3>Contributors/Receivers Scene View Mode</h3>
<h3>Ray tracing for animated Meshes</h3>
<p>\u5C04\u7EBF\u8FFD\u8E2A\u52A8\u753B\u7F51\u683C</p>
<p><a href="https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@9.0/manual/Ray-Tracing-Getting-Started.html">get started</a></p>
<h3>Streaming Virtual Texturing</h3>
<p>\u9AD8\u5206\u7EB9\u7406\uFF0C\u51CF\u5C11GPU\u5185\u5B58\u548C\u7EB9\u7406\u52A0\u8F7D\u65F6\u95F4</p>
<h2>\u5E73\u53F0</h2>
<h3>\u8F93\u5165\u7CFB\u7EDF</h3>
<h2>Pre-release tech</h2>
<h3>UI Toolkit</h3>
<p>\u7528\u6765\u6784\u5EFAUGUI\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5B89\u6392UI\u548C\u98CE\u683C</p>
<h3>Kinematica</h3>
<p>\u6B21\u4E16\u4EE3\u52A8\u753B\u5957\u4EF6</p>
<h3>Animation Rigging</h3>
<p>\u52A8\u753B\u7ED1\u5B9A\uFF0C\u521B\u5EFA\u9AA8\u9ABC\u7EA6\u675F\uFF0C\u51CF\u5C11\u52A8\u753B\u6587\u4EF6\u5927\u5C0F</p>
<h3>Cinemachine</h3>
<p>\u8FD0\u955C\u7CFB\u7EDF</p>
<h3>Device Simulator</h3>
<p>\u8BBE\u5907\u6A21\u62DF\u5668</p>
<h3>New caching shader preprocessor</h3>
<p>\u65B0\u7684\u7740\u8272\u5668\u7F13\u5B58\u9884\u5904\u7406\uFF0C\u5E2E\u52A9\u5FEB\u901F\u6784\u5EFA</p>
<h3>Code Coverage</h3>
<p>\u4EE3\u7801\u8986\u76D6\u7387\u6D4B\u8BD5</p>
<h3>Terrain Tools</h3>
<p>\u5730\u5F62\u5DE5\u5177</p>
<h3>Streaming Virtual Texturing</h3>
<p>\u6D41\u5F0F\u865A\u62DF\u7EB9\u7406</p>
<h3>\u5149\u8FFD</h3>
<h3>UI Builder</h3>
<p>\u53EF\u89C6\u5316\u7684\u7F16\u8F91\u5668UI\u6784\u5EFA\u5DE5\u5177</p>
<h3>Havok Physics</h3>
<p>Havok\u7269\u7406\u5F15\u64CE</p>
<h3>Unity Physics</h3>
<p>Unity\u7269\u7406\u7CFB\u7EDF\uFF0C\u57FA\u4E8EDOTS\u6280\u672F\u6808</p>
<h3>Memory Profiler</h3>
<p>\u5185\u5B58\u5206\u6790\u5668</p>
<h3>Vector Graphics</h3>
<p>\u77E2\u91CF\u56FE\u5F62\u5DE5\u5177\uFF0C\u6700\u5927\u7684\u53D1\u6325\u77E2\u91CF\u56FE\u7684\u4F18\u52BF</p>
<h3>Experimental 2D Graphics Features</h3>
<p>2Drender\u548C\u901A\u7528\u6E32\u67D3\u7BA1\u7EBF\u517C\u5BB9\uFF0C\u76F8\u673A\u6808\uFF0C2D\u9634\u5F71</p>
<h3>Build Report Inspector</h3>
<p>\u6784\u5EFA\u62A5\u544A\u5C5E\u6027\u68C0\u67E5\u5668</p>
<h3>Sprite Atlas v2</h3>
<p>v2\u56FE\u96C6</p>
<h3>Pixar\u2019s Universal Scene Description</h3>
<p>\u76AE\u514B\u65AF\u6587\u4EF6\uFF0C\u4E00\u79CD\u5927\u578B\u8D44\u4EA7\u6587\u4EF6\u683C\u5F0F</p>

        </div>`;
