<template><h1 id="vuex-mutation-action-区别" tabindex="-1"><a class="header-anchor" href="#vuex-mutation-action-区别" aria-hidden="true">#</a> Vuex mutation action 区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Vuex mutation action 区别</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>mutation
<ul>
<li>建议原子操作，每次只修改一个数据，不要贪多</li>
<li>必须是同步代码，方便查看 devTools 中的状态变化</li>
</ul>
</li>
<li>action
<ul>
<li>可包含多个 mutation</li>
<li>可以是异步操作</li>
</ul>
</li>
</ul>
</template>
