<template><h1 id="hybrid-更新机制" tabindex="-1"><a class="header-anchor" href="#hybrid-更新机制" aria-hidden="true">#</a> hybrid 更新机制</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请设计一个 hybrid 包的更新流程</p>
<h2 id="hybrid-运作流程" tabindex="-1"><a class="header-anchor" href="#hybrid-运作流程" aria-hidden="true">#</a> hybrid 运作流程</h2>
<p><img src="@source/fe/项目设计/项目设计/img/hybrid1.png" alt=""></p>
<p>小提示：hybrid html 中 ajax 请求的 url 不能省略协议名称（如 <code v-pre>//xxx.com/api/getInfo</code>），否则会默认以 <code v-pre>file</code> 协议请求。必须明确协议名称 <code v-pre>http</code> 或者 <code v-pre>https</code>。</p>
<h2 id="上传新版本的-hybrid-包" tabindex="-1"><a class="header-anchor" href="#上传新版本的-hybrid-包" aria-hidden="true">#</a> 上传新版本的 hybrid 包</h2>
<p>hybrid 包是需要实时更新的，就跟 H5 网上上线一样。更新之后，App 要下载、使用最新版本的 hybrid 包。</p>
<p><img src="@source/fe/项目设计/项目设计/img/hybrid2.png" alt=""></p>
<p>何时触发检查、下载最新版本呢？有两种选择</p>
<ul>
<li>App 启动时检查、下载</li>
<li>实时检查、下载（如每隔 5min）</li>
</ul>
<h2 id="延迟使用" tabindex="-1"><a class="header-anchor" href="#延迟使用" aria-hidden="true">#</a> 延迟使用</h2>
<p>以上两种时机，都会遇到一个问题：如果检查到最新版本，立刻下载使用，可能会影响的性能。
为了避免这个影响，可以考虑“延迟使用”。</p>
<ul>
<li>检测到新版本，先后台下载，目前先使用旧版本</li>
<li>待现在完成，再替换为新版本使用</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>hybrid 基本概念，和基本流程</li>
<li>最新包的延迟使用</li>
</ul>
</template>
