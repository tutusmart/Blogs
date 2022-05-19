<template><h1 id="搜索单词" tabindex="-1"><a class="header-anchor" href="#搜索单词" aria-hidden="true">#</a> 搜索单词</h1>
<p>字符串前缀匹配</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请描述算法思路，不要求写出代码。</p>
<ul>
<li>先给一个英文单词库（数组），里面有几十万个英文单词</li>
<li>再给一个输入框，输入字母，搜索单词</li>
<li>输入英文字母，要实时给出搜索结果，按前缀匹配</li>
</ul>
<p>要求</p>
<ul>
<li>尽量快</li>
<li>不要使用防抖（输入过程中就及时识别）</li>
</ul>
<h2 id="常规思路" tabindex="-1"><a class="header-anchor" href="#常规思路" aria-hidden="true">#</a> 常规思路</h2>
<p><code v-pre>keyup</code> 之后，拿当前的单词，遍历词库数组，通过 <code v-pre>indexOf</code> 来前缀匹配。</p>
<p>性能分析</p>
<ul>
<li>算法思路的时间复杂度是 <code v-pre>O(n)</code></li>
<li>外加 <code v-pre>indexOf</code> 也需要时间复杂度。实际的复杂度要超过 <code v-pre>O(n)</code></li>
</ul>
<h2 id="优化数据结构" tabindex="-1"><a class="header-anchor" href="#优化数据结构" aria-hidden="true">#</a> 优化数据结构</h2>
<p>英文字母一共 26 个，可按照第一个字母分组，分为 26 组。这样搜索次数就减少很多。</p>
<p>可按照第一个字母分组，那也可以按照第二个、第三个字母分组。<br>
即，在程序初始化时，把数组变成一个树，然后按照字母顺序在树中查找。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'abs'</span><span class="token punctuation">,</span>
    <span class="token string">'arab'</span><span class="token punctuation">,</span>
    <span class="token string">'array'</span><span class="token punctuation">,</span>
    <span class="token string">'arrow'</span><span class="token punctuation">,</span>
    <span class="token string">'boot'</span><span class="token punctuation">,</span>
    <span class="token string">'boss'</span><span class="token punctuation">,</span>
    <span class="token comment">// 更多...</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">t</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 更多...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样时间复杂度就大幅度减少，从 <code v-pre>O(n)</code> 降低到 <code v-pre>O(m)</code> （<code v-pre>m</code> 是单词的最大长度）</p>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>对于已经明确的范围的数据，可以考虑使用哈希表</li>
<li>以空间换时间</li>
</ul>
</template>
