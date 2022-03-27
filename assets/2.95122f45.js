import"./Base.b26d5ffd.js";import{A as t}from"./App.32c0128d.js";import"./vendor.a4ae880d.js";new t({target:document.getElementById("app")});let e=document.querySelector("main");e.innerHTML+=`
        <div class="post-content">
            <h4>packages:</h4>
<blockquote>
<p>Hybrid Renderer  --- \u63D0\u4F9B\u7528\u4E8E\u6E32\u67D3ECS\u5B9E\u4F53\u7684\u7CFB\u7EDF\u548C\u7EC4\u4EF6\u3002Hybrid Renderer\u4E0D\u662F\u6E32\u67D3\u7BA1\u9053\uFF1A\u5B83\u662F\u4E00\u4E2A\u6536\u96C6\u6E32\u67D3ECS\u5B9E\u4F53\u6240\u9700\u7684\u6570\u636E\u5E76\u5C06\u6B64\u6570\u636E\u53D1\u9001\u5230Unity\u73B0\u6709\u6E32\u67D3\u67B6\u6784\u7684\u7CFB\u7EDF\u3002</p>
</blockquote>
<p><img src="Snipaste_2020-08-26_11-17-15.png" alt="img"></p>
<p><img src="Snipaste_2020-08-26_11-36-58.png" alt="img"></p>
<p>convertToEntity \u7528\u6765\u5C06\u5B9E\u4F8B\u8F6C\u6362\u4E3AEntity</p>
<p>RotationData.cs</p>
<pre><code class="language-csharp">using Unity.Entities;
[GenerateAuthoringComponent]
public struct RotationData : IComponentData
{
    public float speed;
}

</code></pre>
<p>\u5C06[GenerateAuthoringComponent]\u5C5E\u6027\u6DFB\u52A0\u5230IComponentData\u58F0\u660E\u4E2D\u3002 Unity\u81EA\u52A8\u751F\u6210\u4E00\u4E2AMonoBehaviour\u7C7B\uFF0C\u8BE5\u7C7B\u5305\u542B\u7EC4\u4EF6\u7684\u516C\u5171\u5B57\u6BB5\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2AConversion\u65B9\u6CD5\uFF0C\u5C06\u8FD9\u4E9B\u5B57\u6BB5\u8F6C\u6362\u4E3A\u8FD0\u884C\u65F6\u7EC4\u4EF6\u6570\u636E\uFF0C\u8FD9\u6837\u624D\u80FD\u5C06data\u6700\u4E3A\u7EC4\u4EF6\u6302\u8F7D\u5230GameObject\u4E0A\uFF0C\u5E76\u66B4\u9732\u516C\u5171\u5C5E\u6027\u5728\u5C5E\u6027\u9762\u677F\u4E0A\u3002</p>
<pre><code class="language-csharp">[GenerateAuthoringComponent]
</code></pre>
<p>RotationSystem.cs</p>
<pre><code class="language-csharp">using Unity.Entities;
using Unity.Jobs;
using Unity.Mathematics;
using Unity.Transforms;
public class RotationSystem : SystemBase
{
    protected override void OnUpdate()
    {
        float deltaTime = Time.DeltaTime;
        Entities.ForEach((ref Rotation rotation,in RotationData rotationData) =&gt;
        {
            rotation.Value = math.mul(math.normalize(rotation.Value),quaternion.RotateY(math.radians(rotationData.speed * deltaTime)));
        }).ScheduleParallel();
    }
}

</code></pre>
<p>\u6548\u679C</p>
<p><img src="upXVL7TmdK.gif" alt="img"></p>
<p>\u68C0\u89C6Entity Debugger\u9762\u677F</p>
<p><img src="Snipaste_2020-08-26_11-49-23.png" alt="img"></p>
<h2>IJobChunk\u7684\u4F7F\u7528</h2>
<p>\u7EC4\u4EF6\u7C7B\u578B\u7684\u552F\u4E00\u7EC4\u5408\u79F0\u4E3A\u539F\u578B\uFF08Archetypes\uFF09\uFF0C\u800C\u539F\u578B\u5185\u90E8\u4EE5\u5757\uFF08chunk\uFF09\u4E3A\u5355\u4F4D\u5B58\u50A8\uFF0C\u5373\u5F53\u4E00\u4E2A\u5757\u5BB9\u91CF\u6EE1\u4E86\u5C31\u4F1A\u91CD\u65B0\u5F00\u542F\u4E00\u4E2A\u5757\u6765\u5B58\u50A8</p>
<p>\u53EF\u4EE5\u901A\u8FC7IJobChunk\u6765\u9010\u5757\u904D\u5386\u6570\u636E\uFF0C\u8FBE\u5230\u5FEB\u901F\u8BFB\u53D6\u548C\u6279\u91CF\u5904\u7406\u7684\u76EE\u7684\uFF0C\u66F4\u591A\u7684\u4EE3\u7801\u8BBE\u7F6E\u6362\u53D6\u66F4\u9AD8\u7684\u6027\u80FD\u3002</p>
<p><img src="Snipaste_2020-08-26_16-14-18.png" alt="img"></p>
<p>RotationIJobData.cs</p>
<pre><code class="language-csharp">using Unity.Entities;
using System;

[Serializable]
public struct RotationIJobData : IComponentData
{
        public float speed;
}

</code></pre>
<p>RotationIJobDataAuthoring.cs</p>
<pre><code class="language-csharp">using Unity.Entities;
using UnityEngine;
public class RotationIJobDataAuthoring : MonoBehaviour, IConvertGameObjectToEntity
{
    public float speed = 360;
    public void Convert(Entity entity, EntityManager dstManager, GameObjectConversionSystem conversionSystem)
    {
        var data = new RotationIJobData { speed = speed };
        dstManager.AddComponentData(entity, data);
    }
}
</code></pre>
<p>RotationIJobSystem.cs</p>
<pre><code class="language-csharp">using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Jobs;
using Unity.Mathematics;
using Unity.Transforms;
public class RotationIJobSystem : SystemBase
{

    //\u8981\u5904\u7406\u7684\u5B9E\u4F53\u96C6
    EntityQuery entityQuery;
    protected override void OnCreate()
    {
        //\u7F13\u5B58\u6307\u5B9A\u7C7B\u578B\u7684\u67E5\u8BE2
        entityQuery = GetEntityQuery(typeof(Rotation), ComponentType.ReadOnly&lt;RotationIJobData&gt;());
    }
    //\u5B9A\u4E49\u4F5C\u4E1A\u5757\u7ED3\u6784\u4F53
    [BurstCompile]
    struct RotationJobChunk : IJobChunk
    {
        public float deltaTime;
        public ComponentTypeHandle&lt;Rotation&gt; RotationType;
        [ReadOnly] public ComponentTypeHandle&lt;RotationIJobData&gt; RotationIJobType;
        public void Execute(ArchetypeChunk chunk, int chunkIndex, int firstEntityIndex)
        {
            //\u901A\u8FC7\u539F\u578B\u5757\u83B7\u53D6\u5B9E\u4F53\u6570\u7EC4
            var rotationChunk = chunk.GetNativeArray(RotationType);
            var rotationIJobChunk = chunk.GetNativeArray(RotationIJobType);
            for (int i = 0; i &lt; chunk.Count; i++)
            {
                var rotation = rotationChunk[i];
                var rotationData = rotationIJobChunk[i];
                rotationChunk[i] = new Rotation
                {
                    Value = math.mul(math.normalize(rotation.Value),quaternion.RotateY(math.radians(rotationData.speed * deltaTime)))
                };
            }
        }
    }
    protected override void OnUpdate()
    {
        //\u5B9E\u4F8B\u5316\u4F5C\u4E1A\u5E76\u8C03\u5EA6
        var rotation = GetComponentTypeHandle&lt;Rotation&gt;();
        var rotationData = GetComponentTypeHandle&lt;RotationIJobData&gt;(true);
        var job = new RotationJobChunk(){
            RotationType = rotation,
            RotationIJobType = rotationData,
            deltaTime = Time.DeltaTime
        };
        Dependency = job.Schedule(entityQuery,Dependency);
    }
}
</code></pre>

        </div>`;
