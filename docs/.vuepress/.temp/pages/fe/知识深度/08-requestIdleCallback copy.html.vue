<template><h1 id="requestidlecallback" tabindex="-1"><a class="header-anchor" href="#requestidlecallback" aria-hidden="true">#</a> requestIdleCallback</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>是否了解过 requestIdleCallback ？</p>
<h2 id="由-react-fiber-引起的关注" tabindex="-1"><a class="header-anchor" href="#由-react-fiber-引起的关注" aria-hidden="true">#</a> 由 React Fiber 引起的关注</h2>
<p>React 16 内部使用 Fiber ，即组件渲染过程可以暂停，先去执行高优任务，CPU 闲置时再继续渲染。<br>
其中用到的核心 API 就是 requestIdleCallback 。</p>
<h2 id="requestanimationframe-每次渲染都执行-高优" tabindex="-1"><a class="header-anchor" href="#requestanimationframe-每次渲染都执行-高优" aria-hidden="true">#</a> requestAnimationFrame 每次渲染都执行，高优</h2>
<p>页面的渲染是一帧一帧进行的，至少每秒 60 次（即 16.6ms 一次）才能肉眼感觉流畅。所以，网页动画也要这个帧率才能流畅。</p>
<p>用 JS 来控制时间是不靠谱的，因为 JS 执行本身还需要时间，而且 JS 和 DOM 渲染线程互斥。所以 ms 级别的时间会出现误差。<br>
<code v-pre>requestAnimationFrame</code> 就解决了这个问题，浏览器每次渲染都会执行，不用自己计算时间。</p>
<p>代码参考 requestAnimationFrame.html</p>
<h2 id="requestidlecallback-空闲时才执行-低优" tabindex="-1"><a class="header-anchor" href="#requestidlecallback-空闲时才执行-低优" aria-hidden="true">#</a> requestIdleCallback 空闲时才执行，低优</h2>
<p>requestIdleCallback 会在网页渲染完成后，CPU 空闲时执行，不一定每一帧都执行。</p>
<p>requestIdleCallback 不适合执行 DOM 操作，因为修改了 DOM 之后下一帧不一定会触发修改。</p>
<h2 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务" aria-hidden="true">#</a> 宏任务</h2>
<p>requestAnimationFrame 和 requestIdleCallback 都是宏任务，它们比 setTimeout 更晚触发。</p>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2>
<p>requestAnimationFrame 可用于网页动画。</p>
<p>requestIdleCallback 可用于一些低优先级的场景，以代替 setTimeout 。例如发送统计数据。<br>
但请注意 requestIdleCallback 的浏览器兼容性</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>requestIdleCallback 可在网页渲染完成后，CPU 空闲时执行，用于低优先级的任务处理。</p>
</template>
