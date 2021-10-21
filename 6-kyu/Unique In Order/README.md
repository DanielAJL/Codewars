<div class="markdown prose max-w-none" id="description"><p>Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.</p>
<p>For example:</p>
<pre style="display: none;"><code class="language-cpp"><span class="cm-variable">uniqueInOrder</span>(<span class="cm-string">"AAAABBBCCDAABBB"</span>) <span class="cm-operator">==</span> {<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'D'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>}
<span class="cm-variable">uniqueInOrder</span>(<span class="cm-string">"ABBCcAD"</span>)         <span class="cm-operator">==</span> {<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'c'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'D'</span>}
<span class="cm-variable">uniqueInOrder</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>])       <span class="cm-operator">==</span> {<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>}
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">uniqueInOrder</span>(<span class="cm-string">'AAAABBBCCDAABBB'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'D'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>]
<span class="cm-variable">uniqueInOrder</span>(<span class="cm-string">'ABBCcAD'</span>)         <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'c'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'D'</span>]
<span class="cm-variable">uniqueInOrder</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>])       <span class="cm-operator">==</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">unique_in_order</span>(<span class="cm-string">'AAAABBBCCDAABBB'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'D'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>]
<span class="cm-variable">unique_in_order</span>(<span class="cm-string">'ABBCcAD'</span>)         <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'c'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'D'</span>]
<span class="cm-variable">unique_in_order</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>])       <span class="cm-operator">==</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">unique_in_order</span>(<span class="cm-string">'AAAABBBCCDAABBB'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'D'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>]
<span class="cm-variable">unique_in_order</span>(<span class="cm-string">'ABBCcAD'</span>)         <span class="cm-operator">==</span> [<span class="cm-string">'A'</span>, <span class="cm-string">'B'</span>, <span class="cm-string">'C'</span>, <span class="cm-string">'c'</span>, <span class="cm-string">'A'</span>, <span class="cm-string">'D'</span>]
<span class="cm-variable">unique_in_order</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>])       <span class="cm-operator">==</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">uniqueInOrder</span> <span class="cm-string">"AAAABBBCCDAABBB"</span> <span class="cm-builtin">==</span> <span class="cm-string">"ABCDAB"</span>
<span class="cm-variable">uniqueInOrder</span> <span class="cm-string">"ABBCcAD"</span>         <span class="cm-builtin">==</span> <span class="cm-string">"ABCcAD"</span>
<span class="cm-variable">uniqueInOrder</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>]       <span class="cm-builtin">==</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-crystal"><span class="cm-variable">unique_in_order</span>(<span class="cm-string">"AAAABBBCCDAABBB"</span>) <span class="cm-operator">==</span> [<span class="cm-atom">'A'</span>, <span class="cm-atom">'B'</span>, <span class="cm-atom">'C'</span>, <span class="cm-atom">'D'</span>, <span class="cm-atom">'A'</span>, <span class="cm-atom">'B'</span>]
<span class="cm-variable">unique_in_order</span>(<span class="cm-string">"ABBCcAD"</span>)         <span class="cm-operator">==</span> [<span class="cm-atom">'A'</span>, <span class="cm-atom">'B'</span>, <span class="cm-atom">'C'</span>, <span class="cm-atom">'c'</span>, <span class="cm-atom">'A'</span>, <span class="cm-atom">'D'</span>]
<span class="cm-variable">unique_in_order</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>,<span class="cm-number">3</span>])       <span class="cm-operator">==</span> [<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">3</span>]
</code></pre>
</div>