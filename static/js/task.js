/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */
//test

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

//TODO : BIG QUESTION: can organic and controlled guessing be run out of the same js file?
//TODO : change video counter to go to 25 videos and then change to add terminate button

// All pages to be loaded
//TODO add all pages here <--Standardized main instructions page, version unique instructions will be limited to stage.html versions
var pages = [
	"instructions/instruct-all-versions.html",
    "stage_versions/stage.html",
    "postquestionnaire.html"
    // "stage_versions/stage_OCFA.html",
    // "stage_versions/stage_OCFS.html",
    // "stage_versions/stage_OCUA.html",
    // "stage_versions/stage_OCUS.html",
    // "stage_versions/stage_OCEA.html",
    // "stage_versions/stage_OCES.html",
    // "stage_versions/stage_OPFA.html",
    // "stage_versions/stage_OPFS.html",
    // "stage_versions/stage_OPUA.html",
    // "stage_versions/stage_OPUS.html",
    // "stage_versions/stage_OPEA.html",
    // "stage_versions/stage_OPES.html",
    // "stage_versions/stage_CCFA.html",
    // "stage_versions/stage_CCFS.html",
    // "stage_versions/stage_CCUA.html",
    // "stage_versions/stage_CCUS.html",
    // "stage_versions/stage_CCEA.html",
    // "stage_versions/stage_CCES.html",
    // "stage_versions/stage_CPFA.html",
    // "stage_versions/stage_CPFS.html",
    // "stage_versions/stage_CPUA.html",
    // "stage_versions/stage_CPUS.html",
    // "stage_versions/stage_CPEA.html",
    // "stage_versions/stage_CPES.html",
];

psiTurk.preloadPages(pages);
console.log(pages)

var instructionPages = [
	"instructions/instruct-all-versions.html"
];

//TODO add new pages to below mappings

// var stageHtmlName = {
//     1: {version: "stage_versions/stage_OCFA.html", skip: true, replay: true},
//     2: "stage_versions/stage_OCFS.html",
//     3: "stage_versions/stage_OCUA.html",
//     4: "stage_versions/stage_OCUS.html",
//     5: "stage_versions/stage_OCEA.html",
//     6: "stage_versions/stage_OCES.html",
//     7: "stage_versions/stage_OPFA.html",
//     8: "stage_versions/stage_OPFS.html",
//     9: "stage_versions/stage_OPUA.html",
//     10: "stage_versions/stage_OPUS.html",
//     11: "stage_versions/stage_OPEA.html",
//     12: "stage_versions/stage_OPES.html",
//     13: "stage_versions/stage_CCFA.html",
//     14: "stage_versions/stage_CCFS.html",
//     15: "stage_versions/stage_CCUA.html",
//     16: "stage_versions/stage_CCUS.html",
//     17: "stage_versions/stage_CCEA.html",
//     18: "stage_versions/stage_CCES.html",
//     19: "stage_versions/stage_CPFA.html",
//     20: "stage_versions/stage_CPFS.html",
//     21: "stage_versions/stage_CPUA.html",
//     22: "stage_versions/stage_CPUS.html",
//     23: "stage_versions/stage_CPEA.html",
//     24: "stage_versions/stage_CPES.html",
// };

/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and
* insert them into the document.
*
********************/

var Curiosity = function() { // eventually function(parameters) where parameters is the JSON Object

    psiTurk.showPage("stage_versions/stage.html"); // eventually parameters.version when we get that worked out
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

    Vue.use(VueFire);
    var app = new Vue({
        el: "#app",
        data: {
            //TODO find a way to load in more videos but only play X amount (unless asked)
            //TODO build functionality for 1) Replay, 2) Skip-to-End, and 3) Terminating Experiment
            videoList: [
                {src: "static/videos/brain.mp4", type: "video/mp4", answer: "Brain"}
                   // {src: "static/videos/pomegranate.mp4", type: "video/mp4", answer: "Pomegranate"},
                   // {src: "static/videos/astronaut.mp4", type: "video/mp4", answer: "Astronaut"},
                   // {src: "static/videos/bananas.mp4", type: "video/mp4", answer: "Bananas"},
                   // {src: "static/videos/bellpepper.mp4", type: "video/mp4", answer: "Bell Pepper"},
                   // {src: "static/videos/bottle.mp4", type: "video/mp4", answer: "Bottle"},
                   // {src: "static/videos/bull.mp4", type: "video/mp4", answer: "Bull"},
                   // {src: "static/videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
                   // {src: "static/videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
                   // {src: "static/videos/car.mp4", type: "video/mp4", answer: "Car"},
                   // {src: "static/videos/dog.mp4", type: "video/mp4", answer: "Dog"},
                   // {src: "static/videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
                   // {src: "static/videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
                   // {src: "static/videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
                   // {src: "static/videos/harp.mp4", type: "video/mp4", answer: "Harp"},
                   // {src: "static/videos/headphones.mp4", type: "video/mp4", answer: "Headphones"},
                   // {src: "static/videos/hotairballoon.mp4", type: "video/mp4", answer: "Hot Air Balloon"},
                   // {src: "static/videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
                   // {src: "static/videos/lungs.mp4", type: "video/mp4", answer: "Lungs"},
                   // {src: "static/videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
                   // {src: "static/videos/nut.mp4", type: "video/mp4", answer: "Nut"},
                   // {src: "static/videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
                   // {src: "static/videos/panda.mp4", type: "video/mp4", answer: "Panda"},
                   // {src: "static/videos/pizza.mp4", type: "video/mp4", answer: "Pizza"},
                   // {src: "static/videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
                   // {src: "static/videos/pineapple.mp4", type: "video/mp4", answer: "Pineapple"},
                   // {src: "static/videos/ram.mp4", type: "video/mp4", answer: "Ram"},
                   // {src: "static/videos/rose.mp4", type: "video/mp4", answer: "Rose"},
                   // {src: "static/videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
                   // {src: "static/videos/scale.mp4", type: "video/mp4", answer: "Scale"},
                   // {src: "static/videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
                   // {src: "static/videos/sneaker.mp4", type: "video/mp4", answer: "Sneaker"},
                   // {src: "static/videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
                   // {src: "static/videos/taco.mp4", type: "video/mp4", answer: "Taco"},
                   // {src: "static/videos/wave.mp4", type: "video/mp4", answer: "Wave"},
                   // {src: "static/videos/walrus.mp4", type: "video/mp4", answer: "Walrus"},
            ],

            //TODO categorize variables into appropriate bins
            //Variables collected once per trial
            videoIndex: 0,
            numStops: 0,
            finalGuess: "",
            sameAsBefore: false,
            finalGuessPlaceholder: "",
            videoAnswer: "",
            surpriseValue: 50,
            enjoyValue: 50,
            frustrateValue: 50,
            answeredSurpriseValue: 0,
            answeredEnjoyValue: 0,
            answeredFrustrateValue: 0,
            surpriseDontKnow: false,
            arrayMade: 0,
            vidDurr: 0.0,
            videoBool: false,

            //Within Trial placeholders
            videoGuess: "",
            submitTime: 0,
            percentageSubmit: 0,
            alreadyKnow: false,
            curiosityValue: 50,
            finishValue: 50,
            confidenceValue: 50,
            answeredCuriosityValue: 0,
            answeredFinishValue: 0,
            answeredConfidenceValue: 0,
            validVideoGuess: 0,
            iterIndex: 0,
            //Variables collected multiple times a trial
            guessList: [],
            submitTimeList: [],
            percentageSubmitList: [],
            alreadyKnowList: [],
            curiosityList: [],
            finishList: [],
            confidenceList: [],
            stopsArray: [],
            stopsPercentArray: [],
            percentageStops: [],
            vidCurrTime: 0.0,
            data: [],

            //TODO : can you change this actually into an array to reflect not just stopped early but when?
            stoppedEarly: false,


            //new stuff 09122020
            //TODO : affective ratings, prediction, satisfy, appeal/like, VERSION NUMBER
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
                //TODO this validation likely to change or might be dependent on version
                if ((this.validVideoGuess === 1 || this.sameAsBefore) && (this.answeredSurpriseValue === 1 || this.surpriseDontKnow) && this.answeredEnjoyValue === 1 && this.answeredFrustrateValue === 1) {
                    this.data.push({
                        trialNumber: this.videoIndex,
                        trialAnswer: document.getElementById("video").src,
                        guessList: this.guessList,
                        curiosityList: this.curiosityList,
                        finishList: this.finishList,
                        confidenceList: this.confidenceList,
                        surpriseValue: this.surpriseValue,
                        enjoyValue: this.enjoyValue,
                        frustrateValue: this.frustrateValue,
                        finalGuess: this.videoGuess,
                        numStops: this.numStops,
                        stopsArray: this.stopsArray,
                        stopsPercentArray: this.stopsPercentArray,
                        vidDurr: this.vidDurr,
                        alreadyKnowList: this.alreadyKnowList
                    });
                    //TODO all data from all versions will need to be pushed at each instance
                    psiTurk.recordTrialData({
                        trialNumber: this.videoIndex,
                        trialAnswer: document.getElementById("video").src,
                        guessList: this.guessList,
                        curiosityList: this.curiosityList,
                        finishList: this.finishList,
                        confidenceList: this.confidenceList,
                        surpriseValue: this.surpriseValue,
                        frustrateValue: this.frustrateValue,
                        enjoyValue: this.enjoyValue,
                        finalGuess: this.videoGuess,
                        numStops: this.numStops,
                        stopsArray: this.stopsArray,
                        stopsPercentArray: this.stopsPercentArray,
                        vidDurr: this.vidDurr,
                        alreadyKnowList: this.alreadyKnowList,
                        stoppedEarly: this.stoppedEarly ? 1 : 0,
                        sameAsBefore: this.sameAsBefore ? 1 : 0,
                        surpriseDontKnow: this.surpriseDontKnow ? 1 : 0,
                    });

                    document.getElementById("finalGuess").style.display = "none";
                    document.getElementById("curiosityMeasure").style.display = "none";

                    this.videoIndex++;
                    this.videoGuess = "";
                    this.alreadyKnow = false;
                    this.sameAsBefore = false;
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
                    this.frustrateValue = 50;
                    this.answeredSurpriseValue = 0;
                    this.answeredEnjoyValue = 0;
                    this.answeredFrustrateValue = 0;
                    this.finalGuessPlaceholder = "";
                    this.finalGuess = "";
                    this.validVideoGuess = 0;
                    this.arrayMade = 0;
                    this.iterIndex = 0;
                    this.numStops = 0;
                    this.stopsArray = [];
                    this.stopsPercentArray = [];
                    this.vidDurr = 0;
                    this.stoppedEarly = false;
                    this.surpriseDontKnow = false;

                    this.midPointMarkers(this.videoIndex);
                    let myVideo = document.getElementById("video");

                    if (this.videoIndex > this.videoList.length - 1) {
                        //TODO this might be were to add additional function for termination (also I wonder if you could have two
                        // separate lists for main videos and then extra videos)
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
                    this.numStops = getRndBias(1, 3, 2.5, 0.8);
                    // console.log(this.numStops);
                    //for study 2, not using a bias but constraining selection of stops to between 2-3 (more stops)

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
                }
            },
            makeVidDurr(){
                if(this.videoBool){
                    var myVideo = document.getElementById("video");
                    this.vidDurr = myVideo.duration;
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
            testInput(callback) {
                let myVideo = document.getElementById("video");
                this.checkVideoGuess(this.videoGuess);
                if (this.answeredFinishValue === 1 && this.answeredConfidenceValue === 1 && (this.answeredCuriosityValue === 1 || this.alreadyKnow) && this.validVideoGuess === 1) {

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
                    return true;

                } else {
                    alert("Please answer all questions");
                    return false;
                }
            },
            //function for advancing video to the end (stops reveal)
            advanceVideo() {
                let test = this.testInput();
                if (test) {
                    this.finishedVideo();
                }
                this.stoppedEarly = true;
            },
            //function for skipping the video to the end (immediate reveal)
            skipToEnd() {
                let myVideo = document.getElementById("video");
                let test = this.testInput();
                if (test) {
                    this.iterIndex = this.stopsArray.length;
                    myVideo.currentTime = myVideo.duration;
                    this.finishedVideo();
                }
                this.stoppedEarly = true;
            },
            finishedVideo() { //guess=""
                var myVideo = document.getElementById("video");
                myVideo.pause();
                document.getElementById("finalGuess").style.display = "inline";
                document.getElementById("curiosityMeasure").style.display = "block";
                // document.getElementById("finalGuess").focus();
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
            sliderFxn_frustrate() {
                var slider = document.getElementById("slider_frustrate");
                this.frustrateValue = slider.value;
                this.answeredFrustrateValue = 1;
            },
            checkVideoGuess(videoGuess) {
                if (videoGuess.length <= 1 && this.sameAsBefore === false) {
                    alert("Please enter a guess more than 2 characters");
                    this.videoGuess = "";
                }
                else {
                    this.validVideoGuess = 1;
                }
            },
            midPointMarkers(videoIndex) {
                if (videoIndex === 20) {
                    alert("15 videos left");
                } else if (videoIndex === 30) {
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
    //get random number 1 - 5
    // var randomNumber = 1;
    psiTurk.doInstructions(
        instructionPages, // a list of pages you want to display in sequence
        function () {
            currentview = new Curiosity(); //stageHtmlName[randomNumber]
        } // what you want to do when you are done with instructions
    );
});