var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");

var nextBtn2 = document.getElementById("next2");
var previousBtn2 = document.getElementById("previous2");

var biographies = [
  ' <figure class="floatright floattech" style="clear: both;"><img src="./images/Hannibal.png" alt="techportal" width="221.6px"><figcaption style="width: 221.6px;">A marble bust, reputedly of Hannibal, originally found at the ancient city-state of Capua in Italy</figcaption></figure><p><a href="LinkPage.html"><b>Sydney Cecil Newman</b></a>, <a href="LinkPage.html">OC</a> (April 1, 1917 – October 30, 1997) was a Canadian film and television producer, who played a pioneering role in British television drama from the late 1950s to the late 1960s. After his return to Canada in 1970, Newman was appointed Acting Director of the Broadcast Programs Branch for the <a href="LinkPage.html">Canadian Radio and Television Commission</a> (CRTC) and then head of the <a href="LinkPage.html">National Film Board of Canada</a> (NFB). He also occupied senior positions at the <a href="LinkPage.html">Canadian Film Development Corporation</a> and Canadian Broadcasting Corporation, and acted as an advisor to the <a href="LinkPage.html">Secretary of State</a>.</p><p style="margin-top: 12px;">During his time in Britain in the 1950s and 1960s, he worked first with the <a href="LinkPage.html">Associated British Corporation</a> (ABC, now Thames Television), before moving across to the <a href="LinkPage.html">BBC</a> in 1962, holding the role of Head of Drama with both organisations. During this phase of his career, he was responsible for initiating two hugely popular television programmes, the <a href="LinkPage.html">spy-fi</a> series <a href="LinkPage.html">The Avengers</a> and the science-fiction series <a href="LinkPage.html">Doctor Who</a>, as well as overseeing the production of groundbreaking <a href="LinkPage.html">social realist</a> drama series such as <a href="LinkPage.html">Armchair Theatre</a> and <a href="LinkPage.html">The Wednesday Play</a>. <a href="LinkPage.html"><b>Read more...</b></a></p>',

  '<figure class="floatright floattech" style="clear: both;"><img src="./images/makeba.png" alt="techportal" width="222px"><figcaption style="width: 222px;">Makeba during a performance</figcaption></figure><p><a href="LinkPage.html"><b>Zenzile Miriam Makeba</b></a> (4 March 1932 – 9 November 2008), nicknamed Mama Africa, was a South African singer, songwriter, actress, United Nations <a href="LinkPage.html">goodwill ambassador</a>, and <a href="LinkPage.html">civil rights</a> activist. Associated with musical genres including <a href="LinkPage.html">Afropop</a>, <a href="LinkPage.html">jazz,</a> and <a href="LinkPage.html">world music</a>, she was an advocate against apartheid and white-minority government in South Africa.</p><p style="margin-top: 12px;">Born in <a href="LinkPage.html">Johannesburg</a> to <a href="LinkPage.html">Swazi</a> and Xhosa parents, Makeba was forced to find employment as a child after the death of her father. She had a brief and allegedly abusive first marriage at the age of 17, gave birth to her only child in 1950, and survived breast cancer. Her vocal talent had been recognized when she was a child, and she began singing professionally in the 1950s, with the Cuban Brothers, the <a href="LinkPage.html">Manhattan Brothers</a>, and an all-woman group, the Skylarks, performing a mixture of jazz, traditional African melodies, and Western popular music. In 1959, Makeba had a brief role in the anti-apartheid film <a href="LinkPage.html"><i>Come Back, Africa,</i></a> which brought her international attention, and led to her performing in Venice, London, and New York City. In London, she met the American singer Harry Belafonte, who became a mentor and colleague. She moved to New York City, where she became immediately popular, and recorded her first solo album in 1960. Her attempt to return to South Africa that year for her mother funeral was prevented by the country government. <a href="LinkPage.html"><b>Read more...</b></a></p>',

  '<figure class="floatright floattech" style="clear: both;"><img src="./images/francsis.png" alt="techportal" width="222px"><figcaption style="width: 222px;">Portrait of Molière by Pierre Mignard</figcaption></figure><p><a href="LinkPage.html"><b>Sir Francis Walsingham</b></a> (c. 1532 – 6 April 1590) was <a href="LinkPage.html">principal secretary</a> to Queen Elizabeth I of England from 20 December 1573 until his death and is popularly remembered as her <a href="LinkPage.html">"spymaster"</a>.Born to a well-connected family of gentry, Walsingham attended <a href="LinkPage.html">Cambridge University</a> and travelled in continental Europe before embarking on a career in law at the age of twenty. A committed <a href="LinkPage.html">Protestant</a>, during the reign of the Catholic Queen <a href="LinkPage.html">Mary I of England</a> he joined other expatriates in exile in Switzerland and northern Italy until Mary death and the accession of her Protestant half-sister, Elizabeth. <a href="LinkPage.html"><b>Read more..</b></a></p>',

  '<figure class="floatright floattech" style="clear: both;"><img src="./images/nicolas.png" alt="techportal" width="222px"><figcaption style="width: 222px;">Sous-lieutenant Nicolas Léonard Sadi Carnot</figcaption></figure><p><a href="LinkPage.html"><i>Sous-lieutenant</i> </a><a href="LinkPage.html"><b>Nicolas Léonard Sadi Carnot</b></a> (French: <a href="LinkPage.html">[kaʁno]</a>; 1 June 1796 – 24 August 1832) was a French <a href="LinkPage.html">mechanical engineer</a> in the French Army, military scientist and physicist, often described as the "father of thermodynamics." Like Copernicus, he published only one book, the <a href="LinkPage.html"><i>Reflections on the Motive Power of Fire</i></a> (Paris, 1824), in which he expressed, at the age of 27 years, the first successful theory of the maximum efficiency of heat engines. In this work he laid the foundations of an entirely new discipline, thermodynamics. Carnot work attracted little attention during his lifetime, but it was later used by <a href="LinkPage.html">Rudolf Clausius</a> and <a href="LinkPage.html">Lord Kelvin</a> to formalize the second law of thermodynamics and define the concept of <a href="LinkPage.html">entropy</a>. <a href="LinkPage.html"><b>Read more...</b></a></p>',
];

var images = [
  '<figure style="width: 280.6px; margin: auto;"><img src="./images/baburnama.png" alt="car" width="280.6px"></figure><p style="text-align: center;">A scene from the <a href="LinkPage.html"><i>Baburnama</i></a></p>',

  '<figure style="width: 290.8px; margin: auto;"><img src="./images/benjamin.png" alt="car" width="290.8px"></figure><p style="text-align: center;">Cover of the first English edition of <a href="LinkPage.html">Benjamin Franklin</a> autobiography, 1793</p>',

  '<figure style="width: 320.9px; margin: auto;"><img src="./images/saint.png" alt="car" width="320.9px"></figure><p style="text-align: center;"><a href="LinkPage.html">Saint Augustine of Hippo</a> wrote <a href="LinkPage.html"><i>Confessions</i></a>, the first Western autobiography ever written, around 400. Portrait by <a href="LinkPage.html">Philippe de Champaigne</a>, 17th century. </p>',

  '<figure style="width: 350.5px; margin: auto;"><img src="./images/james.png" alt="car" width="350.5px"></figure><p style="text-align: center;"><a href="LinkPage.html">James Boswell</a> wrote what many consider to be the first modern biography, <a href="LinkPage.html"><i>The Life of Samuel Johnson</i></a>, in 1791.  </p>',
];

var index = 0;

function goToNextBio() {
  if (index < biographies.length) {
    index++;
    document.getElementById("bio").innerHTML = biographies[index];
  }

  if (index == biographies.length) {
    index = 0;
    document.getElementById("bio").innerHTML = biographies[index];
  }
}

function goToPreviousBio() {
  if (index > -1) {
    index--;
    document.getElementById("bio").innerHTML = biographies[index];
  }

  if (index == -1) {
    index = 3;
    document.getElementById("bio").innerHTML = biographies[index];
  }
}

index = 0;

function goToNextImage() {
  if (index < images.length) {
    index++;
    document.getElementById("gImage").innerHTML = images[index];
  }

  if (index == images.length) {
    index = 0;
    document.getElementById("gImage").innerHTML = images[index];
  }
}

function goToPreviousImage() {
  if (index > -1) {
    index--;
    document.getElementById("gImage").innerHTML = images[index];
  }

  if (index == -1) {
    index = 3;
    document.getElementById("gImage").innerHTML = images[index];
  }
}

nextBtn.onclick = goToNextBio;
previousBtn.onclick = goToPreviousBio;

nextBtn2.onclick = goToNextImage;
previousBtn2.onclick = goToPreviousImage;
