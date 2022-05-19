<template><h1 id="dom-转-vdom" tabindex="-1"><a class="header-anchor" href="#dom-转-vdom" aria-hidden="true">#</a> DOM 转 VDOM</h1>
<p>注：文字小节</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>讲以下 DOM 结构转换为 vnode 数据</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一行文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>vdom 就是用 JS 对象的形式来表示 DOM 结构。vnode 即对应着 DOM 结构的一个 node 节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;div></span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'div1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'border'</span><span class="token operator">:</span> <span class="token string">'1px solid #ccc'</span><span class="token punctuation">,</span>
            <span class="token string-property property">'padding'</span><span class="token operator">:</span> <span class="token string">'10px'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;p></span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'一行文字'</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;a></span>
                    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'xxx.html'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'_blank'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'链接'</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'img'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;img></span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'image'</span><span class="token punctuation">,</span> <span class="token comment">// 注意，这里要用 className</span>
                <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'xxx.png'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">'图片'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;button></span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">click</span><span class="token operator">:</span> clickHandler
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'点击'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<ul>
<li>vdom 结构没有固定的标准，例如 <code v-pre>tag</code> 可以改为 <code v-pre>name</code> ，<code v-pre>data</code> 可以改为 <code v-pre>props</code> 。只要能合理使用 JS 数据表达 DOM 即可。</li>
<li><code v-pre>style</code> 和 <code v-pre>events</code> 要以对象的形式，更易读，更易扩展</li>
<li><code v-pre>class</code> 是 ES 内置关键字，要改为 <code v-pre>className</code> 。其他的还有如 <code v-pre>for</code> 改为 <code v-pre>htmlFor</code></li>
</ul>
</template>
