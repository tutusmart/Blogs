<template><h1 id="restful-api-常用-method" tabindex="-1"><a class="header-anchor" href="#restful-api-常用-method" aria-hidden="true">#</a> Restful API 常用 method</h1>
<p>以一个博客项目为例，实现“增删改查”功能，使用 Restful API 的接口设计如下</p>
<h2 id="新增博客" tabindex="-1"><a class="header-anchor" href="#新增博客" aria-hidden="true">#</a> 新增博客</h2>
<ul>
<li>url <code v-pre>http://xxx.com/api/blog</code></li>
<li>method <code v-pre>POST</code> （request body 中有博客的内容）</li>
</ul>
<h2 id="删除博客" tabindex="-1"><a class="header-anchor" href="#删除博客" aria-hidden="true">#</a> 删除博客</h2>
<ul>
<li>url <code v-pre>http://xxx.com/api/blog/100</code> （<code v-pre>100</code> 为博客的 id）</li>
<li>method <code v-pre>DELETE</code></li>
</ul>
<h2 id="修改博客内容" tabindex="-1"><a class="header-anchor" href="#修改博客内容" aria-hidden="true">#</a> 修改博客内容</h2>
<ul>
<li>url <code v-pre>http://xxx.com/api/blog/100</code> （<code v-pre>100</code> 为博客的 id）</li>
<li>method <code v-pre>PATCH</code> （request body 中有博客的内容）</li>
</ul>
<p>另，跟 <code v-pre>PATCH</code> 很像的还有 <code v-pre>PUT</code> 方法，两者有差别</p>
<ul>
<li><code v-pre>PUT</code> 更新全部内容，即替换</li>
<li><code v-pre>PATCH</code> 更新部分内容 —— 更加常用</li>
</ul>
<h2 id="查询博客" tabindex="-1"><a class="header-anchor" href="#查询博客" aria-hidden="true">#</a> 查询博客</h2>
<p>查询单个博客</p>
<ul>
<li>url <code v-pre>http://xxx.com/api/blog/100</code> （<code v-pre>100</code> 为博客的 id）</li>
<li>method <code v-pre>GET</code></li>
</ul>
<p>查询博客列表</p>
<ul>
<li>url <code v-pre>http://xxx.com/api/blog</code></li>
<li>method <code v-pre>GET</code></li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li><code v-pre>GET</code> 查询</li>
<li><code v-pre>POST</code> 新增</li>
<li><code v-pre>PATCH</code> 更新</li>
<li><code v-pre>DELETE</code> 删除</li>
</ul>
</template>
