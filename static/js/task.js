/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
	// "instructions/instruct-1.html",
	// "instructions/instruct-2.html",
	// "instructions/instruct-3.html",
	"instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ // add as a list as many pages as you like
	// "instructions/instruct-1.html",
	// "instructions/instruct-2.html",
	// "instructions/instruct-3.html",
	"instructions/instruct-ready.html"
];


/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and
* insert them into the document.
*
********************/

var Curiosity = function() {
    psiTurk.showPage('stage.html');
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

    Vue.use(VueFire);
    var app = new Vue({
        el: "#app",
        data: {
            // keep this main videoList intact and instead update code with sequences beginning to unyoked participants
            videoList: [
                    // for adding timestamps to videos just include as a key, value pair--timestamps: [2.0, 7.5, 13.0]
                   {src: "static/videos/pomegranate.mp4", type: "video/mp4", answer: "Pomegranate"},
                   {src: "static/videos/astronaut.mp4", type: "video/mp4", answer: "Astronaut"},
                   {src: "static/videos/bananas.mp4", type: "video/mp4", answer: "Bananas"},
                   {src: "static/videos/bellpepper.mp4", type: "video/mp4", answer: "Bell Pepper"},
                   {src: "static/videos/bottle.mp4", type: "video/mp4", answer: "Bottle"},
                   {src: "static/videos/bull.mp4", type: "video/mp4", answer: "Bull"},
                   {src: "static/videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
                   {src: "static/videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
                   {src: "static/videos/car.mp4", type: "video/mp4", answer: "Car"},
                   {src: "static/videos/dog.mp4", type: "video/mp4", answer: "Dog"},
                   {src: "static/videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
                   {src: "static/videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
                   {src: "static/videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
                   {src: "static/videos/headphones.mp4", type: "video/mp4", answer: "Headphones"},
                   {src: "static/videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
                   {src: "static/videos/lungs.mp4", type: "video/mp4", answer: "Lungs"},
                   {src: "static/videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
                   {src: "static/videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
                   {src: "static/videos/panda.mp4", type: "video/mp4", answer: "Panda"},
                   {src: "static/videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
                   {src: "static/videos/pineapple.mp4", type: "video/mp4", answer: "Pineapple"},
                   {src: "static/videos/rose.mp4", type: "video/mp4", answer: "Rose"},
                   {src: "static/videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
                   {src: "static/videos/scale.mp4", type: "video/mp4", answer: "Scale"},
                   {src: "static/videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
                   {src: "static/videos/sneaker.mp4", type: "video/mp4", answer: "Sneaker"},
                   {src: "static/videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
                   {src: "static/videos/taco.mp4", type: "video/mp4", answer: "Taco"},
                   {src: "static/videos/wave.mp4", type: "video/mp4", answer: "Wave"},
                   {src: "static/videos/walrus.mp4", type: "video/mp4", answer: "Walrus"},
            ],
            videoIndex: 0,
            videoGuess: "",
            finalGuess: "",
            submitTime: 0,
            percentageSubmit: 0,
            videoAnswer: "",
            guessList: [],
            submitTimeList: [],
            percentageSubmitList: [],
            alreadyKnow: false,
            alreadyKnowList: [],
            curiosityValue: 50,
            finishValue: 50,
            confidenceValue: 50,
            curiosityList: [],
            finishList: [],
            confidenceList: [],
            surpriseValue: 50,
            enjoyValue: 50,
            complexValue: 50,
            answeredSurpriseValue: 0,
            answeredEnjoyValue: 0,
            answeredCuriosityValue: 0,
            answeredFinishValue: 0,
            answeredConfidenceValue: 0,
            answeredComplexValue: 0,
            finalGuessPlaceholder: "",
            validVideoGuess: 0,
            data: [],
            // new stuff
            numStops: 0,
            stopsArray: [],
            stopsPercentArray: [],
            vidCurrTime: 0.0,
            arrayMade: 0,
            percentageStops: [],
            vidDurr: 0.0,
            iterIndex: 0,
            videoBool: false,
        },
        computed: {
            // return todos that match the currently selected filter
            filteredTodos() {
                return filters[this.visibility](this.todos);
            }
        },
        firebase: {
//        accounts: usersRef,
//        profilePics: imgRef
        },
        methods: {
            startExp() {
                // for normally run experiment (videos are all randomized)
                document.getElementById("welcome").style.display = "none";
                document.getElementById("startExp").style.display = "block";
                this.videoBool = true;
                var currentIndex = this.videoList.length;
                var temporaryValue;
                var randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = this.videoList[currentIndex];

                    this.videoList[currentIndex] = this.videoList[randomIndex];
                    this.videoList[randomIndex] = temporaryValue;
                }
            },
            nextVideo() {
                this.checkVideoGuess(this.videoGuess);
                if (this.validVideoGuess === 1 && this.answeredSurpriseValue === 1 && this.answeredEnjoyValue === 1 && this.answeredComplexValue === 1) {
                    this.data.push({
                        trialNumber: this.videoIndex,
                        trialAnswer: document.getElementById("video").src,
                        guessList: this.guessList,
                        curiosityList: this.curiosityList,
                        finishList: this.finishList,
                        confidenceList: this.confidenceList,
                        surpriseValue: this.surpriseValue,
                        enjoyValue: this.enjoyValue,
                        complexValue: this.complexValue,
                        finalGuess: this.videoGuess,
                        numStops: this.numStops,
                        stopsArray: this.stopsArray,
                        stopsPercentArray: this.stopsPercentArray,
                        vidDurr: this.vidDurr,
                        alreadyKnowList: this.alreadyKnowList
                    });

                    psiTurk.recordTrialData({
                        trialNumber: this.videoIndex,
                        trialAnswer: document.getElementById("video").src,
                        guessList: this.guessList,
                        curiosityList: this.curiosityList,
                        finishList: this.finishList,
                        confidenceList: this.confidenceList,
                        surpriseValue: this.surpriseValue,
                        complexValue: this.complexValue,
                        enjoyValue: this.enjoyValue,
                        finalGuess: this.videoGuess,
                        numStops: this.numStops,
                        stopsArray: this.stopsArray,
                        stopsPercentArray: this.stopsPercentArray,
                        vidDurr: this.vidDurr,
                        alreadyKnowList: this.alreadyKnowList
                    });

                    document.getElementById("finalGuess").style.display = "none";
                    document.getElementById("curiosityMeasure").style.display = "none";

                    this.videoIndex++;
                    // console.log("The Current video index is", this.videoIndex);
                    this.videoGuess = "";
                    this.alreadyKnow = false;
                    this.alreadyKnowList = [];
                    this.curiosityValue = 50;
                    this.confidenceValue = 50;
                    this.finishValue = 50;
                    this.guessList = [];
                    this.curiosityList = [];
                    this.finishList = [];
                    this.confidenceList = [];
                    this.answeredCuriosityValue = 0;
                    this.answeredFinishValue = 0;
                    this.answeredConfidenceValue = 0;
                    this.surpriseValue = 50;
                    this.enjoyValue = 50;
                    this.complexValue = 50;
                    this.answeredSurpriseValue = 0;
                    this.answeredEnjoyValue = 0;
                    this.answeredComplexValue = 0;
                    this.finalGuessPlaceholder = "";
                    this.finalGuess = "";
                    this.validVideoGuess = 0;
                    this.arrayMade = 0;
                    this.iterIndex = 0;
                    this.numStops = 0;
                    this.stopsArray = [];
                    this.stopsPercentArray = [];
                    this.vidDurr = 0;

                    this.midPointMarkers(this.videoIndex);
                    let myVideo = document.getElementById("video");

                    if (this.videoIndex > this.videoList.length - 1) {
                        currentview = new Questionnaire();
                    } else {
                        myVideo.src = this.videoList[this.videoIndex].src;
                        document.getElementById("videoGuess").style.display = "none"; // inline is the other option
                        document.getElementById("interruptionMeasure").style.display = "none";
                        // document.getElementById("curiosityMeasure").style.display = "none";
                        // this.setFocus();
                    }
                } else {
                    alert("Please answer all questions");
                }
            },
            continueToStart() {
                var myVideo = document.getElementById("video");
                myVideo.src = this.videoList[this.videoIndex].src;
                document.getElementById("startExp").style.display = "none";
                document.getElementById("video1").style.display = "block";
            },
            makeStops(){
                if (this.arrayMade !== 1) {
                    function randomInt(low, high) {
                        return Math.floor(Math.random() * (high - low + 1)) + low;
                    }
                    function getRndBias(min, max, bias, influence) {
                        let rnd = Math.random() * (max - min + 1) + min;
                        let mix = Math.random() * influence;
                        return Math.floor(rnd * (1 - mix) + bias * mix);
                    }
                    //Get new random stops
                    this.numStops = getRndBias(1, 3, 2, 1);
                    // console.log(this.numStops);

                    let quartiles = [];
                    if (this.numStops === 1) {
                        let num = randomInt(1, 2);
                        quartiles.push(num);
                    } else {
                        while (quartiles.length < this.numStops) {
                            let num = randomInt(0, 3);
                            if (!quartiles.includes(num)) {
                                quartiles.push(num);
                            }
                        }
                    }
                    quartiles.sort();
                    let stops = [];
                    let stopsPercent = [];
                    for (let i = 0; i < quartiles.length;i++){
                        let inner = 0;
                        if (quartiles[i] === 3) {
                            inner = Math.random() * 0.75;
                        } else if (quartiles[i] === 0) {
                            inner = Math.random() * 0.7 + 0.25;
                        } else {
                            inner = Math.random() * 0.9 + 0.05;
                        }
                        let quartLength = this.vidDurr * 0.25;
                        let innerLength = inner * quartLength;
                        let timestamp = quartiles[i] * quartLength + innerLength;
                        let timestampPercent = timestamp / this.vidDurr;
                        stops.push(timestamp);
                        stopsPercent.push(timestampPercent);
                    }
                    this.stopsArray = stops.sort();
                    this.stopsPercentArray = stopsPercent.sort();
                    console.log(this.numStops, this.stopsArray, this.vidDurr);
                }
            },
            makeVidDurr(){
                if(this.videoBool){
                    var myVideo = document.getElementById("video");
                    this.vidDurr = myVideo.duration;
                    // console.log(myVideo.duration, this.vidDurr);
                    if (this.arrayMade === 0){
                        myVideo.pause();
                        this.makeStops();
                        this.arrayMade = 1;
                        myVideo.play();
                    }
                }
            },
            pauseOnStops(){
                let myVideo = document.getElementById("video");
                function sorting(a, b) {
                    if (a === b)
                         return 0;
                    return a < b ? -1 : 1;
                }
                document.getElementById("interruptionMeasure").style.display = "none";
                this.stopsArray.sort(sorting);
                if (myVideo.currentTime >= this.stopsArray[this.iterIndex] && this.iterIndex <= this.stopsArray.length){
                    myVideo.pause();
                    this.vidCurrTime = myVideo.currentTime;
                    document.getElementById("interruptionMeasure").style.display = "block";
                    document.getElementById("videoGuess").style.display = "inline";
                    // this.testInput();
                }
            },
            testInput() {
                let myVideo = document.getElementById("video");
                // let keyCode = event.keyCode;
                this.checkVideoGuess(this.videoGuess);
                if (this.answeredFinishValue === 1 && this.answeredConfidenceValue === 1 && (this.answeredCuriosityValue === 1 || this.alreadyKnow) && this.validVideoGuess === 1) {

                    //if (this.validVideoGuess === 1) {
                    myVideo.play();
                    this.iterIndex++;
                    this.guessList.push(this.videoGuess);
                    this.curiosityList.push(this.curiosityValue);
                    this.finishList.push(this.finishValue);
                    this.confidenceList.push(this.confidenceValue);
                    this.alreadyKnowList.push(this.alreadyKnow ? 1 : 0);
                    this.videoGuess = "";
                    this.validVideoGuess = 0;
                    this.alreadyKnow = false;
                    this.answeredCuriosityValue = 0;
                    this.answeredFinishValue = 0;
                    this.answeredConfidenceValue = 0;
                    this.curiosityValue = 50;
                    this.finishValue = 50;
                    this.confidenceValue = 50;
                    document.getElementById("interruptionMeasure").style.display = "none";
                } else {
                    alert("Please answer all questions");
                }
            },
            // finalGuessMethod(finalGuessPlaceholder) {
            //     if (finalGuessPlaceholder.length <= 1) {
            //         alert("Please Enter a Valid Guess");
            //         this.finalGuessPlaceholder = "";
            //     } else {
            //         this.validVideoGuess = 1;
            //         this.finalGuess = this.finalGuessPlaceholder;
            //         this.finalGuessPlaceholder = "";
            //     }
            // },
            finishedVideo() {
                var myVideo = document.getElementById("video");
                // console.log("finished video!");
                let vidTime = myVideo.currentTime;
                // console.log("Video Timestamp: " + vidTime);
                document.getElementById("finalGuess").style.display = "inline";
                document.getElementById("videoGuess").style.display = "none";
                // document.getElementById("displayGuess").style.display = "none";
                document.getElementById("curiosityMeasure").style.display = "block";
                myVideo.pause();
                document.getElementById("finalGuess").focus();
                document.getElementById("finalGuess").select();
            },
            sliderFxn_curiosity() {
                var slider = document.getElementById("slider_cur");
                this.curiosityValue = slider.value;
                this.answeredCuriosityValue = 1;
            },
            sliderFxn_finish() {
                var slider = document.getElementById("slider_fin");
                this.finishValue = slider.value;
                this.answeredFinishValue = 1;
            },
            sliderFxn_confidence() {
                var slider = document.getElementById("slider_confidence");
                this.confidenceValue = slider.value;
                this.answeredConfidenceValue = 1;
            },
            sliderFxn_surprise() {
                var slider = document.getElementById("slider_surprise");
                this.surpriseValue = slider.value;
                this.answeredSurpriseValue = 1;
            },
            sliderFxn_enjoy() {
                var slider = document.getElementById("slider_enjoy");
                this.enjoyValue = slider.value;
                this.answeredEnjoyValue = 1;
            },
            sliderFxn_complex() {
                var slider = document.getElementById("slider_complex");
                this.complexValue = slider.value;
                this.answeredComplexValue = 1;
            },
            checkVideoGuess(videoGuess) {
                if (videoGuess.length <= 1) {
                    alert("Please Enter a Valid Guess");
                    this.videoGuess = "";
                }
                else {
                    this.validVideoGuess = 1;
                }
            },
            midPointMarkers(videoIndex) {
                if (videoIndex === 15) {
                    alert("15 videos left");
                } else if (videoIndex === 25) {
                    alert("5 videos left");
                }
            },
            setFocus() {
                setTimeout(()=>{
                    document.getElementById("videoGuess").focus();
                }, 50)
            },

        }
    })
};

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt);
			    psiTurk.completeHIT();
                // psiTurk.computeBonus('compute_bonus', function(){
                // 	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                // });
            },
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});

	$("#next").click(function () {
	    record_responses();
	    psiTurk.saveData({
            success: function(){
                psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     }
            // });
            // success: function(){
            //     psiTurk.computeBonus('compute_bonus', function() {
            //     	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     });
            },
            error: prompt_resubmit});
	});

};
// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/

$(window).load(function () {
    psiTurk.doInstructions(
        instructionPages, // a list of pages you want to display in sequence
        function () {
            currentview = new Curiosity();
        } // what you want to do when you are done with instructions
    );
});