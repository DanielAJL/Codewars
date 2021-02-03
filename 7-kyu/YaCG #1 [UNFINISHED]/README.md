# Description

<blockquote>
<p><em>" Under the frozen stars of himalayan nights, yak-boys and yak-girls are used to share chunks of <a href="https://en.wikipedia.org/wiki/Chhurpi" target="_blank">chhurpi</a> and hot cups of  <a href="https://en.wikipedia.org/wiki/Butter_tea" target="_blank">ja-srub-ma</a> to the sound of <a href="https://en.wikipedia.org/wiki/Dramyin" target="_blank">sgra-snyan</a> near a <a href="https://en.wikipedia.org/wiki/Domestic_yak" target="_blank">g.yag</a> dung fire.</em> </p>
</blockquote>
<blockquote>
<p><em>After a while they also like to play card games. "</em></p>
</blockquote>
<p>One of these games is called "<strong><span style="font-size:larger">YaCg</span></strong>" (yEt AnOtHeR cArD Game).</p>
<h1 id="rules">Rules</h1>
<p><strong>Yacg</strong> is a <a href="https://en.wikipedia.org/wiki/Trick-taking_game" target="_blank">trick-taking game</a> <em>ie</em> a game in which series of rounds, called "<strong>tricks</strong>",
are played. At the end of a "trick" the winner of the trick "takes" it (and becomes the "<strong>trick-taker</strong>").</p>
<p>A standard 52-card pack is used. The cards in each suit rank from highest to lowest: <code>A K Q J 10 9 8 7 6 5 4 3 2</code>.</p>
<p>The trick is won by the <strong>highest</strong> card.</p>
<h1 id="task">Task</h1>
<p>Code a function <code>winnerOfTrick( cards, players )</code> which return the name of the "<strong>trick-taker</strong>" ie the one who played the highest ranked card.</p>
<h3 id="input">Input</h3>
<ul>
<li><p><code>cards</code> is an array of card-codes of the form "RS" where :</p>
<ul>
<li>"R" is the <em>rank</em> of the card ( one of <code>A, K, Q, J, T (for 10), 9, 8, 7, 6, 5, 4, 3 or 2</code> ) </li>
<li>"S" is the *suit * of the card (one of <code>"H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades)</code>)</li>
</ul>
<p><em>eg</em> : <code>[ "2H", "3H", "4C", "KD", "AS" ]</code></p>
</li>
</ul>
<ul>
<li><p><code>players</code> is an array of yagc-fanatic yak-boys/girls.</p>
<p><em>eg</em> : <code>[ "Algichh", "Bdobd", "Charmolg", "Dbang", "Erming" ]</code></p>
</li>
</ul>
<p>If players length is longer than cards length just ignore additional players.</p>
<h3 id="output">Output</h3>
<ul>
<li>a string of the form "<code>Bdobd wins</code>" or "<code>Tie! (Dbang,Erming)</code>" if a tie occurs.</li>
</ul>
<h3 id="examples">Examples:</h3>
<pre><code>winnerOfTrick( ["2D", "4D", "3S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -&gt; "mZoIs wins" ("4D" is the highest)
winnerOfTrick( ["4D", "2H", "4S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -&gt; "Tie! (GgbA,S'Lg)" ("4D" and "4S" are the highest)
winnerOfTrick( ["2D", "KH", "QH"],  ["mZoIs", "GgbA", "S'Lg"] ) // -&gt; "GgbA wins" ("KH" is the highest)</code></pre>
<p>&nbsp;</p>
<p>"* gMay the gCode be with gYou ! *"</p>
<hr><br>
<pre style="text-align:right">           (_____)"""._  
  gMooo     (oo)      \ 
      `---   \/       |*
              ^^"""""^^ 
- - - - - - - - - - - - - - - - -
 (gMooo = yakish for "mooo")
</pre>
