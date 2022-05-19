<template><h1 id="h5-编辑器" tabindex="-1"><a class="header-anchor" href="#h5-编辑器" aria-hidden="true">#</a> H5 编辑器</h1>
<p>低代码，现在流行</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p><img src="@source/fe/项目设计/img/H5编辑器.png" alt=""></p>
<p>这是一个 H5 编辑器，用 vue + vuex 来实现，几个问题：</p>
<ul>
<li>在点“保存”按钮的时候，往服务端传递的<strong>数据结构</strong>是什么样子的？</li>
<li>如何保证画布和属性面板是同步更新的？</li>
<li>如果在扩展一个“图层”面板，数据结构该怎么设计？</li>
</ul>
<h2 id="大家的答案" tabindex="-1"><a class="header-anchor" href="#大家的答案" aria-hidden="true">#</a> 大家的答案</h2>
<p>第一个问题，大家的答案往往都是这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'text1'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'文本1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'16px'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'text2'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'文本2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'16px'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'img1'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'image'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'xxx.png'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个问题，大家觉得数据存到 vuex 中，就可以同步更新了 —— 这没错，但具体如何做到呢？很多同学想不出来，或者到这里就懵了。</p>
<p>第三个问题，很多同学觉得应该在 vuex store 中新增一个属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'text1'</span><span class="token punctuation">,</span> <span class="token comment">// 对应到 components 的 key</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'文本1'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'text2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'文本2'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于以上回答，总结一下：</p>
<ul>
<li>node 结构，不是规范的 vnode 形式</li>
<li>组件应该用数组，而不是对象。数组是有序结构</li>
<li>都知道存储到 vuex 中即可同步数据，但问题是如何用 vuex 表示当前选中的组件</li>
<li>图层，应该是一个 computed 计算出来的索引，而不是一个单独的数据</li>
</ul>
<h2 id="正确的设计思路" tabindex="-1"><a class="header-anchor" href="#正确的设计思路" aria-hidden="true">#</a> 正确的设计思路</h2>
<p>vuex store</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token comment">// 作品</span>
    <span class="token literal-property property">work</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'作品标题'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setting</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* 一些可能的配置项，用不到就先预留 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* 页面 body 的一些设置，如背景色 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// components 要用数组，有序结构</span>

            <span class="token comment">// 单个 node 要符合常见的 vnode 格式</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token comment">// 每个组件都有 id ，不重复</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'文本1'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'20px'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'文本1'</span> <span class="token comment">// 文本内容，有时候放在 children ，有时候放在 attrs 或者 props ，没有标准，看实际情况来确定</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'yyy'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'图片1'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'image'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'xxx.png'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 画布当前选中的组件，记录 id 即可</span>
    <span class="token literal-property property">activeComponentId</span><span class="token operator">:</span> <span class="token string">'xxx'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex getter</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token function">layers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span>work<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> c<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> c<span class="token punctuation">.</span>name
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，基本思路就是：</p>
<ul>
<li>每个组件尽量符合 vnode 规范</li>
<li>用数组来组织数据，有序</li>
<li>尽量使用引用关系，不要冗余</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>项目技术方案设计时，数据结构的设计是非常重要的。</p>
<p>不要纠细节，看主要设计</p>
<p>要参考现有标准，而非自造标准 —— 这需要自己有基础知识，有识别能力</p>
<hr>
<p>联想到富文本编辑器的数据结构设计：text 摊平，而不是嵌套。</p>
</template>
