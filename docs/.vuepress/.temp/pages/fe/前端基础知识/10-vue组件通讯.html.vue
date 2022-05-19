<template><h1 id="vue-组件通讯" tabindex="-1"><a class="header-anchor" href="#vue-组件通讯" aria-hidden="true">#</a> Vue 组件通讯</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Vue 组件通讯有几种方式，尽量全面</p>
<h2 id="props-emit" tabindex="-1"><a class="header-anchor" href="#props-emit" aria-hidden="true">#</a> props / $emit</h2>
<p>适用于父子组件。</p>
<ul>
<li>父组件向子组件传递 props 和事件</li>
<li>子组件接收 props ，使用 <code v-pre>this.$emit</code> 调用事件</li>
</ul>
<h2 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h2>
<p>适用于兄弟组件，或者“距离”较远的组件。</p>
<p>常用 API</p>
<ul>
<li>绑定事件 <code v-pre>event.on(key, fn)</code> 或 <code v-pre>event.once(key, fn)</code></li>
<li>触发事件 <code v-pre>event.emit(key, data)</code></li>
<li>解绑事件 <code v-pre>event.off(key, fn)</code></li>
</ul>
<p>Vue 版本的区别</p>
<ul>
<li>Vue 2.x 可以使用 Vue 实例作为自定义事件</li>
<li>Vue 3.x 需要使用第三方的自定义事件，例如 https://www.npmjs.com/package/event-emitter</li>
</ul>
<p>【注意】组件销毁时记得 <code v-pre>off</code> 事件，否则可能会造成内存泄漏</p>
<h2 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> $attrs</h2>
<p><code v-pre>$attrs</code> 存储是父组件中传递过来的，且未在 <code v-pre>props</code> 和 <code v-pre>emits</code> 中定义的属性和事件。<br>
相当于 <code v-pre>props</code> 和 <code v-pre>emits</code> 的一个补充。</p>
<p>继续向下级传递，可以使用 <code v-pre>v-bind=&quot;$attrs&quot;</code>。这会在下级组件中渲染 DOM 属性，可以用 <code v-pre>inheritAttrs: false</code> 避免。</p>
<p>【注意】Vue3 中移除了 <code v-pre>$listeners</code> ，合并到了 <code v-pre>$attrs</code> 中。</p>
<h2 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> $parent</h2>
<p>通过 <code v-pre>this.$parent</code> 可以获取父组件，并可以继续获取属性、调用方法等。</p>
<p>【注意】Vue3 中移除了 <code v-pre>$children</code> ，建议使用 <code v-pre>$refs</code></p>
<h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h2>
<p>通过 <code v-pre>this.$refs.xxx</code> 可以获取某个子组件，前提是模板中要设置 <code v-pre>ref=&quot;xxx&quot;</code>。</p>
<p>【注意】要在 <code v-pre>mounted</code> 中获取 <code v-pre>this.$refs</code> ，不能在 <code v-pre>created</code> 中获取。</p>
<h2 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide / inject</h2>
<p>父子组件通讯方式非常多。如果是多层级的上下级组件通讯，可以使用 provide 和 inject 。<br>
在上级组件定一个 provide ，下级组件即可通过 inject 接收。</p>
<ul>
<li>传递静态数据直接使用 <code v-pre>provide: { x: 10 }</code> 形式</li>
<li>传递组件数据需要使用 <code v-pre>provide() { return { x: this.xx } }</code> 形式，但做不到响应式</li>
<li>响应式需要借助 <code v-pre>computed</code> 来支持</li>
</ul>
<h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2>
<p>Vuex 全局数据管理</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>父子组件通讯
<ul>
<li><code v-pre>props</code> <code v-pre>emits</code> <code v-pre>this.$emit</code></li>
<li><code v-pre>$attrs</code> （也可以通过 <code v-pre>v-bind=&quot;$attrs&quot;</code> 向下级传递）</li>
<li><code v-pre>$parent</code> <code v-pre>$refs</code></li>
</ul>
</li>
<li>多级组件上下级
<ul>
<li><code v-pre>provide</code> <code v-pre>inject</code></li>
</ul>
</li>
<li>跨级、全局
<ul>
<li>自定义事件</li>
<li>Vuex</li>
</ul>
</li>
</ul>
</template>
