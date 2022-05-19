<template><h1 id="旋转数组" tabindex="-1"><a class="header-anchor" href="#旋转数组" aria-hidden="true">#</a> 旋转数组</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>定义一个函数，实现数组的旋转。如输入 <code v-pre>[1, 2, 3, 4, 5, 6, 7]</code> 和 <code v-pre>key = 3</code>， 输出 <code v-pre>[5, 6, 7, 1, 2, 3, 4]</code><br>
考虑时间复杂度和性能</p>
<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2>
<p>思路1</p>
<ul>
<li>将 <code v-pre>k</code> 后面的元素，挨个 <code v-pre>pop</code> 然后 <code v-pre>unshift</code> 到数组前面</li>
</ul>
<p>思路2</p>
<ul>
<li>将 <code v-pre>k</code> 后面的所有元素拿出来作为 <code v-pre>part1</code></li>
<li>将 <code v-pre>k</code> 前面的所有元素拿出来作为 <code v-pre>part2</code></li>
<li>返回 <code v-pre>part1.concat(part2)</code></li>
</ul>
<h2 id="写代码" tabindex="-1"><a class="header-anchor" href="#写代码" aria-hidden="true">#</a> 写代码</h2>
<ul>
<li>源码和性能测试 <code v-pre>array-rotate.js</code></li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> Array rotate
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> k
 * <span class="token keyword">@returns</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">rotate1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>k <span class="token operator">||</span> length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
    <span class="token keyword">const</span> step <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>k <span class="token operator">%</span> length<span class="token punctuation">)</span> <span class="token comment">// abs 取绝对值</span>

    <span class="token comment">// O(n^2)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> step<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 数组是一个有序结构，unshift 操作非常慢！！！ O(n)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 旋转数组 k 步 - 使用 concat
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> k
 */</span>
 <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">rotate2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>k <span class="token operator">||</span> length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
    <span class="token keyword">const</span> step <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>k <span class="token operator">%</span> length<span class="token punctuation">)</span> <span class="token comment">// abs 取绝对值</span>

    <span class="token comment">// O(1)</span>
    <span class="token keyword">const</span> part1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span>step<span class="token punctuation">)</span> <span class="token comment">// O(1)</span>
    <span class="token keyword">const</span> part2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> step<span class="token punctuation">)</span>
    <span class="token keyword">const</span> part3 <span class="token operator">=</span> part1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>part2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> part3
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const arr = [1, 2, 3, 4, 5, 6, 7]</span>
<span class="token comment">// const arr1 = rotate2(arr, 3)</span>
<span class="token comment">// console.info(arr1)</span>

<span class="token comment">// // 性能测试</span>
<span class="token comment">// const arr1 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr1.push(i)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time('rotate1')</span>
<span class="token comment">// rotate1(arr1, 9 * 10000)</span>
<span class="token comment">// console.timeEnd('rotate1') // 885ms O(n^2)</span>

<span class="token comment">// const arr2 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr2.push(i)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time('rotate2')</span>
<span class="token comment">// rotate2(arr2, 9 * 10000)</span>
<span class="token comment">// console.timeEnd('rotate2') // 1ms O(1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过性能测试，知道“思路2”性能更优。看来，思路简单并不一定性能最优。</p>
<p>【注意】我看到网上有很多人为“思路1”的写法点赞，要保持独立思考，不要从众！</p>
<h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2>
<p>复杂度用 <code v-pre>O</code> 表示，说的是<strong>数量级</strong>，而不是具体的数字，如</p>
<ul>
<li><code v-pre>O(2)</code> <code v-pre>O(3)</code> <code v-pre>O(100)</code> 其实都是 <code v-pre>O(1)</code></li>
<li><code v-pre>O(n)</code> <code v-pre>O(2 * n)</code> 其实都是 <code v-pre>O(n)</code></li>
</ul>
<p>常见的时间复杂度</p>
<ul>
<li><code v-pre>O(1)</code> 无循环</li>
<li><code v-pre>O(n)</code> 单次循环</li>
<li><code v-pre>O(logn)</code> 二分法</li>
<li><code v-pre>O(n*logn)</code> 单次循环 &amp; 二分法</li>
<li><code v-pre>O(n^2)</code> 嵌套循环</li>
</ul>
<p><img src="@source/fe/数据结构和算法/img/时间复杂度.png" alt=""></p>
<p>【注意】如果你用到了 API （如数组 <code v-pre>unshift</code>）要结合数据结构去分析复杂度。<strong>要看到代码的本质</strong>。</p>
<h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h2>
<p>算法需要额外定义多少变量？</p>
<ul>
<li><code v-pre>O(1)</code> 定义了为数不多的变量，和 <code v-pre>n</code> 无关</li>
<li><code v-pre>O(n)</code> 需要定义和 <code v-pre>n</code> 级别的变量，如额外复制一个同样的数组</li>
<li>其他不常见</li>
</ul>
<p>前端算法通常不太考虑空间复杂度，或者它比时间复杂度要次要的多。<br>
因为前端环境，通常内存都是足够的，或者内存不够通常也是其他因素（如媒体文件）。</p>
<h2 id="性能对比" tabindex="-1"><a class="header-anchor" href="#性能对比" aria-hidden="true">#</a> 性能对比</h2>
<p>时间复杂度</p>
<ul>
<li>思路1 - 看代码时间复杂度是 <code v-pre>O(n)</code>，<strong>但数组是有序结构 <code v-pre>unshift</code> 本身就是 <code v-pre>O(n)</code> 复杂度</strong>，所以实际复杂度是 <code v-pre>O(n^2)</code></li>
<li>思路2 - <code v-pre>O(1)</code>。<code v-pre>slice</code> 和 <code v-pre>concat</code> 不会修改原数组，而数组是有序结构，复杂度是 <code v-pre>O(1)</code> 。</li>
</ul>
<p>空间复杂度</p>
<ul>
<li>思路1 - <code v-pre>O(1)</code></li>
<li>思路2 - <code v-pre>O(n)</code></li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>整体分析，选择“思路2”</p>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>考虑参数非法情况，代码鲁棒性</li>
<li>算法复杂度
<ul>
<li>要看到全部的时间复杂度（包括 API）</li>
<li>重时间，轻空间</li>
</ul>
</li>
<li>数组是有序结构，<code v-pre>shift</code> <code v-pre>unshift</code> 等要慎用</li>
<li>单元测试</li>
</ul>
<h2 id="扩展-不要过度优化" tabindex="-1"><a class="header-anchor" href="#扩展-不要过度优化" aria-hidden="true">#</a> 扩展 - 不要过度优化</h2>
<p>其实还有一种思路，时间复杂度 <code v-pre>O(n)</code> ，空间复杂度 <code v-pre>O(1)</code> ，思路：</p>
<ul>
<li>k 前面的元素移动到 <code v-pre>i + (length - k)</code> 的位置</li>
<li>k 后面的元素移动到 <code v-pre>i - k</code> 的位置</li>
</ul>
<p>但不推荐这样的做法</p>
<ul>
<li>前端重时间、轻空间，优先考虑时间复杂度，而非空间复杂度</li>
<li>代码是否易读，是否易沟通 —— 这个比性能更重要！人力成本永远是最贵的！！</li>
</ul>
</template>
