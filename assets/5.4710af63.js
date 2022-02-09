import"./Base.18644cc2.js";import{A as t}from"./App.6224392a.js";import"./vendor.5fd7cc74.js";new t({target:document.getElementById("app")});let e=document.querySelector("main");e.innerHTML+=`
        <div class="post-content">
            <h3>1.\u901A\u8FC7\u9884\u5236\u4F53\u521B\u5EFAentity</h3>
<pre><code class="language-csharp">using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;
public class Spawner_FromMonoBehaviour : MonoBehaviour
{
    public GameObject Prefab;
    void Start(){
        var settings = GameObjectConversionSettings.FromWorld(World.DefaultGameObjectInjectionWorld, null);
        var prefab = GameObjectConversionUtility.ConvertGameObjectHierarchy(Prefab, settings);
        var entityManager = World.DefaultGameObjectInjectionWorld.EntityManager;
        for (var x = 0; x &lt; 100; x++)
        {
            for (var y = 0; y &lt; 100; y++)
            {
                // Efficiently instantiate a bunch of entities from the already converted entity prefab
                var instance = entityManager.Instantiate(prefab);

                // Place the instantiated entity in a grid with some noise
                var position = transform.TransformPoint(new float3(x * 1.3F, noise.cnoise(new float2(x, y) * 0.21F) * 2, y * 1.3F));
                entityManager.SetComponentData(instance, new Translation {Value = position});
            }
        }
    }

}

</code></pre>
<p><img src="Zo7lBtUMXi.gif" alt="img"></p>
<h3>2.ConvertToEntity\u7EC4\u4EF6</h3>
<p>\u4E3A\u8282\u70B9\u6DFB\u52A0ConverToEntity\u7EC4\u4EF6\uFF0Cecs\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u8BE5\u8282\u70B9\u5728\u8FD0\u884C\u65F6\u8F6C\u6362\u4E3A\u5B9E\u4F53</p>
<p><img src="Snipaste_2020-09-07_17-31-44.png" alt="img"></p>
<h3>3.Convert Callback</h3>
<pre><code class="language-csharp">//\u9700\u8981ConverToEntity\u7EC4\u4EF6
[RequiresEntityConversion]
public class Spawner : MonoBehaviour, IConvertGameObjectToEntity
{
    public void Convert(Entity entity, EntityManager dstManager, GameObjectConversionSystem conversionSystem)
    {
        var data = new CustomData();
        dstManager.AddComponentData(entity, data);
    }
}
</code></pre>

        </div>`;
