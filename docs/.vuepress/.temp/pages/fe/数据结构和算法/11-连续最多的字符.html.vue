<template><h1 id="连续最多的字符" tabindex="-1"><a class="header-anchor" href="#连续最多的字符" aria-hidden="true">#</a> 连续最多的字符</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给一个字符串，找出连续最多的字符，以及次数。<br>
例如字符串 <code v-pre>'aabbcccddeeee11223'</code> 连续最多的是 <code v-pre>e</code> ，4 次。</p>
<h2 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h2>
<p>嵌套循环，找出每个字符的连续次数，并记录比较。</p>
<p>时间复杂度看似是 <code v-pre>O(n^2)</code>，因为是嵌套循环。 <strong>但实际上它的时间复杂度是 <code v-pre>O(n)</code>，因为循环中有跳转</strong>。</p>
<h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2>
<p>画图解释，参考视频讲解。</p>
<p>只有一次循环，时间复杂度是 <code v-pre>O(n)</code></p>
<p>性能测试，发现两者时间消耗一样，<strong>循环次数也一样</strong>。</p>
<h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式" aria-hidden="true">#</a> 其他方式</h2>
<p>这个题目网上还有其他的答案</p>
<ul>
<li>正则表达式 —— 正则表达式的效率非常低，可进行性能测试（代码 <code v-pre>x-reg.ts</code> ）</li>
<li>使用数组累计各个字符串的长度，然后求出最大值 —— 增加空间复杂度，面试官不会喜欢</li>
</ul>
<p>【注意】算法尽量用基础代码实现，尽量不要用现成的 API 或语法糖 —— 方便，但你不好直观判断时间复杂度</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>上述两种方式（嵌套循环和双指针）都可以，参考 continuous-char.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 连续字符
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IRes</span> <span class="token punctuation">{</span>
    char<span class="token operator">:</span> <span class="token builtin">string</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 求连续最多的字符和次数（嵌套循环）
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findContinuousChar1</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> IRes <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> IRes <span class="token operator">=</span> <span class="token punctuation">{</span>
        char<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        length<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">let</span> tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 临时记录当前连续字符的长度</span>

    <span class="token comment">// O(n)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 重置</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tempLength<span class="token operator">++</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> j <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不相等，或者已经到了最后一个元素。要去判断最大值</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>tempLength <span class="token operator">></span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res<span class="token punctuation">.</span>char <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    res<span class="token punctuation">.</span>length <span class="token operator">=</span> tempLength
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    i <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 跳步</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 求连续最多的字符和次数（双指针）
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findContinuousChar2</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> IRes <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> IRes <span class="token operator">=</span> <span class="token punctuation">{</span>
        char<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        length<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">let</span> tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 临时记录当前连续字符的长度</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// O(n)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempLength<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> i <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不相等，或者 i 到了字符串的末尾</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempLength <span class="token operator">></span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span>char <span class="token operator">=</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                res<span class="token punctuation">.</span>length <span class="token operator">=</span> tempLength
            <span class="token punctuation">}</span>
            tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// reset</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j <span class="token operator">=</span> i <span class="token comment">// 让 j “追上” i</span>
                i<span class="token operator">--</span> <span class="token comment">// 细节</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
 <span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const str = 'aabbcccddeeee11223'</span>
<span class="token comment">// console.info(findContinuousChar2(str))</span>

<span class="token comment">// let str = ''</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     str += i.toString()</span>
<span class="token comment">// }</span>

<span class="token comment">// console.time('findContinuousChar1')</span>
<span class="token comment">// findContinuousChar1(str)</span>
<span class="token comment">// console.timeEnd('findContinuousChar1') // 219ms</span>

<span class="token comment">// console.time('findContinuousChar2')</span>
<span class="token comment">// findContinuousChar2(str)</span>
<span class="token comment">// console.timeEnd('findContinuousChar2') // 228ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>注意实际的时间复杂度，不要被代码所迷惑</li>
<li>双指针的思路（常用于解决嵌套循环）</li>
</ul>
</template>
