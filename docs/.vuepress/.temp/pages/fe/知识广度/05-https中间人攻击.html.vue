<template><h1 id="https-中间人攻击" tabindex="-1"><a class="header-anchor" href="#https-中间人攻击" aria-hidden="true">#</a> https 中间人攻击</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>什么是 https 中间人攻击，如何预防？</p>
<h2 id="复习-https-加密原理" tabindex="-1"><a class="header-anchor" href="#复习-https-加密原理" aria-hidden="true">#</a> 复习：https 加密原理</h2>
<p>http 是明文传输，传输的所有内容（如登录的用户名和密码），都会被中间的代理商（无论合法还是非法）获取到。</p>
<p>http + TLS/SSL = https ，即加密传输信息。只有客户端和服务端可以解密为明文，中间的过程无法解密。</p>
<p><img src="@source/fe/知识广度/img/https.png" alt=""></p>
<h2 id="中间人攻击" tabindex="-1"><a class="header-anchor" href="#中间人攻击" aria-hidden="true">#</a> 中间人攻击</h2>
<p>中间人攻击，就是黑客劫持网络请求，伪造 CA 证书。</p>
<p><img src="@source/fe/知识广度/img/中间人攻击.jpeg" alt=""></p>
<p>解决方案：使用浏览器可识别的，正规厂商的证书（如阿里云），慎用免费证书。</p>
<p><img src="@source/fe/知识广度/img/https-错误.png" alt=""></p>
</template>
