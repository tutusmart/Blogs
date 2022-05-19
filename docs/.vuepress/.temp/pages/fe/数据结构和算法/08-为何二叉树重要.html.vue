<template><h1 id="为何二叉树重要" tabindex="-1"><a class="header-anchor" href="#为何二叉树重要" aria-hidden="true">#</a> 为何二叉树重要</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>为何二叉树那么重要，而不是三叉树、四叉树呢？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>树是常见的数据结构，如 DOM 树，是一种多叉树。<br>
其中二叉树是一个特别的存在，很重要，很常考。</p>
<p>【注意】本文涉及很多数据结构的知识，所以要“不求甚解” —— 掌握要点和结果，不求细节和过程</p>
<h2 id="如何让性能整体最优" tabindex="-1"><a class="header-anchor" href="#如何让性能整体最优" aria-hidden="true">#</a> 如何让性能整体最优？</h2>
<p>有序结构</p>
<ul>
<li>数组：查找易，增删难</li>
<li>链表：增删易，查找难</li>
</ul>
<p>将两者优点结合起来 —— 二叉搜索树 BST ：查找易，增删易 —— 可使用二分算法</p>
<p>二叉搜索树 BST</p>
<ul>
<li>左节点（包括其后代） &lt;= 根节点</li>
<li>右节点（包括其后代） &gt;= 根节点</li>
</ul>
<p><img src="@source/fe/数据结构和算法/img/二叉搜索树.png" alt=""></p>
<h2 id="高级二叉树" tabindex="-1"><a class="header-anchor" href="#高级二叉树" aria-hidden="true">#</a> 高级二叉树</h2>
<p>二叉搜索树 BST ，如果左右不平衡，也无法做到最优。<br>
极端情况下，它就成了链表 —— 这不是我们想要的。</p>
<p>平衡二叉搜索树 BBST ：要求树左右尽量平衡</p>
<ul>
<li>树高度 <code v-pre>h</code> 约等于 <code v-pre>logn</code></li>
<li>查找、增删，时间复杂度都等于 <code v-pre>O(logn)</code></li>
</ul>
<p>红黑树：一种自动平衡的二叉树</p>
<ul>
<li>节点分 红/黑 两种颜色，通过颜色转换来维持树的平衡</li>
<li>相比于普通平衡二叉树，它维持平衡的效率更高</li>
</ul>
<p><img src="@source/fe/数据结构和算法/img/红黑树.png" alt=""></p>
<p>B 树：物理上是多叉树，但逻辑上是一个 BST 。用于高效 I/O ，如关系型数据库就用 B 树来组织数据结构。</p>
<p><img src="@source/fe/数据结构和算法/img/B树.png" alt=""></p>
<h2 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h2>
<p>JS 执行时代码中的变量</p>
<ul>
<li>值类型 - 存储到栈</li>
<li>引用类型 - 存储到堆</li>
</ul>
<p><img src="@source/fe/数据结构和算法/img/堆栈内存.png" alt=""></p>
<p>堆的特点：</p>
<ul>
<li>节点的值，总是不大于（或不小于）其父节点的值</li>
<li>完全二叉树</li>
</ul>
<p><img src="@source/fe/数据结构和算法/img/完全二叉树.png" alt=""></p>
<p>堆，虽然逻辑上是二叉树，但实际上它使用数组来存储的。</p>
<p><img src="@source/fe/数据结构和算法/img/堆.webp" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 上图是一个堆（从小到大），可以用数组表示</span>
<span class="token keyword">const</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span> <span class="token comment">// 忽略 0 节点</span>

<span class="token comment">// 节点关系</span>
<span class="token keyword">const</span> parentIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i
<span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>堆的排序规则，没有 BST 那么严格，这就造成了</p>
<ul>
<li>查询比 BST 慢</li>
<li>增删比 BST 快，维持平衡也更快</li>
<li>但整体复杂度都是 <code v-pre>O(logn)</code> 级别，即树的高度</li>
</ul>
<p>但结合堆的应用场景</p>
<ul>
<li>一般使用内存地址（栈中保存了）来查询，不会直接从根节点搜索</li>
<li>堆的物理结构是数组，所以查询复杂度就是 <code v-pre>O(1)</code></li>
</ul>
<p>总结</p>
<ul>
<li>物理结构是数组（空间更小），逻辑结构是二叉树（操作更快）</li>
<li>适用于“堆栈”结构</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>二叉树，可以充分利用二分法</li>
<li>二叉树可以同时规避数字和链表的缺点</li>
<li>引申到 BST BBST 等其他扩展结构</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>二分法的神奇力量</li>
<li>各个高级数据结构的存在价值、设计初衷</li>
<li>数据结构是基本功能</li>
</ul>
</template>
