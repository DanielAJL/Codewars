<div class="description is-full-height has-auto-scrolling mb-15px p-15px"><div class="markdown prose max-w-none" id="description"><p>A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.</p>
<p>Write a function that will convert a string into title case, given an optional list of exceptions (minor words).  The list of minor words will be given as a string with each word separated by a space.  Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.</p>
<p>###Arguments (Haskell)</p>
<ul>
<li><strong>First argument</strong>: space-delimited list of minor words that must always be lowercase except for the first word in the string.</li>
<li><strong>Second argument</strong>: the original string to be converted.</li>
</ul>
<p>###Arguments (Other languages)</p>
<ul>
<li><strong>First argument (required)</strong>: the original string to be converted.</li>
<li><strong>Second argument (optional)</strong>: space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass <code>undefined</code> when this argument is unused.</li>
</ul>
<p>###Example</p>
<pre><code class="language-javascript"><span class="cm-variable">titleCase</span>(<span class="cm-string">'a clash of KINGS'</span>, <span class="cm-string">'a an the of'</span>) <span class="cm-comment">// should return: 'A Clash of Kings'</span>
<span class="cm-variable">titleCase</span>(<span class="cm-string">'THE WIND IN THE WILLOWS'</span>, <span class="cm-string">'The In'</span>) <span class="cm-comment">// should return: 'The Wind in the Willows'</span>
<span class="cm-variable">titleCase</span>(<span class="cm-string">'the quick brown fox'</span>) <span class="cm-comment">// should return: 'The Quick Brown Fox'</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">titleCase</span><span class="cm-punctuation">(</span><span class="cm-string">'a clash of KINGS'</span><span class="cm-punctuation">,</span> <span class="cm-string">'a an the of'</span><span class="cm-punctuation">)</span> <span class="cm-comment"># should return: 'A Clash of Kings'</span>
<span class="cm-variable">titleCase</span><span class="cm-punctuation">(</span><span class="cm-string">'THE WIND IN THE WILLOWS'</span><span class="cm-punctuation">,</span> <span class="cm-string">'The In'</span><span class="cm-punctuation">)</span> <span class="cm-comment"># should return: 'The Wind in the Willows'</span>
<span class="cm-variable">titleCase</span><span class="cm-punctuation">(</span><span class="cm-string">'the quick brown fox'</span><span class="cm-punctuation">)</span> <span class="cm-comment"># should return: 'The Quick Brown Fox'</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-variable">titleCase</span>(<span class="cm-string">'a clash of KINGS'</span>, <span class="cm-string">'a an the of'</span>) <span class="cm-comment">// should return: 'A Clash of Kings'</span>
<span class="cm-variable">titleCase</span>(<span class="cm-string">'THE WIND IN THE WILLOWS'</span>, <span class="cm-string">'The In'</span>) <span class="cm-comment">// should return: 'The Wind in the Willows'</span>
<span class="cm-variable">titleCase</span>(<span class="cm-string">'the quick brown fox'</span>) <span class="cm-comment">// should return: 'The Quick Brown Fox'</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">title_case</span>(<span class="cm-string">'a clash of KINGS'</span>, <span class="cm-string">'a an the of'</span>) <span class="cm-comment"># should return: 'A Clash of Kings'</span>
<span class="cm-variable">title_case</span>(<span class="cm-string">'THE WIND IN THE WILLOWS'</span>, <span class="cm-string">'The In'</span>) <span class="cm-comment"># should return: 'The Wind in the Willows'</span>
<span class="cm-variable">title_case</span>(<span class="cm-string">'the quick brown fox'</span>) <span class="cm-comment"># should return: 'The Quick Brown Fox'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">title_case</span>(<span class="cm-string">'a clash of KINGS'</span>, <span class="cm-string">'a an the of'</span>) <span class="cm-comment"># should return: 'A Clash of Kings'</span>
<span class="cm-variable">title_case</span>(<span class="cm-string">'THE WIND IN THE WILLOWS'</span>, <span class="cm-string">'The In'</span>) <span class="cm-comment"># should return: 'The Wind in the Willows'</span>
<span class="cm-variable">title_case</span>(<span class="cm-string">'the quick brown fox'</span>) <span class="cm-comment"># should return: 'The Quick Brown Fox'</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">titleCase</span> <span class="cm-string">"a an the of"</span> <span class="cm-string">"a clash of KINGS"</span> <span class="cm-comment">-- should return: "A Clash of Kings"</span>
<span class="cm-variable">titleCase</span> <span class="cm-string">"The In"</span> <span class="cm-string">"THE WIND IN THE WILLOWS"</span> <span class="cm-comment">-- should return: "The Wind in the Willows"</span>
<span class="cm-variable">titleCase</span> <span class="cm-string">""</span> <span class="cm-string">"the quick brown fox"</span> <span class="cm-comment">-- should return: "The Quick Brown Fox"</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">Kata</span>.<span class="cm-variable">TitleCase</span>(<span class="cm-string">"a clash of KINGS"</span>, <span class="cm-string">"a an the of"</span>)   <span class="cm-operator">=&gt;</span> <span class="cm-string">"A Clash of Kings"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">TitleCase</span>(<span class="cm-string">"THE WIND IN THE WILLOWS"</span>, <span class="cm-string">"The In"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-string">"The Wind in the Willows"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">TitleCase</span>(<span class="cm-string">"the quick brown fox"</span>)               <span class="cm-operator">=&gt;</span> <span class="cm-string">"The Quick Brown Fox"</span>
</code></pre>
</div><hr><div class="mt-15px"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div><div class="keyword-tag">Strings</div><div class="keyword-tag">Parsing</div><div class="keyword-tag">Algorithms</div></div><hr><br><div class="text-center"><a class="hover:text-current" data-tippy-content="Supercharge your technical hiring with developer assessments." data-tippy-placement="top" href="https://www.qualified.io?utm_source=codewars&amp;utm_medium=web" target="_blank"><div class="flex items-baseline justify-center"><span class="pl-1 text-xs inline-block">powered by</span><img class="h-4 inline-block dark:hidden pl-1" src="/assets/logos/qualified-black-b052752a4beaf94810c9d982f495680e2a9eb207824764ef98240ccef15cfbb1.svg"><img class="h-4 hidden dark:inline-block pl-1" src="/assets/logos/qualified-white-7cba1bde874154ee4f39d50aebd5b7e435f5b21af9884b236a60d9015039e7f0.svg"></div></a></div></div>