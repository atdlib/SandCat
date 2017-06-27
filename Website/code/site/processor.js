<<<<<<< HEAD
var NewsTitles = ['Update One','Update Two','Good news everybody'];var NewsDates = ['4/3/2017','4/22/2017','TODAY'];var NewsSample = ['Sample goes here. Sample goes here. Sample goes here. Sample goes here. Sample goes here.','Sample goes here. Sample goes here. Sample goes here. Sample goes here. Sample goes here.','Sample goes here. Sample goes here. Sample goes here. Sample goes here. Sample goes here.'];
///////////////////

//var NewsTitles = ['Hey! News title one!', 'News title two!', 'News title three'];
//var NewsDates = ['6/21/2017', '5/10/2017', '1/5/2017'];
//var NewsSample = ['This is what the post is about', 'This post is about something else entirely', 'Here is another post not about anything important at at all'];


var headerHTML = " \
  <div class='container'> \
    <div class='row'> \
    <table class='u-full-width'> \
      <thead> \
        <tr> \
          <th><a href='index.html'><img src='images/cathead.png' width='35'></a></th> \
          <th><a href='news.html'>News</a></th> \
          <th><a href='http://google.com'>Games</a></th> \
          <th><a href='http://google.com'>Download</a></th> \
          <th><a href='http://google.com'>About</a></th> \
        </tr> \
      </thead> \
    </table> \
    </div> \
    </div> \
  </div> \
";


function PageLoad(pageName) {
    document.getElementById("header").innerHTML = headerHTML;

  if (pageName == "Index") {    
    document.getElementById("PostOne").innerHTML = GetPostHTML(0);
    document.getElementById("PostTwo").innerHTML = GetPostHTML(1);    
  } else if (pageName == "News") {
    for (index = 0; index < NewsTitles.length; index++) {
      document.getElementById("posts").innerHTML += GetNewsPostHTML(index);
    }
  }
}

function GetPostHTML(index) {

  // title
  var finalHTML = "";
  finalHTML += "<h5><strong><a href='http://google.com'>"
  finalHTML += NewsTitles[index];
  finalHTML += "</a></strong></h5>";

  // sample
  finalHTML += "<p>";
  finalHTML += NewsSample[index];
  finalHTML += "</p>";

  return (finalHTML);
}

function GetNewsPostHTML(index) {

  var finalHTML = "";
  finalHTML+= '<pre></pre>';
  finalHTML+= '<div class="container">';
  finalHTML+= '<div class="row">';
  finalHTML+= '<div class="clearfix mxn2">';
  finalHTML+= '<div class="sm-col sm-col-6 md-col-5 lg-col-4 px2">';
  finalHTML+= "<h5><a href='http://google.com'><strong>";
  finalHTML+= NewsTitles[index];
  finalHTML+= "</strong></a></h5>";
  finalHTML+= "<h6>";
  finalHTML+= NewsDates[index];
  finalHTML+= "</h6>";
  finalHTML+= "</div>";
  finalHTML+= '<div class="sm-col sm-col-6 md-col-7 lg-col-8 px2">';
  finalHTML+= '<p>';
  finalHTML+= NewsSample[index];
  finalHTML+= '</p>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  return (finalHTML);
=======
var NewsTitles = ['Update One'];var NewsDates = ['4/3/2017'];var NewsSample = ['Sample goes here. Sample goes here. Sample goes here. Sample goes here. Sample goes here.'];var HTMLBody = ['                     <!-- post date here  --> <!--  -->             </div>            </div>  <!-- body stuff here --> <p class="BodyCopy">Welcome to the first update for my latest project, SandCat. I have not yet written a true introduction to the project, so you’ll just have to bear with me for now. But-here is the meat of the project. SandCat is the first game ruleset prototyping language. The language aims to expedite the game design process by allowing designers to focus entirely on the core mechanics and rules while ignoring the software requirements. If you want more information on what I mean by this, go read my previous article <a href="https://medium.com/@ryanrothweiler/improving-game-design-process-9e392ebf73af">Improving Game Design Process</a>.</p> <p class="BodyCopy">This is the first update—obviously that implies this is the first of many. These updates are where I plan to discuss language design decisions, planned features, general progress, and really anything else that applies to the project. The updates will be quick, informal, and unpolished. I’m writing these for two reasons: 1. For the reader — to market the project, get the word out, and hopefully get feedback. 2. For myself — to document progress and organize my thoughts.</p> <p class="BodyCopy">Considering these are quick informal updates, everything is first draft and will most likely be changed. Therefore: I strongly encourage the reader to ignore the minute specifics and focus on the long term goal. For example, don’t pay any attention to syntax. I’m not yet worried about syntax. I know it is very rough, sub-optimal, and wildly inconsistent. I aim to prove the core ideas before I refine the specifics.</p> <h3><a id="Groundwork_9"></a>Groundwork</h3> <p class="BodyCopy">For this first update, I’ll simply introduce the beginnings of the project.</p> <p class="BodyCopy">First off, all games needs some kind of state. You can specify state like such,</p> <p class="code">Chicken.</p> <p class="BodyCopy">When played, you get this.</p> <p class="BodyCopy"><img src="https://cdn-images-1.medium.com/max/800/1*wXnAj9wi88IIrVTdDuoOaw.png" alt=""></p> <p class="BodyCopy">This is simply a truth statement. It’s difficult to conceptualize without more context. We can add some context by supplying a better name.</p> <p class="code">ChickenHealth.</p> <p class="BodyCopy"><img src="https://cdn-images-1.medium.com/max/800/1*mW-MWRWSxk89cemQ1czmOw.png" alt=""></p> <p class="BodyCopy">But a chicken’s health implies a numerical value. We can specify that also.</p> <p class="code">ChickenHealth(10).</p> <p class="BodyCopy"><img src="https://cdn-images-1.medium.com/max/800/1*HLjJRj_gGGt4aaWvxX_3Rw.png" alt=""></p> <p class="BodyCopy">Great. We have some very basic initial state. Now how do we change that state? For now, that is done through events. They follow the pattern of</p> <p class="code">// event(EVENT_NAME) - STATE_CHANGING : CONDITIONS   event(HurtChicken) - ChickenHealth(ChickenHealth - 1) : conditional(ChickenHealth &gt; 0).</p> <p class="BodyCopy"><img src="https://cdn-images-1.medium.com/max/800/1*Um7tWop1TJS2hI_XB6QLBg.gif" alt=""></p> <p class="BodyCopy">In english, this reads as–this event is called HurtChicken, it sets ChickenHealth to one minus the current ChickenHealth, and it is only possible if ChickenHealth is greater than 0.</p> <p class="BodyCopy">I think that is a nice start. It’s very rudimentary, but it’s already capable of expressing simple games.</p> <h3><a id="Shield_Push_44"></a>Shield Push</h3> <p class="BodyCopy">Using just these two features, I was able to write a small game called Shield Push.</p> <p class="BodyCopy">This game features a graphical representation of the rules. Don’t worry about that. It is very important to give designers tools to visually organize their game, but I haven’t tackled that challenge yet.</p> <p class="BodyCopy">Back to the game. In this game the player can move the red square around, but never outside the bounds of the grid, and never into the black square. The blue rectangle is a shield which, once picked up, allows the player to push the black square only up or down. Below are the rules definition for the game, followed by a gif of the game being played.</p>    <pre><code>// Initial state  
GridMaxX(10).  
GridMinX(0).  
GridMaxY(10).  
GridMinY(0).

PlayerX(2).  
PlayerY(3). 

BlockX(3).  
BlockY(3).

ShieldPosX(5).  
ShieldPosY(7).

// Moving player. Can\t move into the block.   
event(MoveUp) - PlayerY(PlayerY - 1) : conditional(PlayerY GridMinY) 
! [ conditional(PlayerY - 1 = BlockY) conditional(PlayerX = BlockX) ].

event(MoveDown) - PlayerY(PlayerY + 1) : conditional(PlayerY GridMaxY) 
! [ conditional(PlayerY + 1 = BlockY) conditional(PlayerX = BlockX) ].

event(MoveLeft) - PlayerX(PlayerX - 1) : conditional(PlayerX GridMinX) 
! [ conditional(PlayerX - 1 = BlockX) conditional(PlayerY = BlockY) ].

event(MoveRight) - PlayerX(PlayerX + 1) : conditional(PlayerX GridMaxX) 
! [ conditional(PlayerX + 1 = BlockX) conditional(PlayerY = BlockY) ].

// Pushing the block.  
event(PushBlockUp) - PlayerY(PlayerY - 1), BlockY(BlockY - 1) :   
conditional(PlayerY GridMinY) [ conditional(PlayerY - 1 = BlockY) 
conditional(PlayerX = BlockX) ] conditional(BlockY GridMinY) conditional(PlayerHoldingShield = 0).

event(PushBlockDown) - PlayerY(PlayerY + 1), BlockY(BlockY + 1) :   
conditional(PlayerY GridMaxY) [ conditional(PlayerY + 1 = BlockY) 
conditional(PlayerX = BlockX) ] conditional(BlockY GridMaxY) conditional(PlayerHoldingShield = 0).

// Pickingup shield  
event(PickupShield) - PlayerHoldingShield(0) :   
conditional(PlayerX = ShieldPosX) &amp; conditional(PlayerY = ShieldPosY).
</code></pre>     <p class="BodyCopy"><img src="https://cdn-images-1.medium.com/max/800/1*--vLafUg-p3uev8uNJCGhg.gif" alt=""></p> <p class="BodyCopy">&lt;div class=“UnityGame”&gt;&lt;/div&gt;</p> <h3><a id="Issues_and_Solutions_94"></a>Issues and Solutions</h3> <p class="BodyCopy">This can obviously be improved. There are two big issues I see with this.</p> <ul class="BodyCopy"> <li>There is a lot of repetition in the rules definition. Moving the player up or down is a very similar concept— so the similarities should be compressed and into it’s own reusable unit. The same can be said for the block. Making sure the player does not have the same position as the block should only need to be written once, but currently it’s spread across multiple events.</li> <li>You cannot bundle data. For example, adding a second block is an arduous and monotonous task. This is partially because of the first issue, but also because the data and rules for the block are not bundled together.</li> </ul> <p class="BodyCopy">These are my next two big tasks: reduce the repetition of similar rules and allow for easier bundling and duplicating of data. I think this is off to a good start but there is still tons to do.</p>  <!--  -->'];
///////////////////

//var NewsTitles = ['Hey! News title one!', 'News title two!', 'News title three'];
//var NewsDates = ['6/21/2017', '5/10/2017', '1/5/2017'];
//var NewsSample = ['This is what the post is about', 'This post is about something else entirely', 'Here is another post not about anything important at at all'];


var headerHTML = " \
  <div class='container'> \
    <div class='row'> \
    <table class='u-full-width'> \
      <thead> \
        <tr> \
          <th><a href='index.html'><img src='images/cathead.png' width='35'></a></th> \
          <th><a href='news.html'>News</a></th> \
          <th><a href='http://google.com'>Games</a></th> \
          <th><a href='http://google.com'>Download</a></th> \
          <th><a href='http://google.com'>About</a></th> \
        </tr> \
      </thead> \
    </table> \
    </div> \
    </div> \
  </div> \
";


function PageLoad(pageName) {
    document.getElementById("header").innerHTML = headerHTML;

  if (pageName == "Index") {    
    document.getElementById("PostOne").innerHTML = GetPostHTML(0);
    document.getElementById("PostTwo").innerHTML = GetPostHTML(1);    
  } else if (pageName == "News") {
    for (index = 0; index < NewsTitles.length; index++) {
      document.getElementById("posts").innerHTML += GetNewsPostHTML(index);
    }
  } else if (pageName == "NewsPost") {
      document.getElementById("Title").innerHTML = NewsTitles[0];
      document.getElementById("Date").innerHTML = NewsDates[0];
    }
}

function GetPostHTML(index) {

  // title
  var finalHTML = "";
  finalHTML += "<h5><strong><a href='http://google.com'>"
  finalHTML += NewsTitles[index];
  finalHTML += "</a></strong></h5>";

  // sample
  finalHTML += "<p>";
  finalHTML += NewsSample[index];
  finalHTML += "</p>";

  return (finalHTML);
}

function GetNewsPostHTML(index) {

  var finalHTML = "";
  finalHTML+= '<pre></pre>';
  finalHTML+= '<div class="container">';
  finalHTML+= '<div class="row">';
  finalHTML+= '<div class="clearfix mxn2">';
  finalHTML+= '<div class="sm-col sm-col-6 md-col-5 lg-col-4 px2">';
  finalHTML+= "<h5><a href='http://google.com'><strong>";
  finalHTML+= NewsTitles[index];
  finalHTML+= "</strong></a></h5>";
  finalHTML+= "<h6>";
  finalHTML+= NewsDates[index];
  finalHTML+= "</h6>";
  finalHTML+= "</div>";
  finalHTML+= '<div class="sm-col sm-col-6 md-col-7 lg-col-8 px2">';
  finalHTML+= '<p>';
  finalHTML+= NewsSample[index];
  finalHTML+= '</p>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  finalHTML+= '</div>';
  return (finalHTML);
>>>>>>> dc6e37531e5674c7bc2b3c2d03383ffbb7f94bc4
}