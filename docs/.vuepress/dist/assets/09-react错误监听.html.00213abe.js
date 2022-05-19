import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="react-\u9519\u8BEF\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#react-\u9519\u8BEF\u76D1\u542C" aria-hidden="true">#</a> React \u9519\u8BEF\u76D1\u542C</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5982\u4F55\u7EDF\u4E00\u76D1\u542C React \u7EC4\u4EF6\u62A5\u9519\uFF1F</p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u771F\u5B9E\u9879\u76EE\u9700\u8981<strong>\u95ED\u73AF</strong>\uFF0C\u5373\u8003\u8651\u5404\u4E2A\u65B9\u9762\uFF0C\u9664\u4E86\u57FA\u672C\u7684\u529F\u80FD\u5916\uFF0C\u8FD8\u8981\u8003\u8651\u6027\u80FD\u4F18\u5316\u3001\u62A5\u9519\u3001\u7EDF\u8BA1\u7B49\u3002 \u800C\u4E2A\u4EBA\u9879\u76EE\u3001\u8BFE\u7A0B\u9879\u76EE\u4E00\u822C\u4EE5\u5B9E\u73B0\u529F\u80FD\u4E3A\u4E3B\uFF0C\u4E0D\u4F1A\u8003\u8651\u8FD9\u4E48\u5168\u9762\u3002\u6240\u4EE5\uFF0C\u6CA1\u6709\u5B9E\u9645\u5DE5\u4F5C\u7ECF\u9A8C\u7684\u540C\u5B66\uFF0C\u4E0D\u4F1A\u4E86\u89E3\u5982\u6B64\u5168\u9762\u3002</p><h2 id="errorboundary" tabindex="-1"><a class="header-anchor" href="#errorboundary" aria-hidden="true">#</a> ErrorBoundary</h2><p>React 16+ \u5F15\u5165\u3002\u53EF\u4EE5\u76D1\u542C\u6240\u6709<strong>\u4E0B\u7EA7</strong>\u7EC4\u4EF6\u62A5\u9519\uFF0C\u540C\u65F6\u964D\u7EA7\u5C55\u793A UI \u3002<br> \u4EE3\u7801\u53C2\u8003 ErrorBoundary.js \u548C components/ErrorDemo</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>//ErrorBoundary
import React from &#39;react&#39;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null // \u5B58\u50A8\u5F53\u524D\u7684\u62A5\u9519\u4FE1\u606F
        }
    }
    static getDerivedStateFromError(error) {
        // \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u80FD\u591F\u663E\u793A\u964D\u7EA7\u540E\u7684 UI
        console.info(&#39;getDerivedStateFromError...&#39;, error)
        return { error }
    }
    componentDidCatch(error, errorInfo) {
        // \u7EDF\u8BA1\u4E0A\u62A5\u9519\u8BEF\u4FE1\u606F
        console.info(&#39;componentDidCatch...&#39;, error, errorInfo)
    }
    render() {
        if (this.state.error) {
            // \u63D0\u793A\u9519\u8BEF
            return &lt;h1&gt;\u62A5\u9519\u4E86&lt;/h1&gt;
        }

        // \u6CA1\u6709\u9519\u8BEF\uFF0C\u5C31\u6E32\u67D3\u5B50\u7EC4\u4EF6
        return this.props.children
    }
}

export default ErrorBoundary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>components/ErrorDemo \u5EFA\u8BAE\u5E94\u7528\u5230\u6700\u9876\u5C42\uFF0C\u76D1\u542C\u5168\u5C40\u9519\u8BEF</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>//ClassDemo.js
import React from &#39;react&#39;

class ErrorDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 100
        }
    }
    clickHandler = () =&gt; {
        this.state.num() // ErrorBoundary \u65E0\u6CD5\u76D1\u542C\u4E8B\u4EF6\u62A5\u9519\uFF0C\u9700\u8981\u81EA\u884C try-catch
    }
    componentDidMount() {
        // throw new Error(&#39;mounted error&#39;) // ErrorBoundary \u53EF\u76D1\u542C\u6E32\u67D3\u8FC7\u7A0B\u7684\u62A5\u9519

        // setTimeout(() =&gt; {
        //     throw new Error(&#39;setTimeout error&#39;)
        // }, 1000)
    }
    render() {
        return &lt;div&gt;
            &lt;p&gt;error demo - class&lt;/p&gt;
            &lt;button onClick={this.clickHandler}&gt;error&lt;/button&gt;
        &lt;/div&gt;
    }
}

export default ErrorDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>//FunctionalDemo.js
import { useState, useEffect } from &#39;react&#39;

function ErrorDemo() {
    const [num] = useState(100)

    function clickHandler() {
        num() // ErrorBoundary \u65E0\u6CD5\u76D1\u542C\u4E8B\u4EF6\u62A5\u9519\uFF0C\u9700\u8981\u81EA\u884C try-catch
    }

    useEffect(() =&gt; {
        // throw new Error(&#39;mounted error&#39;) // ErrorBoundary \u53EF\u76D1\u542C\u6E32\u67D3\u8FC7\u7A0B\u7684\u62A5\u9519
    }, [])

    return &lt;div&gt;
        &lt;p&gt;error demo - functional&lt;/p&gt;
        &lt;button onClick={clickHandler}&gt;error&lt;/button&gt;
    &lt;/div&gt;
}

export default ErrorDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// index.js \u5165\u53E3\u6587\u4EF6</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dev-\u548C-build" tabindex="-1"><a class="header-anchor" href="#dev-\u548C-build" aria-hidden="true">#</a> dev \u548C build</h2><p>dev \u73AF\u5883\u4E0B\u65E0\u6CD5\u770B\u5230 ErrorBoundary \u7684\u62A5\u9519 UI \u6548\u679C\u3002\u4F1A\u663E\u793A\u7684\u63D0\u793A\u62A5\u9519\u4FE1\u606F\u3002<br><code>yarn build</code> \u4E4B\u540E\u518D\u8FD0\u884C\uFF0C\u5373\u53EF\u770B\u5230 UI \u6548\u679C\u3002</p><h2 id="\u4E8B\u4EF6\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u62A5\u9519" aria-hidden="true">#</a> \u4E8B\u4EF6\u62A5\u9519</h2><p>React \u4E0D\u9700\u8981 ErrorBoundary \u6765\u6355\u83B7\u4E8B\u4EF6\u5904\u7406\u5668\u4E2D\u7684\u9519\u8BEF\u3002\u4E0E <code>render</code> \u65B9\u6CD5\u548C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E0D\u540C\uFF0C\u4E8B\u4EF6\u5904\u7406\u5668\u4E0D\u4F1A\u5728\u6E32\u67D3\u671F\u95F4\u89E6\u53D1\u3002</p><p>\u5982\u679C\u4F60\u9700\u8981\u5728\u4E8B\u4EF6\u5904\u7406\u5668\u5185\u90E8\u6355\u83B7\u9519\u8BEF\uFF0C\u4F7F\u7528\u666E\u901A\u7684 <code>try-catch</code> \u8BED\u53E5\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u7684 <code>window.onerror</code> \u6765\u76D1\u542C\u3002</p><h2 id="\u5F02\u6B65\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u9519\u8BEF" aria-hidden="true">#</a> \u5F02\u6B65\u9519\u8BEF</h2><p>ErrorBoundary \u65E0\u6CD5\u6355\u6349\u5230\u5F02\u6B65\u62A5\u9519\uFF0C\u53EF\u4F7F\u7528 <code>window.onerror</code> \u6765\u76D1\u542C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;window.onerror---------&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F\uFF0C\u5982\u679C\u7528 window.addEventListener(&#39;error&#39;, event =&gt; {}) \u53C2\u6570\u4E0D\u4E00\u6837\uFF01\uFF01\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><ul><li>ErrorBoundary \u76D1\u542C\u6E32\u67D3\u65F6\u62A5\u9519</li><li><code>try-catch</code> \u548C <code>window.onerror</code> \u6355\u83B7\u5176\u4ED6\u9519\u8BEF</li></ul><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>Promise \u76D1\u542C\u62A5\u9519\u8981\u4F7F\u7528 <code>window.onunhandledrejection</code> \uFF0C\u540E\u9762\u4F1A\u6709\u9762\u8BD5\u9898\u8BB2\u89E3\u3002</p><p>\u524D\u7AEF\u62FF\u5230\u9519\u8BEF\u76D1\u542C\u4E4B\u540E\uFF0C\u9700\u8981\u4F20\u9012\u7ED9\u670D\u52A1\u7AEF\uFF0C\u8FDB\u884C\u9519\u8BEF\u6536\u96C6\u548C\u5206\u6790\uFF0C\u7136\u540E\u4FEE\u590D bug \u3002 \u540E\u9762\u4F1A\u6709\u4E00\u9053\u9762\u8BD5\u9898\u4E13\u95E8\u8BB2\u89E3\u3002</p>`,27);function i(r,t){return e}var d=n(a,[["render",i],["__file","09-react\u9519\u8BEF\u76D1\u542C.html.vue"]]);export{d as default};
