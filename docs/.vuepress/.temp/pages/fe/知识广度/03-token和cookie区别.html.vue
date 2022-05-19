<template><h1 id="cookie-和-token-区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-token-区别" aria-hidden="true">#</a> cookie 和 token 区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>cookie 和 token 有何区别</p>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2>
<p>http 请求是无状态的，即每次请求之后都会断开链接。<br>
所以，每次请求时，都可以携带一段信息发送到服务端，以表明客户端的用户身份。服务端也也可以通过 <code v-pre>set-cookie</code> 向客户端设置 cookie 内容。<br>
由于每次请求都携带 cookie ，所以 cookie 大小限制 4kb 以内。</p>
<p><img src="@source/fe/知识广度/img/cookie.png" alt=""></p>
<h2 id="cookie-作为本地存储" tabindex="-1"><a class="header-anchor" href="#cookie-作为本地存储" aria-hidden="true">#</a> cookie 作为本地存储</h2>
<p>前些年大家还常用 cookie 作为本地存储，这并不完全合适。<br>
所以后来 html5 增加了 <code v-pre>localStorage</code> 和 <code v-pre>sessionStorage</code> 作为本地存储。</p>
<h2 id="cookie-跨域限制" tabindex="-1"><a class="header-anchor" href="#cookie-跨域限制" aria-hidden="true">#</a> cookie 跨域限制</h2>
<p>浏览器存储 cookie 是按照域名区分的，在浏览器无法通过 JS <code v-pre>document.cookie</code> 获取到其他域名的 cookie 。</p>
<p>http 请求传递 cookie 默认有跨域限制。如果想要开启，需要客户端和服务器同时设置允许</p>
<ul>
<li>客户端：使用 fetch 和 XMLHttpRequest 或者 axios 需要配置 <code v-pre>withCredentials</code></li>
<li>服务端：需要配置 header <code v-pre>Access-Control-Allow-Credentials</code></li>
</ul>
<h2 id="浏览器禁用第三发-cookie" tabindex="-1"><a class="header-anchor" href="#浏览器禁用第三发-cookie" aria-hidden="true">#</a> 浏览器禁用第三发 cookie</h2>
<p>现代浏览器都开始禁用第三方 cookie （第三方 js 设置 cookie），打击第三方广告，保护用户个人隐私。</p>
<p>例如一个电商网站 A 引用了淘宝广告的 js</p>
<ul>
<li>你访问 A 时，淘宝 js 设置 cookie ，记录下商品信息</li>
<li>你再次访问淘宝时，淘宝即可获取这个 cookie 内容</li>
<li>再和你的个人信息（也在 cookie 里）一起发送到服务端，这样就知道了你看了哪个商品</li>
</ul>
<h2 id="cookie-和-session" tabindex="-1"><a class="header-anchor" href="#cookie-和-session" aria-hidden="true">#</a> cookie 和 session</h2>
<p>cookie 用途非常广泛，最常见的就是登录。</p>
<p>使用 cookie 做登录校验</p>
<ul>
<li>前端输入用户名密码，传给后端</li>
<li>后端验证成功，返回信息时 set-cookie</li>
<li>接下来所有接口访问，都自动带上 cookie （浏览器的默认行为， http 协议的规定）</li>
</ul>
<p>什么是 session ？</p>
<ul>
<li>cookie 只存储 userId ，不去暴露用户信息</li>
<li>用户信息存储在 session 中 —— session 就是服务端的一个 hash 表</li>
</ul>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h2>
<p>token 和 cookie 一样，也是一段用于客户端身份验证的字符串，随着 http 请求发送</p>
<ul>
<li>cookie 是 http 协议规范的，而 token 是自定义的，可以用任何方式传输（如 header body query-string 等）</li>
<li>token 默认不会在浏览器存储</li>
<li>token 没有跨域限制</li>
</ul>
<p>所以，token 很适合做跨域或者第三方的身份验证。</p>
<h2 id="token-和-jwt" tabindex="-1"><a class="header-anchor" href="#token-和-jwt" aria-hidden="true">#</a> token 和 JWT</h2>
<p>JWT === JSON Web Token</p>
<p>JWT 的过程</p>
<ul>
<li>前端输入用户名密码，传给后端</li>
<li>后端验证成功，返回一段 token 字符串 - 将用户信息加密之后得到的</li>
<li>前端获取 token 之后，存储下来</li>
<li>以后访问接口，都在 header 中带上这段 token</li>
</ul>
<p><img src="@source/fe/知识广度/img/token.png" alt=""></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>cookie：http 规范；有跨域限制；可存储在本地；可配合 session 实现登录</li>
<li>token：自定义标准；不在本地存储；无跨域限制；可用于 JWT 登录</li>
</ul>
<h2 id="连环问-session-和-jwt-比较-你更推荐哪个" tabindex="-1"><a class="header-anchor" href="#连环问-session-和-jwt-比较-你更推荐哪个" aria-hidden="true">#</a> 连环问：session 和 JWT 比较，你更推荐哪个？</h2>
<p>Session 优点</p>
<ul>
<li>原理简单，易于学习</li>
<li>用户信息存储在服务端，可以快速封禁某个登录的用户 —— 有这方强需求的人，一定选择 Session</li>
</ul>
<p>Session 的缺点</p>
<ul>
<li>占用服务端内存，有硬件成本</li>
<li>多进程、多服务器时，不好同步 —— 一般使用第三方 redis 存储 ，成本高</li>
<li>跨域传递 cookie ，需要特殊配置</li>
</ul>
<p>JWT 的优点</p>
<ul>
<li>不占用服务器内存</li>
<li>多进程、多服务器，不受影响</li>
<li>不受跨域限制</li>
</ul>
<p>JWT 的缺点</p>
<ul>
<li>无法快速封禁登录的用户</li>
</ul>
<p>总结：如果没有“快速封禁登录用户”的需求，建议使用 JWT 方式。</p>
<h2 id="连环问-单点登录" tabindex="-1"><a class="header-anchor" href="#连环问-单点登录" aria-hidden="true">#</a> 连环问：单点登录</h2>
<h3 id="基于-cookie" tabindex="-1"><a class="header-anchor" href="#基于-cookie" aria-hidden="true">#</a> 基于 cookie</h3>
<p>简单的，如果业务系统都在同一主域名下，比如 <code v-pre>wenku.baidu.com</code> <code v-pre>tieba.baidu.com</code> ，就好办了。
可以直接把 cookie domain 设置为主域名 <code v-pre>baidu.com</code> ，百度也就是这么干的。</p>
<h3 id="sso" tabindex="-1"><a class="header-anchor" href="#sso" aria-hidden="true">#</a> SSO</h3>
<p>复杂一点的，滴滴这么潮的公司，同时拥有 <code v-pre>didichuxing.com</code> <code v-pre>xiaojukeji.com</code> <code v-pre>didiglobal.com</code> 等域名，种 cookie 是完全绕不开的。需要使用 SSO 技术方案</p>
<p><img src="@source/fe/知识广度/img/sso.png" alt=""></p>
<h3 id="oauth2" tabindex="-1"><a class="header-anchor" href="#oauth2" aria-hidden="true">#</a> OAuth2</h3>
<p>上述 SSO 是 oauth 的实际案例，其他常见的还有微信登录、github 登录等。即，当设计到第三方用户登录校验时，都会使用 OAuth2.0 标准。
流程参考 <a href="https://tools.ietf.org/html/rfc6749" target="_blank" rel="noopener noreferrer">RFC 6749<ExternalLinkIcon/></a></p>
</template>
