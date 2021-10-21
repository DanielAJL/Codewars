<div class="markdown prose max-w-none" id="description"><p>The aim of the kata is to try to show how difficult it can be to calculate decimals of an irrational number with a certain precision. We have chosen to get a few decimals of the number "pi" using
the following infinite series (Leibniz 1646–1716): </p>
<p>PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.</p>
<p><a href="http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80" target="_blank">http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80</a></p>
<p>To have a measure of the difficulty we will count how many iterations are needed to calculate PI with a given precision of <code>epsilon</code>. </p>
<p>There are several ways to determine the precision of the calculus but to keep things easy we will calculate <code>PI</code> within epsilon of your language Math::PI constant. </p>
<p><em>In other words</em>, given as input a precision of <code>epsilon</code> we will stop the iterative process when the absolute value of the difference between our calculation using the Leibniz series and the Math::PI constant of your language is less than <code>epsilon</code>.</p>
<p>Your function returns an array or a string or a tuple depending on the language (See sample tests) with </p>
<ul>
<li>your number of iterations</li>
<li>your approximation of PI with 10 decimals </li>
</ul>
<p>In Haskell you can use the function "trunc10Dble" (see "Your solution"); in Clojure you can use the function "round" (see "Your solution");in OCaml or Rust the function "rnd10" (see "Your solution") in order to avoid discussions about the result.</p>
<h4 id="example-">Example :</h4>
<p>Given epsilon = 0.001 your function gets an approximation of 3.140592653839794 for PI at the end of 1000 iterations : since you are within <code>epsilon</code> of <code>Math::PI</code> you return</p>
<pre><code>iter_pi(0.001) --&gt; [1000, 3.1405926538]
</code></pre>
<h4 id="notes-">Notes :</h4>
<p>Unfortunately, this series converges too slowly to be useful, 
as it takes over 300 terms to obtain a 2 decimal place precision. 
To obtain 100 decimal places of PI, it was calculated that
one would need to use at least 10^50 terms of this expansion!</p>
<p>About PI : <a href="http://www.geom.uiuc.edu/~huberty/math5337/groupe/expresspi.html" target="_blank">http://www.geom.uiuc.edu/~huberty/math5337/groupe/expresspi.html</a></p>
</div>