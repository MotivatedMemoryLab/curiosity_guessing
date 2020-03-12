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
                   {src: "static/videos/butterfly.mp4", type: "video/mp4", answer: "Butterfly"},
                   {src: "static/videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
                   {src: "static/videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
                   {src: "static/videos/car.mp4", type: "video/mp4", answer: "Car"},
                   {src: "static/videos/dog.mp4", type: "video/mp4", answer: "Dog"},
                   {src: "static/videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
                   {src: "static/videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
                   {src: "static/videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
                   {src: "static/videos/hourglass.mp4", type: "video/mp4", answer: "Hourglass"},
                   {src: "static/videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
                   {src: "static/videos/llama.mp4", type: "video/mp4", answer: "Llama"},
                   {src: "static/videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
                   {src: "static/videos/owl.mp4", type: "video/mp4", answer: "Owl"},
                   {src: "static/videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
                   {src: "static/videos/panda.mp4", type: "video/mp4", answer: "Panda"},
                   {src: "static/videos/pear.mp4", type: "video/mp4", answer: "Pear"},
                   {src: "static/videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
                   {src: "static/videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
                   {src: "static/videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
                   {src: "static/videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
                   {src: "static/videos/taco.mp4", type: "video/mp4", answer: "taco"},
                   {src: "static/videos/tulip.mp4", type: "video/mp4", answer: "Tulip"},
                   {src: "static/videos/wave.mp4", type: "video/mp4", answer: "Wave"},
                   {src: "static/videos/wineglass.mp4", type: "video/mp4", answer: "Wine Glass"},
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
            curiosityValue: 50,
            confidenceValue: 50,
            curiosityList: [],
            confidenceList: [],
            surpriseValue: 50,
            enjoyValue: 50,
            complexValue: 50,
            answeredSurpriseValue: 0,
            answeredEnjoyValue: 0,
            answeredCuriosityValue: 0,
            answeredConfidenceValue: 0,
            answeredComplexValue: 0,
            finalGuessPlaceholder: "",
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

            //not used stuff
            // currentGuess: "",
            // uncertainValue: 50,
            // answeredUncertainValue: 0,
            // validVideoGuess: 0,
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
                this.data.push({
                    trialNumber: this.videoIndex,
                    trialAnswer: document.getElementById( "video" ).src,
                    guessList: this.guessList,
                    curiosityList: this.curiosityList,
                    confidenceList: this.confidenceList,
                    surpriseValue: this.surpriseValue,
                    enjoyValue: this.enjoyValue,
                    complexValue: this.complexValue,
                    finalGuess: this.finalGuess,
                    numStops: this.numStops,
                    stopsArray: this.stopsArray,
                    stopsPercentArray: this.stopsPercentArray,
                    vidDurr: this.vidDurr
                    // submitTimeList: this.submitTimeList,
                    // lastVideoGuess: this.currentGuess,
                    // percentageSubmitList: this.percentageSubmitList,
                    // curiosityValue: this.curiosityValue,
                    // uncertainValue: this.uncertainValue,

                });

                psiTurk.recordTrialData({
                    trialNumber: this.videoIndex,
                    trialAnswer: document.getElementById( "video" ).src,
                    guessList: this.guessList,
                    curiosityList: this.curiosityList,
                    confidenceList: this.confidenceList,
                    surpriseValue: this.surpriseValue,
                    complexValue: this.complexValue,
                    enjoyValue: this.enjoyValue,
                    finalGuess: this.finalGuess,
                    numStops: this.numStops,
                    stopsArray: this.stopsArray,
                    stopsPercentArray: this.stopsPercentArray,
                    vidDurr: this.vidDurr
                    // submitTimeList: this.submitTimeList,
                    // lastVideoGuess: this.currentGuess,
                    // percentageSubmitList: this.percentageSubmitList,
                    // curiosityValue: this.curiosityValue,
                    // uncertainValue: this.uncertainValue,
                });

                document.getElementById("finalGuess").style.display = "none";
                document.getElementById("curiosityMeasure").style.display = "none";

                this.videoIndex++;
                // console.log("The Current video index is", this.videoIndex);
                this.videoGuess = "";
                this.curiosityValue = 50;
                this.confidenceValue = 50;
                this.guessList = [];
                this.curiosityList = [];
                this.confidenceList = [];
                this.answeredCuriosityValue = 0;
                this.surpriseValue = 50;
                this.enjoyValue = 50;
                this.complexValue = 50;
                this.answeredSurpriseValue = 0;
                this.answeredEnjoyValue = 0;
                this.answeredComplexValue = 0;
                this.finalGuess = "";
                this.arrayMade = 0;
                this.iterIndex = 0;
                this.numStops = 0;
                this.stopsArray = [];
                this.stopsPercentArray = [];
                this.vidDurr = 0;

                // not used
                // this.currentGuess = "";
                // this.submitTime = 0;
                // this.percentageSubmit = 0;
                // this.submitTimeList = [];
                // this.percentageSubmitList = [];
                // this.uncertainValue = 50;
                // this.answeredUncertainValue = 0;
                // this.answeredSlidervalue = 0;

                var myVideo = document.getElementById("video");

                if (this.videoIndex > this.videoList.length-1){
                    currentview = new Questionnaire();
                } else {
                    myVideo.src = this.videoList[this.videoIndex].src;
                    document.getElementById("videoGuess").style.display = "none"; // inline is the other option
                    document.getElementById("interruptionMeasure").style.display = "none";
                    // document.getElementById("curiosityMeasure").style.display = "none";
                    // this.setFocus();
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
                        let inner = Math.random() * 0.9 + 0.05;
                        let quartLength = this.vidDurr * 0.25;
                        let innerLength = inner * quartLength;
                        let timestamp = quartiles[i] * quartLength + innerLength;
                        let timestampPercent = timestamp / this.vidDurr;
                        stops.push(timestamp);
                        stopsPercent.push(timestampPercent);
                    }
                    this.stopsArray = stops.sort();
                    this.stopsPercentArray = stopsPercent.sort();
                    // console.log(this.stopsArray);
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
                    this.testInput();
                }
            },
            testInput() {
                let myVideo = document.getElementById("video");
                // if (this.videoGuess.length > 0) {
                //     if (!myVideo.paused) {
                //         myVideo.pause();
                //     }
                // }
                // if (this.videoGuess.length < 1) {
                //     myVideo.play();
                // }
                let keyCode = event.keyCode;
                if (this.answeredCuriosityValue === 1 && this.answeredConfidenceValue === 1 && keyCode === 13) {
                    this.checkVideoGuess(this.videoGuess);
                    if (this.validVideoGuess === 1) {
                        myVideo.play();
                        this.iterIndex++;
                        this.guessList.push(this.videoGuess);
                        this.curiosityList.push(this.curiosityValue);
                        this.confidenceList.push(this.confidenceValue);
                        this.videoGuess = "";
                        this.answeredCuriosityValue = 0;
                        this.answeredConfidenceValue = 0;
                        this.curiosityValue = 50;
                        this.confidenceValue = 50;
                        document.getElementById("interruptionMeasure").style.display = "none";

                        //not used
                        // this.currentGuess = this.videoGuess;
                        // this.submitTime = this.vidCurrTime;
                        // var percentage = (myVideo.currentTime / this.vidDurr) * 100;
                        // this.percentageSubmit = percentage;
                        // this.submitTimeList.push(this.submitTime);
                        // this.percentageSubmitList.push(this.percentageSubmit);
                        // document.getElementById("displayGuess").style.display = "block";
                    }
                }
            },
            finalGuessMethod() {
                var keyCode = event.keyCode;
                if (keyCode === 13) {
                    this.checkVideoGuess(this.finalGuessPlaceholder);

                    if (this.validVideoGuess === 1) {
                        this.finalGuess = this.finalGuessPlaceholder;
                        this.finalGuessPlaceholder = "";
                    }
                }
            },
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