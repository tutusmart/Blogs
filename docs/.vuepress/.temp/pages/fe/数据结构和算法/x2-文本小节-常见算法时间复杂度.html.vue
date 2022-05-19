<template><h1 id="算法时间复杂度" tabindex="-1"><a class="header-anchor" href="#算法时间复杂度" aria-hidden="true">#</a> 算法时间复杂度</h1>
<p>本文总结一下前端算法常用的时间复杂度，对比学习。</p>
<p><img src="@source/fe/数据结构和算法/img/时间复杂度.png" alt=""></p>
<h2 id="o-1" tabindex="-1"><a class="header-anchor" href="#o-1" aria-hidden="true">#</a> O(1)</h2>
<p>代码就是平铺直叙的执行，没有任何循环。</p>
<h2 id="o-logn" tabindex="-1"><a class="header-anchor" href="#o-logn" aria-hidden="true">#</a> O(logn)</h2>
<p>有循环，但其中使用了二分法，例如：二分查找算法</p>
<p>二分法是非常重要的算法思维，它可以极大的减少复杂度，而且计算量越大、减少的越明显。可以看看本文上面的图。</p>
<h2 id="o-n" tabindex="-1"><a class="header-anchor" href="#o-n" aria-hidden="true">#</a> O(n)</h2>
<p>普通的循环。</p>
<h2 id="o-n-logn" tabindex="-1"><a class="header-anchor" href="#o-n-logn" aria-hidden="true">#</a> O(n*logn)</h2>
<p>嵌套循环，一层是普通循环，一层有二分算法。例如：快速排序算法。</p>
<h2 id="o-n-2" tabindex="-1"><a class="header-anchor" href="#o-n-2" aria-hidden="true">#</a> O(n^2)</h2>
<p>两个普通循环的嵌套，例如常见的冒泡排序。</p>
</template>
